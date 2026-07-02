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
        <div>
            <button
                className="w-full text-left py-5 flex justify-between items-center text-zinc-400 dark:text-zinc-500 font-medium focus:outline-none hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                onClick={toggleOpen}
                aria-expanded={isOpen}
            >
                <span className="text-sm tracking-tight">{title}</span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-600 font-semibold tracking-widest">{isOpen ? 'HIDE' : 'SHOW'}</span>
            </button>
            {isOpen && (
                <div className="pb-6">
                    {children}
                </div>
            )}
        </div>
    );
}