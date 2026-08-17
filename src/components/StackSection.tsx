import { techIcons, techSkills } from '../data/projects';
import FadeUp from '../motion/FadeUp';
import { useTranslation } from '../i18n/useTranslation';

export default function StackSection() {
  const { t } = useTranslation();

  return (
    <section className="stack-ed" aria-labelledby="stack-title">
      <FadeUp>
        <p className="mono-label">{t.stack.label}</p>
        <h2 id="stack-title" className="stack-ed-title">
          {t.stack.title}
        </h2>
        <p className="stack-ed-body">{t.stack.body}</p>
      </FadeUp>

      <div className="stack-ed-grid">
        <FadeUp delay={0.08}>
          <ul className="stack-ed-bars">
            {techSkills.map((skill) => (
              <li key={skill.slug}>
                <div className="stack-ed-meta">
                  <span>{skill.name}</span>
                  <span className="mono-label">{skill.level}%</span>
                </div>
                <div className="stack-ed-track" aria-hidden="true">
                  <span className="stack-ed-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.14}>
          <ul className="stack-ed-icons">
            {techIcons.map((tech) => (
              <li key={tech.slug} title={tech.name}>
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}`}
                  alt=""
                  loading="lazy"
                />
                <span className="mono-label">{tech.name}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
