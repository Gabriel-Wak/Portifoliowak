import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { projects } from '../data/projects';

export default function CTASection() {
  const featured = projects[0];

  return (
    <section className="section-shell section-y">
      <div className="section-inner grid items-center gap-10 lg:grid-cols-2">
        <a
          href={featured.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card hidden lg:block"
        >
          <div className="project-shot">
            <img src={featured.image} alt={`Preview do projeto ${featured.title}`} />
          </div>
          <div className="project-title">
            <h3>{featured.title}</h3>
          </div>
          <p className="project-description">{featured.description}</p>
        </a>

        <div className="glass-card p-8 md:p-14">
          <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl">
            Gostou dos projetos?
          </h2>
          <p className="mt-6 max-w-xl font-light leading-relaxed text-muted">
            Explore meu portfólio e descubra o que podemos alcançar juntos. Vamos criar algo extraordinário.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contato" className="btn-primary gap-2">
              <Phone className="h-4 w-4" />
              Entre em contato
            </Link>
            <Link to="/projetos" className="btn-outline">
              Projetos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
