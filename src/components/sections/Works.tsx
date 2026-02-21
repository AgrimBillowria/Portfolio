import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Works = () => {
    const projects = [
        {
            name: "Autonomous SaaS",
            year: "2025",
            type: "MULTI-AGENT SYSTEM",
            description: "Multi-agent system that plans, designs, and simulates SaaS product development from scratch.",
            link: "https://github.com/agrimbillowria/autonomous-saas",
            isImageBlock: false
        },
        {
            isImageBlock: true,
            imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&fit=crop",
            imageLabel: "AI Automation Workflow"
        },
        {
            isImageBlock: true,
            imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&fit=crop",
            imageLabel: "AI Agent Network"
        },
        {
            name: "AI Workflow",
            year: "2024",
            type: "BUSINESS AUTOMATION",
            description: "Built business automations using n8n, integrating APIs, LLMs, and databases seamlessly.",
            link: "https://github.com/agrimbillowria/ai-workflow-automation",
            isImageBlock: false
        },
        {
            name: "Resume Classifier",
            year: "2024",
            type: "ML & AGENTIC AI",
            description: "ML + Agentic AI system for automated resume screening and decision workflows.",
            link: "https://github.com/agrimbillowria/ML_classifier",
            isImageBlock: false
        },
        {
            name: "Local AI Stack",
            year: "2023",
            type: "LLM INFRASTRUCTURE",
            description: "Deployment of local LLMs using Ollama for privacy-focused, scalable AI solutions.",
            link: "https://github.com/agrimbillowria/local-ai-stack",
            isImageBlock: false
        }
    ];

    const marqueRef = useScrollReveal<HTMLDivElement>(0.05);

    return (
        <section id="works" className="w-full flex flex-col border-b border-text-primary">
            {/* Marquee Header */}
            <div ref={marqueRef} className="reveal w-full border-b border-text-primary overflow-hidden bg-text-primary text-bg-primary py-3 md:py-6 flex whitespace-nowrap">
                <div className="flex animate-[marquee_20s_linear_infinite] w-max">
                    {[...Array(20)].map((_, i) => (
                        <span key={i} className="text-3xl md:text-6xl font-bold uppercase tracking-widest px-6 md:px-8">
                            * WORKS *
                        </span>
                    ))}
                </div>
            </div>

            {/* Project Grid — single column on mobile, 2-col on md+ */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`w-full border-b border-text-primary ${index % 2 !== 0 ? 'md:border-l' : ''}`}
                        style={{ minHeight: project.isImageBlock ? undefined : undefined }}
                    >
                        {project.isImageBlock ? (
                            /* Image blocks: fixed height on mobile */
                            <div className="group w-full bg-[#E8E8E8] flex items-center justify-center cursor-pointer overflow-hidden relative h-[260px] sm:h-[340px] md:h-[500px]">
                                <img
                                    src={project.imageSrc}
                                    alt={project.imageLabel}
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                    <span className="text-white text-xs font-bold tracking-widest uppercase">
                                        {project.imageLabel}
                                    </span>
                                    <span className="text-white text-lg font-thin">↗</span>
                                </div>
                            </div>
                        ) : (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor
                                className="w-full bg-accent-primary flex flex-col justify-between p-5 md:p-8 text-bg-primary hover:bg-[#B71C1C] transition-colors duration-500 cursor-pointer group block min-h-[280px] md:min-h-[500px]"
                            >
                                <div className="flex flex-col space-y-3 md:space-y-4">
                                    <div className="flex justify-between items-start font-bold tracking-widest uppercase text-sm opacity-80">
                                        <span className="text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] opacity-70">// {project.type}</span>
                                        <span className="text-xs md:text-base">[ {project.year} ]</span>
                                    </div>
                                    <h3 className="text-[10vw] sm:text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw] font-bold uppercase tracking-[-0.05em] leading-[0.85] mt-4 md:mt-8 break-words hyphens-auto">
                                        {project.name}
                                    </h3>
                                </div>

                                <div className="flex flex-col space-y-4 md:space-y-6 mt-8 md:mt-0">
                                    <p className="text-base md:text-xl font-medium leading-relaxed max-w-md">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center space-x-3 text-xs md:text-sm font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                                        <span>View Project</span>
                                        <span className="text-base md:text-lg">→</span>
                                    </div>
                                </div>
                            </a>
                        )}
                    </div>
                ))}
            </div>
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
};
