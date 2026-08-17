import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  immediate?: boolean;
}

export default function FadeUp({
  children,
  className = '',
  delay = 0,
  distance = 22,
  immediate = false,
}: FadeUpProps) {
  const reduced = useReducedMotion();
  const target = { opacity: 1, y: 0 };
  const trigger = immediate
    ? { animate: target }
    : { whileInView: target, viewport: { once: true, margin: '0px 0px -8% 0px' } };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : distance }}
      {...trigger}
      transition={{ duration: reduced ? 0.3 : 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
