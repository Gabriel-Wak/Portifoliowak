import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Magnetic from '../motion/Magnetic';
import { useTranslation } from '../i18n/useTranslation';

const WHATSAPP = 'https://wa.me/5515988308477';

export default function Footer() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  const links = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.about, to: '/sobre' },
    { label: t.nav.projects, to: '/projetos' },
    { label: t.nav.contact, to: '/contato' },
  ];

  const socials = [
    { label: 'GitHub', href: 'https://github.com/Gabriel-Wak' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabrielhenriquewak/' },
    { label: 'WhatsApp', href: WHATSAPP },
  ];

  return (
    <footer className="footer-ed">
      <div className="footer-ed-top">
        <div className="footer-ed-talk">
          <p className="mono-label">{t.footer.letsTalk}</p>
          <Magnetic strength={10}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="footer-ed-phone">
              (15) 98830-8477
            </a>
          </Magnetic>
          <p className="footer-ed-tagline">{t.footer.tagline}</p>
        </div>

        <nav className="footer-ed-col" aria-label={t.footer.quickLinks}>
          <p className="mono-label">{t.footer.quickLinks}</p>
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="link-ed">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-ed-col">
          <p className="mono-label">{t.footer.social}</p>
          <ul>
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-ed"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-ed-wordmark" aria-hidden="true">
        <span className="mask-line">
          <motion.span
            className="mask-line-inner"
            initial={reduced ? { opacity: 0 } : { y: '28%' }}
            whileInView={reduced ? { opacity: 1 } : { y: '0%' }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: reduced ? 0.3 : 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            GABRIEL WAK
          </motion.span>
        </span>
      </div>
    </footer>
  );
}
