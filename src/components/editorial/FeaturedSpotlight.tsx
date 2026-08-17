import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';
import FadeUp from '../../motion/FadeUp';
import ProjectMedia from '../ProjectMedia';

export default function FeaturedSpotlight() {
  const { t, localizedProjects } = useTranslation();
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
            <ProjectMedia
              image={featured.image}
              previewImage={featured.previewImage}
              alt={copy.imageAlt}
              accessLabel={t.projectMeta.access}
              width={1280}
              height={800}
              badge={<span className="project-role-badge">{t.projectMeta.owner}</span>}
            />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
