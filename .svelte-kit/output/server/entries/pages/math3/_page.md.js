import { c as create_ssr_component, g as each, h as add_attribute } from "../../../chunks/index.js";
import "katex";
let num = 1e4;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"}" integrity="${"sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"}" crossorigin="${"anonymous"}" data-svelte="svelte-lhs2y0">`, ""}



${each(Array(num), (_, j) => {
    return `<div class="${"myKatex"}"${add_attribute("data-math", "e=mc^2", 0)}>..
</div>`;
  })}
${each(Array(num), (_, j) => {
    return `<div class="${"myKatex"}"${add_attribute("data-math", "c = \\pm\\sqrt{a^3 + b^3}", 0)}>..
</div>`;
  })}`;
});
export {
  Page as default
};
