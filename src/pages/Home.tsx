import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import TechMarquee from '../components/TechMarquee';
import TechFloatBg from '../components/TechFloatBg';
import ProjectShowcase from '../components/ProjectShowcase';
import CTASection from '../components/CTASection';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import ScrollReveal from '../components/ScrollReveal';
import { projects, techStack } from '../data/projects';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <TechMarquee />

      <section className="about-preview section-shell section-y">
        <TechFloatBg />
        <div className="section-inner relative z-10">
          <ScrollReveal>
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="code-label">{'/* um pouco sobre mim */'}</p>
              <p className="code-label hidden sm:block">quem está por trás do código</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mega-heading text-left">
              Quem está por trás do{' '}
              <span className="text-shimmer">código</span>.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="body-copy mx-0 max-w-3xl text-left">
              Desenvolvedor Full Stack com experiência em criar soluções digitais completas.
              Especialista em aplicações web modernas com foco em clean code, escalabilidade e
              entregas ágeis.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.slice(0, 8).map((tech) => (
                <span key={tech.slug} className="stack-pill">
                  {tech.name}
                </span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <div className="mt-8">
              <Link to="/sobre" className="btn-outline">
                Saiba mais
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="accent-block section-shell section-y">
        <div className="section-inner">
          <ScrollReveal>
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="code-label">{'/* projetos que construí */'}</p>
              <p className="code-label">{projects.length} no total</p>
            </div>
            <h2 className="section-heading max-w-4xl">
              Onde front-end, back-end e produto se encontram.
            </h2>
            <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed sm:text-base">
              Cada projeto abaixo resolve um problema real — presença digital, conversão ou
              experiência.
            </p>
          </ScrollReveal>
          <div className="mt-10 md:mt-14">
            <ProjectShowcase projects={projects} limit={4} />
          </div>
          <ScrollReveal delay={120}>
            <div className="mt-10 text-center md:mt-12">
              <Link to="/projetos" className="btn-block-invert">
                Ver todos os projetos
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ServicesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
