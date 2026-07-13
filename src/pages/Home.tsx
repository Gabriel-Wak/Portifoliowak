import { Link } from 'react-router-dom';
import { FolderOpen } from 'lucide-react';
import DigitalText from '../components/DigitalText';
import FloatingProjects from '../components/FloatingProjects';
import MobileProjectStrip from '../components/MobileProjectStrip';
import HeroBackground from '../components/HeroBackground';
import MotionWord from '../components/MotionWord';
import TechMarquee from '../components/TechMarquee';
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
            <h1 className="hero-title">
              <MotionWord variant="3d">
                <span className="hero-line">Experiência</span>
              </MotionWord>
              <span className="digital-word relative inline-block">
                <DigitalText />
                <img
                  src="/boneco.png"
                  alt="Boneco ninja"
                  className="hero-mascot"
                />
              </span>
              <MotionWord variant="glow">
                <span className="hero-line">Excepcional</span>
              </MotionWord>
            </h1>

            <p className="hero-subtitle">
              Especializado em criar soluções digitais completas com React, Node.js e TypeScript.{' '}
              <span className="whitespace-normal sm:whitespace-nowrap">
                Confira meus{' '}
                <Link to="/projetos" className="inline-link">
                  <FolderOpen className="h-5 w-5" />
                  <span>projetos</span>
                </Link>
              </span>
            </p>

            <MobileProjectStrip />

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
            <div className="mt-12 text-center">
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
