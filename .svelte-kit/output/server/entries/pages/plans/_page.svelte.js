import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import PlansSection from "../../../chunks/PlansSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PlansSection, "PlansSection").$$render($$result, {}, {}, {})}

`;
});
export {
  Page as default
};
