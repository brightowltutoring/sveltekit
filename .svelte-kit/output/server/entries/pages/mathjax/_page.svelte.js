import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index.js";
const MathJax = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<script src="${"https://polyfill.io/v3/polyfill.min.js?features=es6"}" data-svelte="svelte-12gttbm"><\/script><script id="${"MathJax-script"}" async src="${"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"}" data-svelte="svelte-12gttbm"><\/script>`, ""}










`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MathJax, "MathJax").$$render($$result, {}, {}, {})}


<p>Mathjax is alright in vanilla html/js but flickers when using component frameworks (like this here svelte). Additionally reloads crashes the mathjax.
	<br>
	<br>
    The slope of the radial line is: $$e^x = \\frac${escape(2)}${escape(3)}$$
</p>`;
});
export {
  Page as default
};
