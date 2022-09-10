import { c as create_ssr_component, v as validate_component, e as escape, g as each } from "../../../chunks/index.js";
const MathJax_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
let curlyBackticks = " `{x}` ";
let num = 10;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fracHalf = "\\frac{x}{2}";
  return `${validate_component(MathJax_1, "MathJax").$$render($$result, {}, {}, {})}


<p>Mathjax is alright in vanilla html/js but flickers when using component frameworks (like this here svelte). Additionally reloads crashes the mathjax. Additionally expressions like ${escape(fracHalf)} aren&#39;t processed properly since svelte views the curly-braces-around-x as it&#39;s notation for rendering JS variable &quot;x&quot; in the html. To get it to work have to replace x with curly backticks expression ${escape(curlyBackticks)} within the code
<br></p>


${each(Array(num), (_, i) => {
    return `<p>
		${escape(i)} 

		$$ \\frac${escape(`{x}`)}${escape(3)} $$

		$\\frac${escape(`{x}`)}${escape(3)}$

		${escape(`$$\\frac{x}{3}$$`)}
		${escape(`$$ 
			S (\\omega)=\\frac{\\alpha g^2}{\\omega^5} ,
		e ^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]} 
		$$`)}</p>
	`;
  })}`;
});
export {
  Page as default
};
