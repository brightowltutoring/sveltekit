import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { D as DropzoneOpener } from "../../chunks/DropzoneOpener.js";
import { L as LazyMount } from "../../chunks/LazyMount.js";
import { i as isDarkMode } from "../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gradientTextColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  gradientTextColor = `text-transparent bg-clip-text bg-gradient-to-tr ${$isDarkMode ? "from-red-300 via-white to-white" : "from-indigo-600 to-black"}`;
  $$unsubscribe_isDarkMode();
  return `<video loading="${"lazy"}" controlslist="${"nodownload"}" playsinline autoplay muted loop class="${"absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full " + escape($isDarkMode ? "invert-[0.95] blur-3xl " : "blur-2xl", true)}" src="${"/login-bg-video-blurred.mp4"}"></video>

${`<div class="${"grid grid-cols-1 gap-y-52 lg:gap-y-64"}">
    <div class="${"h-[60vh] flex justify-center items-center text-center"}"><div class="${"grid grid-rows-1"}">${``}</div></div>

    
    <div id="${"step1"}" class="${"hover:scale-105 duration-500 grid place-content-center"}"><button class="${"text-5xl font-Poppins text-center pb-7"}"><span${add_attribute("class", gradientTextColor, 0)}>1. Upload your homework </span></button>

      
      
      ${validate_component(DropzoneOpener, "DropzoneOpener").$$render($$result, {}, {}, {})}</div>

    
    <div id="${"step2"}" class="${"duration-500 grid place-content-center"}"><button class="${"text-5xl font-Poppins text-center pb-7 "}"><span${add_attribute("class", gradientTextColor, 0)}>2. Schedule a Session </span></button>

      
      ${validate_component(LazyMount, "LazyMount").$$render(
    $$result,
    {
      Import: () => import("../../chunks/PlansSection.js")
    },
    {},
    {}
  )}

      

      

      </div>

    
    <div id="${"reviews"}" class="${"duration-500 mb-[200px] sm:mb-[500px]"}"><button class="${"text-5xl font-Poppins w-full flex justify-center"}"><span${add_attribute("class", gradientTextColor, 0)}>3. Do Some Reading <span class="${"text-black"}">\u{1F60E} </span></span></button>

      
      ${validate_component(LazyMount, "LazyMount").$$render(
    $$result,
    {
      Import: () => import("../../chunks/Reviews.js")
    },
    {},
    {}
  )}</div></div>`}








`;
});
export {
  Page as default
};
