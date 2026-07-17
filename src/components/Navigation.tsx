import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/contato', label: 'Contato' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="nav-wrap">
        <div className="nav-bar">
          <Link to="/" className="nav-logo" aria-label="Ir para início">
            <span className="nav-logo-frame">
              <img
                src="/logo.png?v=8"
                alt="Gabriel Dev Wak"
                className="nav-logo-img hidden dark:block"
              />
              <img
                src="/logo-light.png?v=8"
                alt="Gabriel Dev Wak"
                className="nav-logo-img dark:hidden"
              />
            </span>
          </Link>

          <nav className="nav-center hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${
                  location.pathname === link.to ? 'nav-link-active' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="nav-menu-btn md:hidden"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          <div
            className="mobile-menu-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <nav className="mobile-panel" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`mobile-link-item ${
                  location.pathname === link.to ? 'mobile-link-active' : 'mobile-link'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mobile-menu-cta">
              <a href="tel:+5515988308477" className="btn-primary w-full">
                (15) 98830-8477
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
