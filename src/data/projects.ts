export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  projectLink: string;
  tint: string;
}

export const projects: Project[] = [
  {
    title: 'CodePit',
    description:
      'Empresa de desenvolvimento web para negócios que precisam de presença digital forte, arquitetura moderna e interfaces responsivas.',
    image: 'https://i.ibb.co/ccYSwgx2/image.png',
    tags: ['React', 'Node.js', 'Supabase', 'Vite'],
    githubLink: 'https://github.com/Gabriel-Wak',
    projectLink: 'https://www.codepit.com.br/',
    tint: '#dbeafe',
  },
  {
    title: "Grand'Oro",
    description:
      'Landing page imobiliária focada em apresentação visual, captação de leads e experiência refinada para o público-alvo.',
    image: '/hero.png',
    tags: ['React', 'Node.js'],
    githubLink: 'https://github.com/Gabriel-Wak/grandoro',
    projectLink: 'https://grandoro-alpha.vercel.app/',
    tint: '#fff7b8',
  },
  {
    title: 'Quintas da Boa Vista',
    description:
      'Página de conversão para residencial, com foco em comunicação clara, estética premium e navegação fluida.',
    image: '/quintas.png',
    tags: ['React', 'Tailwind'],
    githubLink: 'https://github.com/Gabriel-Wak/quintasboavista',
    projectLink: 'https://quintasboavista.vercel.app/',
    tint: '#e9ddff',
  },
 
 
  {
    title: 'Barbearia Das Ruas',
    description:
      'Ecommerce de produtos de beleza e cuidado pessoal, com foco em vendas e conversão na barbearia das ruas',
    image: '/barbe.png',
    tags: ['React', 'TypeScript', 'Tailwind'],
    githubLink: 'https://github.com/Gabriel-Wak/Portifoliowak',
    projectLink: 'https://github.com/Gabriel-Wak/Portifoliowak',
    tint: '#e0f2fe',
  },
];

export const techStack = [
  { name: 'React', slug: 'react' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'Vite', slug: 'vite' },
  { name: 'Supabase', slug: 'supabase' },
  { name: 'Python', slug: 'python' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Figma', slug: 'figma' },
  { name: 'PostgreSQL', slug: 'postgresql' },
];

export const services = [
  {
    title: 'Landing Page',
    description:
      'Páginas de conversão otimizadas para transformar visitantes em clientes, com design responsivo e foco total em resultado.',
  },
  {
    title: 'Aplicação Web',
    description:
      'Aplicações completas e personalizadas com foco em experiência do usuário, performance e manutenção limpa.',
  },
  {
    title: 'Portfólio',
    description:
      'Portfólios profissionais para destacar projetos, habilidades e presença digital com identidade própria.',
  },
  {
    title: 'Site Empresarial',
    description:
      'Sites corporativos que comunicam valor, credibilidade e conversão para empresas e profissionais.',
  },
  {
    title: 'UI | UX',
    description:
      'Interfaces intuitivas, modernas e responsivas, pensadas para usabilidade e satisfação do usuário.',
  },
  {
    title: 'Integrações',
    description:
      'Integrações com APIs, bancos de dados, autenticação, formulários e automações para produtos digitais.',
  },
];

export const faqs = [
  {
    question: 'Quais serviços você oferece?',
    answer:
      'Landing pages, portfólios, sites institucionais, aplicações web, interfaces e integrações com APIs e banco de dados.',
  },
  {
    question: 'Qual o prazo médio para entrega de um projeto?',
    answer:
      'Landing pages geralmente levam de 1 a 2 semanas. Aplicações maiores recebem um cronograma após análise do escopo.',
  },
  {
    question: 'Você oferece suporte após a entrega?',
    answer:
      'Sim. Posso combinar suporte pós-entrega para ajustes, correções, melhorias e acompanhamento do projeto.',
  },
  {
    question: 'Como funciona o processo de orçamento?',
    answer:
      'Você me chama pelo contato, explica a ideia e eu retorno com uma proposta clara de prazo, escopo e investimento.',
  },
  {
    question: 'Você trabalha com integrações de APIs?',
    answer:
      'Sim. Posso integrar pagamentos, bancos de dados, autenticação, formulários, Supabase e APIs externas.',
  },
  {
    question: 'Posso ter acesso ao código fonte?',
    answer:
      'Sim. O código pode ser entregue em um repositório GitHub com instruções para rodar e manter o projeto.',
  },
];
