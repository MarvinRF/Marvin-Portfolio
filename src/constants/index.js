import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  postgre,
  java,
  git,
  figma,
  sass,
  bootstrap,
  vue,
  valenca,
  bahia,
  telus,
  innovats,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Java',
    icon: backend,
  },
  {
    title: 'Java Professor',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'SASS',
    icon: sass,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Vue',
    icon: vue,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Postgre',
    icon: postgre,
  },
  {
    name: 'Java',
    icon: java,
  },
];

const inicio = {
  title: 'Oi, eu sou o ',
  span: 'Marvin',
  text: 'Sou Desenvolvedor Front-End',
  text2: 'Especializado na criação de sites modernos e responsivos.',
};

const about = {
  text: 'Introdução',
  title: 'Visão Geral.',
  description:
    'Desde que comecei a programar em 2017, fui aprendendo e crescendo e apanhando.',
};

const works = {
  text: 'Meu trabalho',
  title: 'Projetos.',
  description:
    'Desde que comecei a programar em 2017, fui aprendendo e crescendo e apanhando.',
};

const feedback = {
  text: 'O que outros tem a dizer',
  title: 'Feedback.',
};

const experience = {
  text: 'O que eu ja fiz até aqui',
  title: 'Experiência de Trabalho.',
};

const experiences = [
  {
    title: 'React Developer',
    company_name: 'Innovats (meio periodo)',
    icon: innovats,
    iconBg: '#383E56',
    date: 'Jul de 2023 - Presente',
    points: [
      'Desenvolvimento e manutenção de aplicações web utilizando React e outras tecnologias relacionadas.',
      'Colaboração com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.',
      'Implementando design responsivo e garantindo compatibilidade entre diferentes navegadores.',
      'Participação de revisões de código.',
    ],
  },
  {
    title: 'Analista de Dados',
    company_name: 'TELUS International (Freelance)',
    icon: telus,
    iconBg: '#E6DEDD',
    date: 'Mar de 2023 - Presente',
    points: [
      'Avaliador de buscas, especificamente como a avaliação da precisão de buscas.',
      'Avalio a intenção e a precisão das consultas, e se o motor de busca consegue identificar a intenção do usuário.',
      'Aplico o conhecimento do mercado com as diretrizes fornecidas para avaliar a relevância e a intenção das informações das tarefas para mecanismos de busca parceiros.',
    ],
  },
  {
    title: 'Professor Residente',
    company_name: 'Colégio Estadual Gentil Paraiso Martins (Noturno)',
    icon: bahia,
    iconBg: '#383E56',
    date: 'Out de 2022 - Presente',
    points: [
      'Professor de programação Java básico.',
      'Conceitos de programação, estrutura sequencial, estrutura condicional, estruturas repetitivas.',
      'Orientação a Objetos, construtores, sobrecarga, encapsulamento.',
    ],
  },
  {
    title: 'Coordenador de Ti',
    company_name: 'Prefeitura de Valença-Ba (Meio Periodo)',
    icon: valenca,
    iconBg: '#E6DEDD',
    date: 'Mai de 2022 - Presente',
    points: [
      'Líder no processo de informatização da educação do município de Valença-BA , atendimento a 137 escolas.',
      'Atendimento às dúvidas e solicitações de usuários internos e externos.',
      'Criar documentações que facilitem o aprendizado de novos colaboradores(diretores, secretários, coordenadores e professores).',
      'Identificação de melhorias no sistema e no processo de atendimento (junto a equipe de desenvolvimento).',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export {
  services,
  technologies,
  experiences,
  experience,
  inicio,
  about,
  works,
  feedback,
  testimonials,
  projects,
};
