import { ReactNode, useRef } from 'react';

interface MotionWordProps {
  children: ReactNode;
  variant?: '3d' | 'glow' | 'wave';
  className?: string;
}

export default function MotionWord({ children, variant = '3d', className = '' }: MotionWordProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLSpanElement>) => {
    const node = ref.current;
    if (!node || window.matchMedia('(hover: none)').matches) return;

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    node.style.setProperty('--tilt-x', `${y * -10}deg`);
    node.style.setProperty('--tilt-y', `${x * 12}deg`);
  };

  const handleLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty('--tilt-x', '0deg');
    node.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <span
      ref={ref}
      className={`motion-word motion-word-${variant} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <span className="motion-word-inner">{children}</span>
    </span>
  );
}
