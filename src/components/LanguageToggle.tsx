import { useLocale } from '../context/LocaleContext';
import { useTranslation } from '../i18n/useTranslation';

export default function LanguageToggle() {
  const { locale, toggleLocale } = useLocale();
  const { t } = useTranslation();
  const label = locale === 'pt-BR' ? 'PT' : 'EN';

  return (
    <button
      type="button"
      className="nav-icon-btn lang-toggle-circle"
      onClick={toggleLocale}
      aria-label={t.nav.language}
      title={locale === 'pt-BR' ? 'Português (Brasil)' : 'English'}
    >
      <span className="lang-toggle-circle-code">{label}</span>
    </button>
  );
}
