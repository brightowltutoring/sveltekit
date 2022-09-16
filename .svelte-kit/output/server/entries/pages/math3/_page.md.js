import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, h as add_attribute, g as each } from "../../../chunks/index.js";
import { K as KatexIntersectionObserver2 } from "../../../chunks/KatexIntersectionObserver2.js";
import { i as isDarkMode } from "../../../chunks/store.js";
import "katex";
import "../../../chunks/index2.js";
let numMax = 3e3;
let numMDMax = 1;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let num;
  let numMD;
  let proseInvert;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let equations = [
    "\\int_{M}d\\omega=\\int_{\\partial M}\\omega",
    "G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}",
    " (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ",
    "\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}",
    "z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c"
  ];
  let x = 2;
  num = numMax;
  numMD = numMDMax;
  proseInvert = $isDarkMode ? "prose-invert" : "";
  $$unsubscribe_isDarkMode();
  return `${validate_component(KatexIntersectionObserver2, "KatexIntersectionObserver2").$$render($$result, {}, {}, {})}

<article class="${"prose lg:prose-lg " + escape(proseInvert, true)}"><h1>Garlic bread with cheese: What the science tells us</h1>
  <p>For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  
<p d${add_attribute("m", "\\underbrace{u'-P(x)u^2-Q(x)u-R(x)}_{\\text{=0, since~$u$ is a particular solution.}}", 0)}></p>
<div class="${"math math-display"}"><!-- HTML_TAG_START -->${`<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><munder><munder><mrow><msup><mi>u</mi><mo mathvariant="normal" lspace="0em" rspace="0em">\u2032</mo></msup><mo>\u2212</mo><mi>P</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><msup><mi>u</mi><mn>2</mn></msup><mo>\u2212</mo><mi>Q</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mi>u</mi><mo>\u2212</mo><mi>R</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mo stretchy="true">\u23DF</mo></munder><mrow><mtext>=0,\xA0since\xA0</mtext><mstyle scriptlevel="0" displaystyle="false"><mi>u</mi></mstyle><mtext>\xA0is\xA0a\xA0particular\xA0solution.</mtext></mrow></munder></mrow><annotation encoding="application/x-tex">\\underbrace{u&#x27;-P(x)u^2-Q(x)u-R(x)}_{\\text{=0, since~$u$ is a particular solution.}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.5843em;vertical-align:-1.7202em;"></span><span class="mord munder"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-1.4159em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight">=0,\xA0since</span><span class="mord mtight nobreak">\xA0</span><span class="mord mathnormal sizing reset-size3 size6">u</span><span class="mord mtight">\xA0is\xA0a\xA0particular\xA0solution.</span></span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord munder"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span class="svg-align" style="top:-2.102em;"><span class="pstrut" style="height:3em;"></span><span class="stretchy" style="height:0.548em;min-width:1.6em;"><span class="brace-left" style="height:0.548em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='0.548em' viewBox='0 0 400000 548' preserveAspectRatio='xMinYMin slice'><path d='M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z'/></svg></span><span class="brace-center" style="height:0.548em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='0.548em' viewBox='0 0 400000 548' preserveAspectRatio='xMidYMin slice'><path d='M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z'/></svg></span><span class="brace-right" style="height:0.548em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='0.548em' viewBox='0 0 400000 548' preserveAspectRatio='xMaxYMin slice'><path d='M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z'/></svg></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">u</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2032</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord"><span class="mord mathnormal">u</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">Q</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord mathnormal">u</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.898em;"><span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:1.7202em;"><span></span></span></span></span></span></span></span></span></span>`}<!-- HTML_TAG_END --></div>
<span class="${"text-red-700 text-7xl flex justify-center"}"><p>${escape(x)}<span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mrow></mrow><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span>=${escape(x ** 2)}</p></span>
<div class="${"flex justify-center"}"><input type="${"range"}" min="${"1"}"${add_attribute("value", x, 0)}></div>
<h1>The content of this page are written in a markdown file with svelte components (tailwind too), possible due to MDsveX!</h1>
<ul><li>the square-slider above using svelte binding of a JS variable \u2026 again this is possible due to MDsveX</li>
<li>The <strong>math</strong> on this page is written in both markdown (i.e. Latex) and with Katex.<ul><li>for heavy inline use, markdown is preferable</li>
<li>for css/svelte transitions, only katex svelte components are viable<ul><li>normally markdown is more performant, however with a recent implementation of the Intersection Observer API, I have made the katex math far more performant !!<ul><li>1000 lines vs 4000-8000+ lines of math loaded instantly on page load</li>
<li>when changing routes katex on 4000+ lines is easily transitioned \u2026 not the same for markdown</li></ul></li></ul></li></ul></li></ul>

<div class="${"p-4"}"><input type="${"number"}" min="${"1"}"${add_attribute("value", numMD, 0)}>
    <input type="${"range"}" min="${"1"}"${add_attribute("value", numMD, 0)}></div>
<h1>${escape(numMD)} lines of markdown immediately below</h1>
${each(Array(numMD), (_, j) => {
    return `<p>${escape(j + 1)}</p>
<div class="${"math math-display"}"><!-- HTML_TAG_START -->${'<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E=mc^2 </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8641em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></div>`;
  })}

<h1>${escape(num + equations.length)} lines of katex below\u2026 lazy rendered with intersection observer!!</h1>
<ul><li>pull this slider over to show that more equations doesnt slow the page down (capped at 10,000 but could be larger)</li></ul>
<input type="${"number"}" min="${"1"}"${add_attribute("max", numMax, 0)}${add_attribute("value", num, 0)}>
<input type="${"range"}" min="${"1"}"${add_attribute("max", numMax, 0)}${add_attribute("value", num, 0)}>
${each(Array(num), (_, j) => {
    return `<p>${escape(j + 1)}</p>
    <div class="${"p-5 text-red-400"}"><p d${add_attribute("m", "\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}", 0)}></p>
    </div>`;
  })}
${each(equations, (eqn, k) => {
    return `<p>${escape(k + 1 + num)}</p>
<div class="${"p-1 text-indigo-700"}"><p d${add_attribute("m", eqn, 0)}></p>
</div>`;
  })}</article>

`;
});
export {
  Page as default
};
