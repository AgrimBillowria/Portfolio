import { useState, useEffect } from "react";

export const NavigationHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const navLinks = [
        { href: "#works", label: "Works", id: "works" },
        { href: "#about", label: "About", id: "about" },
        { href: "#contact", label: "Contact", id: "contact" },
    ];

    // ── Scroll-spy via IntersectionObserver ────────────────────
    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.id);
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0.3 }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <>
            {/* Desktop Nav */}
            <header className="w-full border-b border-text-primary uppercase text-sm tracking-widest font-medium sticky top-0 bg-bg-primary z-50">
                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-3">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`p-6 flex items-center justify-center transition-colors cursor-pointer ${i < navLinks.length - 1 ? "border-r border-text-primary" : ""
                                } ${activeSection === link.id
                                    ? "bg-text-primary text-bg-primary"
                                    : "hover:bg-text-primary hover:text-bg-primary"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile layout */}
                <div className="flex md:hidden items-center justify-between px-5 py-4">
                    <span className="font-black tracking-tight text-text-primary text-sm uppercase">Agrim Billowria</span>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        className="w-10 h-10 flex flex-col items-center justify-center gap-[6px] group focus:outline-none"
                    >
                        <span className={`block h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                        <span className={`block h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? "opacity-0 w-4" : "w-4"}`} />
                        <span className={`block h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
                    </button>
                </div>
            </header>

            {/* Mobile Slide-out Drawer */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
            >
                {/* Backdrop */}
                <div
                    onClick={() => setMenuOpen(false)}
                    className={`absolute inset-0 bg-text-primary/40 transition-opacity duration-500 ${menuOpen ? "opacity-100" : "opacity-0"}`}
                />

                {/* Side Panel */}
                <nav
                    className={`absolute top-0 right-0 h-full w-[75vw] max-w-sm bg-text-primary text-bg-primary flex flex-col justify-between p-8 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="pt-12">
                        <ul className="space-y-1">
                            {navLinks.map((link, i) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`block text-[10vw] sm:text-[10vw] font-black uppercase leading-none tracking-[-0.04em] transition-colors py-2 border-b border-bg-primary/20 ${activeSection === link.id ? "text-accent-primary" : "hover:text-accent-primary"
                                            }`}
                                    >
                                        {String(i + 1).padStart(2, "0")} &nbsp; {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-xs tracking-[0.25em] uppercase text-bg-primary/50 font-bold">
                        © Agrim Billowria — 2026
                    </div>
                </nav>
            </div>
        </>
    );
};
