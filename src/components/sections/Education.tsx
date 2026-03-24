import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Education = () => {
    const revealRef = useScrollReveal<HTMLDivElement>(0.1);

    const educationData = [
        {
            degree: "Bachelor of Technology CSE (AI & Machine Learning)",
            institution: "Lovely Professional University, Punjab",
            date: "Aug 2023 – May 2027",
            score: "CGPA: 6.9",
            highlights: [
                "Focus on algorithms, neural networks, and prompt engineering.",
                "Active in local AI hackathons and open-source contributions."
            ]
        },
        {
            degree: "Intermediate (Class XII)",
            institution: "MHAC Nagbani School, J&K",
            date: "Mar 2022 – May 2023",
            score: "71%",
            highlights: [
                "Core sciences and advanced mathematics specialization.",
                "Developed foundational programming logic."
            ]
        },
        {
            degree: "Matriculation (Class X)",
            institution: "MHAC Nagbani School, J&K",
            date: "Mar 2020 – May 2021",
            score: "81%",
            highlights: [
                "General academic excellence with focus on STEM subjects.",
                "Participated in regional coding olympiads."
            ]
        }
    ];

    return (
        <section id="education" className="relative w-full bg-white text-[#1A1A1A] px-5 py-24 md:py-32 border-b border-[#1A1A1A]/10 overflow-hidden">
            {/* Minimalist Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(to right, #1A1A1A 1px, transparent 1px), linear-gradient(to bottom, #1A1A1A 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10" ref={revealRef}>
                {/* Section Header */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#1A1A1A]/20 pb-8">
                    <div>
                        <span className="text-accent-primary font-bold tracking-[0.2em] text-[10px] uppercase block mb-4">
                            // Academic Background
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.85] tracking-tighter uppercase text-[#1A1A1A]">
                            Education.
                        </h2>
                    </div>
                </div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-6 md:gap-x-8 lg:gap-x-12 relative">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-[33.33%] top-0 bottom-0 w-[1px] bg-[#1A1A1A]/10"></div>

                    {educationData.map((item, index) => (
                        <div key={index} className="col-span-12 group relative">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative">
                                {/* Marker */}
                                <div className="hidden md:block absolute left-[33.33%] top-4 w-4 h-4 bg-white border-2 border-accent-primary -translate-x-[8px] translate-y-2 group-hover:scale-150 group-hover:bg-accent-primary transition-all duration-300"></div>

                                {/* Date/Score Sidebar */}
                                <div className="md:col-span-4 flex flex-col pt-1">
                                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#1A1A1A]/60 group-hover:text-[#1A1A1A] transition-colors duration-300">
                                        {item.date}
                                    </h3>
                                    <span className="text-accent-primary font-mono text-sm tracking-widest mt-2 uppercase">
                                        {item.score}
                                    </span>
                                </div>

                                {/* Degree/Institution Details */}
                                <div className="md:col-span-8 pl-0 md:pl-8 lg:pl-16 relative">
                                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-4 text-[#1A1A1A] group-hover:text-accent-primary transition-colors duration-300">
                                        {item.degree}
                                    </h4>
                                    <p className="text-[#1A1A1A]/70 font-medium text-lg max-w-xl mb-6">
                                        {item.institution}
                                    </p>
                                    
                                    <ul className="space-y-2 opacity-80 pl-4 border-l-2 border-accent-primary/50">
                                        {item.highlights.map((highlight, idx) => (
                                            <li key={idx} className="text-sm font-medium tracking-wide text-[#1A1A1A]/90 max-w-2xl relative">
                                                <span className="text-accent-primary mr-2font-bold"></span> 
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    {/* Structural Divider */}
                                    <div className="w-full h-[1px] bg-[#1A1A1A]/10 mt-8 md:mt-10 group-hover:bg-accent-primary/30 transition-colors duration-500"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
