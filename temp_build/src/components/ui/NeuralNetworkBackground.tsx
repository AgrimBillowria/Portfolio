import React, { useEffect, useRef } from 'react';

// ─── BOID UTILITY MATH ───────────────────────────────────────────────────────

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

class Vec2 {
    x: number;
    y: number;
    constructor(x = 0, y = 0) { this.x = x; this.y = y; }
    add(v: Vec2) { return new Vec2(this.x + v.x, this.y + v.y); }
    sub(v: Vec2) { return new Vec2(this.x - v.x, this.y - v.y); }
    scale(s: number) { return new Vec2(this.x * s, this.y * s); }
    mag() { return Math.sqrt(this.x * this.x + this.y * this.y); }
    norm() { const m = this.mag() || 1; return new Vec2(this.x / m, this.y / m); }
    limit(max: number) { const m = this.mag(); return m > max ? this.norm().scale(max) : this; }
    static dist(a: Vec2, b: Vec2) { return a.sub(b).mag(); }
}

// ─── BOID CLASS ─────────────────────────────────────────────────────────────

class Boid {
    pos: Vec2;
    vel: Vec2;
    acc: Vec2;
    maxSpeed = 2.0;
    maxForce = 0.05;
    isRed = false; // Mouse contamination state

    constructor(w: number, h: number) {
        this.pos = new Vec2(Math.random() * w, Math.random() * h);
        const angle = Math.random() * Math.PI * 2;
        this.vel = new Vec2(Math.cos(angle) * this.maxSpeed * 0.8, Math.sin(angle) * this.maxSpeed * 0.8);
        this.acc = new Vec2();
    }

    edges(w: number, h: number) {
        if (this.pos.x > w) this.pos.x = 0;
        if (this.pos.x < 0) this.pos.x = w;
        if (this.pos.y > h) this.pos.y = 0;
        if (this.pos.y < 0) this.pos.y = h;
    }

    seek(target: Vec2) {
        const desired = target.sub(this.pos).norm().scale(this.maxSpeed);
        return desired.sub(this.vel).limit(this.maxForce);
    }

    flee(target: Vec2, radius: number) {
        const d = Vec2.dist(this.pos, target);
        if (d < radius) {
            const desired = this.pos.sub(target).norm().scale(this.maxSpeed * 2.0);
            return desired.sub(this.vel).limit(this.maxForce * 3.0);
        }
        return new Vec2();
    }

    flock(boids: Boid[], perceptionRadius: number) {
        let separation = new Vec2();
        let alignment = new Vec2();
        let cohesion = new Vec2();
        let sepCount = 0, othersCount = 0;

        for (const other of boids) {
            if (other === this) continue;
            const d = Vec2.dist(this.pos, other.pos);
            if (d < perceptionRadius) {
                // Cohesion + Alignment
                alignment = alignment.add(other.vel);
                cohesion = cohesion.add(other.pos);
                othersCount++;
                // Separation (closer = stronger push)
                if (d < perceptionRadius * 0.4) {
                    const diff = this.pos.sub(other.pos).norm().scale(1 / (d || 1));
                    separation = separation.add(diff);
                    sepCount++;
                }
            }
        }

        let forces = new Vec2();

        if (othersCount > 0) {
            // Alignment
            const alnForce = alignment.scale(1 / othersCount).norm().scale(this.maxSpeed).sub(this.vel).limit(this.maxForce);
            // Cohesion
            const cohTarget = cohesion.scale(1 / othersCount);
            const cohForce = this.seek(cohTarget).scale(0.8);
            forces = forces.add(alnForce).add(cohForce);
        }
        if (sepCount > 0) {
            const sepForce = separation.scale(1 / sepCount).norm().scale(this.maxSpeed).sub(this.vel).limit(this.maxForce * 2.5);
            forces = forces.add(sepForce);
        }
        return forces;
    }

