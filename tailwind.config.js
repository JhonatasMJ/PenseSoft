/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Libre Franklin"', 'sans-serif'], 
      },
      colors: {
        'ciano': '#21B2D8',
        'ciano-claro': '#0BA9D2',
        'azul': '#2E5077',
        'cinza': '#3A3A3A',
      },
      backgroundImage: {
        'lines': "url('./assets/imgs/bg-line.svg')",
      },
      boxShadow: {
        'custom-ciano': '0 8px 20px -1px rgba(33, 178, 216, 0.5)',
      },
    },
  },
  plugins: [],
}
