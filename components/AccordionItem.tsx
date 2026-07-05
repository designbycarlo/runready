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
        <div style={{ borderBottom: '1px solid var(--color-border)' }}>
            <button
                className="w-full text-left py-5 flex justify-between items-center font-medium focus:outline-none transition-colors"
                style={{ color: 'var(--color-text-light)' }}
                onClick={toggleOpen}
                aria-expanded={isOpen}
            >
                <span className="text-sm tracking-tight">{title}</span>
                <span className="text-[10px] font-semibold tracking-widest" style={{ color: 'var(--color-text-muted)' }}>{isOpen ? 'HIDE' : 'SHOW'}</span>
            </button>
            {isOpen && (
                <div className="pb-6">
                    {children}
                </div>
            )}
        </div>
    );
}