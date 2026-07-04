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
              className="md:hidden p-2 rounded-full"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="mobile-panel absolute top-20 left-4 right-4 rounded-2xl border p-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 px-4 rounded-xl text-sm font-medium ${
                  location.pathname === link.to ? 'mobile-link-active' : 'mobile-link'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
