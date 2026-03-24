import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Star, Code2, Zap, Users } from 'lucide-react';

export const Achievements = () => {
    const revealRef = useScrollReveal<HTMLDivElement>(0.1);

    const achievements = [
        {
            title: "Performance & Confidence Mentorship",
            description: "Directly helped 23+ men rebuild their internal narrative, improve self-image, and skyrocket their professional confidence.",
            category: "Mentorship",
            icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-accent-primary" strokeWidth={1.5} />,
            date: "2024 – Present"
        },
        {
            title: "Autonomous Agent Architect",
            description: "Developed and deployed specialized AI agents that handle end-to-end task execution for complex business workflows.",
            category: "Engineering",
            icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-accent-primary" strokeWidth={1.5} />,
            date: "Nov 2025"
        },
        {
            title: "Top 10 - Global Prompt Engineering Challenge",
            description: "Ranked among the top 10 out of 5,000+ participants globally for advanced LLM instruction tuning.",
            category: "Competition",
            icon: <Star className="w-8 h-8 md:w-10 md:h-10 text-accent-primary" strokeWidth={1.5} />,
            date: "Jul 2025"
        },
        {
            title: "Open Source Contributor: n8n / LangChain",
            description: "Successfully merged core features into industry-leading automation frameworks to optimize node performance.",
            category: "Open Source",
            icon: <Code2 className="w-8 h-8 md:w-10 md:h-10 text-accent-primary" strokeWidth={1.5} />,
            date: "May 2025"
        }
    ];

    return (
        <section id="achievements" className="relative w-full bg-white text-[#1A1A1A] px-5 py-24 md:py-32 border-b border-[#1A1A1A]/10 overflow-hidden">
            {/* Minimalist Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(to right, #1A1A1A 1px, transparent 1px), linear-gradient(to bottom, #1A1A1A 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10" ref={revealRef}>
                {/* Header */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#1A1A1A]/20 pb-8">
                    <div>
                        <span className="text-accent-primary font-bold tracking-[0.2em] text-[10px] uppercase block mb-4">
                            // Milestones & Recongnition
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.85] tracking-tighter uppercase text-[#1A1A1A]">
                            Achievements.
                        </h2>
                    </div>
                </div>

                {/* Achievement List */}
                <div className="flex flex-col border-t border-[#1A1A1A]/10">
                    {achievements.map((item, index) => (
                        <div 
                            key={index} 
                            className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-8 md:py-12 border-b border-[#1A1A1A]/10 hover:bg-[#1A1A1A]/5 px-4 md:px-8 -mx-4 md:-mx-8 transition-colors duration-300"
                        >
                            {/* Icon Container */}
                            <div className="hidden md:flex flex-shrink-0 w-24 h-24 border-2 border-[#1A1A1A]/20 rounded-full items-center justify-center bg-white group-hover:border-accent-primary group-hover:shadow-[0_0_20px_rgba(211,47,47,0.15)] transition-all duration-300">
                                {item.icon}
                            </div>
                            
                            {/* Mobile Icon */}
                            <div className="md:hidden flex items-center gap-4 mb-2">
                                <div className="flex items-center justify-center w-12 h-12 bg-[#1A1A1A]/5 rounded-full">
                                    {item.icon}
                                </div>
                                <span className="text-accent-primary font-mono text-sm tracking-widest uppercase">
                                    {item.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <span className="hidden md:block text-accent-primary font-mono text-xs tracking-widest uppercase mb-3">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-none text-[#1A1A1A] group-hover:text-accent-primary transition-colors duration-300 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-[#1A1A1A]/70 font-medium text-base md:text-lg max-w-3xl">
                                    {item.description}
                                </p>
                            </div>

                            {/* Date / Action Area */}
                            <div className="md:text-right flex-shrink-0 pt-4 md:pt-0">
                                <div className="text-[#1A1A1A]/40 font-bold uppercase tracking-[0.2em] text-sm md:text-base group-hover:text-[#1A1A1A] transition-colors duration-300">
                                    {item.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
