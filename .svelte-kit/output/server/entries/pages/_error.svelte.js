import { c as create_ssr_component } from "../../chunks/index.js";
import "../../chunks/store.js";
import "../../chunks/index2.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<p class="${"text-center"}">\u{1F648} Oops ... looks like that page doesn&#39;t exist.</p>

<div class="${"flex justify-center "}" style="${"mix-blend-mode: multiply; "}"><img src="${"/facepalm.gif"}" alt="${"face palm star trek gif"}" class="${"w-1/3 min-w-[250px]"}"></div>`;
});
export {
  Error as default
};
