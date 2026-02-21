import { NeuralNetworkBackground } from "../ui/NeuralNetworkBackground";

export const Hero = () => {
    return (
        <section className="w-full border-b border-text-primary flex flex-col">
            {/* Massive Name Display */}
            <div className="w-full flex justify-center py-3 md:py-8 px-2 md:px-8 border-b border-text-primary overflow-hidden">
                <h1 className="text-[10vw] sm:text-[11vw] md:text-[11vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[8vw] font-black uppercase tracking-[-0.05em] leading-[0.8] whitespace-nowrap text-center text-text-primary w-full max-w-[100vw] overflow-hidden px-1 lg:px-4 font-display">
                    Agrim Billowria
                </h1>
            </div>

            {/* Hero Interactive Background Container */}
            {/* On mobile: square-ish, on md+: ultra-wide cinematic */}
            <div className="w-full aspect-[3/2] sm:aspect-[4/3] md:aspect-[21/9] bg-accent-primary border-b border-text-primary relative flex items-center justify-center overflow-hidden">
                <NeuralNetworkBackground />

                {/* Centre label — hidden on very small screens */}
                <div className="absolute inset-0 items-center justify-center pointer-events-none z-10 hidden sm:flex">
                    <span className="text-bg-primary/20 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase select-none text-center px-4">
                        [ NEURAL — INTERACTION LAYER ]
                    </span>
                </div>

                {/* Bottom-left descriptor */}
                <div className="absolute bottom-3 md:bottom-6 left-3 md:left-8 text-bg-primary/60 text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase pointer-events-none z-10">
                    Hover to interact
                </div>

                {/* Bottom-right version tag */}
                <div className="absolute bottom-3 md:bottom-6 right-3 md:right-8 text-bg-primary/60 text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase pointer-events-none z-10">
                    v2026.02
                </div>

                {/* Vertical-rotated text — hidden on mobile to avoid overlap */}
                <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 origin-center rotate-90 text-bg-primary text-xs tracking-[0.3em] uppercase opacity-80 whitespace-nowrap pointer-events-none" style={{ zIndex: 10 }}>
                    Portfolio 2026 // Selected Works
                </div>
            </div>

            {/* Biography Matrix */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
                {/* Left: Bio Text + quick tags */}
                <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-text-primary flex flex-col justify-between gap-8 md:gap-10 bg-[#F4F4F4]">
                    <p className="text-xl md:text-3xl lg:text-4xl leading-[1.15] font-bold text-[#1A1A1A] tracking-[-0.02em] font-display">
                        I build systems that think, plan, and execute —
                        <span className="text-accent-primary italic"> without being told twice.</span>
                    </p>

                    {/* Discipline tags */}
                    <div className="flex flex-wrap gap-2">
                        {["Agentic AI", "LLM Engineering", "Automation", "Multi-Agent Systems", "n8n / LangChain", "Local AI Infra"].map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] md:text-xs font-bold tracking-[0.12em] uppercase border border-text-primary px-2.5 py-1.5 md:px-3 text-text-primary hover:bg-text-primary hover:text-bg-primary transition-colors duration-200 cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right: Status + Social Link Grid */}
                <div className="flex flex-col bg-[#F4F4F4]">
                    {/* Live Status row */}
                    <div className="flex items-center gap-3 md:gap-4 px-6 md:px-12 py-4 md:py-5 border-b border-text-primary">
                        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D32F2F] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D32F2F]"></span>
                        </span>
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.25em] uppercase text-[#666666]">
                            Available for new projects — Feb 2026
                        </span>
                    </div>

                    {/* Social links as full-width interactive rows */}
                    {[
                        { label: "LinkedIn", subtitle: "Professional Network", href: "https://www.linkedin.com/in/agrimbillowria01/" },
                        { label: "GitHub", subtitle: "Open Source & Projects", href: "https://github.com/agrimbillowria" },
                        { label: "Instagram", subtitle: "Behind the Build", href: "https://www.instagram.com/agrimbillowria/" },
                        { label: "X / Twitter", subtitle: "Thoughts & Threads", href: "https://x.com/AgrimBillowria" },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between px-6 md:px-12 py-4 md:py-5 border-b border-text-primary hover:bg-text-primary hover:text-bg-primary transition-all duration-300"
                        >
                            <div className="flex flex-col">
                                <span className="text-sm font-black uppercase tracking-[0.1em] text-text-primary group-hover:text-bg-primary transition-colors">
                                    {social.label}
                                </span>
                                <span className="text-[10px] md:text-xs tracking-wide text-[#757575] group-hover:text-bg-primary/60 transition-colors mt-0.5">
                                    {social.subtitle}
                                </span>
                            </div>
                            <span className="text-xl font-thin text-text-primary group-hover:text-bg-primary group-hover:translate-x-1.5 transition-all duration-300">
                                →
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
