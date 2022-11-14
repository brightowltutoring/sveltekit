import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "./index.js";
import { i as isDarkMode } from "./store.js";
const HydrateDropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { uniqueId = "default" } = $$props;
  if ($$props.uniqueId === void 0 && $$bindings.uniqueId && uniqueId !== void 0)
    $$bindings.uniqueId(uniqueId);
  return ``;
});
const Dropzone_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dropzone .dz-preview.dz-image-preview{background-color:transparent !important}",
  map: null
};
const Dropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let boxShadowColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let { text = "Drop it like it's \u{1F525}" } = $$props;
  let { textSizeTW = "text-3xl" } = $$props;
  let { dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]" } = $$props;
  let { brightnessTW = "brightness-100" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.textSizeTW === void 0 && $$bindings.textSizeTW && textSizeTW !== void 0)
    $$bindings.textSizeTW(textSizeTW);
  if ($$props.dimensionsTW === void 0 && $$bindings.dimensionsTW && dimensionsTW !== void 0)
    $$bindings.dimensionsTW(dimensionsTW);
  if ($$props.brightnessTW === void 0 && $$bindings.brightnessTW && brightnessTW !== void 0)
    $$bindings.brightnessTW(brightnessTW);
  $$result.css.add(css);
  boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";
  $$unsubscribe_isDarkMode();
  return `${validate_component(HydrateDropzone, "HydrateDropzone").$$render($$result, {}, {}, {})}

<form method="${"post"}" id="${"default"}" style="${"box-shadow: inset 0 -10px 10px " + escape(boxShadowColor, true) + "; border-radius: 50px; border-color: transparent; background-color: transparent"}" class="${"dropzone grid place-items-center overflow-scroll backdrop-blur-3xl " + escape(brightnessTW, true) + " " + escape(textSizeTW, true) + " " + escape(dimensionsTW, true) + " mx-auto group"}"><div class="${"dz-message font-Nunito group-hover:animate-pulse"}" data-dz-message>
    <span>${escape(text)}</span></div></form>

`;
});
export {
  Dropzone as D
};
