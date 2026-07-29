import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import TechMarquee from '../components/TechMarquee';
import TechFloatBg from '../components/TechFloatBg';
import ProjectShowcase from '../components/ProjectShowcase';
import CTASection from '../components/CTASection';
import StackSection from '../components/StackSection';
import FAQSection from '../components/FAQSection';
import ScrollReveal from '../components/ScrollReveal';
import { techStack } from '../data/projects';
import { useTranslation } from '../i18n/useTranslation';

export default function Home() {
  const { t, localizedProjects } = useTranslation();

  return (
    <>
      <HeroBanner />
      <TechMarquee />

      <section className="about-preview section-shell section-y">
        <TechFloatBg />
        <div className="section-inner relative z-10">
          <div className="about-home-layout">
            <div className="about-home-copy">
              <ScrollReveal>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <p className="code-label">{t.homeAbout.label}</p>
                  <p className="code-label hidden sm:block lg:hidden">{t.homeAbout.aside}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="mega-heading text-left">
                  {t.homeAbout.titleBefore}{' '}
                  <span className="text-shimmer">{t.homeAbout.titleAccent}</span>.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p className="body-copy mx-0 max-w-3xl text-left">{t.homeAbout.body}</p>
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
                    {t.homeAbout.more}
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={120} variant="scale" className="about-home-stats">
              <p className="code-label mb-4 hidden lg:block">{t.homeAbout.aside}</p>
              <div className="about-stats-grid">
                {t.about.stats.map((stat) => (
                  <div key={stat.label} className="about-stat-card">
                    <div className="about-stat-value">{stat.value}</div>
                    <p className="about-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="accent-block accent-space section-shell section-y">
        <div className="section-inner relative z-10">
          <ScrollReveal>
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="code-label">{t.homeProjects.label}</p>
              <p className="code-label">
                {localizedProjects.length} {t.homeProjects.total}
              </p>
            </div>
            <h2 className="section-heading max-w-4xl">{t.homeProjects.title}</h2>
            <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed sm:text-base">
              {t.homeProjects.body}
            </p>
          </ScrollReveal>
          <div className="mt-10 md:mt-14">
            <ProjectShowcase projects={localizedProjects} limit={4} />
          </div>
          <ScrollReveal delay={80}>
            <div className="mt-10 text-center md:mt-12">
              <Link to="/projetos" className="btn-block-invert">
                {t.homeProjects.viewAll}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <StackSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
