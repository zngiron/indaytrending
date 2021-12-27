const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      fontFamily: {
        sans: '-apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      },
      colors: {
        primary: '#253f4c',
        secondary: '#832f39',
      },
      boxShadow: {
        DEFAULT: '0 0 2.5rem #0001;',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    typography,
  ],
};
