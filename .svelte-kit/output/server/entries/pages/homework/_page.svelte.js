import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { D as Dropzone } from "../../../chunks/Dropzone.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Dropzone, "Dropzone").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
