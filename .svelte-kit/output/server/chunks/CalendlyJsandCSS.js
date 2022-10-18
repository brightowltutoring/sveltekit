import { c as create_ssr_component } from "./index.js";
const CalendlyJsandCSS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<script data-svelte="svelte-1ka5biz">window.addEventListener("load", () => {
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    });
  <\/script><script src="${"https://assets.calendly.com/assets/external/widget.js"}" type="${"text/javascript"}" async data-svelte="svelte-1ka5biz"><\/script>`, ""}`;
});
export {
  CalendlyJsandCSS as C
};
