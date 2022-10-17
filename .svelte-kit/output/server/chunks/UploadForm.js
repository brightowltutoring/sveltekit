import { c as create_ssr_component, a as subscribe, d as add_attribute, k as add_styles, e as escape } from "./index.js";
import { U as UPLOAD_ENDPOINT } from "./private.js";
import { k as elementColor } from "./store.js";
const UploadForm_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-1p7thpd{margin-bottom:150px;margin-top:150px;width:80vw;height:50vh;border-color:#ddd;z-index:999;border-radius:50px}",
  map: null
};
const UploadForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $elementColor, $$unsubscribe_elementColor;
  $$unsubscribe_elementColor = subscribe(elementColor, (value) => $elementColor = value);
  let { dropzoneText = "Drop it like it's \u{1F525}" } = $$props;
  let { dropzoneTextSizeTW = "text-2xl" } = $$props;
  if ($$props.dropzoneText === void 0 && $$bindings.dropzoneText && dropzoneText !== void 0)
    $$bindings.dropzoneText(dropzoneText);
  if ($$props.dropzoneTextSizeTW === void 0 && $$bindings.dropzoneTextSizeTW && dropzoneTextSizeTW !== void 0)
    $$bindings.dropzoneTextSizeTW(dropzoneTextSizeTW);
  $$result.css.add(css);
  $$unsubscribe_elementColor();
  return `${$$result.head += `<script src="${"https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"}" data-svelte="svelte-1rl2ibn"><\/script><link rel="${"stylesheet"}" href="${"https://unpkg.com/dropzone@5/dist/min/dropzone.min.css"}" type="${"text/css"}" data-svelte="svelte-1rl2ibn">`, ""}



<form method="${"post"}" class="${"dropzone flex justify-center items-center svelte-1p7thpd"}"${add_attribute("action", UPLOAD_ENDPOINT, 0)}${add_styles({ "background-color": $elementColor })}>

  <div class="${"dz-message " + escape(dropzoneTextSizeTW, true) + " font-Nunito text-red-400"}" data-dz-message><span class="${"block"}">${escape(dropzoneText)}</span></div></form>

`;
});
export {
  UploadForm as U
};
