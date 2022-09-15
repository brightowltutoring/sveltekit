import { c as create_ssr_component, h as add_attribute } from "./index.js";
const KatexDataProp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { m } = $$props;
  let { d } = $$props;
  if ($$props.m === void 0 && $$bindings.m && m !== void 0)
    $$bindings.m(m);
  if ($$props.d === void 0 && $$bindings.d && d !== void 0)
    $$bindings.d(d);
  return `


<div class="${"myKatexEntries"}"${add_attribute("data-math", m, 0)}${add_attribute("data-display", d, 0)}>.</div>`;
});
export {
  KatexDataProp as K
};
