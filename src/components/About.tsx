import { Code2, Palette, Rocket, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Desenvolvimento',
      description: 'React, TypeScript, Node.js, Python.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Interfaces elegantes e intuitivas com foco em UX/UI, acessibilidade e experiência do usuário.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: '',
    },
    {
      icon: Zap,
      title: 'Inovação',
      description: 'Sempre atualizado com as últimas tendências e tecnologias emergentes do mercado.',
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Desenvolvedor Full Stack iniciante e interessado em criar soluções digitais que fazem a diferença.
                especializo-me em construir aplicações web modernas,
                escaláveis e centradas no usuário.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Minha abordagem combina código limpo, design pensado e atenção aos detalhes para entregar
                produtos excepcionais que superam expectativas. Acredito que tecnologia deve ser elegante,
                funcional e acessível.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Anos de Experiência', value: '1+' },
              { label: 'Projetos Concluídos', value: '6+' },
              { label: 'Clientes Satisfeitos', value: '6+' },
              
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
