import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/useTranslation';
import FadeUp from '../motion/FadeUp';

export default function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-ed" aria-labelledby="faq-title">
      <FadeUp className="faq-ed-intro">
        <p className="mono-label">{t.faq.label}</p>
        <h2 id="faq-title" className="faq-ed-title">
          {t.faq.title}
        </h2>
        <p className="faq-ed-body">{t.faq.body}</p>
        <Link to="/contato" className="btn-ed">
          {t.faq.contact}
        </Link>
      </FadeUp>

      <ol className="faq-ed-list">
        {t.faq.items.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <li key={faq.question} className={isOpen ? 'is-open' : undefined}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="faq-ed-trigger"
              >
                <span className="mono-label">{String(index + 1).padStart(2, '0')}</span>
                <span className="faq-ed-question">{faq.question}</span>
                <span className="faq-ed-mark" aria-hidden="true">
                  {isOpen ? '–' : '+'}
                </span>
              </button>
              {isOpen ? <p className="faq-ed-answer">{faq.answer}</p> : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
