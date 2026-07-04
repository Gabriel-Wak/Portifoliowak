import { Link } from 'react-router-dom';
import { FolderOpen } from 'lucide-react';
import FloatingProjects from '../components/FloatingProjects';
import TechMarquee from '../components/TechMarquee';
import ProjectShowcase from '../components/ProjectShowcase';
import CTASection from '../components/CTASection';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <FloatingProjects />

          <div className="hero-content">
            <h1 className="hero-title">
              <span>Experiência</span>
              <span className="digital-word relative inline-block">
                <span className="masked-text">Digital</span>
                <img
                  src="/boneco.png"
                  alt="Boneco ninja"
                  className="hero-mascot"
                />
              </span>
              <span>Excepcional</span>
            </h1>

            <p className="hero-subtitle">
              Especializado em criar soluções digitais completas com React, Node.js e TypeScript.{' '}
              <span className="whitespace-nowrap">
                Confira meus{' '}
                <Link to="/projetos" className="inline-link">
                  <FolderOpen className="h-5 w-5" />
                  <span>projetos</span>
                </Link>
              </span>
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:hidden">
              <a href="tel:+5515988308477" className="btn-outline px-4 py-2">
                (15) 98830-8477
              </a>
              <a
                href="https://www.linkedin.com/in/gabrielhenriquewak/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-4 py-2"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Gabriel-Wak"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-4 py-2"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <TechMarquee />

      <section className="section-shell section-y">
        <div className="section-inner">
          <p className="eyebrow">Sobre mim</p>
          <h2 className="mega-heading">
            Desenvolvedor Fullstack focado em escalabilidade e alta performance
          </h2>
          <p className="body-copy">
            Desenvolvedor Full Stack com experiência em criar soluções digitais completas.
            Especialista em aplicações web modernas com foco em clean code e entregas ágeis.
          </p>
          <div className="mt-8 text-center">
            <Link to="/sobre" className="btn-outline">
              Saiba mais
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="section-inner">
          <ProjectShowcase projects={projects} limit={4} />
          <div className="mt-12 text-center">
            <Link to="/projetos" className="btn-primary">
              Ver todos os projetos
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <ServicesSection />
      <FAQSection />
    </>
  );
}
