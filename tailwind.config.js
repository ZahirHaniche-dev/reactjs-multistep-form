/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'], // Utilisez votre police ici
      },
    },
  },
  plugins: [],
}



