import { c as create_ssr_component, a as subscribe, v as validate_component, d as escape } from "../../chunks/index.js";
import { w as windowInnerHeight, d as scrollYMax, e as inTransition, r as routes } from "../../chunks/store.js";
import "../../chunks/index2.js";
const PageTransitions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_windowInnerHeight;
  let $$unsubscribe_scrollYMax;
  let $$unsubscribe_inTransition;
  $$unsubscribe_windowInnerHeight = subscribe(windowInnerHeight, (value) => value);
  $$unsubscribe_scrollYMax = subscribe(scrollYMax, (value) => value);
  $$unsubscribe_inTransition = subscribe(inTransition, (value) => value);
  $$unsubscribe_windowInnerHeight();
  $$unsubscribe_scrollYMax();
  $$unsubscribe_inTransition();
  return `



<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $routes, $$unsubscribe_routes;
  $$unsubscribe_routes = subscribe(routes, (value) => $routes = value);
  let pageColor = $routes.home.bgColor;
  $$unsubscribe_routes();
  return `
${validate_component(PageTransitions, "PageTransitions").$$render($$result, {}, {}, {
    default: () => {
      return `
    <main class="${"h-[2000px] " + escape(pageColor, true)}">
        <h1 class="${"p-24 "}">Home </h1></main>`;
    }
  })}
    `;
});
export {
  Page as default
};
