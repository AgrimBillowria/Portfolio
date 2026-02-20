export const Hero = () => {
    return (
        <section className="w-full border-b border-text-primary flex flex-col">
            {/* Massive Name Display */}
            <div className="w-full flex justify-center py-4 md:py-8 px-4 md:px-8 border-b border-text-primary overflow-hidden">
                <h1 className="text-[15vw] md:text-[14vw] leading-[0.85] font-bold tracking-tighter uppercase whitespace-nowrap text-center text-text-primary">
                    Agrim Billowira
                </h1>
            </div>

            {/* Hero Image Container Block */}
            <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-accent-primary border-b border-text-primary relative flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2400&fit=crop"
                    alt="Hero Visual Concept"
                    className="w-full h-full object-cover mix-blend-multiply opacity-80"
                />

                {/* Small vertical-rotated text on the right edge */}
                <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 origin-center rotate-90 text-bg-primary text-xs tracking-[0.3em] uppercase opacity-80 whitespace-nowrap">
                    Portfolio 2026 // Selected Works
                </div>
            </div>

            {/* Biography Matrix */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
                {/* Left: Bio Text */}
                <div className="p-4 md:p-8 border-b md:border-b-0 md:border-r border-text-primary flex items-center">
                    <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed md:leading-normal font-medium text-text-primary">
                        I create art that captivates both visually and emotionally, while designing user interfaces that feel effortlessly intuitive.
                    </p>
                </div>

                {/* Right: Links */}
                <div className="p-4 md:p-8 flex flex-col justify-center space-y-6">
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="group inline-flex items-center text-sm md:text-base font-bold tracking-widest uppercase text-text-primary transition-colors hover:text-accent-primary">
                                <span className="mr-4 group-hover:pl-2 transition-all duration-300 ease-out">[</span>
                                Dribbble
                                <span className="ml-4 group-hover:pr-2 transition-all duration-300 ease-out">]</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/agrimbillowria/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-sm md:text-base font-bold tracking-widest uppercase text-text-primary transition-colors hover:text-accent-primary">
                                <span className="mr-4 group-hover:pl-2 transition-all duration-300 ease-out">[</span>
                                Instagram
                                <span className="ml-4 group-hover:pr-2 transition-all duration-300 ease-out">]</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/AgrimBillowria" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-sm md:text-base font-bold tracking-widest uppercase text-text-primary transition-colors hover:text-accent-primary">
                                <span className="mr-4 group-hover:pl-2 transition-all duration-300 ease-out">[</span>
                                X
                                <span className="ml-4 group-hover:pr-2 transition-all duration-300 ease-out">]</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
