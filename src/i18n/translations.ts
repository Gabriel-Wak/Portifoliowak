import type { Locale } from '../context/LocaleContext';

export const translations = {
  'pt-BR': {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
      goHome: 'Ir para início',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      mobileMenu: 'Menu mobile',
      language: 'Trocar idioma',
      openToWork: 'OPEN TO WORK',
    },
    theme: {
      light: 'Ativar modo claro',
      dark: 'Ativar modo escuro',
    },
    hero: {
      eyebrow: 'Full Stack • React • Node • TypeScript',
      line1: 'Developer',
      line2Before: 'Full Stack &',
      lead:
        'Interfaces, APIs e produtos digitais — com clean code, performance e foco em resultado.',
      ctaProjects: 'Ver projetos →',
      ctaContact: '>_ Contato',
    },
    homeAbout: {
      label: '/* um pouco sobre mim */',
      aside: 'quem está por trás do código',
      titleBefore: 'Quem está por trás do',
      titleAccent: 'código',
      body:
        'Desenvolvedor Full Stack com experiência em criar soluções digitais completas. Especialista em aplicações web modernas com foco em clean code, escalabilidade e entregas ágeis.',
      more: 'Saiba mais',
    },
    homeProjects: {
      label: '/* projetos que construí */',
      total: 'no total',
      title: 'Onde front-end, back-end e produto se encontram.',
      body:
        'Cada projeto abaixo resolve um problema real — presença digital, conversão ou experiência.',
      viewAll: 'Ver todos os projetos',
    },
    stack: {
      label: '/* stack que uso */',
      aside: 'linguagens, ferramentas e infra',
      title: 'As tecnologias por trás dos meus projetos.',
      body:
        'De linguagens a infraestrutura — o que uso no dia a dia para construir, testar e colocar no ar.',
      note:
        'Nível de domínio autoavaliado em cada tecnologia (não é cobertura de uso nem certificação).',
    },
    faq: {
      label: '/* perguntas frequentes */',
      title: 'Perguntas frequentes',
      body:
        'Encontre respostas para as principais dúvidas sobre meus serviços e como posso ajudar você.',
      contact: 'Entre em contato',
      items: [
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
      ],
    },
    cta: {
      label: 'contato · fale comigo',
      title: 'Vamos trabalhar juntos?',
      body:
        'Tem um projeto em mente? Vamos conversar sobre como transformar sua ideia em uma experiência digital de impacto.',
      contact: 'Entre em contato',
      projects: 'Projetos',
      previewAlt: 'Preview do projeto',
    },
    footer: {
      label: '/* rodapé */',
      tagline: 'construído com curiosidade · Sorocaba - SP',
      heading: 'Ajuda a crescer & destacar',
      quickLinks: 'Links rápidos',
      contact: 'Contato',
      phone: 'Telefone',
    },
    about: {
      label: '/* sobre mim */',
      title: 'Desenvolvedor Fullstack focado em escalabilidade e alta performance',
      intro:
        'Desenvolvedor Full Stack interessado em criar soluções digitais que fazem a diferença. Construo aplicações web modernas, responsivas e centradas no usuário.',
      p1:
        'Minha abordagem combina código limpo, design pensado e atenção aos detalhes para entregar produtos digitais bonitos, funcionais e acessíveis.',
      p2:
        'Gosto de transformar ideias em experiências completas: da estratégia visual à implementação, sempre buscando performance e clareza.',
      stats: [
        { label: 'Anos de experiência', value: '1+' },
        { label: 'Projetos concluídos', value: '6+' },
        { label: 'Clientes atendidos', value: '6+' },
      ],
      skills: [
        {
          title: 'Desenvolvimento',
          description: 'React, TypeScript, Node.js, Python, Supabase e APIs modernas.',
        },
        {
          title: 'Design',
          description: 'Interfaces modernas com foco em UX/UI, responsividade e clareza visual.',
        },
        {
          title: 'Performance',
          description: 'Projetos rápidos, escaláveis e pensados para uma experiência fluida.',
        },
        {
          title: 'Entrega',
          description: 'Comunicação direta, organização e foco em transformar ideia em produto.',
        },
      ],
    },
    projectsPage: {
      label: '/* projetos */',
      title: 'Projetos',
      body:
        'Uma seleção de trabalhos recentes, cada um com um desafio específico e uma solução pensada para conversão, experiência e performance.',
    },
    contact: {
      label: '/* contato */',
      title: 'Vamos criar algo extraordinário',
      body:
        'Tem um projeto em mente? Entre em contato e vamos conversar sobre como transformar sua ideia em uma experiência digital de impacto.',
      phone: 'Telefone',
      formTitle: 'Envie uma mensagem',
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
      sending: 'Enviando...',
      sent: 'Mensagem enviada!',
      send: 'Enviar',
      error: 'Erro ao enviar. Tente chamar pelo telefone ou LinkedIn.',
    },
    projects: {
      'Alemãozinho Sorvetes':
        'A ideia era criar uma presença digital que transmitisse a mesma confiança que a marca passa no balcão, na embalagem e no dia a dia com o cliente.',
      CodePit:
        'Empresa de desenvolvimento web para negócios que precisam de presença digital forte, arquitetura moderna e interfaces responsivas.',
      "Grand'Oro":
        'Landing page imobiliária focada em apresentação visual, captação de leads e experiência refinada para o público-alvo.',
      'Quintas da Boa Vista':
        'Página de conversão para residencial, com foco em comunicação clara, estética premium e navegação fluida.',
      'Barbearia Das Ruas':
        'Ecommerce de produtos de beleza e cuidado pessoal, com foco em vendas e conversão na barbearia das ruas.',
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
      eyebrow: 'Full Stack • React • Node • TypeScript',
      line1: 'Developer',
      line2Before: 'Full Stack &',
      lead:
        'Interfaces, APIs and digital products — with clean code, performance and a results-first mindset.',
      ctaProjects: 'View projects →',
      ctaContact: '>_ Contact',
    },
    homeAbout: {
      label: '/* a bit about me */',
      aside: 'who is behind the code',
      titleBefore: 'Who is behind the',
      titleAccent: 'code',
      body:
        'Full Stack developer with experience building complete digital solutions. Specialist in modern web apps focused on clean code, scalability and agile delivery.',
      more: 'Learn more',
    },
    homeProjects: {
      label: '/* projects I built */',
      total: 'in total',
      title: 'Where front-end, back-end and product meet.',
      body:
        'Each project below solves a real problem — digital presence, conversion or experience.',
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
      label: 'contact · talk to me',
      title: "Let's work together?",
      body:
        'Got a project in mind? Let’s talk about turning your idea into a high-impact digital experience.',
      contact: 'Get in touch',
      projects: 'Projects',
      previewAlt: 'Project preview',
    },
    footer: {
      label: '/* footer */',
      tagline: 'built with curiosity · Sorocaba - SP',
      heading: 'Help grow & stand out',
      quickLinks: 'Quick links',
      contact: 'Contact',
      phone: 'Phone',
    },
    about: {
      label: '/* about me */',
      title: 'Fullstack developer focused on scalability and high performance',
      intro:
        'Full Stack developer interested in building digital solutions that make a difference. I craft modern, responsive, user-centered web applications.',
      p1:
        'My approach combines clean code, thoughtful design and attention to detail to deliver beautiful, functional and accessible digital products.',
      p2:
        'I enjoy turning ideas into complete experiences: from visual strategy to implementation, always aiming for performance and clarity.',
      stats: [
        { label: 'Years of experience', value: '1+' },
        { label: 'Completed projects', value: '6+' },
        { label: 'Clients served', value: '6+' },
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
      label: '/* projects */',
      title: 'Projects',
      body:
        'A selection of recent work, each with a specific challenge and a solution aimed at conversion, experience and performance.',
    },
    contact: {
      label: '/* contact */',
      title: "Let's create something extraordinary",
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
    projects: {
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
    line1: string;
    line2Before: string;
    lead: string;
    ctaProjects: string;
    ctaContact: string;
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
  };
  about: {
    label: string;
    title: string;
    intro: string;
    p1: string;
    p2: string;
    stats: { label: string; value: string }[];
    skills: { title: string; description: string }[];
  };
  projectsPage: {
    label: string;
    title: string;
    body: string;
  };
  contact: {
    label: string;
    title: string;
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
  projects: Record<string, string>;
};

export function getTranslations(locale: Locale): TranslationTree {
  return translations[locale] as unknown as TranslationTree;
}
