import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { U as UploadForm } from "../../../chunks/UploadForm.js";
import "../../../chunks/private.js";
import "../../../chunks/store.js";
import "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(UploadForm, "UploadForm").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
