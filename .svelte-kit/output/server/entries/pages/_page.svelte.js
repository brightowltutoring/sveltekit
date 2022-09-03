import { c as create_ssr_component, a as subscribe, d as escape } from "../../chunks/index.js";
import { r as routes } from "../../chunks/store.js";
import "../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $routes, $$unsubscribe_routes;
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  let pageColor = $routes.home.bgColor;
  $$unsubscribe_routes();
  return `

    
    <main class="${"h-[2000px] " + escape(pageColor, true)}">
       
        <h1 class="${"p-24 "}">Home </h1></main>    

    `;
});
export {
  Page as default
};
