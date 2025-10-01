// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	site: 'https://yeriel.github.io',
	base: 'datahub',
	integrations: [
		starlight({
			title: 'DataHub',
			favicon: './src/assets/oso/oso_favicon.svg',
			logo: {
				src: './src/assets/oso/oso_head.webp',
				alt: 'Logo'
			},
			locales: {
			   root: {
					 label: 'Español',
					 lang: 'es',
			   },
			},
			social: [
				{
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/yeriel/datahub' 
				}
				
			],
			plugins: [
				catppuccin({
					dark: { flavor: "macchiato", accent: "mauve" },
          			light: { flavor: "latte", accent: "mauve" }
				})
			],
			sidebar: [
				{
					label: '¿Qué es DataHub?',
					link: '/datahub'
				},
				{
					label: 'Machine Learning',
					autogenerate: { directory: 'machine_learning' },
				}
			],
		}),
	],
});
