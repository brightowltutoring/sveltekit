import { c as create_ssr_component, v as validate_component, j as each, e as escape } from "../../../chunks/index.js";
import { a as PlansCardObserver, P as PlansCard } from "../../../chunks/PlansCard.js";
import { p as plansCardArray } from "../../../chunks/plansCardArray.js";
const PlansComponentComplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { zeroTransition = false } = $$props;
  let ready = zeroTransition;
  if ($$props.zeroTransition === void 0 && $$bindings.zeroTransition && zeroTransition !== void 0)
    $$bindings.zeroTransition(zeroTransition);
  return `${ready ? `${validate_component(PlansCardObserver, "PlansCardObserver").$$render($$result, {}, {}, {})}` : ``}

<div class="${"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:px-4 px-[6%] md:m-7"}">${each(plansCardArray, (item, i) => {
    return `${ready ? `<div>
        ${validate_component(PlansCard, "PlansCard").$$render(
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
      </div>` : ``}`;
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
