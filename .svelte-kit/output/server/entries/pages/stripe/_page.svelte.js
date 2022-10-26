import { c as create_ssr_component } from "../../../chunks/index.js";
import "../../../chunks/firebase.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.loading.svelte-tci3t6:after{content:" . . .";animation:svelte-tci3t6-dots 1s steps(5, end) infinite}@keyframes svelte-tci3t6-dots{0%,40%{color:rgba(0, 0, 0, 0)}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-qn95fl_START -->${$$result.title = `<title>Stripe Firebase Demo</title>`, ""}<script src="${"https://js.stripe.com/v3/"}"><\/script><!-- HEAD_svelte-qn95fl_END -->`, ""}

<main>${``}
</main>`;
});
export {
  Page as default
};
