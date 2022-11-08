import { c as create_ssr_component, v as validate_component, j as each, e as escape } from "../../../chunks/index.js";
import { P as PlansCardObserver } from "../../../chunks/PlansCardObserver.js";
import { P as PlansCard } from "../../../chunks/PlansCard.js";
import { p as plansCardArray } from "../../../chunks/plansCardArray.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PlansCardObserver, "PlansCardObserver").$$render($$result, {}, {}, {})}


<div class="${"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-6 md:m-7"}">${each(plansCardArray, (item, i) => {
    return `<div>${validate_component(PlansCard, "PlansCard").$$render(
      $$result,
      {
        card: item.card,
        payNowUrl: item.payNowUrl,
        payLaterUrl: item.payLaterUrl
      },
      {},
      {
        cardText: () => {
          return `<span slot="${"cardText"}">${escape(item.cardText)}
        </span>`;
        },
        cardTitle: () => {
          return `<span slot="${"cardTitle"}">${escape(item.cardTitle)} </span>`;
        },
        default: () => {
          return `
        

        
      `;
        }
      }
    )}
    </div>`;
  })}
</div>`;
});
export {
  Page as default
};
