import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import LoginCard from "../../../chunks/LoginCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("back in black!");
  return `


${validate_component(LoginCard, "LoginCard").$$render($$result, { noTransition: true }, {}, {})}`;
});
export {
  Page as default
};
