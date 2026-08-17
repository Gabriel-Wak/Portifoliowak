import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import OpenToWorkBadge from './OpenToWorkBadge';
import { useTranslation } from '../i18n/useTranslation';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/sobre', label: t.nav.about },
    { to: '/projetos', label: t.nav.projects },
    { to: '/contato', label: t.nav.contact },
  ];

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
          <Link to="/" className="nav-wordmark" aria-label={t.nav.goHome}>
            Gabriel Wak
            <span className="nav-wordmark-dot" aria-hidden="true">
              .
            </span>
          </Link>

          <nav className="nav-center hidden lg:flex items-center gap-5 xl:gap-7">
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

          <div className="nav-actions flex items-center gap-2 sm:gap-2.5">
            <ThemeToggle />
            <LanguageToggle />
            <OpenToWorkBadge />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="nav-menu-btn lg:hidden"
              aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-menu lg:hidden">
          <div
            className="mobile-menu-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <nav className="mobile-panel" aria-label={t.nav.mobileMenu}>
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
              <a href="tel:+5515988308477" className="btn-ed w-full">
                (15) 98830-8477
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
