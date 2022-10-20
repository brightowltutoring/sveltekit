import { c as create_ssr_component } from "./index.js";
import "katex";
const Kajax = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"}" integrity="${"sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"}" crossorigin="${"anonymous"}" data-svelte="svelte-15ncbow"><script data-svelte="svelte-15ncbow">MathJax = {
      // startup: { typeset: false },
      // startup: { elements: ["[m]"] },
      loader: { load: ["[tex]/physics", "[tex]/cancel"] },
      tex: {
        packages: {
          "[+]": ["physics", "cancel"],
        },
        inlineMath: [
          ["$", "$"],
          ["\\\\(", "\\\\)"],
        ],
      },
      svg: {
        fontCache: "global",
      },
    };
  <\/script><script type="${"text/javascript"}" id="${"MathJax-script"}" async src="${"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"}" data-svelte="svelte-15ncbow"><\/script>`, ""}`;
});
export {
  Kajax as K
};
