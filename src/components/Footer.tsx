import { Link } from 'react-router-dom';
import { Github, Linkedin, Phone } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function Footer() {
  const { t } = useTranslation();

  const links = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.about, to: '/sobre' },
    { label: t.nav.projects, to: '/projetos' },
    { label: t.nav.contact, to: '/contato' },
  ];

  return (
    <footer className="footer section-shell section-y">
      <div className="section-inner">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
          <div>
            <p className="code-label mb-2">{t.footer.label}</p>
            <p className="font-display text-2xl uppercase tracking-tight sm:text-3xl">
              Gabriel <span className="text-[var(--accent)]">%</span> Dev
            </p>
          </div>
          <p className="font-mono text-xs text-muted sm:text-sm">{t.footer.tagline}</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-xl uppercase tracking-tight sm:text-2xl">
              {t.footer.heading}
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
              <a
                href="tel:+5515988308477"
                className="contact-dot static"
                aria-label={t.footer.phone}
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {t.footer.quickLinks}
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
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {t.footer.contact}
            </h3>
            <ul className="space-y-2 font-mono text-sm text-muted">
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
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
