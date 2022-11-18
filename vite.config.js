import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  build: {
    rollupOptions: {
      external: [
        "/Users/brightowl/Documents/GitHub/sveltekit/node_modules/dropzone/dist/dropzone.css",
      ],
      //   external: ["/path/to/external/module.es.js"],
    },
  },
};

export default config;
