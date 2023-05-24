import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
// import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter(),

		alias: {
			$routes: 'src/routes',
			$src: 'src'
		}
	},
	vitePlugin: {
		inspector: true
	},

	preprocess: [/* preprocess({ postcss: true }), */ vitePreprocess(), mdsvex(mdsvexConfig)]
};

export default config;
