import { c as create_ssr_component, h as each } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${each(Array(1e3), (_, i) => {
    return `<div class="${"bg-red-100"}">
  </div>`;
  })}`;
});
export {
  Page as default
};
