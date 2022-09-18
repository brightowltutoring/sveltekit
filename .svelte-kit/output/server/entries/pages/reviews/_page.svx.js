import { c as create_ssr_component, e as escape } from "../../../chunks/index.js";
const _page_svx_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1l06vjd,span.svelte-1l06vjd{margin:0;padding:0}",
  map: null
};
const metadata = {
  "title": "Great physics tutor!!",
  "name": "Thomas Finn",
  "date": "2022-06-08"
};
const { title, name, date } = metadata;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"prose relative p-1"}"><div class="${"p-4"}"><h1 class="${"svelte-1l06vjd"}">${escape(title)}</h1>
<span class="${"flex flex-row mix-blend-multiply -translate-y-3 w-[40px] svelte-1l06vjd"}"><img src="${"star.jpeg"}" alt="${""}">
  
  
  
  </span>
<span class="${"absolute p-0 m-0 italic -translate-y-8  svelte-1l06vjd"}">${escape(date)}</span>
<p>He was able to help me understand physics so much more and was able to prepare me for both tests as well as my end of year exam! He understands the people he is tutoring and makes changes to help us understand what we are learning so we can do the best that we possibly can and he\u2019s just a great person to chat with!</p></div>
<b class="${"absolute bottom-0 right-6 p-15"}">${escape(name)}</b></div>`;
});
export {
  Page as default,
  metadata
};
