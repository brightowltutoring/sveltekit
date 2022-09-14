import { c as create_ssr_component, h as add_attribute, v as validate_component, e as escape, g as each } from "../../../chunks/index.js";
import "katex";
const KatexIntersectionObserver = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { m } = $$props;
  if ($$props.m === void 0 && $$bindings.m && m !== void 0)
    $$bindings.m(m);
  return `






${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"}" integrity="${"sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"}" crossorigin="${"anonymous"}" data-svelte="svelte-ztscxf">`, ""}`;
});
const KatexDataProp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { m } = $$props;
  let { d } = $$props;
  if ($$props.m === void 0 && $$bindings.m && m !== void 0)
    $$bindings.m(m);
  if ($$props.d === void 0 && $$bindings.d && d !== void 0)
    $$bindings.d(d);
  return `


<div class="${"myKatex"}"${add_attribute("data-math", m, 0)}${add_attribute("data-display", d, 0)}>.</div>`;
});
const _page_md_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-1rteh51.svelte-1rteh51{list-style-type:disc;list-style-position:inside}ul.svelte-1rteh51 ul.svelte-1rteh51{list-style-type:circle;list-style-position:inside;margin-left:15px}h1.svelte-1rteh51.svelte-1rteh51{font-size:1.5rem;line-height:2rem}",
  map: null
};
let numMax = 1e3;
let numMDMax = 1;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let num;
  let numMD;
  let equations = [
    "\\int_{M}d\\omega=\\int_{\\partial M}\\omega",
    "G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}",
    " (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ",
    "\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}",
    "z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"
  ];
  let x = 2;
  $$result.css.add(css);
  num = numMax;
  numMD = numMDMax;
  return `
${validate_component(KatexIntersectionObserver, "KatexIntersectionObserver").$$render($$result, {}, {}, {})}
<span class="${"text-red-700 text-7xl flex justify-center"}"><p>${escape(x)}<span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mrow></mrow><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span>=${escape(x ** 2)}</p></span>
<div class="${"flex justify-center"}"><input type="${"range"}" min="${"0"}"${add_attribute("value", x, 0)}></div>
<h1 class="${"svelte-1rteh51"}">The content of this page are written in a markdown file with svelte components (tailwind too), possible due to MDsveX!</h1>
<ul class="${"svelte-1rteh51"}"><li>the square-slider above using svelte binding of a JS variable \u2026 again this is possible due to MDsveX</li>
<li>The <strong>math</strong> on this page is written in both markdown (i.e. Latex) and with Katex.<ul class="${"svelte-1rteh51"}"><li>for heavy inline use, markdown is preferable</li>
<li>for css/svelte transitions, only katex svelte components are viable<ul class="${"svelte-1rteh51"}"><li>normally markdown is more performant, however with a recent implementation of the Intersection Observer API, I have made the katex math far more performant !!<ul class="${"svelte-1rteh51"}"><li>1000 lines vs 4000-8000+ lines of math loaded instantly on page load</li>
<li>when changing routes katex on 4000+ lines is easily transitioned \u2026 not the same for markdown</li></ul></li></ul></li></ul></li></ul>

<div class="${"p-4"}"><input type="${"range"}" min="${"1"}"${add_attribute("value", numMD, 0)}></div>
<h1 class="${"svelte-1rteh51"}">${escape(numMD)} lines of markdown immediately below</h1>
${each(Array(numMD), (_, j) => {
    return `<p>${escape(j + 1)}</p>
<div class="${"math math-display"}"><!-- HTML_TAG_START -->${'<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E=mc^2 </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8641em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></div>`;
  })}

<h1 class="${"svelte-1rteh51"}">${escape(num + equations.length)} lines of katex below\u2026 lazy rendered with intersection observer!!</h1>
<ul class="${"svelte-1rteh51"}"><li>pull this slider over to show that more equations doesnt slow the page down (capped at 10,000 but could be larger)</li></ul>
<input type="${"range"}" min="${"1"}"${add_attribute("max", numMax, 0)}${add_attribute("value", num, 0)}>
${each(Array(num), (_, j) => {
    return `<p>${escape(j + 1)}</p>
    <div class="${"p-5 text-red-400"}">${validate_component(KatexDataProp, "K").$$render(
      $$result,
      {
        d: true,
        m: "\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}"
      },
      {},
      {}
    )}
    </div>`;
  })}
${each(equations, (eqn, k) => {
    return `<p>${escape(k + 1 + num)}</p>
<div class="${"p-1 text-indigo-700"}">${validate_component(KatexDataProp, "K").$$render($$result, { d: true, m: eqn }, {}, {})}
</div>`;
  })}
`;
});
export {
  Page as default
};
