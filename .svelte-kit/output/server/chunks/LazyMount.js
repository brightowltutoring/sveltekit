import { c as create_ssr_component, d as add_attribute, v as validate_component } from "./index.js";
const InView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { vanilla } = $$props;
  let { once } = $$props;
  let { onview = () => console.log("i \u2764\uFE0F slots") } = $$props;
  let container;
  let { single } = $$props;
  let { root = null } = $$props;
  let { threshold = 0 } = $$props;
  let { margin = "0px" } = $$props;
  if ($$props.vanilla === void 0 && $$bindings.vanilla && vanilla !== void 0)
    $$bindings.vanilla(vanilla);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.onview === void 0 && $$bindings.onview && onview !== void 0)
    $$bindings.onview(onview);
  if ($$props.single === void 0 && $$bindings.single && single !== void 0)
    $$bindings.single(single);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  return `


${!vanilla ? `<div${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const LazyMount = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { Import = async () => {
  } } = $$props;
  let Component;
  const getComponent = async () => Component = await Import();
  if ($$props.Import === void 0 && $$bindings.Import && Import !== void 0)
    $$bindings.Import(Import);
  return `


${validate_component(InView, "InView").$$render($$result, { onview: getComponent }, {}, {
    default: () => {
      return `${Component ? `${validate_component(Component.default, "Component.default").$$render($$result, Object.assign($$props), {}, {})}` : ``}`;
    }
  })}


`;
});
export {
  InView as I,
  LazyMount as L
};
