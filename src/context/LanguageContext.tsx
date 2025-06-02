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
