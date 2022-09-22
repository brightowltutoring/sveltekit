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
  code: "h1.svelte-137p84a{margin:0;padding:0}",
  map: null
};
const ReviewCreator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let proseInvert;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
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
  proseInvert = $isDarkMode ? "prose-invert" : "";
  $$unsubscribe_isDarkMode();
  return `
<article class="${"prose relative p-1 " + escape(proseInvert, true)}">
  <div class="${"absolute"}"><h1 class="${"svelte-137p84a"}">${escape(title)}</h1>
    <div class="${"flex flex-row -translate-y-3 "}">${each(Array(5), (_, i) => {
    return `<img src="${"star.png"}" alt="${"star"}" style="${"width:40px; height:auto"}">`;
  })}</div>
    <div class="${"italic"}">${escape(date)}</div>
    ${slots.default ? slots.default({}) : ``}
    <b class="${"absolute right-0 bottom-0 -my-10 mx-5 "}">${escape(name)}</b></div></article>`;
});
const reviews = [
  {
    name: "Thomas Finn",
    title: "Great physics tutor!!",
    date: "2022-06-08",
    body: "He was able to help me understand physics so much more and was able to prepare me for both tests as well as my end of year exam! He understands the people he is tutoring and makes changes to help us understand what we are learning so we can do the best that we possibly can and he\u2019s just a great person to chat with!"
  },
  {
    name: "Parent of Rachel W",
    title: "stellar!",
    date: "2022-06-08",
    body: "Finding a steady and solid tutor to help my daughter in grade 12 physics had been a hassle in the last two years. Although reluctant to try out online tutoring Jon came as a recommendation to me from Rachel's private school. Jon was incredibly flexible, down to weekend hours, and exceeded my expectations of what was possible online (I shadowed a few sessions Jon :D !). The mock test sessions were especially crucial in improving Rachel's grades! Cannot recommend enough!"
  },
  {
    name: "Celia",
    title: "amazing IBHL physics tutor ",
    date: "2022-05-01",
    body: "Jon explained the mechanics behind every question I had trouble with in thorough detail. If I had difficulty understanding his explanation, he would use another way to represent his knowledge such as drawing pictures and using diagrams. he taught me measurements, mechanics, waves, electromagnetism, nuclear and thermal physics. He was also a big help with my physics IA! He also made my solution space a place where I could look back if I've forgotten something."
  },
  {
    name: " fernando vc",
    title: "Great tutor for IB physics! ",
    date: "  2021-05-03",
    body: "He helped to strengthen my physics (mostly kinematics/forces) with prepared online tests. He was also extremely flexible and would even help on weekends when needed."
  },
  {
    name: "rozhina mazhar",
    title: "gr 12 physics (2019-2020)",
    date: "2021-03-07",
    body: " John was a huge help for me in gr 12 physics at Ridley. We met once a week in the learning centre and he would help me on     everything from lab prep to assignments to homework questions ... he made me feel extra confident in my abilities!"
  },
  {
    name: "  Lavinia    ",
    title: "  Great Spanish tutor    ",
    date: "  2021-03-03    ",
    body: "  He is super patient with my very much broken Spanish. He is always on time and helps out a lot by giving me extra notes. Best Spanish tutor I had so far :)))"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_isDarkMode();
  return `<main class="${"overflow-x-hidden"}"><video autoplay loop muted playsinline controlslist="${"nodownload"}" src="${"/login-bg-video-blurred.mp4"}" class="${"absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full " + escape($isDarkMode ? "invert-[0.95] blur-3xl " : "blur-2xl", true)}"></video></main>

<div class="${"flex justify-center items-center h-3/5 text-center"}"><div class="${"grid grid-rows-1"}"><div class="${"text-6xl font-Poppins pb-4"}">We&#39;ll be back in October</div>
    <div>\u{1F383} pressing inquiries can be sent to thinksolve.io[at]gmail.com</div></div></div>



${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})}

<div class="${"grid grid-cols-1 gap-y-[600px] sm:gap-y-[330px] py-20"}">${each(reviews, ({ name, title, date, body }) => {
    return `
    ${validate_component(ReviewCreator, "ReviewCreator").$$render($$result, { title, name, date }, {}, {
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
