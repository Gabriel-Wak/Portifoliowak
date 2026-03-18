import { Award, BookOpen, GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: 'Anhanguera Sorocaba',
      degree: 'Cursando Analise Desenvolvimento De Sistemas',
      period: 'Janeiro - 2025 / Junho 2027',
      description: 'Formação completa em desenvolvimento de software, algoritmos, estruturas de dados e engenharia de software.',
      icon: GraduationCap,
    },
    {
      institution: 'SENAI',
      degree: 'Curso Tecnico ADS',
      period: '2023',
      description: 'Formação tecnica com o ensino medio em ADS.',
      icon: BookOpen,
    },
    {
      institution: 'Rocket Seat',
      degree: 'Full Stack',
      period: '2025',
      description: 'Certificação profissional em desenvolvimento Full Stack moderno com React, UX/UI e melhores práticas.',
      icon: Award,
    },
  ];

  const certifications = [
    { name: 'SENAI ADS', year: '2024' },
    { name: 'Rocket Seat Full Steack', year: '2025' },
    { name: 'Analise de dados', year: '2024' },
  ];

  return (
    <section id="education" className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Formação & Certificações
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Investimento contínuo em aprendizado e desenvolvimento profissional para entregar sempre o melhor.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Formação Acadêmica</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8 flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <edu.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-cyan-400 font-medium">{edu.institution}</p>
                      </div>
                      <div className="px-4 py-1 bg-gray-800/80 border border-gray-700/50 rounded-full text-sm text-gray-300 whitespace-nowrap self-start">
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Certificações Profissionais</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1 group-hover:text-emerald-400 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-400">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
