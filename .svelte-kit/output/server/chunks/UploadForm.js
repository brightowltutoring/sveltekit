import { c as create_ssr_component, a as subscribe, d as add_attribute, k as add_styles } from "./index.js";
import { U as UPLOAD_ENDPOINT } from "./private.js";
import { k as elementColor } from "./store.js";
const UploadForm_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-67dj3z{margin-bottom:150px;margin-top:150px;background:#fff;width:80vw;height:30vh;margin:0 auto;border-color:#ddd;z-index:999;border-radius:50px}",
  map: null
};
const UploadForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $elementColor, $$unsubscribe_elementColor;
  $$unsubscribe_elementColor = subscribe(elementColor, (value) => $elementColor = value);
  $$result.css.add(css);
  $$unsubscribe_elementColor();
  return `${$$result.head += `<script src="${"https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"}" data-svelte="svelte-1rl2ibn"><\/script><link rel="${"stylesheet"}" href="${"https://unpkg.com/dropzone@5/dist/min/dropzone.min.css"}" type="${"text/css"}" data-svelte="svelte-1rl2ibn">`, ""}



<form method="${"post"}" class="${"dropzone svelte-67dj3z"}"${add_attribute("action", UPLOAD_ENDPOINT, 0)}${add_styles({ "background-color": $elementColor })}>

  <div class="${"dz-message text-2xl font-Nunito text-red-400 "}" data-dz-message><span class="${"block"}">Drop it like it&#39;s \u{1F525}</span></div></form>

`;
});
export {
  UploadForm as U
};
