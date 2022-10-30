import { c as create_ssr_component, v as validate_component, j as each, e as escape, d as add_attribute } from "../../../chunks/index.js";
import "../../../chunks/store.js";
import { P as PlansCardObserver } from "../../../chunks/PlansCardObserver.js";
import { P as PlansCard } from "../../../chunks/PlansCard.js";
import { p as plansCardArray } from "../../../chunks/plansCardArray.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-18ymex4{color:var(--anchor)}a.svelte-18ymex4:hover{color:var(--anchor_hover)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(PlansCardObserver, "PlansCardObserver").$$render($$result, {}, {}, {})}
<div class="${"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-7 "}">${each(plansCardArray, (item, i) => {
    return `
    <div>${validate_component(PlansCard, "PlansCard").$$render(
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
          
          
          <p><a data-sveltekit-prefetch${add_attribute("href", item.href, 0)} class="${"svelte-18ymex4"}">invoice sample</a></p>
          
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
    )}</div>
    `;
  })}
</div>`;
});
export {
  Page as default
};
