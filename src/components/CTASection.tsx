import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { projects } from '../data/projects';

export default function CTASection() {
  const featured = projects[0];

  return (
    <section className="accent-block section-shell section-y">
      <div className="section-inner grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="code-label mb-3">contato · fale comigo</p>
          <h2 className="section-heading">Vamos trabalhar juntos?</h2>
          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed sm:text-base">
            Tem um projeto em mente? Vamos conversar sobre como transformar sua ideia em uma
            experiência digital de impacto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contato" className="btn-block-invert gap-2">
              <Phone className="h-4 w-4" />
              Entre em contato
            </Link>
            <Link to="/projetos" className="btn-block-outline">
              Projetos
            </Link>
          </div>
        </div>

        <a
          href={featured.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card hidden border-[var(--accent-block-text)]/20 lg:block"
        >
          <div className="project-shot">
            <img src={featured.image} alt={`Preview do projeto ${featured.title}`} />
          </div>
          <div className="project-title">
            <h3>{featured.title}</h3>
          </div>
          <p className="project-description">{featured.description}</p>
        </a>
      </div>
    </section>
  );
}
