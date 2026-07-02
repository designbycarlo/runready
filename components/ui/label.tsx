interface LabelProps {
  children: React.ReactNode;
  variant?: 'default' | 'muted';
  className?: string;
}

export function Label({ children, variant = 'default', className }: LabelProps) {
  const baseStyles = 'inline-flex items-center';
  
  const variants = {
    default: 'mono-caption',
    muted: 'mono-caption-muted',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className || ''}`}>
      {children}
    </span>
  );
}
