import { c as create_ssr_component, e as escape, a as subscribe, v as validate_component } from "../../../chunks/index.js";
import { i as isDarkMode } from "../../../chunks/store.js";
import "../../../chunks/index2.js";
const JitsiUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<script src="${"https://meet.jit.si/external_api.js"}" data-svelte="svelte-1pkind7"><\/script>`, ""}

<div class="${"relative -translate-y-10"}"><div id="${"meet"}" class="${"w-full h-[670px]"}"></div>
  <img alt="${"hangup button"}" class="${escape("opacity-0", true) + " absolute sm:bottom-10 sm:right-10 bottom-[215px] right-5 flex w-[50px] rounded-full content-[url('/hangup-gray.png')] rotate-90 duration-[0.4s] hover:scale-[1.8] hover:rotate-0 hover:content-[url('/hangup-red.png')]"}"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => value);
  $$unsubscribe_isDarkMode();
  return `${validate_component(JitsiUser, "JitsiUser").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
