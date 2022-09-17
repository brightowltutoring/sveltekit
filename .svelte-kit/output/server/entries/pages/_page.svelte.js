import { c as create_ssr_component, a as subscribe, e as escape, h as add_attribute, g as each, v as validate_component } from "../../chunks/index.js";
import { i as isDarkMode } from "../../chunks/store.js";
import "../../chunks/index2.js";
const GalleryScale = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let { Src } = $$props;
  let { Alt } = $$props;
  let imgBackground;
  if ($$props.Src === void 0 && $$bindings.Src && Src !== void 0)
    $$bindings.Src(Src);
  if ($$props.Alt === void 0 && $$bindings.Alt && Alt !== void 0)
    $$bindings.Alt(Alt);
  {
    $isDarkMode ? imgBackground = `peer-focus:bg-[rgb(218,220,203)] peer-focus:invert` : imgBackground = `peer-focus:bg-[#f7f7f7]`;
  }
  $$unsubscribe_isDarkMode();
  return `<div class="${"relative"}"><input inputmode="${"none"}" class="${"absolute peer opacity-0 w-full h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"}">

  <img class="${"hover:shadow-2xl " + escape(imgBackground, true) + " peer-hover:shadow-lg peer-focus:fixed peer-focus:top-10 peer-focus:left-10 peer-focus:z-50 peer-focus:-translate-x-8 peer-focus:scale-[1] sm:peer-focus:scale-[0.85] peer-focus:duration-300"}"${add_attribute("src", Src, 0)}${add_attribute("alt", Alt, 0)}>
  </div>

`;
});
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const reviewers = ["zaara", "miranda", "ben", "efe", "paola", "rob", "tj"];
  return `<div class="${"font-Poppins text-center sm:text-5xl text-4xl py-20 "}">TESTIMONIALS
</div>

<div class="${"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 "}">${each(reviewers, (name) => {
    return `${validate_component(GalleryScale, "GalleryScale").$$render(
      $$result,
      {
        Src: `/reviews/review-${name}-bare.webp`,
        Alt: `review ${name}`
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_isDarkMode();
  return `<main class="${"overflow-x-hidden"}"><video autoplay loop muted playsinline controlslist="${"nodownload"}" src="${"/login-bg-video-blurred.mp4"}" class="${"absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full " + escape($isDarkMode ? "invert-[0.95] blur-3xl " : "blur-2xl", true)}"></video></main>


${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
