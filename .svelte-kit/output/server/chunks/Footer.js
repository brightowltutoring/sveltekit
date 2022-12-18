import { c as create_ssr_component, e as escape } from "./index.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contactLinkClicked = false } = $$props;
  if ($$props.contactLinkClicked === void 0 && $$bindings.contactLinkClicked && contactLinkClicked !== void 0)
    $$bindings.contactLinkClicked(contactLinkClicked);
  return `<div class="${"text-sm mt-20 " + escape("mb-10", true) + " flex justify-center items-center flex-row gap-x-1"}"><span class="${"text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-pink-600"}">${`<a data-sveltekit-preload-data href="${"/faq"}">faq</a>
      \xA0 | \xA0`}
    <span id="${"contactLinkClicked"}">contact </span></span></div>`;
});
export {
  Footer as default
};
