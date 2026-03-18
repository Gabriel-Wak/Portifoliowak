import { Star } from 'lucide-react';


export default function Clients() {
  const testimonials = [
    {
      name: 'Afonso Henrique',
      role: 'CEO, CodePit ',
      content: 'Trabalho excepcional! A plataforma entregue superou nossas expectativas em todos os aspectos. Profissionalismo e qualidade técnica impecáveis.',
      rating: 5,
      avatar: 'https://media.discordapp.net/attachments/1481689007254667365/1483915248351187068/606139238_18356310556165443_3720997992251102922_n.png?ex=69bc5345&is=69bb01c5&hm=c43e705c2064dce3683e183dfe92ab60147fd1bc21c933b6cf3e3c622fbee14b&=&format=webp&quality=lossless',
    },
    {
      name: 'Carlos Mendes',
      role: 'CTO, Leroy',
      content: 'Desenvolvedor extremamente competente e atencioso. Entendeu perfeitamente nossa visão e entregou uma solução robusta e escalável.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Marina Costa',
      role: 'Diretora, Mr,Durval',
      content: 'A experiência de trabalhar neste projeto foi fantástica. Comunicação clara, prazos cumpridos e resultado final impecável. Recomendo fortemente!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  const clients = [
    { name: 'TechStart', logo: 'TS' },
    { name: 'FinanceHub', logo: 'FH' },
    { name: 'EduTech', logo: 'ET' },
    { name: 'HealthCare+', logo: 'HC' },
    { name: 'RetailPro', logo: 'RP' },
    { name: 'CloudSys', logo: 'CS' },
  ];

  return (
    <section id="clients" className="relative py-32 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Clientes & Depoimentos
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Construindo parcerias duradouras através de resultados excepcionais e comprometimento total.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Empresas que Confiam</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                      {client.logo}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur opacity-50"></div>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="relative w-16 h-16 rounded-full object-cover border-2 border-gray-700"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="absolute top-6 right-6 text-6xl text-cyan-500/10 font-serif">"</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
