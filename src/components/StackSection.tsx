import { techIcons, techSkills } from '../data/projects';
import ScrollReveal from './ScrollReveal';
import { useTranslation } from '../i18n/useTranslation';

export default function StackSection() {
  const { t } = useTranslation();

  return (
    <section className="accent-block stack-section section-shell section-diagonal-both">
      <div className="section-inner relative z-10">
        <ScrollReveal variant="scale">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <p className="code-label">{t.stack.label}</p>
            <p className="code-label">{t.stack.aside}</p>
          </div>
          <h2 className="section-heading max-w-4xl">{t.stack.title}</h2>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed sm:text-base">
            {t.stack.body}
          </p>
          <p className="mt-6 font-mono text-xs leading-relaxed opacity-80 sm:text-sm">
            {t.stack.note}
          </p>
        </ScrollReveal>

        <div className="stack-layout mt-10 md:mt-14">
          <ScrollReveal delay={80}>
            <ul className="stack-bars">
              {techSkills.map((skill) => (
                <li key={skill.slug} className="stack-bar-item">
                  <div className="stack-bar-meta">
                    <span className="stack-bar-name">
                      <span aria-hidden="true">▸ </span>
                      {skill.name}
                    </span>
                    <span className="stack-bar-level">{skill.level}%</span>
                  </div>
                  <div className="stack-bar-track" aria-hidden="true">
                    <span className="stack-bar-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={140} variant="scale">
            <div className="stack-icons">
              {techIcons.map((tech) => (
                <div key={tech.slug} className="stack-icon-card" title={tech.name}>
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}`}
                    alt=""
                    className="stack-icon-img"
                    loading="lazy"
                  />
                  <span className="stack-icon-label">{tech.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
