import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { a as PlansComponent } from "../../../chunks/PlansComponent.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PlansComponent, "PlansComponent").$$render($$result, {}, {}, {})}
`;
});
export {
  Page as default
};
