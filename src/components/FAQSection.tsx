import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus } from 'lucide-react';
import { faqs } from '../data/projects';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-shell section-y">
      <div className="section-inner grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="section-heading">
            Perguntas frequentes
          </h2>
          <p className="mt-5 max-w-md text-[0.95rem] font-light leading-relaxed text-muted sm:mt-6 sm:text-base">
            Encontre respostas para as principais dúvidas sobre meus serviços e como posso ajudar você.
          </p>
          <Link to="/contato" className="btn-primary mt-6 sm:mt-8">
            Entre em contato
          </Link>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={faq.question} className="faq-card p-0">
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
                  <p className="px-5 pb-5 text-sm font-light leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
