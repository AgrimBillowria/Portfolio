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
                // Extend unmount time to allow the full cinematic exit anim to play
                setTimeout(() => setShouldUnmount(true), 1500);
            }, 400);
            return () => clearTimeout(t);
        }
    }, [firstDone, lastDone]);

    if (shouldUnmount) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden pointer-events-none"
        >
            {/* Top Half Background - Slides Right */}
            <div
                className={`absolute top-0 left-0 w-full h-1/2 bg-text-primary transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isComplete ? "translate-x-full" : "translate-x-0"
                    }`}
            />

            {/* Bottom Half Background - Slides Left */}
            <div
                className={`absolute bottom-0 left-0 w-full h-1/2 bg-text-primary transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isComplete ? "-translate-x-full" : "translate-x-0"
                    }`}
            />

            {/* Text Container - Scales Up & Fades Out */}
            <div
                className={`relative z-10 w-full max-w-[100vw] flex flex-col items-center justify-center px-4 md:px-8 text-center gap-1 md:gap-3 transition-all duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isComplete ? "scale-[5] md:scale-[3] opacity-0" : "scale-100 opacity-100"
                    }`}
            >
                {/* First Name */}
                <h1 className="text-bg-primary text-[13vw] sm:text-[15vw] md:text-[19vw] font-black uppercase tracking-[-0.08em] leading-[0.8] whitespace-nowrap">
                    {firstName}
                </h1>

                {/* Last Name */}
                <h1 className="text-bg-primary text-[13vw] sm:text-[15vw] md:text-[19vw] font-black uppercase tracking-[-0.08em] leading-[0.8] whitespace-nowrap">
                    {lastName}
                </h1>
            </div>
        </div>
    );
};
