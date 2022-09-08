import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index.js";
const MathJax_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `







${$$result.head += `<script src="${"https://polyfill.io/v3/polyfill.min.js?features=es6"}" data-svelte="svelte-vs9z3k"><\/script><script id="${"MathJax-script"}" async src="${"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"}" data-svelte="svelte-vs9z3k"><\/script>`, ""}`;
});
let curlyBackticks = " `{x}` ";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fracHalf = "\\frac{x}{2}";
  return `${validate_component(MathJax_1, "MathJax").$$render($$result, {}, {}, {})}


<div>Mathjax is alright in vanilla html/js but flickers when using component frameworks (like this here svelte). Additionally reloads crashes the mathjax. Additionally expressions like ${escape(fracHalf)} aren&#39;t processed properly since svelte views the curly-braces-around-x as it&#39;s notation for rendering JS variable &quot;x&quot; in the html. To get it to work have to replace x with curly backticks expression ${escape(curlyBackticks)} within the code
	<br>
	<br>


	$e^x = \\frac${escape(2)}${escape(3)}$
	$$e^x = \\frac${escape(2)}${escape(3)}$$

	<div>$$e^x = \\frac${escape(`{x}`)}${escape(3)}$$
	</div></div>`;
});
export {
  Page as default
};
