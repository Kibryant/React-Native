/** @type {import('tailwindcss').Config} */
/* eslint-disable */

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset').default],
  theme: {
    extend: {},
  },
  plugins: [],
}
