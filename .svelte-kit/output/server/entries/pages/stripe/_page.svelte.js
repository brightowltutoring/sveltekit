import { c as create_ssr_component } from "../../../chunks/index.js";
import "../../../chunks/firebase.js";
import "../../../chunks/private.js";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore/lite";
import "firebase/functions";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.loading.svelte-x181g1:after{content:" . . .";-webkit-animation:svelte-x181g1-dots 1s steps(5, end) infinite;animation:svelte-x181g1-dots 1s steps(5, end) infinite}@-webkit-keyframes svelte-x181g1-dots{0%,40%{color:rgba(0, 0, 0, 0)}}@keyframes svelte-x181g1-dots{0%,40%{color:rgba(0, 0, 0, 0)}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Stripe Firebase Demo</title>`, ""}<script src="${"https://js.stripe.com/v3/"}" data-svelte="svelte-qn95fl"><\/script>`, ""}

<main>${``}
</main>`;
});
export {
  Page as default
};
