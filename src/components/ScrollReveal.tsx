import { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'scale' | 'left' | 'right';
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
}: ScrollRevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
