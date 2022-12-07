import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../../chunks/index.js";
import { l as lessThan768, i as isDarkMode } from "../../../chunks/store.js";
const JitsiUserAdmin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lessThan768, $$unsubscribe_lessThan768;
  $$unsubscribe_lessThan768 = subscribe(lessThan768, (value) => $lessThan768 = value);
  $$unsubscribe_lessThan768();
  return `${$$result.head += `<!-- HEAD_svelte-1pkind7_START --><script src="${"https://meet.jit.si/external_api.js"}"><\/script><!-- HEAD_svelte-1pkind7_END -->`, ""}

<div class="${"relative md:-translate-y-10 -translate-y-32 "}"><div id="${"meet"}" class="${"w-full h-[95vh] md:h-[670px]"}"></div>
  <button><img alt="${"hangup button"}" class="${"bg-gray-600 p-2 absolute brightness-50 " + escape("opacity-0", true) + " " + escape($lessThan768 ? "top-5 right-5 " : "bottom-5 right-10 ", true) + " flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500"}"></button></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => value);
  $$unsubscribe_isDarkMode();
  return `${validate_component(JitsiUserAdmin, "JitsiUserAdmin").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};