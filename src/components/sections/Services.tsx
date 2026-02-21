import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Services = () => {
    const services = [
        {
            title: "Agentic AI",
            tags: ["[ LLMs ]", "[ ORCHESTRATION ]", "[ RAG ]", "[ MULTI-AGENT SYSTEMS ]"]
        },
        {
            title: "Automation",
            tags: ["[ n8n ]", "[ Make.com ]", "[ BUSINESS WORKFLOWS ]", "[ AI PIPELINES ]"]
        },
        {
            title: "Engineering",
            tags: ["[ PYTHON ]", "[ LANGCHAIN ]", "[ DOCKER ]", "[ VECTOR DBs ]"]
        }
    ];

    const headerRef = useScrollReveal<HTMLDivElement>();
    const rowRefs = [
        useScrollReveal<HTMLDivElement>(0.1),
        useScrollReveal<HTMLDivElement>(0.1),
        useScrollReveal<HTMLDivElement>(0.1),
    ];

    return (
        <section id="awards" className="w-full flex flex-col border-b border-text-primary">
            {/* Section Header */}
            <div ref={headerRef} className="reveal w-full p-4 md:p-8 border-b border-text-primary">
                <h2 className="text-base md:text-2xl font-medium tracking-wide">Core Expertise &amp; Skills</h2>
            </div>

            {/* Services List */}
            <div className="flex flex-col">
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={rowRefs[index]}
                        className={`reveal reveal-delay-${index + 1} w-full p-4 md:p-8 flex flex-col justify-end transition-colors duration-500 hover:bg-[#E8E8E8] group cursor-pointer ${index !== services.length - 1 ? 'border-b border-text-primary' : ''}`}
                    >
                        {/* Title — scales down on mobile so it never overflows */}
                        <h3 className="text-[10vw] xs:text-[12vw] md:text-[10vw] font-bold tracking-[-0.05em] uppercase leading-[0.85] mb-3 md:mb-4 group-hover:px-2 md:group-hover:px-4 duration-500 transition-all ease-out">
                            {service.title}
                        </h3>

                        {/* Tags — wrap naturally on mobile */}
                        <div className="flex flex-wrap gap-2 md:gap-4 group-hover:px-2 md:group-hover:px-4 duration-500 transition-all ease-out delay-100">
                            {service.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="text-xs md:text-base tracking-[0.1em] md:tracking-widest font-bold text-text-primary/70">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
