import { c as create_ssr_component, a as subscribe, e as escape } from "./index.js";
import { i as isDarkMode, a as showHomeworkModal } from "./store.js";
const DropzoneOpener = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let boxShadowColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  let $$unsubscribe_showHomeworkModal;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_showHomeworkModal = subscribe(showHomeworkModal, (value) => value);
  boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";
  $$unsubscribe_isDarkMode();
  $$unsubscribe_showHomeworkModal();
  return `<button style="${"box-shadow: inset 0 -10px 10px " + escape(boxShadowColor, true) + "; border-radius: 50px; border-color: transparent; background-color: transparent"}" class="${"flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl text-3xl w-[65vw] sm:w-[60vw] h-[60vh] mx-auto group"}"><div class="${"font-Nunito group-hover:animate-pulse text-2xl"}">Drop it like it&#39;s \u{1F525}
  </div></button>`;
});
export {
  DropzoneOpener as D
};
