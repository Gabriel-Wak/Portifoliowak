import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';
import FadeUp from '../../motion/FadeUp';

export default function FeaturedSpotlight() {
  const { t, localizedProjects } = useTranslation();
  const reduced = useReducedMotion();
  const featured = localizedProjects.find((project) => project.featured) ?? localizedProjects[0];
  const copy = t.featured;

  return (
    <section className="spot" aria-labelledby="spot-title">
      <div className="spot-glow" aria-hidden="true" />

      <div className="spot-grid">
        <FadeUp className="spot-copy">
          <p className="mono-label">{copy.label}</p>
          <p className="spot-kicker">{copy.kicker}</p>
          <h2 id="spot-title" className="spot-title">
            {copy.title}
          </h2>
          <p className="spot-body">{copy.body}</p>
          <a
            href={featured.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ed"
          >
            {copy.cta}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <p className="spot-credit mono-label">{copy.credit}</p>
        </FadeUp>

        <FadeUp delay={0.12} className="spot-stage">
          <a
            href={featured.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="spot-frame"
          >
            <span className="project-role-badge">{t.projectMeta.owner}</span>
            <motion.img
              src={featured.image}
              alt={copy.imageAlt}
              loading="lazy"
              decoding="async"
              width={1280}
              height={800}
              initial={reduced ? undefined : { scale: 1.08, y: 24 }}
              whileInView={reduced ? undefined : { scale: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
