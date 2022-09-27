import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { C as CalendlyJsandCSS } from "../../../chunks/CalendlyJsandCSS.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.button.svelte-15ul978{border:none;border-bottom:1px solid #bbb;padding:15px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:22px;font-family:"Nunito", sans-serif;margin:4px 2px;cursor:pointer;border-radius:6px;transition-duration:0.2s}.button.svelte-15ul978:hover{background-color:rgb(39, 69, 131);color:rgb(201, 228, 15)}.button.svelte-15ul978{color:rgb(39, 69, 131);background-color:hsl(0, 0%, 97%)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(CalendlyJsandCSS, "CalendlyJsandCss").$$render($$result, {}, {}, {})}

<div style="${"font-size:50pt; text-align:center"}">\u{1F4DA}</div>

<div class="${"flex justify-center"}"><button type="${"button"}" class="${"button svelte-15ul978"}"><b>Classico </b></button>

  <button type="${"button"}" class="${"button svelte-15ul978"}"><b>Mock </b></button>
</div>`;
});
export {
  Page as default
};
