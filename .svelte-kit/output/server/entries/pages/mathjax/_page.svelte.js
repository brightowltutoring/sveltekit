import { c as create_ssr_component, v as validate_component, e as escape, g as each } from "../../../chunks/index.js";
const MathJax_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
let num = 50;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MathJax_1, "MathJax").$$render($$result, {}, {}, {})}

<p>$ \\frac${escape(`{x}`)}${escape(3)} $ $$ \\frac${escape(`{x}`)}${escape(3)} $$
  ${escape(`$$\\frac{x}{3}$$`)}

  ${escape(`$$ 
	S (\\omega)=\\frac{\\alpha g^2}{\\omega^5} ,
	e ^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]} 
	$$`)}</p>

${each(Array(num), (_, i) => {
    return `<details open>
    <summary>${escape(i)}</summary>
    <p>$$ \\frac${escape(`{x}`)}${escape(3)} $$
      ${escape(`$$\\frac{x}{3}$$`)}

      ${escape(`$$ 
			S (\\omega)=\\frac{\\alpha g^2}{\\omega^5} ,
			e ^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]} 
			$$`)}</p>
  </details>`;
  })}`;
});
export {
  Page as default
};
