/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        default: '0px 0px 10px rgba(0, 0, 0, 0.15)',
        mini: '0px 0px 4px rgba(0, 0, 0, 0.15)'
      },
      colors: {
        primary:'#9ED5C5',
      }
    },
  },
  plugins: [],
};