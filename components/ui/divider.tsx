import type { ReactNode } from 'react';

interface DividerProps {
  children?: ReactNode;
  className?: string;
}

export function Divider({ children, className }: DividerProps) {
  if (children) {
    return (
      <div className={`border-t border-border dark:border-border-dark pt-6 ${className || ''}`}>
        {children}
      </div>
    );
  }

  return (
    <hr className={`border-border dark:border-border-dark ${className || ''}`} />
  );
}