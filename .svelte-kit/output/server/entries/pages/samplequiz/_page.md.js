import { c as create_ssr_component, v as validate_component, g as each } from "../../../chunks/index.js";
import { K as KatexDataProp } from "../../../chunks/KatexDataProp.js";
import { K as KatexIntersectionObserver } from "../../../chunks/KatexIntersectionObserver.js";
import "katex";
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
