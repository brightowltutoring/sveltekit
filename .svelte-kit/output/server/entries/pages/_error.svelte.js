import { c as create_ssr_component } from "../../chunks/index.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<p class="${"text-center"}">Oops ... looks like that page doesn&#39;t exist.</p>

<div class="${"flex justify-center"}"><img src="${"/face-palm.gif"}" alt="${"face palm star trek gif"}" class="${"w-1/3"}"></div>`;
});
export {
  Error as default
};
