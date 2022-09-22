import { c as create_ssr_component } from "./index.js";
import "katex";
const Katexer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `




${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"}" integrity="${"sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"}" crossorigin="${"anonymous"}" data-svelte="svelte-ztscxf">`, ""}`;
});
export {
  Katexer as K
};
