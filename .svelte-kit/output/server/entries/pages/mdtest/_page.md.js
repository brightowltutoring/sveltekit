import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { K as KatexIntersectionObserver } from "../../../chunks/KatexIntersectionObserver.js";
import "katex";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(KatexIntersectionObserver, "KatexIntersectionObserver").$$render($$result, {}, {}, {})}
<article class="${"prose lg:prose-lg"}"><h1>heyo</h1>
<ul><li>first position<blockquote><ul><li>first position <span class="${"math math-inline"}"><!-- HTML_TAG_START -->${'<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E=mc^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>'}<!-- HTML_TAG_END --></span></li>
<li>first position</li>
<li>first position</li></ul></blockquote></li></ul>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat itaque unde maiores repellat modi iure, numquam eum deleniti expedita rem quod velit officia assumenda dolorum nulla debitis illo tenetur eveniet quam! Itaque magnam, architecto commodi dignissimos necessitatibus numquam. Eum.</p>
<p>The way it should\u2019ve been.</p></article>`;
});
export {
  Page as default
};
