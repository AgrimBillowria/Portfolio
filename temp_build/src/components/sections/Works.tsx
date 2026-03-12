import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Works = () => {
    const projects = [
        {
            name: "Resume Classifier",
            year: "2024",
            type: "ML & AGENTIC AI",
            description: "An end-to-end ML ecosystem that processes, classifies, and ranks thousands of resumes with surgical precision using custom LLM agents.",
            link: "https://resume-classifier.netlify.app/",
            isImageBlock: false,
            isFeatured: true
        },
        {
            isImageBlock: true,
            imageSrc: "/image copy.png",
            imageLabel: "Resume Classifier AI Interface"
        },
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
            name: "AI Workflow",
            year: "2024",
            type: "BUSINESS AUTOMATION",
            description: "Built business automations using n8n, integrating APIs, LLMs, and databases seamlessly.",
            link: "https://github.com/agrimbillowria/ai-workflow-automation",
            isImageBlock: false
        },
        {
            isImageBlock: true,
            imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&fit=crop",
            imageLabel: "AI Agent Network"
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
                            <div className="group w-full bg-[#E8E8E8] flex items-center justify-center cursor-pointer overflow-hidden relative h-[220px] sm:h-[300px] md:h-[500px] border-text-primary">
                                {/* Analog Duct Tape */}
                                <div className="absolute -top-4 -right-8 w-32 h-10 bg-[#e5e5e5]/80 backdrop-blur-sm rotate-[15deg] z-20 border-y border-black/5 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></div>
                                <div className="absolute -bottom-5 -left-8 w-32 h-10 bg-[#e5e5e5]/80 backdrop-blur-sm -rotate-[15deg] z-20 border-y border-black/5 shadow-[0_2px_4px_rgba(0,0,0,0.1)] pt-1">
                                    <div className="w-full h-[1px] bg-black/5"></div>
                                </div>
                                <img
                                    src={project.imageSrc}
                                    alt={project.imageLabel}
                                    className="w-full h-full object-cover filter grayscale-[40%] md:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 md:bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 md:p-6 translate-y-0 md:translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/60 to-transparent md:from-transparent">
                                    <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                        // VISUAL: {project.imageLabel}
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
                                className="w-full bg-accent-primary flex flex-col justify-between p-5 md:p-8 text-bg-primary hover:bg-[#B71C1C] transition-colors duration-500 cursor-pointer group relative block min-h-[280px] md:min-h-[500px]"
                            >
                                {/* Sketchy Border Hover Effect */}
                                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden md:block mix-blend-overlay">
                                    <svg className="w-full h-full text-white absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <path
                                            d="M 2,2 Q 50,0 98,2 Q 100,50 98,98 Q 50,100 2,98 Q 0,50 2,2 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            vectorEffect="non-scaling-stroke"
                                            className="sketch-border-path"
                                            pathLength="1"
                                        />
                                        <path
                                            d="M 5,5 L 95,8 L 92,92 L 8,95 Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                            vectorEffect="non-scaling-stroke"
                                            className="sketch-border-path-delayed"
                                            pathLength="1"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col space-y-3 md:space-y-4">
                                    <div className="flex justify-between items-start font-bold tracking-widest uppercase text-sm opacity-80">
                                        <div className="flex flex-col space-y-1">
                                            {project.isFeatured && (
                                                <span className="text-[9px] text-[#FFEB3B] bg-black/20 px-1.5 py-0.5 w-fit rounded-sm mb-1 tracking-[0.2em]">★ FEATURED PROJECT</span>
                                            )}
                                            <span className="text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] opacity-70">// {project.type}</span>
                                        </div>
                                        <span className="text-xs md:text-base">[ {project.year} ]</span>
                                    </div>
                                    <h3 className="text-[7.5vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw] font-black uppercase tracking-[-0.04em] leading-[0.9] mt-3 md:mt-8 break-words text-bg-primary">
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
        @keyframes drawSketch {
          from { stroke-dashoffset: 1; stroke-dasharray: 1; }
          to { stroke-dashoffset: 0; stroke-dasharray: 1; }
        }
        .sketch-border-path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
        }
        .group:hover .sketch-border-path {
          animation: drawSketch 0.5s ease-out forwards;
        }
        .sketch-border-path-delayed {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
        }
        .group:hover .sketch-border-path-delayed {
          animation: drawSketch 0.5s ease-out 0.1s forwards;
        }
      `}</style>
        </section>
    );
};
