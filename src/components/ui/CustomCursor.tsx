import { useEffect, useRef } from "react";

export const CustomCursor = () => {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorRingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = cursorDotRef.current;
        const ring = cursorRingRef.current;
        if (!dot || !ring) return;

        let ringX = 0, ringY = 0;
        let dotX = 0, dotY = 0;
        let animationId: number;

        const onMouseMove = (e: MouseEvent) => {
            dotX = e.clientX;
            dotY = e.clientY;
        };

        const onMouseEnterLink = () => {
            ring.classList.add("cursor-hover");
        };

        const onMouseLeaveLink = () => {
            ring.classList.remove("cursor-hover");
        };

        const animate = () => {
            // Dot snaps instantly
            dot.style.transform = `translate(${dotX}px, ${dotY}px)`;

            // Ring lags behind with lerp
            ringX += (dotX - ringX) * 0.12;
            ringY += (dotY - ringY) * 0.12;
            ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

            animationId = requestAnimationFrame(animate);
        };

        document.addEventListener("mousemove", onMouseMove);
        animate();

        // Hover state for interactive elements
        const interactiveEls = document.querySelectorAll("a, button, [data-cursor]");
        interactiveEls.forEach((el) => {
            el.addEventListener("mouseenter", onMouseEnterLink);
            el.addEventListener("mouseleave", onMouseLeaveLink);
        });

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationId);
            interactiveEls.forEach((el) => {
                el.removeEventListener("mouseenter", onMouseEnterLink);
                el.removeEventListener("mouseleave", onMouseLeaveLink);
            });
        };
    }, []);

    return (
        <>
            {/* Dot */}
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-accent-primary rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
                style={{ willChange: "transform" }}
            />
            {/* Ring */}
            <div
                ref={cursorRingRef}
                id="cursor-ring"
                className="fixed top-0 left-0 w-8 h-8 border border-text-primary rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-200"
                style={{ willChange: "transform" }}
            />
            <style>{`
                body { cursor: none; }
                a, button { cursor: none; }
                #cursor-ring.cursor-hover {
                    width: 56px;
                    height: 56px;
                    border-color: #D32F2F;
                }
            `}</style>
        </>
    );
};
