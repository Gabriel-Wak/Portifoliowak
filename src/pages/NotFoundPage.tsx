import { Link } from 'react-router-dom';
import MaskLines from '../motion/MaskLines';
import FadeUp from '../motion/FadeUp';
import { useTranslation } from '../i18n/useTranslation';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section className="page-head not-found">
      <p className="mono-label">404</p>
      <MaskLines
        as="h1"
        className="page-head-title"
        lines={t.notFound.titleLines}
        stagger={0.08}
        immediate
      />
      <FadeUp delay={0.25} immediate>
        <p className="page-head-lead">{t.notFound.body}</p>
        <Link to="/" className="btn-ed">
          {t.notFound.home}
        </Link>
      </FadeUp>
    </section>
  );
}
