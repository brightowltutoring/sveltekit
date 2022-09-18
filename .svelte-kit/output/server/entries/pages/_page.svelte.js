import { c as create_ssr_component, a as subscribe, e as escape, j as add_attribute, h as each, v as validate_component } from "../../chunks/index.js";
import "katex";
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
  const reviewers = ["tj", "ben", "miranda", "efe", "paola", "rob", "zaara"];
  return `

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
const reviewCreator_svx_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1l06vjd,span.svelte-1l06vjd{margin:0;padding:0}",
  map: null
};
const ReviewCreator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Great physics tutor!!" } = $$props;
  let { name = "Thomas Finn" } = $$props;
  let { date = "2022-06-08" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  $$result.css.add(css);
  return `
<div class="${"prose relative p-1"}"><div class="${"p-4"}"><h1 class="${"svelte-1l06vjd"}">${escape(title)}</h1>
<div class="${"flex flex-row -translate-y-3 "}"><img src="${"star.jpeg"}" alt="${""}" class="${"mix-blend-multiply"}">
  <img src="${"star.jpeg"}" alt="${""}" class="${"mix-blend-multiply"}">
  <img src="${"star.jpeg"}" alt="${""}" class="${"mix-blend-multiply"}">
  <img src="${"star.jpeg"}" alt="${""}" class="${"mix-blend-multiply"}">
  <img src="${"star.jpeg"}" alt="${""}" class="${"mix-blend-multiply"}"></div>
<span class="${"absolute p-0 m-0 italic -translate-y-8  svelte-1l06vjd"}">${escape(date)}</span>
${slots.default ? slots.default({}) : ``}
</div>
<b class="${"absolute bottom-0 right-6 p-15"}">${escape(name)}</b></div>`;
});
const reviews = [
  {
    name: "gato",
    title: "heyo",
    date: "2022-06-08",
    body: " He was able to help me understand physics so much more and was able to prepare me for both tests as well as my end of year exam! He understands the people he is tutoring and makes changes to help us understand what we are learning so we can do the best that we possibly can and he\u2019s just a great person to chat with!"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_isDarkMode();
  return `<main class="${"overflow-x-hidden"}"><video autoplay loop muted playsinline controlslist="${"nodownload"}" src="${"/login-bg-video-blurred.mp4"}" class="${"absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full " + escape($isDarkMode ? "invert-[0.95] blur-3xl " : "blur-2xl", true)}"></video></main>

<div class="${"text-6xl font-Poppins text-center pt-20 pb-40"}">We&#39;ll be back in October
  <div class="${"font-Nunito text-[20px] text-center pt-5"}">\u{1F383} pressing inquiries can be sent to brightowl.edu[at]gmail.com
  </div></div>


${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})}

<div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}">${each(reviews, ({ name, title, date, body }) => {
    return `${validate_component(ReviewCreator, "ReviewCreator").$$render($$result, { title, name, date }, {}, {
      default: () => {
        return `${escape(body)}
    `;
      }
    })}`;
  })}</div>`;
});
export {
  Page as default
};
