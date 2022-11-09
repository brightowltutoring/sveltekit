import { c as create_ssr_component, j as each } from "../../../chunks/index.js";
import "../../../chunks/store.js";
import { p as plansCardArray } from "../../../chunks/plansCardArray.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``}


<div class="${"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-6 md:m-7"}">${each(plansCardArray, (item, i) => {
    return `${``}`;
  })}
</div>`;
});
export {
  Page as default
};
