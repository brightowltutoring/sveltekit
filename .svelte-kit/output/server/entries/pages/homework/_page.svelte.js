import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { D as Dropzone_1 } from "../../../chunks/Dropzone.js";
import "../../../chunks/private.js";
import "../../../chunks/store.js";
import "../../../chunks/index2.js";
import "dropzone";
/* empty css                                                      */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Dropzone_1, "Dropzone").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
