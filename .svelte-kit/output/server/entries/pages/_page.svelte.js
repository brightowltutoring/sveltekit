import { c as create_ssr_component, a as subscribe, e as escape, h as add_attribute, v as validate_component } from "../../chunks/index.js";
import { i as isDarkMode } from "../../chunks/store.js";
import "../../chunks/index2.js";
const GalleryScale_svelte_svelte_type_style_lang = "";
const css = {
  code: ".relative.svelte-ka9qzy input.svelte-ka9qzy{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}",
  map: null
};
const GalleryScale = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let { Src = "/reviews/review-ben.png" } = $$props;
  let { Alt = "review ben" } = $$props;
  let imgBackground;
  if ($$props.Src === void 0 && $$bindings.Src && Src !== void 0)
    $$bindings.Src(Src);
  if ($$props.Alt === void 0 && $$bindings.Alt && Alt !== void 0)
    $$bindings.Alt(Alt);
  $$result.css.add(css);
  {
    $isDarkMode ? imgBackground = `peer-focus:bg-[rgb(218,220,203)] peer-focus:invert` : imgBackground = `peer-focus:bg-[#f7f7f7]`;
  }
  $$unsubscribe_isDarkMode();
  return `<div class="${"relative svelte-ka9qzy"}"><input class="${"peer opacity-0 w-full h-full svelte-ka9qzy"}">
    
    <img class="${"hover:shadow-2xl " + escape(imgBackground, true) + " peer-hover:shadow-lg peer-focus:fixed peer-focus:top-10 peer-focus:left-10 peer-focus:z-50 peer-focus:-translate-x-8 peer-focus:scale-[1] sm:peer-focus:scale-[0.85]"}"${add_attribute("src", Src, 0)}${add_attribute("alt", Alt, 0)}>
            </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `Home

<div class="${"font-Poppins text-center sm:text-5xl text-4xl pb-5 pt-20 "}">TESTIMONIALS
</div>

<div class="${"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 "}">${validate_component(GalleryScale, "GalleryScale").$$render(
    $$result,
    {
      Src: "/reviews/review-ben-bare.png",
      Alt: "review ben"
    },
    {},
    {}
  )} 
    ${validate_component(GalleryScale, "GalleryScale").$$render(
    $$result,
    {
      Src: "/reviews/review-efe-bare.png",
      Alt: "review ben"
    },
    {},
    {}
  )} 
    ${validate_component(GalleryScale, "GalleryScale").$$render(
    $$result,
    {
      Src: "/reviews/review-miranda-bare.png",
      Alt: "review ben"
    },
    {},
    {}
  )} 
    ${validate_component(GalleryScale, "GalleryScale").$$render(
    $$result,
    {
      Src: "/reviews/review-paola-bare.png",
      Alt: "review ben"
    },
    {},
    {}
  )} 
    ${validate_component(GalleryScale, "GalleryScale").$$render(
    $$result,
    {
      Src: "/reviews/review-rob-bare.png",
      Alt: "review ben"
    },
    {},
    {}
  )} 
    ${validate_component(GalleryScale, "GalleryScale").$$render(
    $$result,
    {
      Src: "/reviews/review-tj-bare.png",
      Alt: "review ben"
    },
    {},
    {}
  )} 
    ${validate_component(GalleryScale, "GalleryScale").$$render(
    $$result,
    {
      Src: "/reviews/review-zaara-bare.png",
      Alt: "review ben"
    },
    {},
    {}
  )} 
    
    </div>






`;
});
export {
  Page as default
};
