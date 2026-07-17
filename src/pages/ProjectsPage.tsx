import CTASection from '../components/CTASection';
import ProjectShowcase from '../components/ProjectShowcase';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <>
      <section className="section-shell pt-28 sm:pt-32">
        <div className="section-inner">
          <p className="eyebrow">Portfólio</p>
          <h1 className="mega-heading">Projetos</h1>
          <p className="body-copy">
            Uma seleção de trabalhos recentes, cada um com um desafio específico e uma solução
            pensada para conversão, experiência e performance.
          </p>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="section-inner">
          <ProjectShowcase projects={projects} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
