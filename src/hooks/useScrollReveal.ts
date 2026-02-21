import { useEffect, useRef } from "react";

/**
 * Attach this ref to any element you want to animate in on scroll.
 * The element needs the class `reveal` applied initially.
 * Tailwind classes `opacity-0` and `translate-y-8` are applied via CSS
 * and removed when IntersectionObserver fires.
 */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("revealed");
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}
