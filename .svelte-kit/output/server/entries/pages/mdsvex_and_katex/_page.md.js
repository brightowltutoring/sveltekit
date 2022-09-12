import { c as create_ssr_component, a as subscribe, e as escape, h as add_attribute, g as each, v as validate_component } from "../../../chunks/index.js";
import { h as elementColor } from "../../../chunks/store.js";
import { K as Katex } from "../../../chunks/Katex.js";
import "../../../chunks/index2.js";
import "katex";
const _page_md_svelte_type_style_lang = "";
const css = {
  code: "details.svelte-1kcug8h>summary.svelte-1kcug8h::-webkit-details-marker{display:none}details.svelte-1kcug8h>summary.svelte-1kcug8h{list-style:none;color:transparent \n    }blockquote.svelte-1kcug8h.svelte-1kcug8h{margin:0;padding-left:1.4rem;border-left:8px solid #bbb}ul.svelte-1kcug8h.svelte-1kcug8h{list-style-type:disc;list-style-position:inside}h1.svelte-1kcug8h.svelte-1kcug8h{font-size:1.5rem;line-height:2rem}",
  map: null
};
let num = 50;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonColorTransition;
  let $elementColor, $$unsubscribe_elementColor;
  $$unsubscribe_elementColor = subscribe(elementColor, (value) => $elementColor = value);
  let x = 2;
  $$result.css.add(css);
  buttonColorTransition = `background: ${$elementColor};transition: background-color 0.4s cubic-bezier(0.64, 0, 0.78, 0)`;
  $$unsubscribe_elementColor();
  return `
<h1 class="${"svelte-1kcug8h"}">The content on this page is written in a markdown file, which uses html, css, svelte components \u2026thanks to MDsveX + plugins!</h1>
<p>\xA0</p>

<p>The black math expressions are written in markdown. </p>
<ul class="${"svelte-1kcug8h"}"><li><strong>Advantage1</strong>: writing lots of inline math expressions \u2014 e.g. \u201C..the general Einsteinian equation is <strong>NOT</strong> <span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>4</mn></msup></mrow><annotation encoding="application/x-tex">E=mc^4</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">4</span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span> \u2014 bur rather <span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>E</mi><mn>3</mn></msup><mo>=</mo><msup><mi>m</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>p</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E^3=m^2c^4 + p^2c^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">4</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span>\u2026\u201D\u2014 is much simpler with markdown. <strong>Advantage2</strong>: Markdown math has identical syntax to Latex. </li>
<li><strong>Disadvantage</strong>: cannot apply css directly to math expression</li></ul>
<blockquote class="${"svelte-1kcug8h"}"><p>The base \u201C2\u201D here \u2014 <span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>=</mo></mrow><annotation encoding="application/x-tex">x=</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span></span></span></span>'}<!-- HTML_TAG_END --></span>${escape(x)}<span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mrow></mrow><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span>\u2026 \u2014  is taken from script variable. </p>
<button class="${"p-2 shadow-2xl"}"${add_attribute("style", buttonColorTransition, 0)}>increment</button>
<button class="${"p-2 shadow-2xl"}"${add_attribute("style", buttonColorTransition, 0)}>decrement</button></blockquote>


${each(Array(1), (_, j) => {
    return `<span class="${"eqns hide"}">${escape(j + 1)}
${validate_component(Katex, "K").$$render(
      $$result,
      {
        d: true,
        m: "\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}"
      },
      {},
      {}
    )}
	${validate_component(Katex, "K").$$render($$result, { d: true, m: "I=\\int_0^1 f(x) dx" }, {}, {})}
	${validate_component(Katex, "K").$$render(
      $$result,
      {
        d: true,
        m: "S(\\omega)=\\frac{\\alpha g^2}{\\omega^5} ,e^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]}"
      },
      {},
      {}
    )}
</span>`;
  })}
<p>These red math expressions are (katex) svelte components. </p>
<ul class="${"svelte-1kcug8h"}"><li><strong>Advantage1</strong>: can apply css; the color was done with tailwind and the bounce was done with svelte transition!! <strong>Advantage2</strong>: can use conditional logic (e.g. for loops)</li>
<li><strong>Disadvantage1</strong>: terrible for inline math expressions. <strong>Disadvantage2</strong>: syntax starts to depart from latex: escaping characters (i.e. \u2019\\\\frac \u2026\u2019) and having to be wrapped within svelte components.</li></ul>


<div>${validate_component(Katex, "K").$$render(
    $$result,
    {
      d: true,
      m: "\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}"
    },
    {},
    {}
  )}
	${validate_component(Katex, "K").$$render($$result, { d: true, m: "I=\\int_0^1 f(x) dx" }, {}, {})}
	${validate_component(Katex, "K").$$render(
    $$result,
    {
      d: true,
      m: "S(\\omega)=\\frac{\\alpha g^2}{\\omega^5} ,e^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]}"
    },
    {},
    {}
  )}</div>
${each(Array(num), (_, j) => {
    return `<details class="${"eqns svelte-1kcug8h"}"><summary class="${"svelte-1kcug8h"}">..</summary>
        ${escape(num + j + 1)}
        ${validate_component(Katex, "K").$$render(
      $$result,
      {
        d: true,
        m: "\\prod_{i=a}^{b} f(i)"
      },
      {},
      {}
    )}
    </details>`;
  })}
`;
});
export {
  Page as default
};
