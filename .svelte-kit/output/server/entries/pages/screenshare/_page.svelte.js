import { c as create_ssr_component, a as subscribe, e as escape, o as onDestroy, f as set_store_value, v as validate_component } from "../../../chunks/index.js";
import { l as lessThan768, a as isDarkMode } from "../../../chunks/store.js";
const JitsiUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lessThan768, $$unsubscribe_lessThan768;
  $$unsubscribe_lessThan768 = subscribe(lessThan768, (value) => $lessThan768 = value);
  $$unsubscribe_lessThan768();
  return `





<div class="${"relative md:-translate-y-10 -translate-y-32 "}"><div id="${"meet"}" class="${"w-full h-[95vh] md:h-[670px] peer"}"></div>

  <img alt="${"hangup button"}" class="${"bg-gray-600 p-2 absolute brightness-50 " + escape("opacity-0", true) + " " + escape($lessThan768 ? "top-5 right-5 " : "bottom-5 right-10 ", true) + " flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500"}">
  </div>





`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let jitsiExternal = false;
  function loadJitsiExternal() {
    if (!document.getElementById("jitsiId")) {
      const jitsiJS = document.createElement("script");
      jitsiJS.id = "jitsiId";
      jitsiJS.src = "https://meet.jit.si/external_api.js";
      jitsiJS.type = "text/javascript";
      document.head.appendChild(jitsiJS);
    }
    if (document.getElementById("jitsiId")) {
      jitsiExternal = true;
    }
  }
  loadJitsiExternal();
  onDestroy(() => {
    set_store_value(isDarkMode, $isDarkMode = false, $isDarkMode);
    window.document.body.classList.remove("dark-mode");
  });
  $$unsubscribe_isDarkMode();
  return `${jitsiExternal ? `${validate_component(JitsiUser, "JitsiUser").$$render($$result, {}, {}, {})}` : ``}



`;
});
export {
  Page as default
};
