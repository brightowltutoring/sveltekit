import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	vitePlugin: { experimental: { inspector: true } },
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter()
	},
	preprocess: [vitePreprocess(), preprocess({ postcss: true }), mdsvex(mdsvexConfig)] // old way?
};

export default config;
