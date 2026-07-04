import { ChangeEvent, FormEvent, useState } from 'react';
import { Github, Linkedin, Phone, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ContactPage() {
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

  return (
    <section className="section-shell section-y pt-32">
      <div className="section-inner grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow text-left">Contato</p>
          <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
            Vamos criar algo extraordinário
          </h1>
          <p className="mt-6 max-w-xl font-light leading-relaxed text-muted">
            Tem um projeto em mente? Entre em contato e vamos conversar sobre como transformar
            sua ideia em uma experiência digital de impacto.
          </p>

          <div className="mt-10 space-y-4">
            <a href="tel:+5515988308477" className="glass-card flex items-center gap-4 p-4">
              <span className="contact-dot static">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-muted">Telefone</span>
                <span className="font-medium">(15) 98830-8477</span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielhenriquewak/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 p-4"
            >
              <span className="contact-dot static">
                <Linkedin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-muted">LinkedIn</span>
                <span className="font-medium">gabrielhenriquewak</span>
              </span>
            </a>
            <a
              href="https://github.com/Gabriel-Wak"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 p-4"
            >
              <span className="contact-dot static">
                <Github className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-muted">GitHub</span>
                <span className="font-medium">Gabriel-Wak</span>
              </span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
          <h2 className="mb-6 font-display text-2xl font-black uppercase tracking-tight">
            Envie uma mensagem
          </h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Nome
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-field"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-field"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                Assunto
              </label>
              <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-field"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="form-field resize-none"
              />
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-primary mt-6 w-full gap-2">
            {isSubmitting ? (
              'Enviando...'
            ) : submitStatus === 'success' ? (
              'Mensagem enviada!'
            ) : (
              <>
                Enviar
                <Send className="h-4 w-4" />
              </>
            )}
          </button>

          {submitStatus === 'error' && (
            <p className="mt-4 text-center text-sm text-red-500">
              Erro ao enviar. Tente chamar pelo telefone ou LinkedIn.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
