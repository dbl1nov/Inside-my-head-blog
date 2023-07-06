/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'Green': {
        light: '#6EEB83',
        DEFAULT: '#6EEB83',
        secondary: '#6EEB83',
      },
      white: colors.white,
      black: colors.black,
      stone: colors.stone,
      red: colors.red,
      green: colors.green
    },
    fontFamily: {
      'Title': 'Alegreya Sans',
      'about': 'Exo 2',
    }
  },

  plugins: [],
}