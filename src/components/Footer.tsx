import { Link } from 'react-router-dom';
import { Github, Linkedin, Phone } from 'lucide-react';

const links = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Contato', to: '/contato' },
];

export default function Footer() {
  return (
    <footer className="footer section-shell section-y">
      <div className="section-inner">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
              Ajuda a crescer & destacar
            </h2>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/Gabriel-Wak"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-dot static"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabrielhenriquewak/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-dot static"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="tel:+5515988308477" className="contact-dot static" aria-label="Telefone">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Links Rápidos
            </h3>
            <div className="flex flex-wrap gap-2">
              {links.map((link) => (
                <Link key={link.to} to={link.to} className="btn-outline px-4 py-2">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Contato
            </h3>
            <ul className="space-y-2 text-sm font-light text-muted">
              <li>
                <a href="tel:+5515988308477" className="hover:text-[var(--accent)]">
                  (15) 98830-8477
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gabrielhenriquewak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Gabriel-Wak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)]"
                >
                  GitHub
                </a>
              </li>
              <li>Sorocaba - SP</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
