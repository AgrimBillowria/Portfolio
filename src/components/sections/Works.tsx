export const Works = () => {
    const projects = [
        {
            name: "LUMINA",
            year: "2025",
            type: "BRAND IDENTITY",
            description: "A comprehensive brand identity redesign for a futuristic lighting design studio. Focusing on the interplay between shadow and illumination.",
            isImageBlock: false
        },
        {
            isImageBlock: true,
            imageSrc: "https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1200&fit=crop",
            imageLabel: "Lumina Studio Design"
        },
        {
            isImageBlock: true,
            imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&fit=crop",
            imageLabel: "Aura Generative Art"
        },
        {
            name: "AURA",
            year: "2026",
            type: "UI/UX DESIGN",
            description: "A meditation app that uses generative art based on the user's biofeedback to create personalized calming visual landscapes.",
            isImageBlock: false
        }
    ];

    return (
        <section className="w-full flex flex-col border-b border-text-primary">
            {/* Marquee Header */}
            <div className="w-full border-b border-text-primary overflow-hidden bg-text-primary text-bg-primary py-4 md:py-6 relative flex whitespace-nowrap">
                <div className="flex animate-[marquee_20s_linear_infinite]">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-bold uppercase tracking-widest px-8">
                            * WORKS *
                        </span>
                    ))}
                </div>
                <div className="flex animate-[marquee_20s_linear_infinite] absolute top-1/2 -translate-y-1/2 left-[100%]">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-bold uppercase tracking-widest px-8">
                            * WORKS *
                        </span>
                    ))}
                </div>
            </div>

            {/* Asymmetrical Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`w-full aspect-square md:aspect-auto md:min-h-[600px] border-b md:border-b-0 ${index % 2 !== 0 ? 'md:border-l border-text-primary' : ''
                            } ${(index < 2) ? 'md:border-b border-text-primary' : ''}`}
                    >
                        {project.isImageBlock ? (
                            <div className="w-full h-full bg-[#E8E8E8] flex items-center justify-center transition-all hover:opacity-90 cursor-pointer overflow-hidden relative">
                                <img
                                    src={project.imageSrc}
                                    alt={project.imageLabel}
                                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full bg-accent-primary flex flex-col justify-between p-4 md:p-8 text-bg-primary hover:bg-[#B71C1C] transition-colors duration-500 cursor-pointer">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex justify-between items-start font-bold tracking-widest uppercase text-sm md:text-base opacity-80">
                                        <span>[ {project.name} ]</span>
                                        <span>[ {project.year} ]</span>
                                    </div>
                                    <h3 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold uppercase tracking-tighter leading-[0.85] mt-8">
                                        {project.name}
                                    </h3>
                                </div>

                                <div className="flex flex-col space-y-6 mt-12 md:mt-0">
                                    <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-70">
                                        // {project.type}
                                    </div>
                                    <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
        </section>
    );
};
