/* eslint-disable import/no-extraneous-dependencies */

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
        primary: '#3D4550',
        secondary: '#DD704D',
      },
    },
  },
  plugins: [
    typography,
  ],
};
