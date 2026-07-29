import { Code2, Palette, Rocket, Zap } from 'lucide-react';
import TechMarquee from '../components/TechMarquee';
import { useTranslation } from '../i18n/useTranslation';

const skillIcons = [Code2, Palette, Rocket, Zap];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="section-shell pt-28 sm:pt-32">
        <div className="section-inner">
          <p className="code-label mb-3 text-center">{t.about.label}</p>
          <h1 className="mega-heading">{t.about.title}</h1>
          <p className="body-copy">{t.about.intro}</p>
        </div>
      </section>

      <TechMarquee />

      <section className="section-shell section-y">
        <div className="section-inner">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="glass-card p-6 sm:p-8 md:p-12">
              <p className="text-lg font-light leading-relaxed text-muted">{t.about.p1}</p>
              <p className="mt-6 text-lg font-light leading-relaxed text-muted">{t.about.p2}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {t.about.stats.map((stat) => (
                <div key={stat.label} className="glass-card p-6 text-center">
                  <div className="font-display text-5xl font-black text-[var(--accent)]">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm font-light text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.skills.map((skill, index) => {
              const Icon = skillIcons[index] ?? Code2;
              return (
                <article key={skill.title} className="service-card">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-display text-xl font-black uppercase tracking-tight">
                    {skill.title}
                  </h2>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                    {skill.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
