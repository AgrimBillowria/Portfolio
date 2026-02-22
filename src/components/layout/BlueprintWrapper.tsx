import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface BlueprintWrapperProps {
    children: ReactNode;
}

export const BlueprintWrapper = ({ children }: BlueprintWrapperProps) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    // Track scroll for drawing and parallax effects
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            if (windowHeight <= 0) {
                setScrollProgress(0);
                return;
            }

            const scroll = Math.min(1, Math.max(0, totalScroll / windowHeight));
            setScrollProgress(scroll);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const repetitionBlocks = [-1, 0, 1, 2, 3, 4, 5];

    return (
        <div className="w-full min-h-screen bg-bg-primary text-text-primary relative overflow-x-hidden">

            {/* Left Margin - Continuous Densely Populated Doodle Art */}
            <div className="hidden min-[1100px]:flex fixed left-0 top-0 bottom-0 w-16 xl:w-28 z-50 pointer-events-none border-r border-text-primary/10 items-center justify-center overflow-visible">

                {/* 1) Heavy Traveling squiggly line */}
                <svg className="absolute w-full h-[150%] text-text-primary/20" preserveAspectRatio="none" style={{ top: '-10%' }}>
                    <path
                        d="M 50 0 Q 200 150 50 300 T 100 600 T 50 900 T 200 1200 T 50 1500"
                        fill="none" stroke="currentColor" strokeWidth="2.5" pathLength="1"
                        style={{
                            strokeDasharray: '1',
                            strokeDashoffset: (1 - scrollProgress).toString(),
                            transition: 'stroke-dashoffset 0.1s ease-out'
                        }}
                    />
                    <path
                        d="M 30 1500 Q -100 1350 30 1200 T -20 900 T 30 600 T -100 300 T 30 0"
                        fill="none" stroke="currentColor" strokeWidth="1" pathLength="1"
                        className="text-text-primary/10"
                        style={{
                            strokeDasharray: '1',
                            strokeDashoffset: (scrollProgress).toString(),
                            transition: 'stroke-dashoffset 0.1s ease-out'
                        }}
                    />
                </svg>

                {/* Floating Doodles - Fast Parallax layer */}
                <div className="absolute w-full h-full" style={{ transform: `translateY(${scrollProgress * 800 - 400}px)` }}>
                    {repetitionBlocks.map(i => (
                        <div key={i} className="absolute w-full h-full" style={{ top: `${i * 100}%` }}>
                            {/* Star at 10% */}
                            <svg className="absolute top-[10%] left-[20%] w-10 h-10 xl:w-14 xl:h-14 text-accent-primary opacity-90 rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" />
                            </svg>
                            {/* Exclamation at 30% */}
                            <svg className="absolute top-[30%] left-[10%] w-8 h-20 text-text-primary/50 rotate-6" viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
                                <line x1="50" y1="20" x2="50" y2="120" />
                                <circle cx="50" cy="170" r="8" fill="currentColor" />
                            </svg>
                            {/* Abstract Cloud at 50% */}
                            <svg className="absolute top-[50%] left-[30%] w-14 h-14 text-text-primary/30 -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M 25,60 Q 10,60 10,45 Q 10,30 25,30 Q 30,10 55,15 Q 80,10 85,35 Q 95,40 95,55 Q 95,70 80,70 L 25,70 Z" />
                            </svg>
                            {/* Cross at 70% */}
                            <svg className="absolute top-[70%] left-[15%] w-10 h-10 text-accent-primary opacity-60 rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="50" y1="10" x2="50" y2="90" />
                                <line x1="10" y1="50" x2="90" y2="50" />
                            </svg>
                            {/* Spiral at 90% */}
                            <svg className="absolute top-[90%] left-[10%] w-16 h-16 xl:w-20 xl:h-20 text-text-primary/40 rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M30,50 Q30,30 50,30 Q70,30 70,50 Q70,75 45,75 Q15,75 15,45 Q15,10 55,10 Q95,10 95,55" />
                            </svg>
                        </div>
                    ))}
                </div>

                {/* Floating Doodles - Slow Parallax layer */}
                <div className="absolute w-full h-full" style={{ transform: `translateY(${scrollProgress * 350 - 175}px)` }}>
                    {repetitionBlocks.map(i => (
                        <div key={i} className="absolute w-full h-full" style={{ top: `${i * 100}%` }}>
                            {/* Hash at 20% */}
                            <svg className="absolute top-[20%] left-[35%] w-10 h-10 text-text-primary/30 rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                                <line x1="30" y1="10" x2="20" y2="90" />
                                <line x1="70" y1="10" x2="60" y2="90" />
                                <line x1="10" y1="30" x2="90" y2="20" />
                                <line x1="10" y1="70" x2="90" y2="60" />
                            </svg>
                            {/* Circle Cluster at 40% */}
                            <svg className="absolute top-[40%] left-[15%] w-12 h-12 text-text-primary/40 -rotate-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M 30,50 Q 50,10 70,50 Q 90,90 50,80 Q 10,90 30,50 Z" />
                                <circle cx="50" cy="65" r="5" fill="currentColor" />
                            </svg>
                            {/* Checkered abstract box at 60% */}
                            <svg className="absolute top-[60%] left-[25%] w-8 h-8 text-text-primary/30 rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="10" y="10" width="80" height="80" />
                                <path d="M 10,50 L 90,50 M 50,10 L 50,90" />
                                <path d="M 10,10 L 90,90 M 10,90 L 90,10" />
                            </svg>
                            {/* Abstract dots at 80% */}
                            <svg className="absolute top-[80%] left-[40%] w-8 h-8 text-text-primary/50" viewBox="0 0 100 100" fill="currentColor">
                                <circle cx="20" cy="20" r="10" />
                                <circle cx="80" cy="20" r="10" />
                                <circle cx="20" cy="80" r="10" />
                                <circle cx="80" cy="80" r="10" />
                            </svg>
                            {/* Word Doodle at 95% */}
                            <div className="absolute top-[95%] left-[15%] text-lg font-black text-text-primary/20 -rotate-90 tracking-[0.2em] font-display whitespace-nowrap">
                                FLOW /\/
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Margin - Continuous Densely Populated Doodle Art */}
            <div className="hidden min-[1100px]:flex fixed right-0 top-0 bottom-0 w-16 xl:w-28 z-50 pointer-events-none border-l border-text-primary/10 items-center justify-center overflow-visible">

                {/* 1) Traveling zig-zag & overlapping line */}
                <svg className="absolute w-full h-[150%] text-text-primary/20" preserveAspectRatio="none" style={{ top: '-10%' }}>
                    <path
                        d="M 10 0 L 90 150 L 20 300 L 80 450 L 10 600 L 90 750 L 30 900 L 80 1050 L 10 1200 T 50 1500"
                        fill="none" stroke="currentColor" strokeWidth="1.5" pathLength="1"
                        style={{
                            strokeDasharray: '1',
                            strokeDashoffset: (1 - scrollProgress).toString(),
                            transition: 'stroke-dashoffset 0.1s ease-out'
                        }}
                    />
                    <path
                        d="M 90 1500 Q -10 1350 70 1200 T -10 900 T 90 600 T 20 300 T 90 0"
                        fill="none" stroke="currentColor" strokeWidth="1" pathLength="1"
                        className="text-text-primary/10"
                        style={{
                            strokeDasharray: '1',
                            strokeDashoffset: (scrollProgress).toString(),
                            transition: 'stroke-dashoffset 0.1s ease-out'
                        }}
                    />
                </svg>

                {/* Floating Doodles - Fast Parallax layer (Upward) */}
                <div className="absolute w-full h-full" style={{ transform: `translateY(${-scrollProgress * 650 + 325}px)` }}>
                    {repetitionBlocks.map(i => (
                        <div key={i} className="absolute w-full h-full" style={{ top: `${i * 100}%` }}>
                            {/* Lightning Bolt at 15% */}
                            <svg className="absolute top-[15%] right-[25%] w-10 h-10 xl:w-14 xl:h-14 text-accent-primary opacity-80 -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M 60,10 L 30,50 L 55,55 L 40,90 L 70,45 L 45,40 Z" />
                            </svg>
                            {/* Triangle Abstract at 35% */}
                            <svg className="absolute top-[35%] right-[10%] w-12 h-12 text-text-primary/40 rotate-[30deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="50,15 90,85 10,85" />
                                <line x1="50" y1="15" x2="50" y2="85" />
                                <line x1="30" y1="50" x2="70" y2="50" />
                            </svg>
                            {/* Spring / Coil at 55% */}
                            <svg className="absolute top-[55%] right-[10%] w-12 h-20 text-text-primary/40 rotate-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M 20,20 Q 80,0 80,30 Q 20,60 20,50 Q 80,40 80,70 Q 20,100 20,90 Q 80,80 80,110" />
                            </svg>
                            {/* Diamond group at 75% */}
                            <svg className="absolute top-[75%] right-[30%] w-10 h-10 text-accent-primary opacity-60 rotate-[15deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="50,10 90,50 50,90 10,50" />
                                <polygon points="50,30 70,50 50,70 30,50" />
                            </svg>
                            {/* Wavy lines at 95% */}
                            <svg className="absolute top-[95%] right-[20%] w-14 h-14 text-text-primary/30 -rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M 10,30 Q 25,10 40,30 T 70,30 T 100,30" />
                                <path d="M 10,50 Q 25,30 40,50 T 70,50 T 100,50" />
                                <path d="M 10,70 Q 25,50 40,70 T 70,70 T 100,70" />
                            </svg>
                        </div>
                    ))}
                </div>

                {/* Floating Doodles - Slow Parallax layer (Upward) */}
                <div className="absolute w-full h-full" style={{ transform: `translateY(${-scrollProgress * 300 + 150}px)` }}>
                    {repetitionBlocks.map(i => (
                        <div key={i} className="absolute w-full h-full" style={{ top: `${i * 100}%` }}>
                            {/* Word Doodle at 5% */}
                            <div className="absolute top-[5%] right-[5%] text-2xl font-black text-text-primary/10 rotate-90 tracking-widest font-mono whitespace-nowrap opacity-60">
                                100% RAW
                            </div>
                            {/* Intersecting squares at 25% */}
                            <svg className="absolute top-[25%] right-[15%] w-10 h-10 xl:w-14 xl:h-14 text-text-primary/40 rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="20" y="20" width="40" height="40" className="rotate-3 origin-center" />
                                <rect x="40" y="40" width="40" height="40" className="-rotate-6 origin-center" />
                                <line x1="20" y1="20" x2="80" y2="80" />
                            </svg>
                            {/* Target / Bullseye at 45% */}
                            <svg className="absolute top-[45%] right-[25%] w-10 h-10 text-text-primary/30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                <circle cx="50" cy="50" r="40" />
                                <circle cx="50" cy="50" r="25" />
                                <circle cx="50" cy="50" r="10" fill="currentColor" />
                                <line x1="50" y1="0" x2="50" y2="20" />
                                <line x1="50" y1="80" x2="50" y2="100" />
                                <line x1="0" y1="50" x2="20" y2="50" />
                                <line x1="80" y1="50" x2="100" y2="50" />
                            </svg>
                            {/* Playful abstract face / geometric eye at 65% */}
                            <svg className="absolute top-[65%] right-[25%] w-12 h-12 xl:w-16 xl:h-16 text-text-primary/50 rotate-[-25deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M 10,50 Q 50,10 90,50 Q 50,90 10,50 Z" />
                                <circle cx="50" cy="50" r="15" />
                                <circle cx="50" cy="50" r="3" fill="currentColor" />
                            </svg>
                            {/* Zig-Zag block at 85% */}
                            <svg className="absolute top-[85%] right-[10%] w-12 h-12 text-text-primary/40 rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M 10,20 L 30,80 L 50,20 L 70,80 L 90,20" />
                                <path d="M 10,40 L 30,100 L 50,40 L 70,100 L 90,40" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main content grid */}
            <div className="w-full max-w-[1400px] mx-auto min-h-screen flex flex-col relative z-30 bg-bg-primary px-0 min-[1100px]:px-16 xl:px-28">
                {children}
            </div>

            {/* Paper Texture Background stays for doodle aesthetic */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-10"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                }}>
            </div>
        </div>
    );
};
