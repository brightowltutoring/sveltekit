import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/index.js";
import { i as isDarkMode } from "../../chunks/store.js";
import { R as Reviews } from "../../chunks/Reviews.js";
import "../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_isDarkMode();
  return `<main class="${"overflow-x-hidden"}"><video autoplay loop muted playsinline controlslist="${"nodownload"}" src="${"/login-bg-video-blurred.mp4"}" class="${"absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full " + escape($isDarkMode ? "invert-[0.95] blur-3xl " : "blur-2xl", true)}"></video></main>

<div class="${"h-3/5 flex justify-center items-center text-center"}"><div class="${"grid grid-rows-1"}"><div class="${"text-6xl font-Poppins pb-4"}">We&#39;ll be back in October</div>
    <div class="${"text-lg font-Nunito "}">\u{1F383} pressing inquiries can be sent to thinksolve.io[at]gmail.com
      
      <div>(click for reviews)
      </div></div></div></div>

<div id="${"reviews"}" class="${"md:my-80 md:pb-80"}">${validate_component(Reviews, "Reviews").$$render($$result, {}, {}, {})}</div>








`;
});
export {
  Page as default
};
