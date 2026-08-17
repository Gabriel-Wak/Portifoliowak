import TechMarquee from '../components/TechMarquee';
import MaskLines from '../motion/MaskLines';
import FadeUp from '../motion/FadeUp';
import { useTranslation } from '../i18n/useTranslation';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="page-head">
        <p className="mono-label">{t.about.label}</p>
        <MaskLines
          as="h1"
          className="page-head-title"
          lines={t.about.titleLines}
          stagger={0.08}
          immediate
        />
        <FadeUp delay={0.25} immediate>
          <p className="page-head-lead">{t.about.intro}</p>
        </FadeUp>
      </section>

      <TechMarquee />

      <section className="about-ed">
        <div className="about-ed-grid">
          <FadeUp className="about-ed-copy">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </FadeUp>

          <FadeUp delay={0.12} className="about-ed-portrait">
            <img src="/foto.webp" alt={t.nameShowcase.alt} loading="lazy" decoding="async" />
            <span className="mono-label about-ed-portrait-cap">{t.nameShowcase.badge}</span>
          </FadeUp>
        </div>

        <dl className="about-ed-stats">
          {t.about.stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.08}>
              <div className="about-ed-stat">
                <dt className="mono-label">{stat.label}</dt>
                <dd className="about-ed-stat-value">{stat.value}</dd>
              </div>
            </FadeUp>
          ))}
        </dl>
      </section>

      <section className="about-ed about-ed-skills">
        <p className="mono-label">{t.about.skillsLabel}</p>
        <ol className="skill-rows">
          {t.about.skills.map((skill, index) => (
            <FadeUp key={skill.title} delay={index * 0.06}>
              <li className="skill-row">
                <span className="mono-label skill-row-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="skill-row-title">{skill.title}</h2>
                <p className="skill-row-body">{skill.description}</p>
              </li>
            </FadeUp>
          ))}
        </ol>
      </section>
    </>
  );
}
