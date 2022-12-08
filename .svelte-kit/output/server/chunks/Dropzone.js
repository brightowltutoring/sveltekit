import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, d as add_attribute } from "./index.js";
import { I as InView, c as cssToHead } from "./utils.js";
import { i as isDarkMode } from "./store.js";
const Dropzone_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dropzone .dz-preview.dz-image-preview{background-color:transparent !important}",
  map: null
};
const Dropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let boxShadowColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let { uniqueId } = $$props;
  let daForm;
  let dropzone;
  let { text = "\u{1F525}" } = $$props;
  let { textSizeTW = "text-3xl" } = $$props;
  let { dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]" } = $$props;
  let { brightnessTW = "brightness-100" } = $$props;
  async function hydrateDropzoneDomEls() {
    console.log("drop it like its \u{1F525}");
    cssToHead("dropzoneCSS", "/dropzone.css");
    const { Dropzone: Dropzone2 } = await import("dropzone");
    const { PUBLIC_UPLOAD_ENDPOINT } = await import("./public.js");
    dropzone = new Dropzone2(
      daForm,
      {
        url: PUBLIC_UPLOAD_ENDPOINT,
        acceptedFiles: ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc"
      }
    );
    dropzoneHandleErroredUploads();
    daForm.id = uniqueId;
  }
  function dropzoneHandleErroredUploads() {
    let filesToRetry = [];
    dropzone.on("error", (file) => file.accepted && filesToRetry.push(file));
    window == null ? void 0 : window.addEventListener("online", () => {
      if (filesToRetry.length > 0) {
        for (const file of filesToRetry) {
          dropzone.processFile(file);
          file.previewElement.querySelector(".dz-error-mark").style.visibility = "hidden";
          file.previewElement.querySelector(".dz-error-message").style.visibility = "hidden";
        }
      }
    });
  }
  if ($$props.uniqueId === void 0 && $$bindings.uniqueId && uniqueId !== void 0)
    $$bindings.uniqueId(uniqueId);
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
  return `${validate_component(InView, "InView").$$render(
    $$result,
    {
      once: true,
      onview: hydrateDropzoneDomEls,
      margin: "400px",
      threshold: 1
    },
    {},
    {
      default: () => {
        return `<form method="${"post"}" style="${"box-shadow: inset 0 -10px 10px " + escape(boxShadowColor, true) + "; border-radius: 50px; border-color: transparent; background-color: transparent"}" class="${"dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl " + escape(brightnessTW, true) + " " + escape(textSizeTW, true) + " " + escape(dimensionsTW, true) + " mx-auto group"}"${add_attribute("this", daForm, 0)}>
    <div class="${"dz-message font-Nunito group-hover:animate-pulse"}" data-dz-message>${escape(text)}</div></form>`;
      }
    }
  )}`;
});
export {
  Dropzone as D
};
