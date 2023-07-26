/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'kalameh': ['KalamehWebFaNum', 'sans-serif']
			},
			colors:{
				primary: '#ff6600',
			},
		},
	},
	plugins: [],
}
