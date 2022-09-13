import { c as create_ssr_component, g as each } from "../../../chunks/index.js";
import "katex";
let num = 5e3;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"}" integrity="${"sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"}" crossorigin="${"anonymous"}" data-svelte="svelte-lhs2y0">`, ""}



${each(Array(num), (_, j) => {
    return `<div class="${"demoContainer bg-red-100 h-20"}"><div class="${"demo"}"></div>
</div>`;
  })}`;
});
export {
  Page as default
};
