import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Guia TFT para iniciantes',
      description: 'Projeto onde criei para mostrar um pouco sobre o game, itens, campeons e como jogar',
      image: 'https://i.postimg.cc/HnVt2BP9/1.webp',
      tags: ['React', 'Node.js', 'Supabase', 'Vite'],
      gradient: 'from-cyan-500 to-blue-500',
      githubLink: 'https://github.com/Gabriel-Wak/tftwak',
      projectLink: 'https://gabriel-wak.github.io/tftwak/',
    },
    {
      title: 'TraduzPro',
      description: 'O projeto permite traduzir textos entre diferentes idiomas de forma rápida, além de contar com recursos como copiar texto, ouvir a tradução e inverter idiomas.',
      image: 'https://i.postimg.cc/brs7KXvT/2.webp',
      tags: ['React', 'Tailwind'],
      gradient: 'from-emerald-500 to-cyan-500',
      githubLink: 'https://github.com/Gabriel-Wak/traduzpro',
      projectLink: 'https://traduzpro.vercel.app',
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projetos Destaque
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, cada um com seu desafio único e solução inovadora.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-emerald-500/0 group-hover:from-cyan-500/5 group-hover:to-emerald-500/5 transition-all duration-500"></div>

              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-xs font-semibold text-white shadow-lg`}>
                  Destaque
                </div>
              </div>

              <div className="relative p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group/btn"
                  >
                    <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Código</span>
                  </a>

                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg text-gray-950 font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="text-sm">Ver Projeto</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}