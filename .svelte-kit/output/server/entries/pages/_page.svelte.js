import { c as create_ssr_component, a as subscribe, e as escape, h as add_attribute, g as each, v as validate_component } from "../../chunks/index.js";
import { i as isDarkMode } from "../../chunks/store.js";
import { K as Katex } from "../../chunks/Katex.js";
/* empty css                */import "../../chunks/index2.js";
import "katex";
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
  {
    $isDarkMode ? imgBackground = `peer-focus:bg-[rgb(218,220,203)] peer-focus:invert` : imgBackground = `peer-focus:bg-[#f7f7f7]`;
  }
  $$unsubscribe_isDarkMode();
  return `<div class="${"relative"}"><input inputmode="${"none"}" class="${"absolute opacity-0 w-full h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 peer"}">

  <img class="${"hover:shadow-2xl " + escape(imgBackground, true) + " peer-hover:shadow-lg peer-focus:fixed peer-focus:top-10 peer-focus:left-10 peer-focus:z-50 peer-focus:-translate-x-8 peer-focus:scale-[1] sm:peer-focus:scale-[0.85] peer-focus:duration-300"}"${add_attribute("src", Src, 0)}${add_attribute("alt", Alt, 0)}>
  </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  const reviewers = ["zaara", "miranda", "ben", "efe", "paola", "rob", "tj"];
  let equations = [
    "\\int_{M}d\\omega=\\int_{\\partial M}\\omega",
    "G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}",
    " (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ",
    "\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}",
    "z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c",
    "e^{i x}=\\cos x+i\\sin x"
  ];
  $$unsubscribe_isDarkMode();
  return `<div class="${"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full"}">${each(equations, (eqn, i) => {
    return `
    <p${add_attribute("class", $isDarkMode ? "text-blue-100" : "text-red-500", 0)}>${validate_component(Katex, "K").$$render($$result, { d: true, m: eqn }, {}, {})}
    </p>`;
  })}</div>

<div class="${"font-Poppins text-center sm:text-5xl text-4xl py-20 "}">TESTIMONIALS
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
  })}</div>

`;
});
export {
  Page as default
};
