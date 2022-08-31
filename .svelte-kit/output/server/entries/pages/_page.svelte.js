import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index.js";
import { P as PageTransitions } from "../../chunks/PageTransitions.js";
import { d as bgColour } from "../../chunks/store.js";
import "../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageColor = bgColour.home;
  return `${validate_component(PageTransitions, "PageTransitions").$$render($$result, {}, {}, {
    default: () => {
      return `
    <main class="${"flex h-[2000px] " + escape(pageColor, true)}">
        <h1 class="${"p-24"}">Home</h1></main>`;
    }
  })}
    `;
});
export {
  Page as default
};
