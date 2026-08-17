import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

/** Linha fina no topo: o progresso real da página. */
export default function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.25 });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: reduced ? 1 : scaleX }}
      aria-hidden="true"
    />
  );
}
