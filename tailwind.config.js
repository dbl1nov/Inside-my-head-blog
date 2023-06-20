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
      'blue': {
        light: '#cbe6ff',
        DEFAULT: '#4285B4',
        secondary: '#d3e4f6',
      },
      white: colors.white,
      black: colors.black,
      stone: colors.stone,
      red: colors.red,
      green: colors.green
    }
  },
  plugins: [],
}