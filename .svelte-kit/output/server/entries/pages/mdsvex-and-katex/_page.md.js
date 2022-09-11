import { c as create_ssr_component, e as escape, g as each, v as validate_component } from "../../../chunks/index.js";
import { K as Katex } from "../../../chunks/Katex.js";
import "katex";
const _page_md_svelte_type_style_lang = "";
const css = {
  code: "blockquote.svelte-1m42o73{margin:0;padding-left:1.4rem;border-left:8px solid #bbb}ul.svelte-1m42o73{list-style-type:disc;list-style-position:inside}h1.svelte-1m42o73{font-size:1.5rem;line-height:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let x = 2;
  $$result.css.add(css);
  return `
<h1 class="${"svelte-1m42o73"}">The content on this page is written in a markdown file, which uses html, css, svelte components \u2026thanks to MDsveX + plugins!</h1>

<div class="${"h-6"}"></div>
<p>The black math expressions are written in markdown. </p>
<ul class="${"svelte-1m42o73"}"><li><strong>Advantage1</strong>: writing lots of inline math expressions \u2014 e.g. \u201C..the general Einsteinian equation is <strong>NOT</strong> <span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E=mc^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span> \u2014 bur rather <span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><msup><mi>m</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>p</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E^2=m^2c^4 + p^2c^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">4</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span>\u2026\u201D\u2014 is much simpler with markdown. <strong>Advantage2</strong>: Markdown math has identical syntax to Latex. </li>
<li><strong>Disadvantage</strong>: cannot apply css directly to math expression</li></ul>
<blockquote class="${"svelte-1m42o73"}"><p>The base \u201C2\u201D here \u2014 <span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>=</mo></mrow><annotation encoding="application/x-tex">x=</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span></span></span></span>'}<!-- HTML_TAG_END --></span>${escape(x)}<span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mrow></mrow><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span>\u2026 \u2014  is taken from script variable. </p>
<button class="${"bg-red-100 p-2"}">increment</button>
<button class="${"bg-red-100 p-2"}">decrement</button></blockquote>
<blockquote class="${"svelte-1m42o73"}"><div class="${"math math-display"}"><!-- HTML_TAG_START -->${'<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable rowspacing="0.25em" columnalign="right left" columnspacing="0em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mi>A</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mfrac><mrow><mi>\u03C0</mi><msup><mi>r</mi><mn>2</mn></msup></mrow><mn>2</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>\u03C0</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mstyle></mtd></mtr></mtable><annotation encoding="application/x-tex">\\begin{aligned}\nA &amp; = \\frac{\\pi r^2}{2} \\\\\n&amp; = \\frac{1}{2} \\pi r^2\n\\end{aligned}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:4.7845em;vertical-align:-2.1423em;"></span><span class="mord"><span class="mtable"><span class="col-align-r"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.6423em;"><span style="top:-4.6423em;"><span class="pstrut" style="height:3.4911em;"></span><span class="mord"><span class="mord mathnormal">A</span></span></span><span style="top:-2.3348em;"><span class="pstrut" style="height:3.4911em;"></span><span class="mord"></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:2.1423em;"><span></span></span></span></span></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.6423em;"><span style="top:-4.6423em;"><span class="pstrut" style="height:3.4911em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4911em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">\u03C0</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span><span style="top:-2.3348em;"><span class="pstrut" style="height:3.4911em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.03588em;">\u03C0</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:2.1423em;"><span></span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></div></blockquote>

<p>These red math expressions are (katex) svelte components. </p>
<ul class="${"svelte-1m42o73"}"><li><strong>Advantage1</strong>: can apply css; the color was done with tailwind and the bounce was done with svelte transition!! <strong>Advantage2</strong>: can use conditional logic (e.g. for loops)</li>
<li><strong>Disadvantage1</strong>: terrible for inline math expressions. <strong>Disadvantage2</strong>: syntax starts to depart from latex: escaping characters (i.e. \u2019\\\\frac \u2026\u2019) and having to be wrapped within svelte components.</li></ul>
${each(Array(3), (_, i) => {
    return `
<div class="${"text-red-500"}">${validate_component(Katex, "K").$$render(
      $$result,
      {
        d: true,
        m: "\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}"
      },
      {},
      {}
    )}
	${validate_component(Katex, "K").$$render(
      $$result,
      {
        d: true,
        m: "\\prod_{i=a}^{b} f(i)"
      },
      {},
      {}
    )}
	${validate_component(Katex, "K").$$render(
      $$result,
      {
        d: true,
        m: " A \\overset{!}{=} B; A \\stackrel{!}{=} B"
      },
      {},
      {}
    )}
	${validate_component(Katex, "K").$$render(
      $$result,
      {
        m: "k = \\frac{aL}{At} \\ln \\frac{h_0}{h_t}"
      },
      {},
      {}
    )}
	${validate_component(Katex, "K").$$render($$result, { d: true, m: "I=\\int_0^1 f(x) dx" }, {}, {})}
	${validate_component(Katex, "K").$$render($$result, { d: true, m: "\\frac{x}{3}" }, {}, {})}
	${validate_component(Katex, "K").$$render(
      $$result,
      {
        d: true,
        m: "S(\\omega)=\\frac{\\alpha g^2}{\\omega^5} ,e^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]}"
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
