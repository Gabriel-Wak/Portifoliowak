import { services } from '../data/projects';

export default function ServicesSection() {
  return (
    <section className="section-shell section-y">
      <div className="section-inner">
        <h2 className="mega-heading">Transformamos visão em impacto real</h2>
        <p className="body-copy">
          Com criatividade estratégica e foco em resultados, ajudo sua marca a crescer, se destacar
          e alcançar novos patamares.
        </p>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="service-card">
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
          ))}
        </div>
      </div>
    </section>
  );
}
