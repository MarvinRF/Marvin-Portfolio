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
    pt: 'Sou um Desenvolvedor Front-End',
    en: "I'm a Front-End Dev",
  },
  initial_text2: {
    pt: 'Especializado em criar sites modernos e responsivos.',
    en: 'Specialized in creating modern and responsive websites.',
  },

  //about
  about_text: { pt: 'Introdução', en: 'Introduction' },
  about_title: { pt: 'Visão geral.', en: 'Overview.' },
  about_description: {
    pt: 'Sou um desenvolvedor front-end especializado em React.js, apaixonado por criar e implementar interfaces de usuário de forma funcional e visualmente atraente. Com sólida experiência em tecnologias como Redux, Vue, Tailwind, Bootstrap, JavaScript, Gulp, SASS e CSS, busco constantemente aprimorar minhas habilidades para me manter atualizado com as tendências do mercado.',
    en: 'I am a front-end developer specialized in React.js, passionate about creating and implementing user interfaces in a functional and visually appealing way. With solid experience in technologies like Redux, Vue, Tailwind, Bootstrap, JavaScript, Gulp, SASS, and CSS, I am constantly seeking to improve my skills to stay updated with market trends.',
  },

  // work_experience

  work_section_title: { pt: 'Experiência', en: 'Experience' },
  work_section_subtext: { pt: 'O que eu já fiz', en: "What I've done" },

  work_wrmt_title: { pt: 'Desenvolvedor Front-End', en: 'Front end Developer' },
  work_wrmt_points: {
    pt: [
      'Fintech com sede em Brasília.',
      'Desenvolvimento com Next.js, foco em SSR, TS, Tailwind, Zustand, JWT, BFF, SASS...',
      'Implementação de componentes reutilizáveis e responsivos, garantindo uma experiência intuitiva e eficiente.',
    ],
    en: [
      'Fintech based in Brasília.',
      'Next.js developer, focus on SSR, TS, Tailwind, Zustand, JWT, Back-End for Front-End, SASS...',
      'Implementation of reusable and responsive components, ensuring an intuitive and efficient user experience.',
    ],
  },

  work_senai_title: { pt: 'Professor de Web Design', en: 'Web Design Teacher' },
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

  work_valenca_title: { pt: 'Coordenador de TI', en: 'IT Coordinator' },
  work_valenca_points: {
    pt: [
      'Liderança na transformação digital da educação em Valença-BA.',
      'Intermediação entre usuários e equipe de desenvolvimento.',
      'Atendimento a demandas e suporte técnico.',
      'Criação de documentação para onboarding de novos colaboradores.',
      'Melhoria contínua dos sistemas e processos da rede municipal.',
    ],
    en: [
      'Leading the digital transformation of the educational system in Valença-BA, managing IT services for 137 schools.',
      'Serving as the primary liaison between users and the development team, effectively translating client needs into actionable development tasks.',
      'Responding to and resolving internal and external user queries and requests.',
      'Developing comprehensive documentation to aid in the training and onboarding of new staff (including directors, secretaries, coordinators, and teachers).',
      'Driving system enhancements and process improvements through continuous feedback and collaboration with the development team.',
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
  const [language, setLanguage] = useState<Language>('pt');

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
