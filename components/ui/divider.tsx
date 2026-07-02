import type { ReactNode } from 'react';

interface DividerProps {
  children?: ReactNode;
  className?: string;
}

export function Divider({ children, className }: DividerProps) {
  if (children) {
    return (
      <div className={`border-b border-zinc-200 dark:border-zinc-800 pb-4 pt-6 ${className || ''}`}>
        {children}
      </div>
    );
  }

  return (
    <hr className={`border-zinc-200 dark:border-zinc-800 ${className || ''}`} />
  );
}
