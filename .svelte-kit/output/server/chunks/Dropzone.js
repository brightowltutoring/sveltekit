import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "./index.js";
import { I as InView, c as cssToHead } from "./utils.js";
import { i as isDarkMode, a as showHomeworkModal } from "./store.js";
const Dropzone_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dropzone .dz-preview.dz-image-preview{background-color:transparent !important}",
  map: null
};
function dropzonePopUpOnce() {
  if (!globalThis.onceBoolean) {
    setTimeout(
      () => {
        document.querySelector(".dropzone").dispatchEvent(new CustomEvent("click"));
      },
      50
    );
    globalThis.onceBoolean = true;
  }
}
const Dropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let boxShadowColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  let $showHomeworkModal, $$unsubscribe_showHomeworkModal;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_showHomeworkModal = subscribe(showHomeworkModal, (value) => $showHomeworkModal = value);
  let { text = "\u{1F525}" } = $$props;
  let { textSizeTW = "text-3xl" } = $$props;
  let { dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]" } = $$props;
  let { brightnessTW = "brightness-100" } = $$props;
  let dropzone;
  async function hydrateDropzoneDomEls(target) {
    console.log("drop it like its \u{1F525}");
    cssToHead("dropzoneCSS", "/dropzone.css");
    const { PUBLIC_UPLOAD_ENDPOINT } = await import("./public.js");
    const { Dropzone: Dropzone2 } = await import("dropzone");
    dropzone = new Dropzone2(
      target,
      {
        url: PUBLIC_UPLOAD_ENDPOINT,
        acceptedFiles: ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc"
      }
    );
    dropzoneHandleErroredUploads();
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
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.textSizeTW === void 0 && $$bindings.textSizeTW && textSizeTW !== void 0)
    $$bindings.textSizeTW(textSizeTW);
  if ($$props.dimensionsTW === void 0 && $$bindings.dimensionsTW && dimensionsTW !== void 0)
    $$bindings.dimensionsTW(dimensionsTW);
  if ($$props.brightnessTW === void 0 && $$bindings.brightnessTW && brightnessTW !== void 0)
    $$bindings.brightnessTW(brightnessTW);
  $$result.css.add(css);
  $showHomeworkModal && dropzonePopUpOnce();
  boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";
  $$unsubscribe_isDarkMode();
  $$unsubscribe_showHomeworkModal();
  return `${validate_component(InView, "InView").$$render(
    $$result,
    {
      single: true,
      onview: hydrateDropzoneDomEls,
      once: true,
      margin: "0px"
    },
    {},
    {
      default: () => {
        return `<form method="${"post"}" style="${"box-shadow: inset 0 -10px 10px " + escape(boxShadowColor, true) + "; border-radius: 50px; border-color: transparent; background-color: transparent"}" class="${"dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl " + escape(brightnessTW, true) + " " + escape(textSizeTW, true) + " " + escape(dimensionsTW, true) + " mx-auto group"}">
    <div class="${"dz-message font-Nunito group-hover:animate-pulse"}" data-dz-message>${escape(text)}</div></form>`;
      }
    }
  )}`;
});
export {
  Dropzone as D
};
