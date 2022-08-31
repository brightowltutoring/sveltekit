import { c as create_ssr_component, e as escape } from "../../../chunks/index.js";
import { g as bgColour } from "../../../chunks/store.js";
import "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageColor = bgColour.etc;
  return `

<div class="${"flex justify-center items-center " + escape(pageColor, true) + " h-[400vh]"}">Etc
</div>    
  

`;
});
export {
  Page as default
};
