import { useEffect, useRef } from "react";

export const CustomCursor = () => {
    const cursorDotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = cursorDotRef.current;
        if (!dot) return;

        let dotX = 0, dotY = 0;
        let animationId: number;

        const onMouseMove = (e: MouseEvent) => {
            dotX = e.clientX;
            dotY = e.clientY;
        };

        const animate = () => {
            // Dot snaps instantly
            dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
            animationId = requestAnimationFrame(animate);
        };

        document.addEventListener("mousemove", onMouseMove);

        // Hide cursor when leaving the window
        document.addEventListener("mouseleave", () => {
            if (dot) dot.style.opacity = "0";
        });
        document.addEventListener("mouseenter", () => {
            if (dot) dot.style.opacity = "1";
        });

        animate();

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="hidden md:block">
            {/* Dot */}
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-accent-primary rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
                style={{ willChange: "transform" }}
            />
            <style>{`
                @media (min-width: 768px) {
                    body { cursor: none; }
                    a, button { cursor: none; }
                }
            `}</style>
        </div>
    );
};
