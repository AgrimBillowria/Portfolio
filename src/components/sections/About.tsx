import { useEffect, useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

// ─── Flow Field Canvas ────────────────────────────────────────────────────────
const FlowFieldCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let W = 0, H = 0;
        const SCALE = 28;
        const particles: { x: number; y: number; age: number; maxAge: number }[] = [];
        let time = 0;

        const resize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            W = parent.clientWidth;
            H = parent.clientHeight;
            canvas.width = W;
            canvas.height = H;
            canvas.style.width = `${W}px`;
            canvas.style.height = `${H}px`;
            particles.length = 0;
            const count = Math.floor((W * H) / 2800);
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    age: Math.floor(Math.random() * 140),
                    maxAge: 80 + Math.random() * 120,
                });
            }
        };

        window.addEventListener("resize", resize);
        resize();

        const noise = (x: number, y: number, t: number) => {
            const a = Math.sin(x * 0.012 + t * 0.5) * Math.cos(y * 0.012 - t * 0.3);
            const b = Math.cos(x * 0.022 - t * 0.4) * Math.sin(y * 0.018 + t * 0.6);
            const c = Math.sin((x + y) * 0.008 + t * 0.2);
            return (a + b + c) * Math.PI * 1.5;
        };

        const draw = () => {
            time += 0.006;
            ctx.fillStyle = "rgba(26,26,26,0.06)";
            ctx.fillRect(0, 0, W, H);

            for (const p of particles) {
                p.age++;
                if (p.age > p.maxAge) {
                    p.x = Math.random() * W;
                    p.y = Math.random() * H;
                    p.age = 0;
                    p.maxAge = 80 + Math.random() * 120;
                }

                const angle = noise(p.x / SCALE, p.y / SCALE, time);
                const speed = 1.2;
                const dx = Math.cos(angle) * speed;
                const dy = Math.sin(angle) * speed;

                const cx = W / 2, cy = H / 2;
                const dist = Math.sqrt((p.x - cx) ** 2 + (p.y - cy) ** 2);
                const maxDist = Math.sqrt(cx * cx + cy * cy);
                const t2 = dist / maxDist;

                const lifeAlpha = Math.sin((p.age / p.maxAge) * Math.PI);
                const r = Math.round(211 * t2 + 244 * (1 - t2));
                const g = Math.round(47 * t2 + 244 * (1 - t2));
                const b = Math.round(47 * t2 + 244 * (1 - t2));

                ctx.strokeStyle = `rgba(${r},${g},${b},${lifeAlpha * 0.55})`;
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                p.x += dx;
                p.y += dy;
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            }

            animId = requestAnimationFrame(draw);
        };

        ctx.fillStyle = "#1A1A1A";
        ctx.fillRect(0, 0, W, H);
        draw();

        const handleVisibility = () => {
            if (document.hidden) cancelAnimationFrame(animId);
            else draw();
        };
        document.addEventListener("visibilitychange", handleVisibility);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full block pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
    { number: "3+", label: "Years Engineering" },
    { number: "15+", label: "Agents Deployed" },
    { number: "∞", label: "Automation Loops" },
    { number: "01", label: "Singular Vision" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export const About = () => {
    const sectionRef = useScrollReveal<HTMLElement>(0.1);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="reveal w-full border-b border-text-primary bg-[#1A1A1A] text-bg-primary relative overflow-hidden"
        >
            <FlowFieldCanvas />

            <div className="relative z-10 flex flex-col">
                {/* Eyebrow label */}
                <div className="px-5 md:px-12 pt-8 md:pt-10 pb-4 border-b border-bg-primary/10">
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-bg-primary/40">
                        // Who I am
                    </span>
                </div>

                {/* Massive manifesto statement */}
                <div className="px-5 md:px-12 py-12 md:py-24 border-b border-bg-primary/10">
                    <p className="max-w-5xl text-[7.5vw] sm:text-[6.5vw] md:text-[4.5vw] lg:text-[3.5vw] font-black uppercase leading-[1.05] tracking-[-0.03em] md:tracking-[-0.04em] font-display">
                        I build systems that{" "}
                        <span className="italic font-black text-accent-primary">
                            think,
                        </span>{" "}
                        plan, and execute — <span className="text-accent-primary">without being told twice.</span>
                    </p>
                </div>

                {/* Stats Grid — 2 cols on mobile, 4 on md+ */}
                <div className="w-full grid grid-cols-2 md:grid-cols-4 border-b border-bg-primary/10">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`p-6 md:p-12 flex flex-col justify-between group cursor-default hover:bg-accent-primary transition-colors duration-300 border-bg-primary/10 ${i > 0 ? "border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""}`}
                        >
                            <span className="text-[12vw] sm:text-[10vw] md:text-[4.5vw] font-black leading-none tracking-tight text-bg-primary">
                                {stat.number}
                            </span>
                            <span className="text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase text-bg-primary/40 group-hover:text-bg-primary transition-colors mt-3 md:mt-4">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Bottom ticker */}
                <div className="px-5 md:px-12 py-4 md:py-5 flex items-center justify-between">
                    <span className="text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase text-bg-primary/30">
                        Based in India · Remote Worldwide
                    </span>
                    <span className="text-[9px] md:text-xs font-bold tracking-[0.15em] uppercase text-bg-primary/30">
                        [ EST. 2023 ]
                    </span>
                </div>
            </div>
        </section>
    );
};
