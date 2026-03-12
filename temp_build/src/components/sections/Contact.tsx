import { useState, useRef, type FormEvent } from 'react';

const FORMSPREE_ID = "mvzbbnrw";

export const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        setStatus('submitting');

        try {
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                body: new FormData(formRef.current),
                headers: { Accept: 'application/json' },
            });

            if (res.ok) {
                setStatus('success');
                formRef.current.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="w-full flex-col border-b border-text-primary">
            {/* Contact Header */}
            <div className="w-full p-4 md:p-8 border-b border-text-primary bg-text-primary text-bg-primary">
                <h2 className="text-[9vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-black uppercase tracking-[-0.04em] leading-[0.95] mb-3 md:mb-4 font-display">
                    Have an idea?
                    <br />
                    <span className="text-accent-primary italic">Let's talk!</span>
                </h2>
                <p className="text-[10px] md:text-sm tracking-[0.15em] md:tracking-widest uppercase font-bold text-bg-primary/70 mt-6 md:mt-8">
                    [ PROJECT INQUIRIES &amp; COLLABORATIONS ]
                </p>
            </div>

            {/* Form Container — stacks vertically on mobile */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
                {/* Contact Info */}
                <div className="p-5 md:p-8 border-b md:border-b-0 md:border-r border-text-primary bg-bg-primary flex flex-col justify-between gap-8 md:gap-0">
                    <div className="space-y-8 md:space-y-12">
                        <div>
                            <h3 className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-text-subtle mb-3 md:mb-5 opacity-60">
                                // Direct Email
                            </h3>
                            <a href="mailto:agrimbillowria@gmail.com" className="text-lg md:text-3xl lg:text-4xl font-bold tracking-tight hover:text-accent-primary transition-colors block mb-8 md:mb-12 max-w-full truncate font-display">
                                agrimbillowria@gmail.com
                            </a>

                            <h3 className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-text-subtle mb-3 md:mb-5 opacity-60">
                                // Direct Phone
                            </h3>
                            <a href="tel:+919596694166" className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight hover:text-accent-primary transition-colors block font-display">
                                +91 9596694166
                            </a>
                        </div>

                        <div>
                            <h3 className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-text-subtle mb-4 md:mb-6 opacity-60">
                                // Socials
                            </h3>
                            <ul className="flex flex-col space-y-4 md:space-y-3">
                                {['Instagram', 'X', 'LinkedIn'].map((social) => (
                                    <li key={social}>
                                        <a
                                            href={social === 'Instagram' ? 'https://www.instagram.com/agrimbillowria/' : social === 'X' ? 'https://x.com/AgrimBillowria' : 'https://www.linkedin.com/in/agrimbillowria01/'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-black tracking-[0.1em] uppercase text-sm md:text-lg hover:text-accent-primary transition-all hover:translate-x-1 inline-block font-display"
                                        >
                                            {social}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Form */}
                <div className="bg-bg-primary flex flex-col justify-center transition-all duration-500">
                    {status === 'success' ? (
                        <div className="p-5 md:p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                            <svg className="w-14 h-14 md:w-20 md:h-20 text-accent-primary mb-4 md:mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter font-display">Message Received</h3>
                            <p className="mt-3 md:mt-4 text-text-subtle uppercase tracking-[0.2em] font-bold text-xs md:text-sm font-sans underline underline-offset-4 decoration-accent-primary">I'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col h-full w-full relative">
                            {status === 'submitting' && (
                                <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm z-10 flex items-center justify-center cursor-not-allowed">
                                    <div className="font-bold uppercase tracking-[0.3em] animate-pulse text-sm md:text-base">
                                        Sending...
                                    </div>
                                </div>
                            )}

                            <div className="w-full relative group border-b border-text-primary hover:bg-black hover:text-white transition-all duration-300">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="YOUR NAME"
                                    className="w-full bg-transparent p-5 md:p-8 outline-none text-base md:text-xl font-medium uppercase tracking-wider placeholder:text-text-subtle focus:bg-[#E8E8E8]/10 transition-colors"
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            <div className="w-full relative group border-b border-text-primary hover:bg-black hover:text-white transition-all duration-300">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="EMAIL ADDRESS"
                                    className="w-full bg-transparent p-5 md:p-8 outline-none text-base md:text-xl font-medium uppercase tracking-wider placeholder:text-text-subtle focus:bg-[#E8E8E8]/10 transition-colors"
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            <div className="w-full relative group border-b border-text-primary flex-grow hover:bg-black hover:text-white transition-all duration-300">
                                <textarea
                                    name="message"
                                    placeholder="TELL ME ABOUT YOUR PROJECT"
                                    className="w-full h-full min-h-[160px] md:min-h-[240px] resize-none bg-transparent p-5 md:p-8 outline-none text-base md:text-xl font-medium uppercase tracking-wider placeholder:text-text-subtle focus:bg-[#E8E8E8]/10 transition-colors"
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full p-5 md:p-8 bg-text-primary text-bg-primary group relative overflow-hidden text-base md:text-2xl font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] hover:bg-black transition-colors duration-300"
                            >
                                <span className={`transition-opacity duration-300 ${status === 'submitting' ? 'opacity-0' : 'opacity-100'}`}>
                                    Send Message
                                </span>
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};
