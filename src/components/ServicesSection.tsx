import { services } from '../data/projects';
import ScrollReveal from './ScrollReveal';

export default function ServicesSection() {
  return (
    <section className="section-shell section-y">
      <div className="section-inner">
        <ScrollReveal>
          <h2 className="mega-heading">
            Transformamos <span className="text-shimmer">visão</span> em impacto real
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="body-copy">
            Com criatividade estratégica e foco em resultados, ajudo sua marca a crescer, se destacar
            e alcançar novos patamares.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 80} variant="scale">
              <article className="service-card card-3d h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--accent-soft)] font-semibold text-[var(--accent)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-lg font-black uppercase tracking-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm font-light leading-relaxed text-muted">{service.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
