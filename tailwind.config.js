/* eslint-disable import/no-extraneous-dependencies */

const clamp = require('@tailwindcss/line-clamp');
const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      colors: {
        primary: '#253f4c',
        secondary: '#832f39',
      },
    },
  },
  plugins: [
    clamp,
    typography,
  ],
};
