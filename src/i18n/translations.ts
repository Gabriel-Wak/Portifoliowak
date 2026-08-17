import type { Locale } from '../context/LocaleContext';

export const translations = {
  'pt-BR': {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
      goHome: 'Ir para o início',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      mobileMenu: 'Menu do celular',
      language: 'Trocar idioma',
      openToWork: 'DISPONÍVEL',
    },
    theme: {
      light: 'Ativar modo claro',
      dark: 'Ativar modo escuro',
    },
    hero: {
      eyebrow: 'Gabriel Henrique, dono da NextClinic.ai, Sorocaba, SP',
      headline: ['Eu fiz a', 'NextClinic.ai'],
      lead:
        'Eu projetei, codei e coloquei no ar a atendente virtual 24h para clínicas. Sou o dono. Também crio sites e sistemas para outros negócios.',
      ctaProjects: 'Ver o produto',
      ctaContact: 'Falar comigo',
      mascotAlt: 'Boneco em pixel de Gabriel Henrique, se mexendo',
      stats: [
        { label: 'Experiência', value: '4+ anos' },
        { label: 'Projetos no ar', value: '5' },
        { label: 'Resposta', value: 'em 24h' },
      ],
    },
    featured: {
      label: 'Produto próprio',
      kicker: 'Eu fiz',
      title: 'NextClinic.ai',
      body:
        'Atendente virtual 24h para clínicas. WhatsApp, Instagram e Messenger numa caixa só, agenda na plataforma e resposta o dia inteiro. Eu projetei, codei e coloquei no ar. Sou o dono.',
      cta: 'Abrir NextClinic.ai',
      credit: 'Construído por Gabriel Henrique',
      imageAlt: 'Tela da NextClinic.ai, produto que eu fiz',
    },
    homeAbout: {
      label: 'Um pouco sobre mim',
      aside: 'quem está por trás do código',
      titleBefore: 'Quem está por trás do',
      titleAccent: 'código',
      body:
        'Eu fiz a NextClinic.ai, atendente virtual 24h para clínicas. Crio soluções digitais completas, com código limpo, performance e entrega no prazo.',
      more: 'Saiba mais',
    },
    homeProjects: {
      label: 'Projetos que construí',
      total: 'no total',
      title: 'Eu fiz a NextClinic.ai. O resto também está no ar.',
      body:
        'Primeiro, o produto que eu criei e sou dono. Depois, sites e sistemas que coloquei no ar para outros negócios.',
      viewAll: 'Ver todos os projetos',
    },
    stack: {
      label: 'Stack que uso',
      aside: 'linguagens, ferramentas e infra',
      title: 'As tecnologias por trás dos meus projetos.',
      body:
        'Das linguagens à infraestrutura. O que uso no dia a dia para construir, testar e colocar no ar.',
      note:
        'Nível de domínio autoavaliado em cada tecnologia. Não é cobertura de uso nem certificação.',
    },
    faq: {
      label: 'Perguntas frequentes',
      title: 'Perguntas frequentes',
      body:
        'Respostas objetivas sobre o que eu faço, prazos, orçamento e como a gente começa.',
      contact: 'Falar comigo',
      items: [
        {
          question: 'Quais serviços você oferece?',
          answer:
            'Landing pages, portfólios, sites institucionais, aplicações web, interfaces e integrações com APIs e banco de dados.',
        },
        {
          question: 'Qual o prazo médio para entrega de um projeto?',
          answer:
            'Uma landing page costuma levar de 1 a 2 semanas. Projetos maiores ganham um cronograma depois da análise do escopo.',
        },
        {
          question: 'Você oferece suporte depois da entrega?',
          answer:
            'Sim. Dá para combinar acompanhamento para ajustes, correções, melhorias e evolução do projeto.',
        },
        {
          question: 'Como funciona o orçamento?',
          answer:
            'Você me chama, conta a ideia e eu volto com uma proposta clara de prazo, escopo e investimento.',
        },
        {
          question: 'Você trabalha com integração de APIs?',
          answer:
            'Sim. Pagamentos, banco de dados, autenticação, formulários, Supabase e APIs externas.',
        },
        {
          question: 'Posso ter acesso ao código fonte?',
          answer:
            'Sim. O código pode ir para um repositório no GitHub, com instruções para rodar e manter o projeto.',
        },
      ],
    },
    cta: {
      label: 'Contato',
      title: 'Vamos trabalhar juntos?',
      body:
        'Tem um projeto em mente? Vamos conversar e transformar a ideia em um site que gera resultado.',
      contact: 'Falar comigo',
      projects: 'Projetos',
      previewAlt: 'Prévia do projeto',
    },
    footer: {
      label: 'Rodapé',
      tagline: 'Dono da NextClinic.ai, Sorocaba, SP',
      heading: 'Ajuda a crescer e destacar',
      quickLinks: 'Navegação',
      contact: 'Contato',
      phone: 'Telefone',
      letsTalk: 'Vamos trabalhar juntos',
      social: 'Redes',
      rights: 'Todos os direitos reservados',
    },
    statement: {
      label: 'Como eu trabalho',
      text:
        'Eu fiz a NextClinic.ai, atendente virtual 24h para clínicas. Sou o dono. Entrego o produto inteiro no ar, interface, banco de dados, integrações e publicação.',
    },
    capabilities: {
      label: 'O que eu faço',
      title: 'Da primeira tela até o domínio no ar.',
      items: [
        {
          title: 'Interface',
          details: ['React e TypeScript', 'Design responsivo', 'Acessibilidade'],
        },
        {
          title: 'Backend e API',
          details: ['Node.js', 'PostgreSQL e Supabase', 'Autenticação'],
        },
        {
          title: 'Produto',
          details: ['Eu fiz a NextClinic.ai', 'Dono', 'Atendente virtual 24h'],
        },
        {
          title: 'Publicação e manutenção',
          details: ['Vercel', 'Domínio e SSL', 'Suporte depois da entrega'],
        },
      ],
    },
    nameShowcase: {
      first: 'Gabriel',
      last: 'Wak',
      badge: 'Sorocaba, SP',
      alt: 'Retrato de Gabriel Henrique',
      bio:
        'Eu fiz a NextClinic.ai e sou o dono. Trabalho com negócios reais da região de Sorocaba, do primeiro rascunho até o produto no ar, com o código na sua mão.',
      cta: 'Conhecer minha história',
    },
    about: {
      label: 'Sobre mim',
      title: 'Desenvolvedor full stack focado em escala e performance',
      titleLines: ['Quem está', 'por trás do', 'código.'],
      skillsLabel: 'No que eu sou bom',
      intro:
        'Eu fiz a NextClinic.ai, atendente virtual 24h para clínicas, e sou o dono. Também construo aplicações web modernas, rápidas e pensadas para quem vai usar.',
      p1:
        'Trabalho com código limpo, design cuidado e atenção aos detalhes. O resultado precisa ficar bonito, funcionar bem e ser fácil de usar.',
      p2:
        'Gosto de transformar ideia em produto completo, da estratégia visual à publicação, sempre com performance e clareza.',
      stats: [
        { label: 'Anos de experiência', value: '4+' },
        { label: 'Projetos concluídos', value: '5+' },
        { label: 'Clientes atendidos', value: '4+' },
      ],
      skills: [
        {
          title: 'Desenvolvimento',
          description: 'React, TypeScript, Node.js, Python, Supabase e APIs modernas.',
        },
        {
          title: 'Design',
          description: 'Interfaces modernas com foco em usabilidade, responsividade e clareza visual.',
        },
        {
          title: 'Performance',
          description: 'Projetos rápidos, estáveis e pensados para uma navegação fluida.',
        },
        {
          title: 'Entrega',
          description: 'Comunicação direta, organização e foco em transformar ideia em produto.',
        },
      ],
    },
    projectsPage: {
      label: 'Projetos',
      title: 'Projetos',
      titleLines: ['Trabalho', 'no ar.'],
      body:
        'Em primeiro lugar, o produto que eu fiz, a NextClinic.ai, atendente virtual 24h para clínicas. Depois, uma seleção de sites e sistemas no ar.',
    },
    contact: {
      label: 'Contato',
      title: 'Vamos criar algo extraordinário',
      titleLines: ['Vamos', 'falar.'],
      body:
        'Tem um projeto em mente? Me chama e a gente conversa sobre como colocar a sua ideia no ar.',
      phone: 'Telefone',
      formTitle: 'Envie uma mensagem',
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
      sending: 'Enviando...',
      sent: 'Mensagem enviada!',
      send: 'Enviar',
      error: 'Não deu para enviar. Tente pelo telefone ou pelo LinkedIn.',
    },
    notFound: {
      titleLines: ['Página', 'não existe.'],
      body: 'Esse endereço não está no ar. Volte para o início e siga por lá.',
      home: 'Ir para o início',
    },
    projectMeta: {
      owner: 'Dono',
      featured: 'Destaque',
    },
    projects: {
      'NextClinic.ai':
        'Eu fiz este produto. Atendente virtual 24h para clínicas. WhatsApp, Instagram e Messenger numa caixa só, agenda na plataforma e resposta o dia inteiro. Sou o dono.',
      'Alemãozinho Sorvetes':
        'Uma presença digital com a mesma confiança que a marca passa no balcão, na embalagem e no dia a dia com o cliente.',
      CodePit:
        'Empresa de desenvolvimento web para negócios que precisam de presença digital forte, arquitetura moderna e interfaces responsivas.',
      "Grand'Oro":
        'Landing page imobiliária com apresentação visual forte, captação de leads e uma experiência refinada para o público.',
      'Quintas da Boa Vista':
        'Página de conversão para residencial, com comunicação clara, estética premium e navegação fluida.',
      'Barbearia Das Ruas':
        'Loja online de produtos de beleza e cuidado pessoal, com foco em venda e conversão para a Barbearia das Ruas.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      goHome: 'Go to home',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      mobileMenu: 'Mobile menu',
      language: 'Switch language',
      openToWork: 'OPEN TO WORK',
    },
    theme: {
      light: 'Switch to light mode',
      dark: 'Switch to dark mode',
    },
    hero: {
      eyebrow: 'Gabriel Henrique, owner of NextClinic.ai, Sorocaba, Brazil',
      headline: ['I built', 'NextClinic.ai'],
      lead:
        'I designed, coded and shipped the 24h virtual attendant for clinics. I am the owner. I also ship websites and systems for other businesses.',
      ctaProjects: 'See the product',
      ctaContact: 'Get in touch',
      mascotAlt: 'Pixel character of Gabriel Henrique, moving',
      stats: [
        { label: 'Experience', value: '4+ years' },
        { label: 'Shipped', value: '5' },
        { label: 'Reply', value: 'in 24h' },
      ],
    },
    featured: {
      label: 'Own product',
      kicker: 'I built this',
      title: 'NextClinic.ai',
      body:
        'A 24h virtual attendant for clinics. WhatsApp, Instagram and Messenger in one inbox, scheduling in the platform and replies all day. I designed it, coded it and shipped it. I am the owner.',
      cta: 'Open NextClinic.ai',
      credit: 'Built by Gabriel Henrique',
      imageAlt: 'NextClinic.ai screen, the product I built',
    },
    homeAbout: {
      label: '/* a bit about me */',
      aside: 'who is behind the code',
      titleBefore: 'Who is behind the',
      titleAccent: 'code',
      body:
        'I built NextClinic.ai, a 24h virtual attendant for clinics. I create complete digital products with clean code, performance and on-time delivery.',
      more: 'Learn more',
    },
    homeProjects: {
      label: '/* projects I built */',
      total: 'in total',
      title: 'I built NextClinic.ai. The rest is live too.',
      body:
        'First, the product I created and own. Then the sites and systems I shipped for other businesses.',
      viewAll: 'View all projects',
    },
    stack: {
      label: '/* stack I use */',
      aside: 'languages, tools and infra',
      title: 'The technologies behind my projects.',
      body:
        'From languages to infrastructure — what I use day to day to build, test and ship.',
      note:
        'Self-assessed proficiency for each technology (not usage coverage or certification).',
    },
    faq: {
      label: '/* frequently asked questions */',
      title: 'Frequently asked questions',
      body:
        'Find answers to the main questions about my services and how I can help you.',
      contact: 'Get in touch',
      items: [
        {
          question: 'What services do you offer?',
          answer:
            'Landing pages, portfolios, institutional websites, web applications, interfaces and API/database integrations.',
        },
        {
          question: 'What is the average delivery time for a project?',
          answer:
            'Landing pages usually take 1 to 2 weeks. Larger applications get a timeline after scope analysis.',
        },
        {
          question: 'Do you offer support after delivery?',
          answer:
            'Yes. I can arrange post-delivery support for tweaks, fixes, improvements and project follow-up.',
        },
        {
          question: 'How does the quoting process work?',
          answer:
            'You reach out, explain the idea, and I come back with a clear proposal for timeline, scope and investment.',
        },
        {
          question: 'Do you work with API integrations?',
          answer:
            'Yes. I can integrate payments, databases, authentication, forms, Supabase and external APIs.',
        },
        {
          question: 'Can I have access to the source code?',
          answer:
            'Yes. The code can be delivered in a GitHub repository with instructions to run and maintain the project.',
        },
      ],
    },
    cta: {
      label: 'Contact',
      title: "Let's work together?",
      body:
        'Got a project in mind? Let’s talk about turning your idea into a high-impact digital experience.',
      contact: 'Get in touch',
      projects: 'Projects',
      previewAlt: 'Project preview',
    },
    footer: {
      label: '/* footer */',
      tagline: 'Owner of NextClinic.ai, Sorocaba, Brazil',
      heading: 'Help grow & stand out',
      quickLinks: 'Navigation',
      contact: 'Contact',
      phone: 'Phone',
      letsTalk: "Let's work together",
      social: 'Social',
      rights: 'All rights reserved',
    },
    statement: {
      label: 'How I work',
      text:
        'I built NextClinic.ai, a 24h virtual attendant for clinics. I am the owner. I ship the whole product, interface, database, integrations and deploy.',
    },
    capabilities: {
      label: 'What I do',
      title: 'From the first screen to the live domain.',
      items: [
        {
          title: 'Interface',
          details: ['React and TypeScript', 'Responsive design', 'Accessibility'],
        },
        {
          title: 'Back-end and API',
          details: ['Node.js', 'PostgreSQL and Supabase', 'Authentication'],
        },
        {
          title: 'Product',
          details: ['I built NextClinic.ai', 'Owner', '24h virtual attendant'],
        },
        {
          title: 'Deploy and upkeep',
          details: ['Vercel', 'Domain and SSL', 'Post-launch support'],
        },
      ],
    },
    nameShowcase: {
      first: 'Gabriel',
      last: 'Wak',
      badge: 'Sorocaba, Brazil',
      alt: 'Portrait of Gabriel Henrique',
      bio:
        'I built NextClinic.ai and I am the owner. I work with real businesses around Sorocaba, from the first sketch to a live product, with the code in your hands.',
      cta: 'Read my story',
    },
    about: {
      label: 'About me',
      title: 'Fullstack developer focused on scalability and high performance',
      titleLines: ['The person', 'behind the', 'code.'],
      skillsLabel: "What I'm good at",
      intro:
        'I built NextClinic.ai, a 24h virtual attendant for clinics, and I am the owner. I also craft modern, fast, user-centered web applications.',
      p1:
        'My approach combines clean code, thoughtful design and attention to detail to deliver beautiful, functional and accessible digital products.',
      p2:
        'I enjoy turning ideas into complete experiences: from visual strategy to implementation, always aiming for performance and clarity.',
      stats: [
        { label: 'Years of experience', value: '4+' },
        { label: 'Completed projects', value: '5+' },
        { label: 'Clients served', value: '4+' },
      ],
      skills: [
        {
          title: 'Development',
          description: 'React, TypeScript, Node.js, Python, Supabase and modern APIs.',
        },
        {
          title: 'Design',
          description: 'Modern interfaces focused on UX/UI, responsiveness and visual clarity.',
        },
        {
          title: 'Performance',
          description: 'Fast, scalable projects designed for a smooth experience.',
        },
        {
          title: 'Delivery',
          description: 'Direct communication, organization and focus on turning ideas into product.',
        },
      ],
    },
    projectsPage: {
      label: 'Projects',
      title: 'Projects',
      titleLines: ['Work', 'shipped.'],
      body:
        'First, the product I built, NextClinic.ai, a 24h virtual attendant for clinics. Then a selection of live sites and systems.',
    },
    contact: {
      label: 'Contact',
      title: "Let's create something extraordinary",
      titleLines: ["Let's", 'talk.'],
      body:
        'Got a project in mind? Get in touch and let’s talk about turning your idea into a high-impact digital experience.',
      phone: 'Phone',
      formTitle: 'Send a message',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      sending: 'Sending...',
      sent: 'Message sent!',
      send: 'Send',
      error: 'Failed to send. Try calling by phone or LinkedIn.',
    },
    notFound: {
      titleLines: ['This page', 'is not live.'],
      body: 'That address is not on this site. Head back home and keep going from there.',
      home: 'Back to home',
    },
    projectMeta: {
      owner: 'Owner',
      featured: 'Featured',
    },
    projects: {
      'NextClinic.ai':
        'I built this product. A 24h virtual attendant for clinics. WhatsApp, Instagram and Messenger in one inbox, scheduling in the platform and replies all day. I am the owner.',
      'Alemãozinho Sorvetes':
        'The goal was to build a digital presence that conveys the same trust the brand brings at the counter, on the packaging and in everyday customer contact.',
      CodePit:
        'Web development company for businesses that need a strong digital presence, modern architecture and responsive interfaces.',
      "Grand'Oro":
        'Real-estate landing page focused on visual presentation, lead capture and a refined experience for the target audience.',
      'Quintas da Boa Vista':
        'Conversion page for residential projects, with clear communication, premium aesthetics and smooth navigation.',
      'Barbearia Das Ruas':
        'E-commerce for beauty and personal care products, focused on sales and conversion for Barbearia Das Ruas.',
    },
  },
} as const;

