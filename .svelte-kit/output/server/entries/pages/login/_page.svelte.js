import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index.js";
import { P as PageTransitions } from "../../../chunks/PageTransitions.js";
import { d as bgColour } from "../../../chunks/store.js";
import "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageColor = bgColour.login;
  return `${validate_component(PageTransitions, "PageTransitions").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"flex justify-center items-center " + escape(pageColor, true) + " h-screen"}">Login
 </div>`;
    }
  })}`;
});
export {
  Page as default
};
