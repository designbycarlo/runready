interface LabelProps {
  children: React.ReactNode;
  variant?: 'default' | 'muted' | 'highlight';
  className?: string;
}

export function Label({ children, variant = 'default', className }: LabelProps) {
  const baseStyles = 'mono-caption inline-flex items-center';
  
  const variants = {
    default: 'bg-highlight-yellow text-black px-2 py-0.5',
    muted: 'text-muted uppercase tracking-wider',
    highlight: 'bg-highlight-yellow text-black px-2 py-0.5',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className || ''}`}>
      {children}
    </span>
  );
}