export type TranslationTree = {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    goHome: string;
    openMenu: string;
    closeMenu: string;
    mobileMenu: string;
    language: string;
    openToWork: string;
  };
  theme: { light: string; dark: string };
  hero: {
    eyebrow: string;
    headline: string[];
    lead: string;
    ctaProjects: string;
    ctaContact: string;
    mascotAlt: string;
    stats: { label: string; value: string }[];
  };
  featured: {
    label: string;
    kicker: string;
    title: string;
    body: string;
    cta: string;
    credit: string;
    imageAlt: string;
  };
  homeAbout: {
    label: string;
    aside: string;
    titleBefore: string;
    titleAccent: string;
    body: string;
    more: string;
  };
  homeProjects: {
    label: string;
    total: string;
    title: string;
    body: string;
    viewAll: string;
  };
  stack: {
    label: string;
    aside: string;
    title: string;
    body: string;
    note: string;
  };
  faq: {
    label: string;
    title: string;
    body: string;
    contact: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    label: string;
    title: string;
    body: string;
    contact: string;
    projects: string;
    previewAlt: string;
  };
  footer: {
    label: string;
    tagline: string;
    heading: string;
    quickLinks: string;
    contact: string;
    phone: string;
    letsTalk: string;
    social: string;
    rights: string;
  };
  statement: {
    label: string;
    text: string;
  };
  capabilities: {
    label: string;
    title: string;
    items: { title: string; details: string[] }[];
  };
  nameShowcase: {
    first: string;
    last: string;
    badge: string;
    alt: string;
    bio: string;
    cta: string;
  };
  about: {
    label: string;
    title: string;
    titleLines: string[];
    skillsLabel: string;
    intro: string;
    p1: string;
    p2: string;
    stats: { label: string; value: string }[];
    skills: { title: string; description: string }[];
  };
  projectsPage: {
    label: string;
    title: string;
    titleLines: string[];
    body: string;
  };
  contact: {
    label: string;
    title: string;
    titleLines: string[];
    body: string;
    phone: string;
    formTitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    sending: string;
    sent: string;
    send: string;
    error: string;
  };
  notFound: {
    titleLines: string[];
    body: string;
    home: string;
  };
  projectMeta: {
    owner: string;
    featured: string;
  };
  projects: Record<string, string>;
};

export function getTranslations(locale: Locale): TranslationTree {
  return translations[locale] as unknown as TranslationTree;
}
