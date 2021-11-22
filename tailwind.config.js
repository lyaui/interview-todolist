module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#CBE5FE',
          dark: '#b2d8fe',
        },
        green: {
          DEFAULT: '#D4EDDA',
          dark: '#c2e5cb',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
