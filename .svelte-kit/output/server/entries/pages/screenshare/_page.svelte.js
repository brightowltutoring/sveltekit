import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const JitsiUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<script src="${"https://meet.jit.si/external_api.js"}" data-svelte="svelte-1pkind7"><\/script>`, ""}

<div class="${"relative w-full"}"><div id="${"meet"}"></div>
  <img alt="${"hangup button"}" class="${"absolute sm:bottom-10 sm:right-10 bottom-56 right-5 flex w-[50px] rounded-full content-[url('/hangup-gray.png')] rotate-90 duration-[0.4s] hover:scale-[1.8] hover:rotate-0 hover:content-[url('/hangup-red.png')] "}"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(JitsiUser, "JitsiUser").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
