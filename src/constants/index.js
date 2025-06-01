javascript;
import {
  manoel,
  codeforge,
  efod,
  eplay,
  minhafoto,
  victor,
  addson,
  zustand,
  creator,
  mobile,
  web,
  express,
  next,
  bootstrap,
  sass,
  react,
  reactquery,
  nest,
  typeorm,
  redis,
  prisma,
  javascript,
  postgre,
  redux,
  tailwind,
  typescript,
  threejs,
  valenca,
  bahia,
  innovats,
  telus,
  senai,
  wrm,
  todo,
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
    title: 'Next.js',
    icon: web,
  },
  {
    title: 'React.js',
    icon: mobile,
  },
  {
    title: 'Zustand',
    icon: zustand,
  },
  {
    title: 'React Query',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Next.js',
    icon: next,
  },
  {
    name: 'React',
    icon: react,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Zustand',
    icon: zustand,
  },
  {
    name: 'query',
    icon: reactquery,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Sass',
    icon: sass,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Express',
    icon: express,
  },
  {
    name: 'Nest.js',
    icon: nest,
  },
  {
    name: 'TypeOrm',
    icon: typeorm,
  },
  {
    name: 'Redis',
    icon: redis,
  },
  {
    name: 'Prisma',
    icon: prisma,
  },
  {
    name: 'Postgres',
    icon: postgre,
  },
];

const initial = {
  title: 'Hi, I am ',
  span: 'Marvin',
  text: "I'm a Front-End Dev",
  text2: 'Specialized in creating modern and responsive websites.',
};

const about = {
  text: 'Introduction',
  title: 'Overview.',
  foto: minhafoto,
  description:
    'I am a front-end developer specialized in React.js, passionate about creating and implementing user interfaces in a functional and visually appealing way. With solid experience in technologies like Redux, Vue, Tailwind, Bootstrap, JavaScript, Gulp, SASS, and CSS, I am constantly seeking to improve my skills to stay updated with market trends.',
};

const works = {
  text: 'My work',
  title: 'Projects.',
  description:
    'As a professional, I am always seeking exciting challenges that allow me to grow professionally and positively contribute to the team. Here are some of my latest projects.',
};

const feedback = {
  text: 'What others have to say',
  title: 'Feedback.',
  noun: 'in',
};

const experience = {
  text: 'What I have done so far',
  title: 'Work Experience.',
};

const contact = {
  text: 'Get in Touch',
  title: 'Contact.',
  camp_name: 'Your Name',
  camp_name_placeholder: 'What is your name?',
  camp_email: 'Your Email',
  camp_email_placeholder: 'Enter your Email',
  camp_message: 'Your Message',
  camp_message_placeholder: 'What do you want to say?',
  button_sending: 'Sending...',
  button_send: 'Send',
  alert: 'Thank you, I will get in touch with you as soon as possible!',
  alert_error: 'Something went wrong!',
};

