import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { R as Reviews } from "../../../chunks/Reviews.js";
import "../../../chunks/store.js";
import "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"my-80 pb-80"}">${validate_component(Reviews, "Reviews").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
