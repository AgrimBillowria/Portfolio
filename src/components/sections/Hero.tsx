import { NeuralNetworkBackground } from "../ui/NeuralNetworkBackground";

export const Hero = () => {
    return (
        <section className="w-full border-b border-text-primary flex flex-col">
            {/* Massive Name Display */}
            <div className="w-full flex justify-center py-4 md:py-8 px-4 md:px-8 border-b border-text-primary overflow-hidden">
                <h1 className="text-[14vw] sm:text-[11vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[7.5rem] 2xl:text-[8rem] font-black uppercase tracking-[-0.05em] leading-[0.8] whitespace-normal sm:whitespace-nowrap break-words text-center text-text-primary w-full px-1 font-display">
                    Agrim Billowria
                </h1>
            </div>

            {/* Manifesto / Who Am I */}
            <div className="w-full flex justify-center py-6 md:py-10 px-4 md:px-8 bg-[#F4F4F4] border-b border-text-primary">
                <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-8">
                    {/* Subtle section label */}
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-text-primary/40">
                            [ 01 — WHO AM I ]
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-end">
                        {/* The Punchline */}
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.1] font-bold text-[#1A1A1A] tracking-[-0.02em] font-display md:w-1/2">
                            I build systems that think, plan, and execute —
                            <br className="hidden md:block" />
                            <span className="text-accent-primary italic"> without being told twice.</span>
                        </p>

                        {/* Professional Bio */}
                        <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#444444] font-medium md:w-1/2">
                            I'm an Agentic AI Engineer specializing in autonomous systems and multi-agent orchestration.
                            I design intelligent pipelines that scale, adapt, and execute with precision — bridging the gap
                            between raw LLM capabilities and practical, production-ready automation.
                        </p>
                    </div>

                    {/* Discipline tags */}
                    <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
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
            </div>

            {/* Hero Interactive Background Container — Unified Layout */}
            <div className="w-full flex flex-col md:flex-row border-b border-text-primary overflow-hidden relative bg-[#1A1A1A]">
                
                {/* Full-width Neural Network Canvas Layer */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <NeuralNetworkBackground />
                </div>

                {/* LEFT: Profile Picture Overlay (Transparent) */}
                <div className="w-full md:w-[40%] bg-transparent flex items-center justify-center py-10 md:py-0 border-b md:border-b-0 md:border-r border-text-primary relative z-10 pointer-events-none">
                    {/* Subtle grid pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(244,244,244,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,244,0.5) 1px, transparent 1px)',
                            backgroundSize: '24px 24px',
                        }}
                    />

                    <div className="relative z-10 flex flex-col items-center gap-5">
                        {/* Photo with accent ring (Re-enabling pointer events just for the photo to allow hover interactions) */}
                        <div
                            className="rounded-full p-[3px] bg-gradient-to-br from-[#D32F2F] via-[#FF5252] to-[#D32F2F] shadow-[0_0_40px_rgba(211,47,47,0.25)] pointer-events-auto cursor-crosshair hover:scale-[1.03] transition-transform duration-500 will-change-transform"
                            style={{ animation: 'heroPhotoIn 0.8s cubic-bezier(0.16,1,0.3,1) both' }}
                        >
                            <div className="rounded-full overflow-hidden w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 bg-[#1A1A1A]">
                                <img
                                    src="/Professional Picture/IMG_8085.webp"
                                    alt="Agrim Billowria — Professional Photo"
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                />
                            </div>
                        </div>

                        {/* Label below photo */}
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#F4F4F4]/50 select-none">
                            [ Founder · AI Engineer ]
                        </span>
                    </div>
                </div>

                {/* RIGHT: Labels + Overlays (Transparent) */}
                <div className="w-full md:w-[60%] aspect-[3/2] sm:aspect-[4/3] md:aspect-auto md:min-h-[320px] lg:min-h-[380px] bg-transparent relative flex items-center justify-center z-10 pointer-events-none">
                    
                    {/* Centre label — hidden on very small screens */}
                    <div className="absolute inset-0 items-center justify-center pointer-events-none z-10 hidden sm:flex">
                        <span className="text-bg-primary/20 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase select-none text-center px-4">
                            [ NEURAL — INTERACTION LAYER ]
                        </span>
                    </div>

                    {/* Bottom-left descriptor */}
                    <div className="absolute bottom-3 md:bottom-6 left-3 md:left-8 text-bg-primary/80 text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase pointer-events-none z-10 animate-pulse">
                        Tap / Hover to interact
                    </div>

                    {/* Bottom-right version tag */}
                    <div className="absolute bottom-3 md:bottom-6 right-3 md:right-8 text-bg-primary/60 text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase pointer-events-none z-10">
                        v2026.02
                    </div>

                    {/* Vertical-rotated text — hidden on mobile */}
                    <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 origin-center rotate-90 text-bg-primary text-xs tracking-[0.3em] uppercase opacity-80 whitespace-nowrap pointer-events-none" style={{ zIndex: 10 }}>
                        Portfolio 2026 // Selected Projects
                    </div>
                </div>
            </div>

            {/* Keyframe for photo entrance animation */}
            <style>{`
                @keyframes heroPhotoIn {
                    0% { opacity: 0; transform: scale(0.85); }
                    100% { opacity: 1; transform: scale(1); }
                }
            `}</style>

            {/* Bottom Row / Status & Socials */}
            <div className="w-full flex flex-col bg-[#F4F4F4]">
                {/* Live Status row — Full width */}
                <div className="flex items-center gap-3 md:gap-4 px-6 md:px-12 py-4 md:py-6 border-b border-text-primary">
                    <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D32F2F] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D32F2F]"></span>
                    </span>
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.25em] uppercase text-[#666666]">
                        Available for new projects — Feb 2026
                    </span>
                </div>

                {/* Social links as a 4-column wide grid on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full border-b border-text-primary">
                    {[
                        { label: "LinkedIn", subtitle: "Professional Network", href: "https://www.linkedin.com/in/agrimbillowria01/" },
                        { label: "GitHub", subtitle: "Open Source & Projects", href: "https://github.com/agrimbillowria" },
                        { label: "Instagram", subtitle: "Behind the Build", href: "https://www.instagram.com/agrimbillowria/" },
                        { label: "X / Twitter", subtitle: "Thoughts & Threads", href: "https://x.com/AgrimBillowria" },
                    ].map((social, idx) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit my ${social.label} profile`}
                            className={`group flex items-center justify-between px-6 md:px-8 py-5 hover:bg-text-primary hover:text-bg-primary transition-all duration-300 ${
                                idx !== 0 ? 'border-t sm:border-t-0 sm:border-l border-text-primary' : ''
                            }`}
                        >
                            <div className="flex flex-col">
                                <span className="text-sm font-black uppercase tracking-[0.1em] text-text-primary group-hover:text-bg-primary transition-colors">
                                    {social.label}
                                </span>
                                <span className="text-[10px] md:text-xs tracking-wide text-[#757575] group-hover:text-bg-primary/60 transition-colors mt-1">
                                    {social.subtitle}
                                </span>
                            </div>
                            <span className="text-xl font-thin text-text-primary group-hover:text-bg-primary group-hover:translate-x-1 transition-all duration-300">
                                →
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
