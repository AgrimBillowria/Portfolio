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

                <div className="px-5 md:px-12 py-12 md:py-24 border-b border-bg-primary/10">
                    <p className="max-w-5xl text-[7.5vw] sm:text-[6.5vw] md:text-[4.5vw] lg:text-[3.5vw] font-black uppercase leading-[1.05] tracking-[-0.03em] md:tracking-[-0.04em] font-display">
                        I build systems that{" "}
                        <span className="italic font-black text-accent-primary">
                            think,
                        </span>{" "}
                        plan, and execute — <span className="text-accent-primary">without being told twice.</span>
                    </p>
                </div>

                {/* ── Portrait + Bio Block ─────────────────────────────── */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 border-b border-bg-primary/10">
                    {/* Left — Photo */}
                    <div className="group relative overflow-hidden border-b md:border-b-0 md:border-r border-bg-primary/10 h-[380px] sm:h-[460px] md:h-[520px] cursor-default">
                        {/* Analog duct-tape accents */}
                        <div className="absolute -top-4 -right-8 w-32 h-10 bg-[#e5e5e5]/10 backdrop-blur-sm rotate-[15deg] z-20 border-y border-bg-primary/5 shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></div>
                        <div className="absolute -bottom-5 -left-8 w-32 h-10 bg-[#e5e5e5]/10 backdrop-blur-sm -rotate-[15deg] z-20 border-y border-bg-primary/5 shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                            <div className="w-full h-[1px] bg-bg-primary/5 mt-1"></div>
                        </div>

                        {/* Image */}
                        <img
                            src="/Professional%20Picture/IMG_8085.jpeg"
                            alt="Agrim Billowria — Agentic AI Engineer"
                            className="about-portrait w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                        />

                        {/* Red accent overlay on hover */}
                        <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/15 mix-blend-multiply transition-all duration-500 z-10"></div>

                        {/* Grain texture overlay */}
                        <div className="absolute inset-0 opacity-[0.08] z-10 pointer-events-none" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                        }}></div>

                        {/* Corner label */}
                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20">
                            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase text-bg-primary/60 bg-[#1A1A1A]/60 backdrop-blur-sm px-2.5 py-1.5">
                                // Portrait 2026
                            </span>
                        </div>

                        {/* Scan-line effect */}
                        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]" style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(244,244,244,0.5) 2px, rgba(244,244,244,0.5) 4px)',
                        }}></div>
                    </div>

                    {/* Right — Bio text */}
                    <div className="p-6 md:p-12 flex flex-col justify-between gap-8 md:gap-10">
                        <div className="flex flex-col gap-6 md:gap-8">
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-bg-primary/40">
                                // The Person Behind the Systems
                            </span>

                            <p className="text-base md:text-lg lg:text-xl leading-[1.6] md:leading-[1.7] font-medium text-bg-primary/80 max-w-lg">
                                I'm <span className="text-bg-primary font-bold">Agrim Billowria</span> — an Agentic AI Engineer obsessed with building autonomous systems that don't just follow instructions but{" "}
                                <span className="text-accent-primary italic font-bold">think for themselves.</span>{" "}
                                From multi-agent orchestration to end-to-end business automation, I design intelligent pipelines that scale, adapt, and execute with zero hand-holding.
                            </p>

                            {/* Discipline tags */}
                            <div className="flex flex-wrap gap-2">
                                {["Agentic AI", "LLM Engineering", "Automation", "Multi-Agent Systems", "n8n / LangChain", "Local AI Infra"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase border border-bg-primary/20 px-2.5 py-1.5 text-bg-primary/50 hover:bg-bg-primary hover:text-[#1A1A1A] transition-all duration-200 cursor-default"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Availability indicator */}
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-2 w-2 flex-shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                            </span>
                            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-bg-primary/40">
                                Open to collaborations — 2026
                            </span>
                        </div>
                    </div>
                </div>

                {/* Stats Grid — 2 cols on mobile, 4 on md+ */}
                <div className="w-full grid grid-cols-2 md:grid-cols-4 border-b border-bg-primary/10">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`p-5 md:p-12 flex flex-col justify-between group cursor-default hover:bg-accent-primary transition-colors duration-300 border-bg-primary/10 min-h-[140px] md:min-h-0 ${i % 2 !== 0 ? "border-l" : ""} ${i > 0 && i % 2 === 0 ? "md:border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""}`}
                        >
                            <span className="text-[10vw] sm:text-[8vw] md:text-[4.5vw] font-black leading-none tracking-tight text-bg-primary mt-auto">
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

            {/* Portrait filter styles */}
            <style>{`
                .about-portrait {
                    filter: grayscale(100%) contrast(1.2) brightness(0.9);
                }
                .group:hover .about-portrait {
                    filter: grayscale(40%) contrast(1.15) brightness(0.95);
                }
            `}</style>
        </section>
    );
};
