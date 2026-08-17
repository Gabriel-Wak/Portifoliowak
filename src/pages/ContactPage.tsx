import { ChangeEvent, FormEvent, useState } from 'react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
import MaskLines from '../motion/MaskLines';
import FadeUp from '../motion/FadeUp';
import { useTranslation } from '../i18n/useTranslation';

const WHATSAPP = 'https://wa.me/5515988308477';

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (!supabase || !isSupabaseConfigured) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase.from('contacts').insert([formData]);

    if (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitStatus('idle'), 3500);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const channels = [
    { label: t.contact.phone, value: '(15) 98830-8477', href: WHATSAPP },
    {
      label: 'LinkedIn',
      value: 'gabrielhenriquewak',
      href: 'https://www.linkedin.com/in/gabrielhenriquewak/',
    },
    {
      label: 'GitHub',
      value: 'Gabriel-Wak',
      href: 'https://github.com/Gabriel-Wak',
    },
  ];

  return (
    <>
      <section className="page-head">
        <p className="mono-label">{t.contact.label}</p>
        <MaskLines
          as="h1"
          className="page-head-title"
          lines={t.contact.titleLines}
          stagger={0.08}
          immediate
        />
        <FadeUp delay={0.25} immediate>
          <p className="page-head-lead">{t.contact.body}</p>
        </FadeUp>
      </section>

      <section className="contact-ed">
        <FadeUp>
          <ul className="contact-ed-channels">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-ed-channel"
                >
                  <span className="mono-label">{channel.label}</span>
                  <span className="contact-ed-channel-value">{channel.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.1}>
          <form onSubmit={handleSubmit} className="contact-ed-form">
            <p className="mono-label">{t.contact.formTitle}</p>

            <label className="contact-ed-field">
              <span className="mono-label">{t.contact.name}</span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </label>
            <label className="contact-ed-field">
              <span className="mono-label">{t.contact.email}</span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </label>
            <label className="contact-ed-field">
              <span className="mono-label">{t.contact.subject}</span>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </label>
            <label className="contact-ed-field">
              <span className="mono-label">{t.contact.message}</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
              />
            </label>

            <button type="submit" disabled={isSubmitting} className="btn-ed">
              {isSubmitting
                ? t.contact.sending
                : submitStatus === 'success'
                  ? t.contact.sent
                  : t.contact.send}
            </button>

            {submitStatus === 'error' && (
              <p className="contact-ed-error">{t.contact.error}</p>
            )}
          </form>
        </FadeUp>
      </section>
    </>
  );
}
