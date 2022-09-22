import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, j as add_attribute, h as each } from "../../../chunks/index.js";
import { i as isDarkMode } from "../../../chunks/store.js";
import "../../../chunks/index2.js";
const MathJaxer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<script data-svelte="svelte-1fd20gn">MathJax = {
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
  <\/script><script id="${"MathJax-script"}" async src="${"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"}" data-svelte="svelte-1fd20gn"><\/script>`, ""}`;
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
  return `${validate_component(MathJaxer, "MathLazyRenderer").$$render($$result, {}, {}, {})}
<article class="${"prose lg:prose-lg " + escape(proseInvert, true)}"><h1>This page lazy-rendered using Mathjax (using tex-mml-chtml.js NOT svg)</h1>
<input type="${"number"}" min="${"1"}"${add_attribute("max", numMax, 0)}${add_attribute("value", num, 0)}>
<input type="${"range"}" min="${"1"}"${add_attribute("max", numMax, 0)}${add_attribute("value", num, 0)}>
<h2>${escape(num)} sections; ${escape(num * equations.length)} equations below</h2>
${each(Array(num), (_, j) => {
    return `<div>${escape(j + 1)}</div>
    ${each(equations, (eqn) => {
      return `<p class="${"p-1 text-red-400"}" d${add_attribute("m", eqn, 0)}></p>`;
    })}`;
  })}</article>`;
});
export {
  Page as default
};