    update(boids: Boid[], mouse: Vec2, w: number, h: number) {
        const flockForce = this.flock(boids, 100);
        const fleeForce = this.flee(mouse, 180);

        // Mark red when the mouse is close to dramatically paint them
        this.isRed = Vec2.dist(this.pos, mouse) < 240;

        this.acc = flockForce.add(fleeForce);
        this.vel = this.vel.add(this.acc).limit(this.maxSpeed);
        this.pos = this.pos.add(this.vel);
        this.edges(w, h);
    }

    draw(ctx: CanvasRenderingContext2D) {
        const angle = Math.atan2(this.vel.y, this.vel.x);
        const size = 7;

        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(angle);

        // Draw sharp brutalist triangle pointing in direction of velocity
        ctx.beginPath();
        ctx.moveTo(size, 0);
        ctx.lineTo(-size * 0.6, -size * 0.5);
        ctx.lineTo(-size * 0.6, size * 0.5);
        ctx.closePath();

        if (this.isRed) {
            ctx.fillStyle = 'rgba(211, 47, 47, 0.85)'; // Brand red
            ctx.strokeStyle = 'rgba(244, 244, 244, 0.4)';
        } else {
            ctx.fillStyle = 'rgba(244, 244, 244, 0.18)'; // Off-white dim boid
            ctx.strokeStyle = 'rgba(244, 244, 244, 0.5)';
        }

        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}

// ─── REACT COMPONENT ────────────────────────────────────────────────────────

export const NeuralNetworkBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let boids: Boid[] = [];
        let mouse = new Vec2(-1000, -1000);
        let W = 0, H = 0;

        const init = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            const rect = parent.getBoundingClientRect();
            W = rect.width;
            H = rect.height;
            canvas.width = W;
            canvas.height = H;
            canvas.style.width = `${W}px`;
            canvas.style.height = `${H}px`;

            const boidCount = Math.floor((W * H) / 8000);
            boids = Array.from({ length: clamp(boidCount, 60, 150) }, () => new Boid(W, H));
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse = new Vec2(e.clientX - rect.left, e.clientY - rect.top);
        };
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const rect = canvas.getBoundingClientRect();
                mouse = new Vec2(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
            }
        };
        const handleMouseLeave = () => { mouse = new Vec2(-1000, -1000); };

        window.addEventListener('resize', init);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
        canvas.addEventListener('mouseleave', handleMouseLeave);
        canvas.addEventListener('touchend', handleMouseLeave);
        init();

        const draw = () => {
            // Deep background with subtle trail for motion blur
            ctx.fillStyle = 'rgba(26, 26, 26, 0.30)';
            ctx.fillRect(0, 0, W, H);

            // Update + Draw all boids
            for (const boid of boids) {
                boid.update(boids, mouse, W, H);
                boid.draw(ctx);
            }

            // Draw faint velocity trails for nearby boids to emphasize networks
            ctx.lineWidth = 0.5;
            for (let i = 0; i < boids.length; i++) {
                const a = boids[i];
                for (let j = i + 1; j < boids.length; j++) {
                    const b = boids[j];
                    const d = Vec2.dist(a.pos, b.pos);
                    if (d < 90) {
                        const alpha = (1 - d / 90) * 0.08;
                        ctx.strokeStyle = `rgba(244, 244, 244, ${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(a.pos.x, a.pos.y);
                        ctx.lineTo(b.pos.x, b.pos.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        // Solid black first frame
        ctx.fillStyle = '#1A1A1A';
        ctx.fillRect(0, 0, W, H);
        draw();

        // ─── PERFORMANCE: Pause animation when tab is backgrounded ───────────
        const handleVisibilityChange = () => {
            if (document.hidden) {
                cancelAnimationFrame(animationFrameId);
            } else {
                draw(); // Resume
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('resize', init);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('touchmove', handleTouchMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            canvas.removeEventListener('touchend', handleMouseLeave);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 block pointer-events-auto"
            style={{ zIndex: 0 }}
        />
    );
};
