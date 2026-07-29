import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';
import ScrollReveal from './ScrollReveal';

export default function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-shell section-y section-surface">
      <div className="section-inner grid gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal variant="left">
          <p className="code-label mb-3">{t.faq.label}</p>
          <h2 className="section-heading">{t.faq.title}</h2>
          <p className="mt-5 max-w-md font-mono text-sm leading-relaxed text-muted sm:mt-6 sm:text-base">
            {t.faq.body}
          </p>
          <Link to="/contato" className="btn-primary mt-6 sm:mt-8">
            {t.faq.contact}
          </Link>
        </ScrollReveal>

        <div className="space-y-3">
          {t.faq.items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollReveal key={faq.question} delay={index * 70} variant="right">
                <article className="faq-card p-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-3 p-4 text-left sm:gap-4 sm:p-5"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--border)]">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 font-mono text-sm font-light leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  )}
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
