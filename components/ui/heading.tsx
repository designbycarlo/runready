import type { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 'xl' | 'lg' | 'md';
  className?: string;
}

export function Heading({ children, level = 'lg', className }: HeadingProps) {
  const baseStyles = 'tracking-tight';
  
  const variants = {
    xl: 'heading-xl',
    lg: 'heading-lg',
    md: 'heading-md',
  };

  const tags = {
    xl: 'h1',
    lg: 'h2',
    md: 'h3',
  };

  const Tag = tags[level] as 'h1' | 'h2' | 'h3';

  return (
    <Tag className={`${baseStyles} ${variants[level]} ${className || ''}`}>
      {children}
    </Tag>
  );
}