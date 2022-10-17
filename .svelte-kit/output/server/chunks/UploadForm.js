import { c as create_ssr_component, d as add_attribute, e as escape } from "./index.js";
import { U as UPLOAD_ENDPOINT } from "./private.js";
import "dropzone";
const dropzone = "";
const UploadForm_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-1inwhzb{margin:0 auto;border-color:white;border-radius:50px}",
  map: null
};
const UploadForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dropzoneText = "Drop it like it's \u{1F525}" } = $$props;
  let { dropzoneTextSizeTW = "text-3xl" } = $$props;
  let { uniqueId = "default" } = $$props;
  let { dimensionsTW = "w-[60vw] h-[50vh]" } = $$props;
  if ($$props.dropzoneText === void 0 && $$bindings.dropzoneText && dropzoneText !== void 0)
    $$bindings.dropzoneText(dropzoneText);
  if ($$props.dropzoneTextSizeTW === void 0 && $$bindings.dropzoneTextSizeTW && dropzoneTextSizeTW !== void 0)
    $$bindings.dropzoneTextSizeTW(dropzoneTextSizeTW);
  if ($$props.uniqueId === void 0 && $$bindings.uniqueId && uniqueId !== void 0)
    $$bindings.uniqueId(uniqueId);
  if ($$props.dimensionsTW === void 0 && $$bindings.dimensionsTW && dimensionsTW !== void 0)
    $$bindings.dimensionsTW(dimensionsTW);
  $$result.css.add(css);
  return `<form${add_attribute("action", UPLOAD_ENDPOINT, 0)} method="${"post"}" class="${"dropzone flex justify-center items-center overflow-scroll brightness-95 backdrop-blur-3xl " + escape(dimensionsTW, true) + " svelte-1inwhzb"}" id="${"default"}">
  

  <div class="${"dz-message " + escape(dropzoneTextSizeTW, true) + " font-Nunito"}" data-dz-message><span class="${"block"}">${escape(dropzoneText)}</span></div></form>



${$$result.head += ``, ""}`;
});
export {
  UploadForm as U
};
