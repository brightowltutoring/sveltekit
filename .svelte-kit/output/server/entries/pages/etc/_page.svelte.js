import { c as create_ssr_component, a as subscribe, d as escape } from "../../../chunks/index.js";
import { r as routes } from "../../../chunks/store.js";
import "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $routes, $$unsubscribe_routes;
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  let pageColor = $routes.etc.bgColor;
  $$unsubscribe_routes();
  return `

<div class="${"flex justify-center items-center " + escape(pageColor, true) + " h-[400vh]"}">Etc
</div>    
  

`;
});
export {
  Page as default
};
