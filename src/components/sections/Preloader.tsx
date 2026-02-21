import { useEffect, useRef, useState } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+1234567890";

// Standalone scramble hook — one per name line
const useScramble = (target: string, startDelay = 300) => {
    const [text, setText] = useState("");
    const [done, setDone] = useState(false);
    const frameRef = useRef<number>(0);
    const progressRef = useRef(0);
    const frameCountRef = useRef(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const animate = () => {
                const progress = progressRef.current;
                frameCountRef.current++;

                // Update every 2 frames OR once fully resolved
                if (frameCountRef.current % 2 === 0 || progress >= target.length) {
                    const next = target
                        .split("")
                        .map((char, i) => {
                            if (char === " ") return " ";
                            if (i < progress) return target[i];
                            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
                        })
                        .join("");
                    setText(next);
                }

                if (progress >= target.length) {
                    setDone(true);
                    return;
                }

                progressRef.current += 0.08;
                frameRef.current = requestAnimationFrame(animate);
            };

            frameRef.current = requestAnimationFrame(animate);
        }, startDelay);

        return () => {
            clearTimeout(timeout);
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [target, startDelay]);

    return { text: text || target.replace(/./g, "#"), done };
};

export const Preloader = () => {
    const [shouldUnmount, setShouldUnmount] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const { text: firstName, done: firstDone } = useScramble("AGRIM", 300);
    const { text: lastName, done: lastDone } = useScramble("BILLOWRIA", 300);

    // Once BOTH names are fully decoded, trigger the slide-up exit
    useEffect(() => {
        if (firstDone && lastDone) {
            const t = setTimeout(() => {
                setIsComplete(true);
                // Extend unmount time highly to allow the full cinematic exit anim/blur to fade
                setTimeout(() => setShouldUnmount(true), 1900);
            }, 400);
            return () => clearTimeout(t);
        }
    }, [firstDone, lastDone]);

    if (shouldUnmount) return null;

    // Array of 8 bands to create the "Venetian Shutter" effect
    // We calculate delay from center (indices 3,4 open first, then 2,5, then 1,6, etc.)
    const TOTAL_BANDS = 8;
    const getBandDelay = (index: number) => {
        const centerOffset = Math.abs(index - (TOTAL_BANDS - 1) / 2); // 0.5, 1.5, 2.5, 3.5
        // Outer bands delay longer than inner bands
        return centerOffset * 0.08;
    };

    return (
        <div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden pointer-events-none"
        >
            {/* The 8 Shutter Bands */}
            <div className="absolute inset-0 flex flex-col w-full h-full">
                {Array.from({ length: TOTAL_BANDS }).map((_, i) => (
                    <div
                        key={i}
                        className="w-full bg-text-primary flex-1 transition-transform ease-[cubic-bezier(0.85,0,0.15,1)]"
                        style={{
                            transitionDuration: "1200ms",
                            transitionDelay: isComplete ? `${getBandDelay(i)}s` : "0s",
                            // Even indices slide Left, Odd indices slide Right
                            transform: isComplete
                                ? i % 2 === 0
                                    ? "translate3d(-100vw, 0, 0)"
                                    : "translate3d(100vw, 0, 0)"
                                : "translate3d(0, 0, 0)",
                            willChange: "transform",
                        }}
                    />
                ))}
            </div>

            {/* Title Container - Hyper-Zoom & Motion Tear */}
            <div
                className={`relative z-10 w-full max-w-[100vw] flex flex-col items-center justify-center px-4 md:px-8 text-center gap-1 md:gap-3 transition-all duration-[1400ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${isComplete
                    ? "scale-[6] md:scale-[10] opacity-0 tracking-[1em]"
                    : "scale-100 opacity-100 tracking-normal"
                    }`}
                // Using inline styles for complex filter transition that breaks in tailwind arbitrarily
                style={{
                    filter: isComplete ? "blur(12px)" : "blur(0px)",
                    willChange: "transform, filter, opacity",
                }}
            >
                {/* First Name */}
                <h1 className="text-bg-primary text-[13vw] sm:text-[15vw] md:text-[19vw] font-black uppercase tracking-[-0.08em] leading-[0.8] whitespace-nowrap transition-all duration-[1400ms] ease-[cubic-bezier(0.85,0,0.15,1)]"
                    style={{ letterSpacing: isComplete ? "0.3em" : "normal" }}
                >
                    {firstName}
                </h1>

                {/* Last Name */}
                <h1 className="text-bg-primary text-[13vw] sm:text-[15vw] md:text-[19vw] font-black uppercase tracking-[-0.08em] leading-[0.8] whitespace-nowrap transition-all duration-[1400ms] ease-[cubic-bezier(0.85,0,0.15,1)]"
                    style={{ letterSpacing: isComplete ? "0.3em" : "normal" }}
                >
                    {lastName}
                </h1>
            </div>
        </div>
    );
};
