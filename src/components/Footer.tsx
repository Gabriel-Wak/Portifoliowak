import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Clientes', href: '#clients' },
    { label: 'Formação', href: '#education' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800/50 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Gabriel Henrique
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Desenvolvedor Full Stack especializado em criar experiências digitais excepcionais.
              Transformando ideias em realidade através de código limpo e design elegante.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Gabriel-Wak"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-henrique-1578b6331/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="mailto:gabrieltrabalho199@gmail.com"
                className="group p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="mailto:gabrieltrabalho199@gmail.com" className="hover:text-cyan-400 transition-colors">
                  gabrieltrabalho199@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+5515988308477" className="hover:text-cyan-400 transition-colors">
                  +55 (15) 988308477
                </a>
              </li>
              <li>Sorocaba, São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
    
            </p>
            <button
              onClick={scrollToTop}
              className="group p-3 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5 text-cyan-400 group-hover:translate-y-[-2px] transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
