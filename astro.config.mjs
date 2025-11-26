// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.oeiuwq.com',
	base: '',
	integrations: [
		starlight({
            customCss: ['./src/assets/styles.css', '@fontsource/victor-mono'],
			plugins: [
			  catppuccin(),
			],
			title: '<blog>',
			social: [
			  { icon: 'heart', label: 'GitHub Sponsor', href: 'https://github.com/sponsors/vic' },
			  { icon: 'homebrew', label: 'Kofi', href: 'https://ko-fi.com/oeiuwq' },
			  { icon: 'github', label: 'GitHub', href: 'https://github.com/vic' },
			  { icon: 'twitter', label: 'Twitter', href: 'https://x.com/oeiuwq' },
			  { icon: 'blueSky', label: 'BlueSky', href: 'https://bsky.app/profile/oeiuwq.com' },
			  { icon: 'nix', label: 'Nix', href: 'https://discourse.nixos.org/u/vic/summary' },
			  { icon: 'email', label: 'Email', href: 'mailto:vborja@apache.org' },
	   	    ],
			components: {
				PageSidebar: './src/components/PageSidebar.astro',
				SocialIcons: './src/components/SocialIcons.astro',
				Search: './src/components/Search.astro',
			},
			sidebar: [
				{
				  slug: '',
				},
			],
		}),
	],
});
