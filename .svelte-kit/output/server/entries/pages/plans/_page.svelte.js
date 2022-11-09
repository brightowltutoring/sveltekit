import { c as create_ssr_component, j as each, v as validate_component } from "../../../chunks/index.js";
import "../../../chunks/store.js";
import { p as plansCardArray } from "../../../chunks/plansCardArray.js";
const PlansComponentComplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { zeroTransition = false } = $$props;
  if ($$props.zeroTransition === void 0 && $$bindings.zeroTransition && zeroTransition !== void 0)
    $$bindings.zeroTransition(zeroTransition);
  return `${``}


<div class="${"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-6 md:m-7"}">${each(plansCardArray, (item, i) => {
    return `${``}`;
  })}</div>

`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PlansComponentComplete, "PlansComponentComplete").$$render($$result, {}, {}, {})}
`;
});
export {
  Page as default
};
