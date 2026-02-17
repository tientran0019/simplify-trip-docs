import type { Config } from 'tailwindcss';

export default {
	darkMode: "class",
	content: [
		"./theme.config.tsx",
		'./pages/**/*.{js,jsx,ts,tsx,md,mdx}',
		'./src/**/*.{js,jsx,ts,tsx,md,mdx}'
	],
	theme: {
		extend: {
			colors: {
				brand: {
					50: 'rgba(145, 164, 128, 1)',
					100: 'rgba(134, 155, 115, 1)',
					200: 'rgba(123, 146, 102, 1)',
					300: 'rgba(112, 137, 89, 1)',
					400: 'rgba(101, 128, 77, 1)',
					DEFAULT: '#234900',
					500: '#234900',
					600: 'rgba(28, 58, 0, 1)',
					700: 'rgba(30, 62, 0, 1)',
					800: 'rgba(32, 66, 0, 1)',
					900: 'rgba(33, 69, 0, 1)'
				},
				secondary: {
					50: 'rgba(241, 218, 153, 1)',
					100: 'rgba(240, 214, 142, 1)',
					200: 'rgba(238, 210, 132, 1)',
					300: 'rgba(237, 206, 122, 1)',
					400: 'rgba(235, 203, 112, 1)',
					DEFAULT: '#E3B432',
					500: '#E3B432',
					600: 'rgba(182, 144, 40, 1)',
					700: 'rgba(193, 153, 43, 1)',
					800: 'rgba(204, 162, 45, 1)',
					900: 'rgba(216, 171, 48, 1)'
				},
			},
		},
	},
	plugins: []
} satisfies Config;
