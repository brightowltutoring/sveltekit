import { c as create_ssr_component } from "../../chunks/index.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${"flex flex-col justify-center items-center gap-10"}"><p>Oops ... looks like that page doesn&#39;t exist.</p>
  <div class="${"animate-bounce text-4xl"}">\u{1F648}</div></div>

`;
});
export {
  Error as default
};
