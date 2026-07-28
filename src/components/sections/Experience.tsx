import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Experience = () => {
    const revealRef = useScrollReveal<HTMLDivElement>(0.1);

    const experiences = [
        {
            company: "INRDeals PVT Limited",
            role: "Full-Stack & Automation Engineering Intern",
            location: "India · Remote / On-site",
            period: "2025 – 2026",
            description:
                "Engineered core digital products and internal operational automation systems to accelerate campaign management and merchant deals publishing.",
            highlights: [
                {
                    title: "Donut App Web Platform (donutapp.in)",
                    desc: "Architected and engineered the official web platform for Donut App using Astro.js—delivering an ultra-fast 'Virtual Mall' platform aggregating 500+ stores into a zero-switching user experience.",
                    link: "https://donutapp.in"
                },
                {
                    title: "Campaign & Deal Upload Portal Automation",
                    desc: "Designed end-to-end web automation and script pipelines to automate uploading and managing promotional campaigns/deals into internal/partner portals, eliminating manual ingestion hours."
                },
                {
                    title: "Workflow & API Integration",
                    desc: "Automated CSV parsing, payload validation, and batch API deal syncing across multiple merchant networks with robust error logging."
                }
            ],
            tech: ["Astro.js", "TypeScript", "Tailwind CSS", "Web Automation", "API Integration", "Python / Node.js"]
        }
    ];

    return (
        <section id="experience" className="relative w-full bg-[#1A1A1A] text-bg-primary py-24 md:py-32 border-b border-bg-primary/10 overflow-hidden">
            {/* Grid texture background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, #F4F4F4 1px, transparent 1px), linear-gradient(to bottom, #F4F4F4 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    }}
                ></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10" ref={revealRef}>
                {/* Section Header */}
                <div className="mb-16 md:mb-20 border-b border-bg-primary/15 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-bg-primary/40 block mb-3">
                            // Industry Experience
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-[90px] font-black leading-[0.85] tracking-tighter uppercase text-bg-primary font-display">
                            Experience<span className="text-accent-primary">.</span>
                        </h2>
                    </div>
                    <p className="text-bg-primary/60 text-sm md:text-base max-w-md font-medium">
                        Building real-world web applications and enterprise workflow automations for high-throughput platforms.
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group border border-bg-primary/15 bg-black/40 backdrop-blur-sm p-6 sm:p-8 md:p-12 hover:border-accent-primary/50 transition-colors duration-500 relative overflow-hidden"
                        >
                            {/* Duct tape accent */}
                            <div className="absolute -top-4 -right-8 w-32 h-10 bg-[#e5e5e5]/10 backdrop-blur-sm rotate-[15deg] pointer-events-none border-y border-bg-primary/5"></div>

                            {/* Card Header */}
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-bg-primary/10 pb-6 mb-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                                        <span className="text-accent-primary font-bold tracking-[0.2em] text-xs uppercase">
                                            [ INTERNSHIP ]
                                        </span>
                                        <span className="text-bg-primary/30">·</span>
                                        <span className="text-bg-primary/60 text-xs font-bold tracking-widest uppercase">
                                            {exp.location}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-bg-primary">
                                        {exp.company}
                                    </h3>
                                    <p className="text-lg md:text-xl text-accent-primary font-medium mt-1">
                                        {exp.role}
                                    </p>
                                </div>
                                <div className="text-left lg:text-right">
                                    <span className="inline-block border border-bg-primary/20 px-4 py-2 text-xs md:text-sm font-bold tracking-widest uppercase text-bg-primary/80">
                                        {exp.period}
                                    </span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <p className="text-bg-primary/80 text-base md:text-lg font-medium max-w-3xl leading-relaxed mb-8">
                                {exp.description}
                            </p>

                            {/* Highlights List */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                {exp.highlights.map((h, i) => (
                                    <div
                                        key={i}
                                        className="border border-bg-primary/10 bg-white/[0.02] p-5 hover:border-bg-primary/30 transition-colors"
                                    >
                                        <div className="text-accent-primary text-xs font-bold tracking-widest uppercase mb-2">
                                            0{i + 1} //
                                        </div>
                                        <h4 className="text-base font-bold text-bg-primary uppercase tracking-tight mb-2 flex items-center gap-2">
                                            {h.title}
                                            {h.link && (
                                                <a
                                                    href={h.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-accent-primary text-sm hover:underline"
                                                >
                                                    ↗
                                                </a>
                                            )}
                                        </h4>
                                        <p className="text-xs md:text-sm text-bg-primary/70 leading-relaxed font-medium">
                                            {h.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-bg-primary/10">
                                {exp.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[10px] font-bold tracking-[0.15em] uppercase border border-bg-primary/20 px-3 py-1 text-bg-primary/70 bg-bg-primary/5"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
