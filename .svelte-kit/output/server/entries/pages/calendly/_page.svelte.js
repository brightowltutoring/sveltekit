import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${$$result.head += `<link href="${"https://assets.calendly.com/assets/external/widget.css"}" rel="${"stylesheet"}" data-svelte="svelte-al8i8p"><script src="${"https://assets.calendly.com/assets/external/widget.js"}" type="${"text/javascript"}" async data-svelte="svelte-al8i8p"><\/script>`, ""}
<a href="${""}">Schedule time with me</a>

`;
});
export {
  Page as default
};
