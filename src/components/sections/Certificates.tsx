import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Certificates = () => {
    const revealRef = useScrollReveal<HTMLDivElement>(0.1);

    const certificates = [
        {
            title: "Computational Theory: Language Principle & Finite Automata Theory",
            issuer: "Infosys",
            date: "Aug 2025",
            link: "/CER/1-bb1c07a1-c1dc-45aa-8a74-028c11385629.pdf"
        },
        {
            title: "Build Generative AI Apps and Solutions with No-Code Tools",
            issuer: "Udemy",
            date: "Apr 2025",
            link: "/CER/2nd.pdf"
        },
        {
            title: "Master Generative AI & Generative AI tools (ChatGPT & more)",
            issuer: "Udemy",
            date: "Nov 2023",
            link: "/CER/3rd.pdf"
        }
    ];

    return (
        <section id="certificates" className="relative w-full bg-[#1A1A1A] text-bg-primary px-5 py-24 md:py-32 border-b border-bg-primary/10">
            <div className="max-w-[1400px] mx-auto" ref={revealRef}>
                {/* Header */}
                <div className="mb-16 md:mb-24">
                    <span className="text-accent-primary font-bold tracking-[0.2em] text-[10px] uppercase block mb-4">
                        // Verified Credentials
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase whitespace-normal break-words text-bg-primary text-flicker">
                        Certificates<span className="text-accent-primary">.</span>
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <div key={index} className="group relative border border-bg-primary/20 bg-[#1A1A1A] overflow-hidden flex flex-col h-full hover:border-accent-primary/50 transition-colors duration-300">
                            
                            {/* Decorative Tape */}
                            <div className="absolute -top-3 -right-6 w-24 h-8 bg-bg-primary/10 rotate-12 z-10 border-y border-bg-primary/15 mix-blend-difference"></div>
                            
                            <div className="p-8 flex-grow flex flex-col relative z-20">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-xs font-bold font-mono text-accent-primary tracking-widest uppercase">
                                        {cert.date}
                                    </span>
                                    <span className="text-xs font-bold tracking-[0.2em] text-bg-primary/40 uppercase">
                                        0{index + 1}
                                    </span>
                                </div>
                                
                                <div className="min-h-[140px] md:min-h-[160px] flex flex-col justify-end mb-6">
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none text-bg-primary group-hover:text-accent-primary transition-colors duration-300">
                                        {cert.title}
                                    </h3>
                                </div>
                                
                                <p className="text-bg-primary/60 font-bold uppercase tracking-widest text-sm border-t border-bg-primary/10 pt-4">
                                    {cert.issuer}
                                </p>
                            </div>

                            {/* View Action */}
                            <a 
                                href={cert.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="w-full bg-bg-primary text-[#1A1A1A] uppercase font-black tracking-[0.2em] text-[10px] py-4 text-center hover:bg-accent-primary hover:text-bg-primary transition-colors duration-300"
                            >
                                View Certificate →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
