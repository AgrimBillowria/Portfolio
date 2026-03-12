export const Footer = () => {
    return (
        <footer className="w-full bg-[#1A1A1A] text-bg-primary py-4 md:py-6 border-t border-bg-primary/10">
            <div className="px-5 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase opacity-60">
                        © {new Date().getFullYear()} Agrim Billowria. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center space-x-8">
                    {['LinkedIn', 'GitHub', 'X', 'Instagram'].map((label) => (
                        <a
                            key={label}
                            href={
                                label === 'LinkedIn' ? 'https://www.linkedin.com/in/agrimbillowria01/' :
                                    label === 'GitHub' ? 'https://github.com/agrimbillowria' :
                                        label === 'X' ? 'https://x.com/AgrimBillowria' :
                                            'https://www.instagram.com/agrimbillowria/'
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
