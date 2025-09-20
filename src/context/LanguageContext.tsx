import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'pt' | 'en';

type TranslationKey = keyof typeof translations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  //nav
  nav_about: { pt: 'Sobre', en: 'About' },
  nav_work: { pt: 'Trabalho', en: 'Work' },
  nav_contact: { pt: 'Contato', en: 'Contact' },

  //hero
  initial_title: { pt: 'Oi, eu sou o ', en: 'Hi, I am ' },
  initial_span: { pt: 'Marvin', en: 'Marvin' },
  initial_text: {
    pt: 'Sou um Desenvolvedor FullStack',
    en: "I'm a FullStack Developer",
  },
  initial_text2: {
    pt: 'Especializado em criar sites modernos e responsivos.',
    en: 'Specialized in creating modern and responsive websites.',
  },
  aria_label: {
    pt: 'Ir para area sobre',
    en: 'Go to section about',
  },

  //about
  about_text: { pt: 'Introdução', en: 'Introduction' },
  about_title: { pt: 'Visão geral.', en: 'Overview.' },
  about_description: {
    pt: 'Sou um desenvolvedor FullStack especializado em React/Next.js e NestJS, focado em criar aplicações escaláveis e de alto desempenho. Experiência com TypeScript, Redux, Zustand, Tailwind, Bootstrap, SASS e boas práticas de UI/UX, entregando soluções responsivas e manuteníveis.',
    en: 'I am a FullStack developer specializing in React/Next.js and NestJS, focused on building scalable, high-performance applications. Experienced with TypeScript, Redux, Zustand, Tailwind, Bootstrap, SASS, and modern UI/UX practices, delivering responsive and maintainable solutions.',
  },

  // work_experience

  work_section_title: { pt: 'Experiência', en: 'Experience' },
  work_section_subtext: { pt: 'O que eu já fiz', en: "What I've done" },

  work_wrmt_title: { pt: 'Desenvolvedor FullStack', en: 'FullStack Developer' },
  work_wrmt_date: { pt: 'Ago 2024 - Presente', en: 'Aug 2024 - Present' },
  work_wrmt_points: {
    pt: [
      'Fintech em Brasília focada em aplicações escaláveis.',
      'Desenvolvimento FullStack com Next.js, React, TypeScript, Tailwind, Zustand e NestJS.',
      'Criação de componentes reutilizáveis, arquitetura modular multi-app e integração com RabbitMQ.',
    ],
    en: [
      'Fintech in Brasília focused on scalable applications.',
      'FullStack development with Next.js, React, TypeScript, Tailwind, Zustand, and NestJS.',
      'Built reusable components, modular multi-app architecture, and integrated RabbitMQ for scalable solutions.',
    ],
  },

  work_senai_title: { pt: 'Professor de Web Design', en: 'Web Design Teacher' },
  work_senai_date: { pt: 'Abr 2024 - Ago 2024', en: 'Abr 2024 - Aug 2024' },
  work_senai_points: {
    pt: [
      'Foco nos fundamentos: JS, Git, Bootstrap, CSS, Gulp, SASS e HTML.',
      'Metodologia centrada no aluno.',
      'Ênfase em habilidades de resolução de problemas.',
    ],
    en: [
      'Focus on fundamentals: JS, Git, Bootstrap, CSS, Gulp, SASS, and HTML.',
      'Student-centered teaching approach.',
      'Emphasis on problem-solving skills.',
    ],
  },

  work_telus_moderator_title: { pt: 'Moderador', en: 'Moderator' },
  work_telus_mod_date: { pt: 'Abr 2024 - Ago 2024', en: 'Abr 2024 - Aug 2024' },
  work_telus_moderator_points: {
    pt: [
      'Recepção e orientação de participantes em sessões controladas.',
      'Sessões remotas assistidas para configuração de dispositivos para pesquisa.',
      'Suporte contínuo durante o processo.',
      'Representação da marca TELUS International AI no Brasil.',
    ],
    en: [
      'Greet and guide participants through sessions in a controlled environment.',
      'Conduct remote guided sessions to assist participants in setting up their devices for research purposes.',
      'Provide ongoing support to address queries and resolve technical issues that may arise during the process.',
      'Represent and promote the TELUS International AI brand in Brazil.',
    ],
  },

  work_innovats_title: { pt: 'Desenvolvedor React', en: 'React Developer' },
  work_innovats_date: { pt: 'Jul 2023 - Jul 2024', en: 'Jul 2023 - Jul 2024' },
  work_innovats_points: {
    pt: [
      'Desenvolvimento e manutenção de aplicações web usando React e tecnologias relacionadas.',
      'Colaboração com equipes multidisciplinares para criar produtos de alta qualidade.',
      'Implementação de design responsivo e compatibilidade entre navegadores.',
      'Participação em revisões de código.',
    ],
    en: [
      'Development and maintenance of web applications using React and other related technologies.',
      'Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews.',
    ],
  },

  work_telus_analyst_title: { pt: 'Analista de Dados', en: 'Data Analyst' },
  work_telus_date: { pt: 'Mar 2023 - Abr 2024', en: 'Mar 2023 - Apr 2024' },
  work_telus_analyst_points: {
    pt: [
      'Avaliador de buscas, avaliando a precisão das pesquisas.',
      'Análise de intenção e precisão de consultas de busca.',
      'Aplicação de conhecimento de mercado com diretrizes para avaliar relevância e intenção.',
    ],
    en: [
      'Search evaluator, specifically evaluating the accuracy of searches.',
      "Evaluating the intent and accuracy of queries, and whether the search engine can identify the user's intent.",
      'Applying market knowledge with provided guidelines to evaluate the relevance and intent of task information for partner search engines.',
    ],
  },

  work_bahia_title: { pt: 'Professor Residente', en: 'Resident Teacher' },
  work_bahia_date: { pt: 'Out 2022 - Abr 2024', en: 'Oct 2022 - Apr 2024' },
  work_bahia_points: {
    pt: [
      'Professor de programação básica em Java.',
      'Conceitos de programação, estrutura sequencial, condicional e de repetição.',
      'Orientação a objetos, construtores, sobrecarga, encapsulamento.',
    ],
    en: [
      'Basic Java programming teacher.',
      'Programming concepts, sequential structure, conditional structure, repetitive structures.',
      'Object Orientation, constructors, overloading, encapsulation.',
    ],
  },

  work_valenca_title: {
    pt: 'Proxy Product Owner · Soluções EdTech',
    en: 'Proxy Product Owner · EdTech Solutions',
  },
  work_valenca_date: { pt: 'Mai 2022 - Ago 2024', en: 'May 2022 - Aug 2024' },
  work_valenca_points: {
    pt: [
      'Liderança na transformação digital do sistema educacional de 137 escolas.',
      'Ponte entre usuários e equipe de desenvolvimento, convertendo demandas em requisitos técnicos claros.',
      'Gerenciamento completo de tickets, priorizando soluções definitivas.',
      'Criação de documentação para onboarding e treinamento de professores e coordenadores.',
    ],
    en: [
      'Led the digital transformation of 137 schools’ educational system.',
      'Served as liaison between users and development team, translating needs into clear technical requirements.',
      'Managed full ticket lifecycle, prioritizing permanent solutions.',
      'Developed documentation for onboarding and training of teachers and coordinators.',
    ],
  },

  //personal Projects section

  works_section_subtext: {
    pt: 'Meu trabalho',
    en: 'My work',
  },
  works_section_title: {
    pt: 'Projetos.',
    en: 'Projects.',
  },
  works_section_description: {
    pt: 'Como profissional, estou sempre em busca de desafios empolgantes que me permitam crescer profissionalmente e contribuir positivamente para a equipe. Aqui estão alguns dos meus projetos mais recentes.',
    en: 'As a professional, I am always seeking exciting challenges that allow me to grow professionally and positively contribute to the team. Here are some of my latest projects.',
  },

  // Projects - names
  projects_codeforge_name: { pt: 'CodeForge Academy', en: 'CodeForge Academy' },
  projects_codeforge_description: {
    pt: 'Uma plataforma de estudos moderna e interativa criada do zero para minha universidade IFBA. Construída com Next.js 15, TypeScript, Tailwind CSS, Express, Prisma, Redis, Postgres, Datadog e Socket.IO. Possui server components, autenticação moderna e um design de UI/UX bonito.',
    en: 'A modern and interactive study platform made from scratch for my university IFBA. Built with Next.js 15, TypeScript, Tailwind CSS, Express, Prisma, Redis, Postgres, Datadog, and Socket.IO. Features server components, modern authentication, and a beautiful UI/UX design.',
  },

  projects_efood_name: { pt: 'E Food', en: 'E Food' },
  projects_efood_description: {
    pt: 'E-Food é uma plataforma de e-commerce para entrega de restaurantes. A página exibe seis restaurantes, cada um com seu próprio cardápio, todos importados do back-end. O front-end se atualiza dinamicamente com novos restaurantes com base nos dados do back-end.',
    en: 'E-Food is an e-commerce platform for restaurant delivery. The page features six restaurants, each with its own menu, all imported from the back end. The front end dynamically updates with new restaurants based on backend data.',
  },

  projects_eplay_name: { pt: 'E Play Store', en: 'E Play Store' },
  projects_eplay_description: {
    pt: 'E-Play é uma plataforma de e-commerce de jogos digitais. Apresenta uma variedade de jogos e categorias com páginas de detalhes dinâmicas, todos importados do back-end. A plataforma se atualiza automaticamente quando novos jogos são adicionados.',
    en: 'E-Play is a digital game e-commerce platform. It features a variety of games and categories with dynamic detail pages, all imported from the backend. It updates automatically when new games are added.',
  },

  projects_iphone15_name: { pt: 'iPhone 15 Pro Website', en: 'iPhone 15 Pro Website' },
  projects_iphone15_description: {
    pt: 'Reconstrução do site do iPhone 15 Pro da Apple com uma combinação fluida de animações GSAP e efeitos 3D usando Three.js. Inclui animações personalizadas, modelos 3D interativos e narrativa visual dinâmica.',
    en: 'Recreating the Apple iPhone 15 Pro website with a seamless blend of GSAP animations and Three.js 3D effects. Includes custom animations, interactive 3D models, and visual storytelling.',
  },

  //feedback section
  feedback_text: {
    pt: 'O que outros têm a dizer',
    en: 'What others have to say',
  },
  feedback_title: {
    pt: 'Depoimentos.',
    en: 'Feedback.',
  },
  feedback_noun: {
    pt: 'em',
    en: 'in',
  },
  // Testimonials
  testimonials_manoel_testimonial: {
    pt: 'Com a colaboração crucial de Marvin, a implementação do sistema educacional se tornou um empreendimento de sucesso.',
    en: "With Marvin's crucial collaboration, the implementation of the education system became a successful endeavor.",
  },
  testimonials_manoel_name: { pt: 'Manoel Soares', en: 'Manoel Soares' },
  testimonials_manoel_designation: { pt: 'Diretor de Tecnologia', en: 'Technology Director' },
  testimonials_manoel_company: {
    pt: 'Prefeitura Municipal de Valença.',
    en: 'Prefeitura Municipal de Valença.',
  },

  testimonials_addson_testimonial: {
    pt: 'Marvin brilha nas aulas de web! Muito dedicado e habilidoso, extremamente competitivo. Sempre com grandes entregas!',
    en: 'Marvin shines in web classes! Very dedicated and skilled, extremely competitive. Always with great deliveries!',
  },
  testimonials_addson_name: { pt: 'Addson Araujo', en: 'Addson Araujo' },
  testimonials_addson_designation: { pt: 'Professor', en: 'Professor' },
  testimonials_addson_company: { pt: 'IFBA', en: 'IFBA' },

  testimonials_victor_testimonial: {
    pt: 'Seu trabalho inovador e dedicação são incomparáveis. Ele atuou em vários projetos como desenvolvedor front-end.',
    en: 'His innovative work and dedication are unmatched, he has worked on various projects as a front-end developer.',
  },
  testimonials_victor_name: { pt: 'Victor Calazans', en: 'Victor Calazans' },
  testimonials_victor_designation: { pt: 'CEO', en: 'CEO' },
  testimonials_victor_company: { pt: 'Innovats', en: 'Innovats' },

  //Contact Section
  contact_text: { pt: 'Entre em Contato', en: 'Get in Touch' },
  contact_title: { pt: 'Contato.', en: 'Contact.' },
  contact_camp_name: { pt: 'Seu Nome', en: 'Your Name' },
  contact_camp_name_placeholder: { pt: 'Qual o seu nome?', en: 'What is your name?' },
  contact_camp_email: { pt: 'Seu Email', en: 'Your Email' },
  contact_camp_email_placeholder: { pt: 'Digite seu Email', en: 'Enter your Email' },
  contact_camp_message: { pt: 'Sua Mensagem', en: 'Your Message' },
  contact_camp_message_placeholder: {
    pt: 'O que você quer dizer?',
    en: 'What do you want to say?',
  },
  contact_button_sending: { pt: 'Enviando...', en: 'Sending...' },
  contact_button_send: { pt: 'Enviar', en: 'Send' },
  contact_alert: {
    pt: 'Obrigado, entrarei em contato o mais rápido possível!',
    en: 'Thank you, I will get in touch with you as soon as possible!',
  },
  contact_alert_error: { pt: 'Algo deu errado!', en: 'Something went wrong!' },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferredLanguage');
      return savedLang === 'pt' || savedLang === 'en' ? savedLang : 'en';
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
    }
  };

  const t = (key: TranslationKey) => {
    return translations[key]?.[language] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
