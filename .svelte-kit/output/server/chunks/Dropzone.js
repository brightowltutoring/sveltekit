import { c as create_ssr_component, d as add_attribute, e as escape } from "./index.js";
import { U as UPLOAD_ENDPOINT } from "./private.js";
import "./store.js";
import "dropzone";
const dropzone = "";
const Dropzone_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dropzone .dz-preview.dz-image-preview{background-color:transparent}form.svelte-1m2am6r{border-radius:50px;border-style:dotted;border-color:white}",
  map: null
};
const Dropzone_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { uniqueId = "default" } = $$props;
  let { text = "Drop it like it's \u{1F525}" } = $$props;
  let { textSizeTW = "text-3xl" } = $$props;
  let { dimensionsTW = "w-[60vw] h-[50vh]" } = $$props;
  if ($$props.uniqueId === void 0 && $$bindings.uniqueId && uniqueId !== void 0)
    $$bindings.uniqueId(uniqueId);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.textSizeTW === void 0 && $$bindings.textSizeTW && textSizeTW !== void 0)
    $$bindings.textSizeTW(textSizeTW);
  if ($$props.dimensionsTW === void 0 && $$bindings.dimensionsTW && dimensionsTW !== void 0)
    $$bindings.dimensionsTW(dimensionsTW);
  $$result.css.add(css);
  return `
<form${add_attribute("action", UPLOAD_ENDPOINT, 0)} method="${"post"}" class="${"dropzone flex justify-center items-center overflow-scroll brightness-95 backdrop-blur-3xl " + escape(textSizeTW, true) + " " + escape(dimensionsTW, true) + " mx-auto svelte-1m2am6r"}" id="${"default"}">
  <div class="${"dz-message font-Nunito "}" data-dz-message><span class="${"block"}">${escape(text)}</span></div></form>



`;
});
export {
  Dropzone_1 as D
};
