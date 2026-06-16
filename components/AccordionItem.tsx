'use client';

import { useState, ReactNode } from 'react';

interface AccordionItemProps {
    title: string;
    children: ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-0">
            <button
                className="w-full text-left py-4 flex justify-between items-center text-slate-500 dark:text-slate-400 font-medium focus:outline-none hover:text-slate-900 dark:hover:text-white transition-colors"
                onClick={toggleOpen}
                aria-expanded={isOpen}
            >
                <span className="text-sm tracking-tight">{title}</span>
                <span className="text-[10px] opacity-40">{isOpen ? 'HIDE' : 'SHOW'}</span>
            </button>
            {isOpen && (
                <div className="pb-6">
                    {children}
                </div>
            )}
        </div>
    );
}