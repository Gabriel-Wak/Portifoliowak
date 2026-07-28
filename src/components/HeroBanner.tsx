import { Link } from 'react-router-dom';
import DigitalText from './DigitalText';

export default function HeroBanner() {
  return (
    <section className="hero-banner section-shell">
      <div className="hero-banner-inner section-inner">
        <div className="hero-banner-copy">
          <p className="code-label">Full Stack • React • Node • TypeScript</p>
          <h1 className="hero-banner-title">
            <span className="block">Developer</span>
            <span className="block">
              Full Stack &amp; <DigitalText />
            </span>
          </h1>
          <p className="hero-banner-lead">
            Interfaces, APIs e produtos digitais — com clean code, performance e foco em resultado.
          </p>
          <div className="hero-banner-actions">
            <Link to="/projetos" className="btn-primary">
              Ver projetos →
            </Link>
            <Link to="/contato" className="btn-terminal">
              &gt;_ Contato
            </Link>
          </div>
        </div>

        <div className="hero-banner-visual" aria-hidden="true">
          <span className="hero-orb-ring hero-orb-ring-a" />
          <span className="hero-orb-ring hero-orb-ring-b" />
          <span className="hero-orb-ring hero-orb-ring-c" />
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
