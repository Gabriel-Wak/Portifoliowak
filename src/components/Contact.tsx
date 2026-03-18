import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase'; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  const { error } = await supabase.from('contacts').insert([
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
  ]);

  if (error) {
    console.log(error);
    setSubmitStatus('error');
    setIsSubmitting(false);
    return;
  }

  setSubmitStatus('success');
  setIsSubmitting(false);

  setFormData({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  setTimeout(() => setSubmitStatus('idle'), 3000);
};
{submitStatus === 'error' && (
  <p className="text-center text-red-400 text-sm">
    Erro ao enviar a mensagem. Veja o console do navegador.
  </p>
)}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gabrietrabalho199@gmail.com',
      href: 'mailto:gabrietrabalho199@gmail.com',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (15) 98830-8477',
      href: 'tel:+5511999999999',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, Brasil',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Gabriel-Wak',
      color: 'hover:text-gray-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gabriel-henrique-1578b6331/',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:gabrietrabalho199@gmail.com',
      color: 'hover:text-cyan-400',
    },
  ];

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Entre em contato
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tem um projeto em mente? Está procurando um desenvolvedor para sua equipe? Entre em contato e vamos criar algo incrível juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Informações de Contato</h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white font-medium hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Redes Sociais</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Envie uma Mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 outline-none"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 outline-none"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 outline-none"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 outline-none resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold text-gray-950 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : submitStatus === 'success' ? (
                  <span>Mensagem Enviada!</span>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-center text-emerald-400 text-sm">
                  Mensagem enviada com sucesso! Retornarei em breve.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
