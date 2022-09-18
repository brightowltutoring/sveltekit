import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/index.js";
import "katex";
import { i as isDarkMode } from "../../chunks/store.js";
import "../../chunks/index2.js";
const reviewCreator_svx_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_isDarkMode();
  return `<main class="${"overflow-x-hidden"}"><video autoplay loop muted playsinline controlslist="${"nodownload"}" src="${"/login-bg-video-blurred.mp4"}" class="${"absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full " + escape($isDarkMode ? "invert-[0.95] blur-3xl " : "blur-2xl", true)}"></video></main>

<div class="${"flex justify-center items-center h-3/5 text-center"}"><div class="${"grid grid-rows-1"}"><div class="${"text-6xl font-Poppins pb-4"}">We&#39;ll be back in October</div>
    <div>\u{1F383} pressing inquiries can be sent to thinksolve.io[at]gmail.com</div></div></div>



`;
});
export {
  Page as default
};
