import { useState, type FormEvent } from 'react';

export const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate async API call delay
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <section className="w-full flex-col border-b border-text-primary">
            {/* Contact Header Component */}
            <div className="w-full p-4 md:p-8 border-b border-text-primary bg-text-primary text-bg-primary">
                <h2 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-bold uppercase tracking-tighter leading-[0.85] mb-4">
                    Have an idea?
                    <br className="hidden md:block" />
                    <span className="text-accent-primary"> Let's talk!</span>
                </h2>
                <p className="text-sm md:text-base tracking-widest uppercase font-bold text-bg-primary/70 mt-8">
                    [ PROJECT INQUIRIES & COLLABORATIONS ]
                </p>
            </div>

            {/* Form Container */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2">
                {/* Contact Info (Left Side) */}
                <div className="p-4 md:p-8 border-b md:border-b-0 md:border-r border-text-primary bg-bg-primary flex flex-col justify-between">
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-text-subtle mb-4">
                                // Direct Email
                            </h3>
                            <a href="mailto:hello@agrimbillowira.com" className="text-xl md:text-3xl font-medium tracking-wide hover:text-accent-primary transition-colors">
                                hello@agrim.design
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-text-subtle mb-4">
                                // Socials
                            </h3>
                            <ul className="space-y-2">
                                <li><a href="https://www.instagram.com/agrimbillowria/" target="_blank" rel="noopener noreferrer" className="font-bold tracking-widest uppercase text-sm hover:text-accent-primary transition-colors">Instagram</a></li>
                                <li><a href="#" className="font-bold tracking-widest uppercase text-sm hover:text-accent-primary transition-colors">Dribbble</a></li>
                                <li><a href="https://x.com/AgrimBillowria" target="_blank" rel="noopener noreferrer" className="font-bold tracking-widest uppercase text-sm hover:text-accent-primary transition-colors">X</a></li>
                                <li><a href="https://www.linkedin.com/in/agrimbillowria01/" target="_blank" rel="noopener noreferrer" className="font-bold tracking-widest uppercase text-sm hover:text-accent-primary transition-colors">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 md:mt-0 pt-8 border-t border-text-primary/10">
                        <p className="text-xs font-medium tracking-wide text-text-subtle uppercase">
                            © {new Date().getFullYear()} Agrim Billowira. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Minimalist Form (Right Side) */}
                <div className="bg-bg-primary flex flex-col justify-center transition-all duration-500">
                    {status === 'success' ? (
                        <div className="p-4 md:p-8 flex flex-col items-center justify-center text-center h-full animate-[fade-in_0.5s_ease-out]">
                            <svg className="w-20 h-20 text-accent-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Message Received</h3>
                            <p className="mt-4 text-text-subtle uppercase tracking-widest font-bold">I'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col h-full w-full relative">
                            {/* Loading Overlay */}
                            {status === 'submitting' && (
                                <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm z-10 flex items-center justify-center cursor-not-allowed">
                                    <div className="font-bold uppercase tracking-[0.3em] animate-pulse">
                                        Sending...
                                    </div>
                                </div>
                            )}

                            {/* Name Input */}
                            <div className="w-full relative group border-b border-text-primary hover:bg-[#E8E8E8] transition-colors">
                                <input
                                    type="text"
                                    placeholder="YOUR NAME"
                                    className="w-full bg-transparent p-4 md:p-8 outline-none text-lg md:text-xl font-medium uppercase tracking-wider placeholder:text-text-subtle focus:bg-[#E8E8E8]/50 transition-colors"
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            {/* Email Input */}
                            <div className="w-full relative group border-b border-text-primary hover:bg-[#E8E8E8] transition-colors">
                                <input
                                    type="email"
                                    placeholder="EMAIL ADDRESS"
                                    className="w-full bg-transparent p-4 md:p-8 outline-none text-lg md:text-xl font-medium uppercase tracking-wider placeholder:text-text-subtle focus:bg-[#E8E8E8]/50 transition-colors"
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            {/* Message Area */}
                            <div className="w-full relative group border-b border-text-primary flex-grow hover:bg-[#E8E8E8] transition-colors">
                                <textarea
                                    placeholder="TELL ME ABOUT YOUR PROJECT"
                                    className="w-full h-full min-h-[200px] md:min-h-full resize-none bg-transparent p-4 md:p-8 outline-none text-lg md:text-xl font-medium uppercase tracking-wider placeholder:text-text-subtle focus:bg-[#E8E8E8]/50 transition-colors"
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full p-4 md:p-8 bg-text-primary text-bg-primary group relative overflow-hidden text-xl md:text-2xl font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors duration-300"
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

