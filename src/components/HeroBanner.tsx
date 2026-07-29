import { Link } from 'react-router-dom';
import DigitalText from './DigitalText';
import { useTranslation } from '../i18n/useTranslation';

export default function HeroBanner() {
  const { t } = useTranslation();

  return (
    <section className="hero-banner section-shell">
      <div className="hero-banner-glow" aria-hidden="true" />
      <div className="hero-banner-inner section-inner">
        <div className="hero-banner-copy">
          <p className="code-label hero-enter hero-enter-1">{t.hero.eyebrow}</p>
          <h1 className="hero-banner-title hero-enter hero-enter-2">
            <span className="block">{t.hero.line1}</span>
            <span className="block">
              {t.hero.line2Before} <DigitalText />
            </span>
          </h1>
          <p className="hero-banner-lead hero-enter hero-enter-3">{t.hero.lead}</p>
          <div className="hero-banner-actions hero-enter hero-enter-4">
            <Link to="/projetos" className="btn-primary">
              {t.hero.ctaProjects}
            </Link>
            <Link to="/contato" className="btn-terminal">
              {t.hero.ctaContact}
            </Link>
          </div>
        </div>

        <div className="hero-banner-visual hero-enter hero-enter-5" aria-hidden="true">
          <span className="hero-blob hero-blob-glow" />
          <span className="hero-blob hero-blob-a" />
          <span className="hero-blob hero-blob-b" />
          <span className="hero-blob hero-blob-c" />
          <img
            src="/boneco.png"
            alt=""
            className="hero-banner-mascot"
            width={360}
            height={480}
            decoding="sync"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
