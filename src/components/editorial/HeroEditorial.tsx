import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from '../../i18n/useTranslation';
import { useIntroDelay } from '../../hooks/useIntroDelay';
import Magnetic from '../../motion/Magnetic';
import CountUp from '../../motion/CountUp';
import PixelMascot from './PixelMascot';

export default function HeroEditorial() {
  const { t, localizedProjects } = useTranslation();
  const reduced = useReducedMotion();
  const base = useIntroDelay();
  const lines = t.hero.headline;
  const featured = localizedProjects[0];

  return (
    <section className="hero-ed">
      <div className="hero-ed-inner">
        <motion.p
          className="mono-label hero-ed-eyebrow"
          initial={{ opacity: 0, y: reduced ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: base, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.hero.eyebrow}
        </motion.p>

        <h1 className="hero-ed-title">
          {lines.map((line, index) => (
            <span key={line} className="mask-line">
              <motion.span
                className="mask-line-inner"
                initial={reduced ? { opacity: 0 } : { y: '112%' }}
                animate={reduced ? { opacity: 1 } : { y: '0%' }}
                transition={{
                  duration: reduced ? 0.3 : 1.15,
                  delay: base + 0.06 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.span
          className="hero-ed-rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: reduced ? 0.3 : 1.2, delay: base + 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        />

        <motion.div
          className="hero-ed-bottom"
          initial={{ opacity: 0, y: reduced ? 0 : 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: base + 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="hero-ed-lead">{t.hero.lead}</p>

          <div className="hero-ed-actions">
            <Magnetic>
              <a
                href={featured.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ed"
              >
                {t.hero.ctaProjects}
              </a>
            </Magnetic>
            <Magnetic>
              <Link to="/contato" className="btn-ed btn-ed-ghost">
                {t.hero.ctaContact}
              </Link>
            </Magnetic>
          </div>
        </motion.div>

        <div className="hero-ed-footer">
          <motion.dl
            className="hero-ed-stats"
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: base + 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.stats.map((stat, index) => (
              <div key={stat.label} className="hero-ed-stat">
                <dt className="mono-label">{stat.label}</dt>
                <dd className="hero-ed-stat-value">
                  <CountUp value={stat.value} delay={base + 0.85 + index * 0.12} />
                </dd>
              </div>
            ))}
          </motion.dl>

          <PixelMascot delay={base + 0.35} />
        </div>
      </div>
    </section>
  );
}
