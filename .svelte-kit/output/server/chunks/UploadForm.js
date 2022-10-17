import { c as create_ssr_component, d as add_attribute, e as escape } from "./index.js";
import { U as UPLOAD_ENDPOINT } from "./private.js";
import "./store.js";
import "dropzone";
/* empty css                                          */const css = {
  code: ".dropzone .dz-preview.dz-image-preview{background-color:transparent}form.svelte-1m2am6r{border-radius:50px;border-style:dotted;border-color:white}",
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
  return `
<form${add_attribute("action", UPLOAD_ENDPOINT, 0)} method="${"post"}" class="${"dropzone flex justify-center items-center overflow-scroll brightness-95 backdrop-blur-3xl " + escape(dropzoneTextSizeTW, true) + " " + escape(dimensionsTW, true) + " mx-auto svelte-1m2am6r"}" id="${"default"}">
  <div class="${"dz-message font-Nunito "}" data-dz-message><span class="${"block"}">${escape(dropzoneText)}</span></div></form>



`;
});
export {
  UploadForm as U
};
