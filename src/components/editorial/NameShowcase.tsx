import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { useTranslation } from '../../i18n/useTranslation';

const PORTRAIT_VIDEO: string | null = null;
const PORTRAIT_IMAGE = '/foto.webp';

/**
 * Assinatura: o nome se abre, o retrato cresce e o recorte se desfaz no scroll.
 */
export default function NameShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });
  const frameScale = useTransform(smooth, [0.1, 0.5, 0.9], [0.78, 1, 0.9]);
  const yTop = useTransform(smooth, [0.05, 0.5], [48, -28]);
  const yBottom = useTransform(smooth, [0.05, 0.5], [-48, 28]);
  const clip = useTransform(smooth, [0.12, 0.48], ['inset(18%)', 'inset(0%)']);
  const imgY = useTransform(smooth, [0, 1], [-30, 30]);

  return (
    <section className="name-show" ref={ref}>
      <div className="name-show-inner">
        <motion.h2
          className="name-show-word"
          style={reduced ? undefined : { y: yTop }}
        >
          {t.nameShowcase.first}
        </motion.h2>

        <motion.div
          className="name-show-frame"
          style={reduced ? undefined : { scale: frameScale, clipPath: clip }}
        >
          {PORTRAIT_VIDEO ? (
            <video src={PORTRAIT_VIDEO} muted loop autoPlay playsInline />
          ) : (
            <motion.img
              src={PORTRAIT_IMAGE}
              alt={t.nameShowcase.alt}
              loading="lazy"
              decoding="async"
              style={reduced ? undefined : { y: imgY }}
            />
          )}
          <span className="name-show-badge mono-label">{t.nameShowcase.badge}</span>
        </motion.div>

        <motion.h2
          className="name-show-word name-show-word-last"
          style={reduced ? undefined : { y: yBottom }}
        >
          {t.nameShowcase.last}
        </motion.h2>

        <div className="name-show-meta">
          <p className="name-show-bio">{t.nameShowcase.bio}</p>
          <Link to="/sobre" className="link-ed">
            {t.nameShowcase.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
