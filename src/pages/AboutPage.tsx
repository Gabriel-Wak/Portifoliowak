import { Code2, Palette, Rocket, Zap } from 'lucide-react';
import TechMarquee from '../components/TechMarquee';

const skills = [
  {
    icon: Code2,
    title: 'Desenvolvimento',
    description: 'React, TypeScript, Node.js, Python, Supabase e APIs modernas.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Interfaces modernas com foco em UX/UI, responsividade e clareza visual.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Projetos rápidos, escaláveis e pensados para uma experiência fluida.',
  },
  {
    icon: Zap,
    title: 'Entrega',
    description: 'Comunicação direta, organização e foco em transformar ideia em produto.',
  },
];

const stats = [
  { label: 'Anos de experiência', value: '1+' },
  { label: 'Projetos concluídos', value: '6+' },
  { label: 'Clientes atendidos', value: '6+' },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-shell pt-28 sm:pt-32">
        <div className="section-inner">
          <p className="eyebrow">Sobre mim</p>
          <h1 className="mega-heading">
            Desenvolvedor Fullstack focado em escalabilidade e alta performance
          </h1>
          <p className="body-copy">
            Desenvolvedor Full Stack interessado em criar soluções digitais que fazem a diferença.
            Construo aplicações web modernas, responsivas e centradas no usuário.
          </p>
        </div>
      </section>

      <TechMarquee />

      <section className="section-shell section-y">
        <div className="section-inner">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="glass-card p-6 sm:p-8 md:p-12">
              <p className="text-lg font-light leading-relaxed text-muted">
                Minha abordagem combina código limpo, design pensado e atenção aos detalhes para
                entregar produtos digitais bonitos, funcionais e acessíveis.
              </p>
              <p className="mt-6 text-lg font-light leading-relaxed text-muted">
                Gosto de transformar ideias em experiências completas: da estratégia visual à
                implementação, sempre buscando performance e clareza.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((stat) => (
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
            {skills.map((skill) => (
              <article key={skill.title} className="service-card">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <skill.icon className="h-6 w-6" />
                </div>
                <h2 className="font-display text-xl font-black uppercase tracking-tight">
                  {skill.title}
                </h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                  {skill.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
