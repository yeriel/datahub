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
					href: 'https://github.com/yeriel' 
				},
				{
					icon: 'linkedin', 
					label: 'Linkedin', 
					href: 'https://linkedin.com/in/yeriel-paz' 
				},
				
			],
			plugins: [
				catppuccin({
					dark: { flavor: "macchiato", accent: "sky" },
          			light: { flavor: "latte", accent: "sky" }
				})
			],
			sidebar: [
				{
					label: 'Deep Learning',
					autogenerate: { directory: 'deeplearning' },
				},

			],
		}),
	],
});

