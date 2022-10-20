import { c as create_ssr_component } from "../../chunks/index.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<p class="${"text-center"}">\u{1F648} Oops ... looks like that page doesn&#39;t exist.</p>

<div class="${"flex justify-center"}"><img src="${"/facepalm.gif"}" alt="${"face palm star trek gif"}" class="${"w-1/3 min-w-[250px]"}"></div>`;
});
export {
  Error as default
};
