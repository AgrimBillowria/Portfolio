import type { ReactNode } from 'react';

interface BlueprintWrapperProps {
    children: ReactNode;
}

export const BlueprintWrapper = ({ children }: BlueprintWrapperProps) => {
    return (
        <div className="w-full min-h-screen bg-bg-primary text-text-primary">
            {/* Outer master container that constrains the max width for ultra-wide screens, 
          while maintaining the structural 1px border aesthetic on the sides */}
            <div className="max-w-7xl mx-auto border-x border-text-primary min-h-screen flex flex-col">
                {children}
            </div>
        </div>
    );
};
