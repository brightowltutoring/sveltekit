import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index.js";
import katex from "katex";
const Katex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let katexString;
  let { math } = $$props;
  let { displayMode = false } = $$props;
  const options = { displayMode, throwOnError: false };
  let { tr } = $$props;
  if ($$props.math === void 0 && $$bindings.math && math !== void 0)
    $$bindings.math(math);
  if ($$props.displayMode === void 0 && $$bindings.displayMode && displayMode !== void 0)
    $$bindings.displayMode(displayMode);
  if ($$props.tr === void 0 && $$bindings.tr && tr !== void 0)
    $$bindings.tr(tr);
  katexString = katex.renderToString(math, options);
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"}" integrity="${"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"}" crossorigin="${"anonymous"}" data-svelte="svelte-5lsyfq">`, ""}


	<!-- HTML_TAG_START -->${katexString}<!-- HTML_TAG_END -->
`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-qd6jw8{background-color:lightgray;text-decoration:underline;font-weight:700;padding:0.5em}",
  map: null
};
const math1 = "V=\\frac{1}{3}\\pi r^2 h";
const math2 = "x=-\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}";
const math3 = "ax^2+bx+c=0";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let math;
  const mathArray = [math1, math2, math3];
  let index = 0;
  $$result.css.add(css);
  math = mathArray[index];
  return `<p class="${"text-2xl text-center"}">KaTeX svelte component demo</p>

<h2>Inline math</h2>
Our math equation: ${validate_component(Katex, "Katex").$$render($$result, { math }, {}, {})} and it is inline.

<h2>Displayed math</h2>
Our math equation: ${validate_component(Katex, "Katex").$$render($$result, { math, tr: true, displayMode: true }, {}, {})} and it is displayed.

<h2>Reactivity</h2>
<button>Displaying equation ${escape(index)}</button>

<h2>Static math expression within HTML</h2> 
${validate_component(Katex, "Katex").$$render($$result, { math: "V=\\pi \\textrm{ m}^3 " }, {}, {})}



<h2>Slot based Svelte Component
</h2>
Check out <a rel="${"external"}" href="${"https://www.npmjs.com/package/svelte-katex"}" class="${"svelte-qd6jw8"}">Svelte KaTeX</a> for an implementation of a Svelte KaTeX component that takes markup via slots

<h2>Disucssion of various approaches
</h2>
Visit <a rel="${"external"}" href="${"https://svelte-math.vercel.app"}" class="${"svelte-qd6jw8"}">Svelte Math</a> to see a discussion of various ways to implement math in Svelte/SvelteKit.`;
});
export {
  Page as default
};
