import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { C as CalendlyJsandCSS } from "../../../chunks/CalendlyJsandCSS.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(CalendlyJsandCSS, "CalendlyJsandCss").$$render($$result, {}, {}, {})}

<div style="${"font-size:50pt; text-align:center"}">\u{1F4DA}</div>

<div class="${"flex justify-center"}">
</div>`;
});
export {
  Page as default
};
