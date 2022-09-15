import { c as create_ssr_component, v as validate_component, g as each, e as escape } from "../../../chunks/index.js";
import { K as KatexIntersectionObserver, a as KatexDataProp } from "../../../chunks/KatexDataProp.js";
import "katex";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(KatexIntersectionObserver, "KatexIntersectionObserver").$$render($$result, {}, {}, {})}

${each(Array(1e3), (_, i) => {
    return `${escape(i + 1)}
  ${validate_component(KatexDataProp, "K").$$render($$result, { d: true, m: `E=mc^3` }, {}, {})}`;
  })}`;
});
export {
  Page as default
};
