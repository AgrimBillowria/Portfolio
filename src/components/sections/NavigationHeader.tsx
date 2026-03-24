import { useState, useEffect } from "react";

export const NavigationHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const navLinks = [
        { href: "#projects", label: "Projects", id: "projects" },
        { href: "#about", label: "About", id: "about" },
        { href: "#education", label: "Education", id: "education" },
        { href: "#certificates", label: "Certificates", id: "certificates" },
        { href: "#achievements", label: "Achievements", id: "achievements" },
        { href: "#contact", label: "Contact", id: "contact" },
    ];

    // ── Better Scroll-spy via IntersectionObserver ────────────────────
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the upper middle area
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach((link) => {
            const el = document.getElementById(link.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // ── mobile menu scroll lock ────────────────────
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <>
            {/* Desktop Nav */}
            <header className="fixed top-0 left-0 w-full border-b border-text-primary/10 bg-bg-primary z-[100]">
                {/* Desktop layout */}
                <div className="hidden md:flex items-center justify-between px-12 py-5 max-w-[1400px] mx-auto">
                    {/* Logo block */}
                    <div className="text-xl font-black tracking-tighter">
                        AB<span className="text-red-500">.</span>
                    </div>
                    {/* Center Navigation */}
                    <div className="flex items-center gap-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                aria-label={`Navigate to ${link.label} section`}
                                className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-colors cursor-pointer p-2 -m-2 ${activeSection === link.id
                                        ? "text-text-primary"
                                        : "text-text-primary/50 hover:text-text-primary"
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    {/* CTA Button */}
                    <div>
                        <a
                            href="#contact"
                            className="border border-text-primary px-8 py-3 text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-text-primary hover:text-bg-primary transition-colors"
                        >
                            LET'S TALK
                        </a>
                    </div>
                </div>

                {/* Mobile layout */}
                <div className="flex md:hidden items-center justify-between px-5 py-4">
                    <span className="font-black tracking-tight text-text-primary text-sm uppercase">Agrim Billowria</span>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        className="w-11 h-11 flex flex-col items-center justify-center gap-[6px] group focus:outline-none"
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
                                        aria-label={`Navigate to ${link.label} section`}
                                        className={`block text-[10vw] sm:text-[10vw] font-black uppercase leading-none tracking-[-0.04em] transition-colors py-4 border-b border-bg-primary/20 ${activeSection === link.id ? "text-accent-primary" : "hover:text-accent-primary"
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
