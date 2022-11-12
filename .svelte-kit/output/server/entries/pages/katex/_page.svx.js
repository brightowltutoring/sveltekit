import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, d as add_attribute, j as each } from "../../../chunks/index.js";
import "katex";
import { i as isDarkMode } from "../../../chunks/store.js";
const Katexer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `




${$$result.head += `<!-- HEAD_svelte-ztscxf_START --><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"}" integrity="${"sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"}" crossorigin="${"anonymous"}"><!-- HEAD_svelte-ztscxf_END -->`, ""}`;
});
let numMax = 1e3;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let proseInvert;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let num = numMax;
  let equations = [
    "\\int_{M}d\\omega=\\int_{\\partial M}\\omega",
    "G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}",
    " (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ",
    "\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}",
    "z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"
  ];
  proseInvert = $isDarkMode ? "prose-invert" : "";
  $$unsubscribe_isDarkMode();
  return `${validate_component(Katexer, "MathLazyRenderer").$$render($$result, {}, {}, {})}
<article class="${"prose lg:prose-lg " + escape(proseInvert, true)}"><h1>This page lazy-rendered using Katex</h1>
<input type="${"number"}" min="${"1"}"${add_attribute("max", numMax, 0)}${add_attribute("value", num, 0)}>
<input type="${"range"}" min="${"1"}"${add_attribute("max", numMax, 0)}${add_attribute("value", num, 0)}>
<h2>${escape(num)} sections; ${escape(num * equations.length)} equations below</h2>
${each(Array(num), (_, j) => {
    return `<div>${escape(j + 1)}</div>
    ${each(equations, (eqn) => {
      return `<p class="${"p-1 text-indigo-700"}" d${add_attribute("k", eqn, 0)}></p>`;
    })}`;
  })}</article>`;
});
export {
  Page as default
};
