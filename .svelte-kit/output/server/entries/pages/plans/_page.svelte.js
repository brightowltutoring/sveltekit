import { c as create_ssr_component, e as escape } from "../../../chunks/index.js";
import { d as bgColour } from "../../../chunks/store.js";
import "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageColor = bgColour.plans;
  return `
    <div class="${"flex justify-center items-center " + escape(pageColor, true) + " h-screen"}">Plans
    </div>    
`;
});
export {
  Page as default
};
