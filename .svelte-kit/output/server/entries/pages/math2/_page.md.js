import { c as create_ssr_component, a as subscribe, v as validate_component, g as each } from "../../../chunks/index.js";
import { h as elementColor } from "../../../chunks/store.js";
import { K as Katex } from "../../../chunks/Katex.js";
import "../../../chunks/index2.js";
import "katex";
const _page_md_svelte_type_style_lang = "";
const css = {
  code: ".eqns.hide.svelte-165rvjl{width:0;height:0;overflow:hidden}h1.svelte-165rvjl{font-size:1.5rem;line-height:2rem}",
  map: null
};
let num = 400;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_elementColor;
  $$unsubscribe_elementColor = subscribe(elementColor, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_elementColor();
  return `
<h1 class="${"svelte-165rvjl"}">The content on this page is written in a markdown file, which uses html, css, svelte components \u2026thanks to MDsveX + plugins!</h1>
<button>showy</button>
<button>hidey</button>
<button>setRed</button>

<span class="${"eqns hide svelte-165rvjl"}"><div class="${"math math-display"}"><!-- HTML_TAG_START -->${'<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E=mc^{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8641em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></div></span>
<span class="${"eqns hide svelte-165rvjl"}">${validate_component(Katex, "K").$$render(
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
      m: "S(\\omega)=\\frac{\\alpha g^2}{\\omega^5} ,e^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]}"
    },
    {},
    {}
  )}</span>
${each(Array(num), (_, j) => {
    return `<span class="${"eqns hide svelte-165rvjl"}"><div class="${"math math-display"}"><!-- HTML_TAG_START -->${'<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable rowspacing="0.25em" columnalign="right" columnspacing=""><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mi>I</mi><mo>=</mo><msubsup><mo>\u222B</mo><mn>0</mn><mn>1</mn></msubsup><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mi>d</mi><mi>x</mi></mrow></mstyle></mtd></mtr></mtable><annotation encoding="application/x-tex">\\begin{aligned} \nI=\\int_{0}^{1}f(x)d x\n\\end{aligned}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.776em;vertical-align:-1.138em;"></span><span class="mord"><span class="mtable"><span class="col-align-r"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.638em;"><span style="top:-3.638em;"><span class="pstrut" style="height:3.564em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mop"><span class="mop op-symbol large-op" style="margin-right:0.44445em;position:relative;top:-0.0011em;">\u222B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.564em;"><span style="top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0</span></span></span></span><span style="top:-3.8129em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.9119em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord mathnormal">d</span><span class="mord mathnormal">x</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:1.138em;"><span></span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></div>
</span>`;
  })}
${each(Array(num), (_, j) => {
    return `<span class="${"eqns hide svelte-165rvjl"}">${validate_component(Katex, "K").$$render(
      $$result,
      {
        d: true,
        m: "\\prod_{i=a}^{b} f(i)"
      },
      {},
      {}
    )}
    </span>`;
  })}
`;
});
export {
  Page as default
};
