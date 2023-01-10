import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  vitePlugin: { experimental: { inspector: true } },
  extensions: [".svelte", ...mdsvexConfig.extensions],
  kit: {
    adapter: adapter(),
    // vite: {
    //   resolve: {
    //     alias: {
    //       // these are the aliases and paths to them
    //       "@src": path.resolve("./src/"),
    //       "@utils": path.resolve("./src/lib/utils"),
    //     },
    //   },
    // },
  },
  preprocess: [preprocess({ postcss: true }), mdsvex(mdsvexConfig)],
};

export default config;
