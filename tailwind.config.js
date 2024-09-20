/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Libre Franklin"', 'sans-serif'],
			},
			colors: {
				ciano: '#21B2D8',
				'ciano-claro': '#0BA9D2',
				azul: '#2E5077',
				cinza: '#3A3A3A',
				'azul-escuro': '#2e5077',
				'azul-hover': '#1d3148',
			},
			boxShadow: {
				'custom-ciano': '0 8px 20px -1px rgba(33, 178, 216, 0.5)',
			},
			inset: {
				'48p': '48%',
				'49p': '49%',
			},
			screens: {
				notebook: '1280px', // Define a resolução para notebooks com largura de 1280px
			},
		},
	},
	plugins: [],
};
