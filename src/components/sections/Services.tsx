export const Services = () => {
    const services = [
        {
            title: "UI.UX",
            tags: ["[ WEB DESIGN ]", "[ MOBILE APPS ]", "[ PROTOTYPING ]"]
        },
        {
            title: "Branding",
            tags: ["[ LOGO DESIGN ]", "[ BRAND IDENTITY ]", "[ STRATEGY ]"]
        },
        {
            title: "Development",
            tags: ["[ FRONTEND ]", "[ CREATIVE CODING ]", "[ CMS ]"]
        }
    ];

    return (
        <section className="w-full flex flex-col border-b border-text-primary">
            {/* Section Header */}
            <div className="w-full p-4 md:p-8 border-b border-text-primary">
                <h2 className="text-xl md:text-2xl font-medium tracking-wide">Here is how I can help</h2>
            </div>

            {/* Services List */}
            <div className="flex flex-col">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`w-full p-4 md:p-8 flex flex-col justify-end transition-colors duration-500 hover:bg-[#E8E8E8] group cursor-pointer ${index !== services.length - 1 ? 'border-b border-text-primary' : ''
                            }`}
                    >
                        <h3 className="text-[12vw] md:text-[10vw] font-bold tracking-tighter uppercase leading-[0.85] mb-4 group-hover:px-4 duration-500 transition-all ease-out">
                            {service.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 group-hover:px-4 duration-500 transition-all ease-out delay-100">
                            {service.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="text-sm md:text-base tracking-widest font-bold text-text-primary/70">
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
