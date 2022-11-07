import { c as create_ssr_component } from "../../../chunks/index.js";
import { a as app } from "../../../chunks/firebase.js";
import { getFunctions } from "firebase/functions";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.loading.svelte-tci3t6:after{content:" . . .";animation:svelte-tci3t6-dots 1s steps(5, end) infinite}@keyframes svelte-tci3t6-dots{0%,40%{color:rgba(0, 0, 0, 0)}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getFunctions(app);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1jxl9zf_START -->${$$result.title = `<title>Stripe Checkout</title>`, ""}<script src="${"https://js.stripe.com/v3/"}"><\/script><!-- HEAD_svelte-1jxl9zf_END -->`, ""}

<main>${``}</main>






`;
});
export {
  Page as default
};
