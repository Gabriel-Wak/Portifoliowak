import { Link } from 'react-router-dom';
import { FolderOpen } from 'lucide-react';
import FloatingProjects from '../components/FloatingProjects';
import HeroBackground from '../components/HeroBackground';
import HeroHeading from '../components/HeroHeading';
import TechMarquee from '../components/TechMarquee';
import TechFloatBg from '../components/TechFloatBg';
import ProjectShowcase from '../components/ProjectShowcase';
import CTASection from '../components/CTASection';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import ScrollReveal from '../components/ScrollReveal';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeroBackground />
        <div className="hero-inner">
          <FloatingProjects />

          <div className="hero-content">
            <HeroHeading />

            <p className="hero-subtitle">
              Especializado em criar soluções digitais completas com React, Node.js e TypeScript.
              <br className="hidden sm:block" />{' '}
              Confira meus{' '}
              <Link to="/projetos" className="inline-link">
                <FolderOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>projetos</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <TechMarquee />

      <section className="about-preview section-shell section-y">
        <TechFloatBg />
        <div className="section-inner relative z-10">
          <ScrollReveal>
            <p className="eyebrow">Sobre mim</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mega-heading">
              Desenvolvedor Fullstack focado em{' '}
              <span className="text-shimmer">escalabilidade</span> e alta performance
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="body-copy">
              Desenvolvedor Full Stack com experiência em criar soluções digitais completas.
              Especialista em aplicações web modernas com foco em clean code e entregas ágeis.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <div className="mt-8 text-center">
              <Link to="/sobre" className="btn-outline">
                Saiba mais
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="section-inner">
          <ProjectShowcase projects={projects} limit={4} />
          <ScrollReveal delay={120}>
            <div className="mt-10 text-center md:mt-12">
              <Link to="/projetos" className="btn-primary">
                Ver todos os projetos
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      <ServicesSection />
      <FAQSection />
    </>
  );
}
