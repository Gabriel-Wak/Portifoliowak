import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-cyan-950/10 to-transparent"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 p-1">
             <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="https://cdn.discordapp.com/attachments/1483900990473375754/1483905433562517544/10f7a72e-e52e-4ea7-b273-3792f32d0ed8.jpg?ex=69bc4a20&is=69baf8a0&hm=5382169f0a7fc0b93a436b9f31740d2c21f0435049bc642e51a8ccc44491ece8&/sua-foto.jpg" // coloca o caminho da sua imagem aqui
                alt="Minha foto"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Desenvolvedor
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
            Full Stack
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Criador de sites e sistemas digitais únicas com código limpo, design moderno e tecnologicos.
          Transformo ideias em produtos excepcionais.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold text-gray-950 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">Entre em Contato</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border border-cyan-500/30 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
          >
            Ver Projetos
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Gabriel-Wak"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-henrique-1578b6331/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a
            href="mailto:gabrieltrabalho199@gmail.com"
            className="group p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300"
          >
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-all duration-300 animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
