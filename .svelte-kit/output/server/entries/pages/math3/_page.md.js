import { c as create_ssr_component, h as add_attribute, v as validate_component, g as each, e as escape } from "../../../chunks/index.js";
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
  code: "h1.svelte-1rteh51{font-size:1.5rem;line-height:2rem}",
  map: null
};
let num = 2e3;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let equations = [
    "\\int_{M}d\\omega=\\int_{\\partial M}\\omega",
    "G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}",
    " (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ",
    "\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}",
    "z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"
  ];
  $$result.css.add(css);
  return `${validate_component(KatexIntersectionObserver, "KatexIntersectionObserver").$$render($$result, {}, {}, {})}


<div class="${"math math-display"}"><!-- HTML_TAG_START -->${'<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E=mc^2 </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8641em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></div>


<h1 class="${"svelte-1rteh51"}">Katex below, Markdown Above</h1>

${validate_component(KatexDataProp, "K").$$render(
    $$result,
    {
      d: true,
      m: "\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}"
    },
    {},
    {}
  )}
${each(equations, (eqn) => {
    return `<div class="${"p-1 text-indigo-700"}">${validate_component(KatexDataProp, "K").$$render($$result, { d: true, m: eqn }, {}, {})}
</div>`;
  })}
<h1 class="${"svelte-1rteh51"}">${escape(num)} lines of markdown below \u2026 lazy loaded with intersection observer!!</h1>
<h1 class="${"svelte-1rteh51"}">Would be nice to figure out displaymode as it looks nicer than inline latex math</h1>
${each(Array(num), (_, j) => {
    return `<p>${escape(j + 1)}</p>
    <div class="${"p-5"}">${validate_component(KatexDataProp, "K").$$render(
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
`;
});
export {
  Page as default
};
