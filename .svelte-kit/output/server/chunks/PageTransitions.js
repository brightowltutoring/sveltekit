import { c as create_ssr_component, a as subscribe } from "./index.js";
import { w as windowInnerHeight, b as scrollYMax, e as inTransition } from "./store.js";
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
export {
  PageTransitions as P
};
