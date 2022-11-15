import { c as create_ssr_component } from "./index.js";
const IntersectionObserver_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { once = false } = $$props;
  let { condition = true } = $$props;
  let { querySelectees = ".stars" } = $$props;
  let { action = () => {
    console.log("intersectionAction!");
  } } = $$props;
  let { margin = "0px" } = $$props;
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.condition === void 0 && $$bindings.condition && condition !== void 0)
    $$bindings.condition(condition);
  if ($$props.querySelectees === void 0 && $$bindings.querySelectees && querySelectees !== void 0)
    $$bindings.querySelectees(querySelectees);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  return ``;
});
export {
  IntersectionObserver_1 as I
};
