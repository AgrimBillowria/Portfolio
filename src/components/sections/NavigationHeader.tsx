export const NavigationHeader = () => {
    return (
        <header className="w-full border-b border-text-primary grid grid-cols-1 md:grid-cols-3 uppercase text-sm tracking-widest font-medium">
            <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-text-primary flex items-center justify-center hover:bg-text-primary hover:text-bg-primary transition-colors cursor-pointer">
                Works
            </div>
            <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-text-primary flex items-center justify-center hover:bg-text-primary hover:text-bg-primary transition-colors cursor-pointer">
                Awards
            </div>
            <div className="p-4 md:p-6 flex items-center justify-center hover:bg-text-primary hover:text-bg-primary transition-colors cursor-pointer">
                Contact
            </div>
        </header>
    );
};
