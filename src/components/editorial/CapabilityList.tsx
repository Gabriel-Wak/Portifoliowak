import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useTranslation } from '../../i18n/useTranslation';

const CAPABILITY_MEDIA: { src: string; type: 'image' | 'video'; badge?: 'owner' }[] = [
  { src: '/alemaozinho.png', type: 'image' },
  { src: '/quintas.png', type: 'image' },
  { src: '/nextclinic.png', type: 'image', badge: 'owner' },
  { src: '/barbe.png', type: 'image' },
];

export default function CapabilityList() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const items = t.capabilities.items;
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  const fillScale = useTransform(fill, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const next = Math.min(items.length - 1, Math.max(0, Math.floor(value * items.length)));
    setActive((current) => (current === next ? current : next));
  });

  const media = CAPABILITY_MEDIA[active] ?? CAPABILITY_MEDIA[0];

  return (
    <section
      className="cap"
      ref={ref}
      style={{ height: `calc(${items.length} * var(--cap-step, 100svh))` }}
      aria-label={t.capabilities.title}
    >
      <div className="cap-sticky">
        <div className="cap-head">
          <p className="mono-label">{t.capabilities.label}</p>
          <h2 className="cap-title">{t.capabilities.title}</h2>
        </div>

        <div className="cap-body">
          <div className="cap-list-wrap">
            <span className="cap-progress" aria-hidden="true">
              <motion.span className="cap-progress-fill" style={{ scaleY: fillScale }} />
            </span>
            <ol className="cap-list">
              {items.map((item, index) => (
                <motion.li
                  key={item.title}
                  className={`cap-item ${index === active ? 'is-active' : ''}`}
                  aria-current={index === active ? 'step' : undefined}
                  animate={{
                    x: index === active ? 10 : 0,
                    opacity: index === active ? 1 : 0.32,
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="cap-index mono-label">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="cap-item-title">{item.title}</span>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="cap-panel">
            <div className="cap-media">
              <AnimatePresence mode="wait">
                <motion.div
                  key={media.src}
                  className="cap-media-frame"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                  animate={reduced ? { opacity: 1 } : { opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                >
                  {media.badge === 'owner' ? (
                    <span className="project-role-badge">{t.projectMeta.owner}</span>
                  ) : null}
                  {media.type === 'video' ? (
                    <video src={media.src} muted loop autoPlay playsInline />
                  ) : (
                    <motion.img
                      src={media.src}
                      alt={media.badge === 'owner' ? 'NextClinic.ai' : ''}
                      loading="lazy"
                      decoding="async"
                      className={media.badge === 'owner' ? 'is-product' : undefined}
                      initial={{ scale: 1.12 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.ul
                key={items[active].title}
                className="cap-tags"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {items[active].details.map((detail, index) => (
                  <motion.li
                    key={detail}
                    className="mono-label"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + index * 0.06, duration: 0.35 }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