const experiences = [
  {
    title: 'Front end Developer',
    company_name: 'WRM Tecnologia',
    icon: wrm,
    iconBg: '#E6DEDD',
    date: 'Aug 2024 - Present',
    points: [
      'Fintech based in Brasília.',
      'Next.js developer, focus on SSR, TS, Tailwind, Zustand, JWT, Back-End for Front-End, SASS...',
      'Implementation of reusable and responsive components, ensuring an intuitive and efficient user experience.',
    ],
  },
  {
    title: 'Web Design Teacher',
    company_name: 'Senai (Part-time Contract afternoons)',
    icon: senai,
    iconBg: '#383E56',
    date: 'Abr 2024 - Aug 2024',
    points: [
      'Focus on fundamentals: JS, Git, Bootstrap, CSS, Gulp, SASS, and HTML.',
      'Student-centered teaching approach.',
      'Emphasis on problem-solving skills.',
    ],
  },
  {
    title: 'Moderator',
    company_name: 'TELUS International',
    icon: telus,
    iconBg: '#E6DEDD',
    date: 'Abr 2024 - Aug 2024',
    points: [
      'Greet and guide participants through sessions in a controlled environment.',
      'Conduct remote guided sessions to assist participants in setting up their devices for research purposes.',
      'Provide ongoing support to address queries and resolve technical issues that may arise during the process.',
      'Represent and promote the TELUS International AI brand in Brazil.',
    ],
  },
  {
    title: 'React Developer',
    company_name: 'Innovats',
    icon: innovats,
    iconBg: '#383E56',
    date: 'Jul 2023 - Jul 2024',
    points: [
      'Development and maintenance of web applications using React and other related technologies.',
      'Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews.',
    ],
  },
  {
    title: 'Data Analyst',
    company_name: 'TELUS International',
    icon: telus,
    iconBg: '#E6DEDD',
    date: 'Mar 2023 - Apr 2024',
    points: [
      'Search evaluator, specifically evaluating the accuracy of searches.',
      "Evaluating the intent and accuracy of queries, and whether the search engine can identify the user's intent.",
      'Applying market knowledge with provided guidelines to evaluate the relevance and intent of task information for partner search engines.',
    ],
  },
  {
    title: 'Resident Teacher',
    company_name: 'Colégio Estadual Gentil Paraíso Martins (Night)',
    icon: bahia,
    iconBg: '#383E56',
    date: 'Oct 2022 - Apr 2024',
    points: [
      'Basic Java programming teacher.',
      'Programming concepts, sequential structure, conditional structure, repetitive structures.',
      'Object Orientation, constructors, overloading, encapsulation.',
    ],
  },
  {
    title: 'IT Coordinator',
    company_name: 'Prefeitura de Valença-Ba (Part-time contract morning)',
    icon: valenca,
    iconBg: '#E6DEDD',
    date: 'May 2022 - Jan 2025',
    points: [
      'Leading the digital transformation of the educational system in Valença-BA, managing IT services for 137 schools.',
      'Serving as the primary liaison between users and the development team, effectively translating client needs into actionable development tasks.',
      'Responding to and resolving internal and external user queries and requests.',
      'Developing comprehensive documentation to aid in the training and onboarding of new staff (including directors, secretaries, coordinators, and teachers).',
      'Driving system enhancements and process improvements through continuous feedback and collaboration with the development team.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "With Marvin's crucial collaboration, the implementation of the education system became a successful endeavor.",
    name: 'Manoel Soares',
    designation: 'Technology Director',
    company: 'Prefeitura Municipal de Valença.',
    image: manoel,
  },
  {
    testimonial:
      'Marvin shines in web classes! Very dedicated and skilled, extremely competitive. Always with great deliveries!',
    name: 'Addson Araujo',
    designation: 'Professor',
    company: 'IFBA',
    image: addson,
  },
  {
    testimonial:
      'His innovative work and dedication are unmatched, he has worked on various projects as a front-end developer.',
    name: 'Victor Calazans',
    designation: 'CEO',
    company: 'Innovats',
    image: victor,
  },
];

const projects = [
  {
    name: 'CodeForge Academy',
    description:
      'A modern and interactive study platform made from scratch for my university IFBA, I built with Next.js 15, TypeScript, Tailwind CSS, Express, Prisma, Redis, Postgres, Datadog, Socket.IO. Features server components, modern authentication, and a beautiful UI/UX design.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'GSAP',
        color: 'blue-text-gradient',
      },
      {
        name: 'Fullstack',
        color: 'pink-text-gradient',
      },
    ],
    image: codeforge,
    source_code_link: 'https://github.com/MarvinRF/todo-react',
    vercel_code_link: 'https://www.codeforgeacademy.com.br/',
  },
  {
    name: 'E Food',
    description:
      'E-Food is an e-commerce platform for restaurant delivery. The page features six restaurants, each with its own menu, all imported from the back end. My idea was to create a dynamic front end that updates automatically when new establishments are added. This way, upon making a request to the back end, the front end automatically includes new restaurants.',
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
    image: efod,
    source_code_link: 'https://github.com/MarvinRF/todo-react',
    vercel_code_link: 'https://e-food-app-rho.vercel.app/',
  },
  {
    name: 'E Play Store',
    description:
      'E-Play is a digital game e-commerce platform. The page features a variety of games and categories, each with its own dedicated detail page, all dynamically imported from the back end. My goal was to build a responsive front end that updates automatically whenever new games are added. This way, every request to the back end seamlessly integrates new games into the platform.',
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
    image: eplay,
    source_code_link: 'https://github.com/MarvinRF/todo-react',
    vercel_code_link: 'https://e-play-store-plum.vercel.app/',
  },
  {
    name: 'iPhone 15 Pro Website',
    description:
      'Recreating the Apple iPhone 15 Pro website with a seamless blend of GSAP animations and Three.js 3D effects. This tutorial takes you through custom animations, interactive 3D models, and dynamic visual storytelling.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'Tree.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'GSAP',
        color: 'blue-text-gradient',
      },
    ],
    image: todo,
    source_code_link: 'https://github.com/MarvinRF/apple-website',
    vercel_code_link: 'https://apple-website-sooty.vercel.app/',
  },
];

export {
  services,
  technologies,
  experiences,
  experience,
  initial,
  contact,
  about,
  works,
  feedback,
  testimonials,
  projects,
};
