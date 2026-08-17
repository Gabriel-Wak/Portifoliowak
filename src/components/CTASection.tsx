import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/useTranslation';
import FadeUp from '../motion/FadeUp';

export default function CTASection() {
  const { t, localizedProjects } = useTranslation();
  const featured = localizedProjects.find((project) => project.featured) ?? localizedProjects[0];

  return (
    <section className="cta-ed" aria-labelledby="cta-title">
      <FadeUp className="cta-ed-copy">
        <p className="mono-label">{t.cta.label}</p>
        <h2 id="cta-title" className="cta-ed-title">
          {t.cta.title}
        </h2>
        <p className="cta-ed-body">{t.cta.body}</p>
        <div className="cta-ed-actions">
          <Link to="/contato" className="btn-ed">
            {t.cta.contact}
          </Link>
          <Link to="/projetos" className="btn-ed btn-ed-ghost">
            {t.cta.projects}
          </Link>
        </div>
      </FadeUp>

      <FadeUp delay={0.1} className="cta-ed-stage">
        <a
          href={featured.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-ed-frame"
        >
          {featured.role === 'owner' ? (
            <span className="project-role-badge">{t.projectMeta.owner}</span>
          ) : null}
          <img
            src={featured.image}
            alt={`${t.cta.previewAlt} ${featured.title}`}
            loading="lazy"
            decoding="async"
            width={960}
            height={600}
          />
        </a>
        <p className="cta-ed-caption mono-label">{featured.title}</p>
      </FadeUp>
    </section>
  );
}
