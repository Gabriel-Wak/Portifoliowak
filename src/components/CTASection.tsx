import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';
import ScrollReveal from './ScrollReveal';

export default function CTASection() {
  const { t, localizedProjects } = useTranslation();
  const featured = localizedProjects[0];

  return (
    <section className="accent-block section-shell section-diagonal-both">
      <div className="section-inner grid items-center gap-10 lg:grid-cols-2">
        <ScrollReveal variant="left">
          <p className="code-label mb-3">{t.cta.label}</p>
          <h2 className="section-heading">{t.cta.title}</h2>
          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed sm:text-base">
            {t.cta.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contato" className="btn-block-invert gap-2">
              <Phone className="h-4 w-4" />
              {t.cta.contact}
            </Link>
            <Link to="/projetos" className="btn-block-outline">
              {t.cta.projects}
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120} variant="scale">
          <a
            href={featured.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card hidden border-[var(--accent-block-text)]/20 lg:block"
          >
            <div className="project-shot">
              <img
                src={featured.image}
                alt={`${t.cta.previewAlt} ${featured.title}`}
              />
            </div>
            <div className="project-title">
              <h3>{featured.title}</h3>
            </div>
            <p className="project-description">{featured.description}</p>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
