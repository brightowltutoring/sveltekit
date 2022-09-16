import { c as create_ssr_component, h as add_attribute, v as validate_component, g as each } from "../../../chunks/index.js";
import "katex";
const KatexDataProp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { m } = $$props;
  let { d } = $$props;
  if ($$props.m === void 0 && $$bindings.m && m !== void 0)
    $$bindings.m(m);
  if ($$props.d === void 0 && $$bindings.d && d !== void 0)
    $$bindings.d(d);
  return `


<div class="${"myKatexEntries"}"${add_attribute("data-math", m, 0)}${add_attribute("data-display", d, 0)}>.</div>`;
});
const KatexIntersectionObserver = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `




${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"}" integrity="${"sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"}" crossorigin="${"anonymous"}" data-svelte="svelte-ztscxf">`, ""}

`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(KatexIntersectionObserver, "KatexIntersectionObserver").$$render($$result, {}, {}, {})}
${each(Array(1e3), (_, i) => {
    return `<div class="${"bg-red-100"}">${validate_component(KatexDataProp, "K").$$render($$result, { d: true, m: `E=mc^2` }, {}, {})}
  </div>`;
  })}`;
});
export {
  Page as default
};
