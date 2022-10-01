import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { L as LoginCard } from "../../../chunks/LoginCard.js";
import "../../../chunks/store.js";
import "../../../chunks/index2.js";
import "../../../chunks/firebase.js";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore/lite";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container bg-[rgba(0,0,0,0.4)] fixed w-full h-full "}">${validate_component(LoginCard, "LoginCard").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
