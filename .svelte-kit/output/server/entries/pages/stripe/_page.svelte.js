import { c as create_ssr_component } from "../../../chunks/index.js";
import "../../../chunks/firebase.js";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore/lite";
import "firebase/functions";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${$$result.head += `${$$result.title = `<title>Stripe Firebase Demo</title>`, ""}<script src="${"https://js.stripe.com/v3/"}" data-svelte="svelte-qn95fl"><\/script>`, ""}


<main><div class="${"container pt-20"}">
    
    ${``}</div></main>

`;
});
export {
  Page as default
};
