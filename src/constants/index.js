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
  bootstrap,
  vue,
  valenca,
  bahia,
  telus,
  innovats,
  todo,
  onepiece,
  manoel,
  disney,
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
  noun: 'em',
};

const experience = {
  text: 'O que eu ja fiz até aqui',
  title: 'Experiência de Trabalho.',
};

const contact = {
  text: 'Entre em Contato',
  title: 'Contato.',
  camp_name: 'Seu Nome',
  camp_name_placeholder: 'Como se chama?',
  camp_email: 'Seu E-mail',
  camp_email_placeholder: 'Digite o seu E-mail',
  camp_message: 'Sua Mensagem',
  camp_message_placeholder: 'O que tem a dizer?',
  button_sending: 'Enviando...',
  button_send: 'Enviar',
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
      'Com a colaboração crucial de Marvin, a implementação do sistema de educação tornou-se uma empreitada de sucesso.',
    name: 'Manoel Soares',
    designation: 'Diretor de tecnologia',
    company: 'Prefeitura Municipal de Valença.',
    image: manoel,
  },
  {
    testimonial:
      'Marvin brilha nas aulas de web! Nota 10 em dedicação e habilidades, muito competitivo. Excelente desempenho!',
    name: 'Adson Araujo',
    designation: 'Professor',
    company: 'IFBA',
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
    name: 'Lista de Tarefas',
    description:
      'Lista de Tarefas responsiva, construída com React.js, e hospedada na Vercel. Este projeto combina tecnologia de ponta com facilidade de uso, proporcionando uma experiência de gerenciamento de tarefas eficiente e intuitiva.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'vite',
        color: 'green-text-gradient',
      },
    ],
    image: todo,
    source_code_link: 'https://github.com/MarvinRF/todo-react',
    vercel_code_link: 'https://todo-react-one-red.vercel.app/',
  },
  {
    name: 'Netflix One-Piece',
    description:
      'Construí a presente página com a intenção de trazer uma cara nova para a página da série live-action de One Piece, modifiquei muita coisa que não gostava do site original da Netflix. Dei uma enxugada em alguns conteúdos e adicionei outros.',
    tags: [
      {
        name: 'gulp',
        color: 'blue-text-gradient',
      },
      {
        name: 'sass',
        color: 'green-text-gradient',
      },
      {
        name: 'javaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: onepiece,
    source_code_link: 'https://github.com/MarvinRF/One_Piece-Marvin_Rocha',
    vercel_code_link: 'https://one-piece-marvin-rocha.vercel.app/',
  },
  {
    name: 'Disney+ Clone',
    description:
      'Construí esta página durante o módulo 21 do curso Profissão: Engenheiro Front-end v2 da EBAC - Escola Britânica de Artes Criativas e Tecnologia. Destaco a utilização do SASS com metodologia (BEM) Block Element Modifier.',
    tags: [
      {
        name: 'gulp',
        color: 'blue-text-gradient',
      },
      {
        name: 'sass',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: disney,
    source_code_link: 'https://github.com/MarvinRF/Clone_DisneyPlus',
    vercel_code_link: 'https://clone-disney-plus-jcxk.vercel.app/',
  },
];

export {
  services,
  technologies,
  experiences,
  experience,
  inicio,
  contact,
  about,
  works,
  feedback,
  testimonials,
  projects,
};
