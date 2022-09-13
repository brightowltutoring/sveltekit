import { c as create_ssr_component, h as add_attribute, v as validate_component, e as escape, g as each } from "../../../chunks/index.js";
import "katex";
const KatexIntersectionObserver = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `




${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"}" integrity="${"sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"}" crossorigin="${"anonymous"}" data-svelte="svelte-ztscxf">`, ""}`;
});
const KatexDataProp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data_math } = $$props;
  if ($$props.data_math === void 0 && $$bindings.data_math && data_math !== void 0)
    $$bindings.data_math(data_math);
  return `


<div class="${"myKatex"}"${add_attribute("data-math", data_math, 0)}>.</div>`;
});
let num = 2e3;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(KatexIntersectionObserver, "KatexIntersectionObserver").$$render($$result, {}, {}, {})}
<p>This page has ${escape(2 * num)} lines of Katex \u2026 Intersection Observer lazy renders the math on scroll down!!</p>
${each(Array(num), (_, j) => {
    return `${validate_component(KatexDataProp, "K").$$render($$result, { data_math: "e=mc^2" }, {}, {})}
`;
  })}
`;
});
export {
  Page as default
};
