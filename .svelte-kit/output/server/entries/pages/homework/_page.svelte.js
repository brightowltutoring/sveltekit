import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { U as UploadForm } from "../../../chunks/UploadForm.js";
import "../../../chunks/private.js";
import "dropzone";
/* empty css                                                        */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(UploadForm, "UploadForm").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
