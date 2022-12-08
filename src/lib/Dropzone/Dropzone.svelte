<script>
  // import("$lib/Dropzone/dropzone.css");
  // import { Dropzone } from "dropzone";
  import InView from "$lib/InView.svelte";
  import { cssToHead } from "$lib/utils";
  import { isDarkMode, showHomeworkModal } from "$lib/store";

  // import { onMount } from "svelte";
  // onMount(() => {
  //   document
  //     .querySelector('a[href="/homework"]')
  //     .addEventListener("click", dropzonePopUpOnce);
  // });
  // TODO: Note: using {once:true} inside the event listener would not produce the desired of effect of firing 'dropzonePopUpOnce()' once per SESSION ... since when the component is destroyed between route changes so too is the logic in this .svelte file. The work around is done with the global variable logic inside 'dropzonePopUpOnce()'

  // Alternative to the vanilla-y eventListener logic commented out above.
  $: $showHomeworkModal && dropzonePopUpOnce();

  export let uniqueId; // needed in order to instantiate multiple dropzones on one page
  let dropzone;

  export let text = "🔥";
  export let textSizeTW = "text-3xl";
  export let dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]";
  export let brightnessTW = "brightness-100";
  $: boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";

  async function hydrateDropzoneDomEls(target) {
    console.log("drop it like its 🔥");

    cssToHead("dropzoneCSS", "/dropzone.css"); // await import("$lib/Dropzone/dropzone.css");
    // Dynamic import of 'dropzone.css' crashes when using InView.svelte with this function; it appears to be an issue with vite's 'npm run build'; oddly works fine with 'npm run dev'
    // WORKAROUND: create and append <link:css> from copy of dropzone.css inside src/static folder:

    const { Dropzone } = await import("dropzone");
    const { PUBLIC_UPLOAD_ENDPOINT } = await import("$env/static/public");

    dropzone = new Dropzone(target, {
      // dropzone = new Dropzone(daForm, {
      url: PUBLIC_UPLOAD_ENDPOINT,
      acceptedFiles: ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc",
    });

    target.id = uniqueId;

    dropzoneHandleErroredUploads();
  }

  // Collect 'errored' files, which are of the acceptable type ... and reprocess files when internet comes back.
  // Tested use cases: internet cuts out mid-upload, and internet off when upload started.
  function dropzoneHandleErroredUploads() {
    let filesToRetry = [];
    dropzone.on("error", (file) => file.accepted && filesToRetry.push(file));

    window?.addEventListener("online", () => {
      if (filesToRetry.length > 0) {
        for (const file of filesToRetry) {
          dropzone.processFile(file);

          // removes error mark css after the files have been processed
          file.previewElement.querySelector(".dz-error-mark").style.visibility =
            "hidden";
          // removes error message css after the files have been processed
          file.previewElement.querySelector(
            ".dz-error-message"
          ).style.visibility = "hidden";
        }

        // reset collected files array when done
        filesToRetry.length == 0;
      }
    });
  }

  function dropzonePopUpOnce() {
    let clicko = new CustomEvent("click");

    // The enclosed code fires once since 'globalThis.onceBoolean' starts out as undefined, then switched to true inside
    if (!globalThis.onceBoolean) {
      setTimeout(() => {
        document.querySelector(".dropzone").dispatchEvent(clicko);
      }, 50);

      globalThis.onceBoolean = true;
    }
  }

  // function dropzonePopUpOnce_OLD() {
  //   // without the initially-undefined-variable logic of 'globalThis.clickoFiredOnce', the custom click event would fire twice on the homepage .. this appears to be a problem when using the vanilla intersection observer logic over the NOW slotted version ..specifically multiple dropzone instances seem to interfere using the vanilla mode of InView
  //   if (!globalThis.clickoFiredOnce) {
  //     let clicko = new CustomEvent("click");
  //     setTimeout(() => {
  //       document.querySelector(".dropzone").dispatchEvent(clicko);
  //       globalThis.clickoFiredOnce = true;
  //     }, 50);
  //   }
  // }
</script>

<InView
  single
  onview={(target) => hydrateDropzoneDomEls(target)}
  once
  margin={"400px"}
  threshold={1}
>
  <form
    method="post"
    style="box-shadow: inset 0 -10px 10px {boxShadowColor}; border-radius: 50px; border-color: transparent; background-color: transparent"
    class="dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl {brightnessTW} {textSizeTW} {dimensionsTW} mx-auto group"
  >
    <!-- <input
    style="text-align: center"
    type="text"
    id="gdf"
    name="gdf"
    placeholder="1nQLtENA2318gXFsNbPklccxA-oz8Anfz"
  /> -->
    <div
      class="dz-message font-Nunito group-hover:animate-pulse"
      data-dz-message
    >
      {text}
    </div>
  </form>
</InView>

<style>
  /* Oddly without specifiying this css as global, the white background on uploaded images isn't removed for all dropzone instances (e.g. for the nav modal dropzone)  */
  :global(.dropzone .dz-preview.dz-image-preview) {
    background-color: transparent !important;
  }
</style>
