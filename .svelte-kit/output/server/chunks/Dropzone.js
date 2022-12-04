import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "./index.js";
import { i as isDarkMode, a as navHomeworkClicked } from "./store.js";
import { I as InView, c as cssToHead } from "./utils.js";
import "stream";
const Dropzone_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dropzone .dz-preview.dz-image-preview{background-color:transparent !important}",
  map: null
};
const Dropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let boxShadowColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  let $navHomeworkClicked, $$unsubscribe_navHomeworkClicked;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_navHomeworkClicked = subscribe(navHomeworkClicked, (value) => $navHomeworkClicked = value);
  let { testingCSS } = $$props;
  let { text = "\u{1F525}" } = $$props;
  let { textSizeTW = "text-3xl" } = $$props;
  let { dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]" } = $$props;
  let { brightnessTW = "brightness-100" } = $$props;
  let { uniqueId } = $$props;
  let dropzone;
  async function hydrateDropzoneDomEls() {
    cssToHead("dropzoneCSS", "/dropzone.css");
    const { Dropzone: Dropzone2 } = await import("dropzone");
    console.log("drop it like its \u{1F525}");
    const { PUBLIC_UPLOAD_ENDPOINT } = await import("./public.js");
    const ACCEPTED_FILES_FRONTEND = ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc";
    dropzone = new Dropzone2(
      "#default",
      {
        url: PUBLIC_UPLOAD_ENDPOINT,
        acceptedFiles: ACCEPTED_FILES_FRONTEND
      }
    );
    dropzoneProcessUploads();
    document.querySelector("#default").id = uniqueId;
  }
  function dropzoneProcessUploads() {
    dropzone.options.autoProcessQueue = false;
    dropzone.options.parallelUploads = 50;
    dropzone.on("addedfile", () => setTimeout(() => (navigator == null ? void 0 : navigator.onLine) && dropzone.processQueue(), 0));
    window == null ? void 0 : window.addEventListener("online", () => dropzone.processQueue());
    let filesToRetry = [];
    dropzone.on("error", (file) => filesToRetry.push(file));
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
  if ($$props.testingCSS === void 0 && $$bindings.testingCSS && testingCSS !== void 0)
    $$bindings.testingCSS(testingCSS);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.textSizeTW === void 0 && $$bindings.textSizeTW && textSizeTW !== void 0)
    $$bindings.textSizeTW(textSizeTW);
  if ($$props.dimensionsTW === void 0 && $$bindings.dimensionsTW && dimensionsTW !== void 0)
    $$bindings.dimensionsTW(dimensionsTW);
  if ($$props.brightnessTW === void 0 && $$bindings.brightnessTW && brightnessTW !== void 0)
    $$bindings.brightnessTW(brightnessTW);
  if ($$props.uniqueId === void 0 && $$bindings.uniqueId && uniqueId !== void 0)
    $$bindings.uniqueId(uniqueId);
  $$result.css.add(css);
  testingCSS = $navHomeworkClicked && "bg-blue-400";
  boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";
  $$unsubscribe_isDarkMode();
  $$unsubscribe_navHomeworkClicked();
  return `
${validate_component(InView, "InView").$$render(
    $$result,
    {
      once: true,
      vanilla: ".dropzone",
      onview: hydrateDropzoneDomEls
    },
    {},
    {}
  )}

<form id="${"default"}" method="${"post"}" style="${"box-shadow: inset 0 -10px 10px " + escape(boxShadowColor, true) + "; border-radius: 50px; border-color: transparent; background-color: transparent"}" class="${"dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl " + escape(brightnessTW, true) + " " + escape(textSizeTW, true) + " " + escape(dimensionsTW, true) + " mx-auto group"}">
  <div class="${"dz-message font-Nunito group-hover:animate-pulse"}" data-dz-message>${escape(text)}</div>
</form>`;
});
export {
  Dropzone as D
};
