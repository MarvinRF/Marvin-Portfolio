/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx}'];
export const mode = 'jit';
export const theme = {
  extend: {
    colors: {
      primary: '#F0D1B8',
      secondary: '#FCF7FE',
      tertiary: '#00263b',
      'black-100': '#0d1525',
      'black-200': '#024163',
      'white-100': '#f3f3f3',
    },
    boxShadow: {
      card: '0px 35px 120px -15px #211e35',
    },
    screens: {
      xs: '450px',
    },
    backgroundImage: {
      'hero-pattern': "url('/src/assets/herowars.jpg')",
    },
  },
};
export const plugins = [];
