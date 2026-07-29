import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/useTranslation';

export default function OpenToWorkBadge() {
  const { t } = useTranslation();

  return (
    <Link
      to="/contato"
      className="open-to-work"
      aria-label={t.nav.openToWork}
    >
      <span className="open-to-work-dot" aria-hidden="true" />
      <span className="open-to-work-text">{t.nav.openToWork}</span>
    </Link>
  );
}
