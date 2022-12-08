<script>
  // import("$lib/Dropzone/dropzone.css");
  // import { Dropzone } from "dropzone";
  import InView from "$lib/InView.svelte";
  import { cssToHead } from "$lib/utils";
  import { isDarkMode, showHomeworkModal } from "$lib/store";

  import { onMount } from "svelte";
  onMount(() => {
    document
      .querySelector('a[href="/homework"]')
      .addEventListener("click", dropzonePopUp, { once: true });
  });

  function dropzonePopUp() {
    let clicko = new CustomEvent("click");
    setTimeout(() => {
      document.querySelector(".dropzone").dispatchEvent(clicko);
    }, 50);
  }

  // Unorthodox alternative to using onmMount + eventListener with once attribute ...as above
  // $: if ($showHomeworkModal && !globalThis.onceBoolean) {
  //   dropzonePopUp();
  //   globalThis.onceBoolean = true;
  // }

  export let uniqueId; // needed in order to instantiate multiple dropzones on one page
  let daForm;
  let dropzone;

  export let text = "🔥";
  export let textSizeTW = "text-3xl";
  export let dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]";
  export let brightnessTW = "brightness-100";
  $: boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";

  async function hydrateDropzoneDomEls() {
    console.log("drop it like its 🔥");

    cssToHead("dropzoneCSS", "/dropzone.css"); // await import("$lib/Dropzone/dropzone.css");
    // Dynamic import of 'dropzone.css' crashes when using InView.svelte with this function; it appears to be an issue with vite's 'npm run build'; oddly works fine with 'npm run dev'
    // WORKAROUND: create and append <link:css> from copy of dropzone.css inside src/static folder:

    const { Dropzone } = await import("dropzone");
    const { PUBLIC_UPLOAD_ENDPOINT } = await import("$env/static/public");

    dropzone = new Dropzone(daForm, {
      url: PUBLIC_UPLOAD_ENDPOINT,
      acceptedFiles: ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc",
    });
    daForm.id = uniqueId;

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

  // function dropzonePopUp_OLD() {
  //   // without the initially-undefined-variable logic of 'globalThis.clickoFiredOnce', the custom click event would fire twice on the homepage .. this appears to be a problem when using the vanilla intersection observer logic over the NOW slotted version (i.e. wrapping form with the Inview component)
  //   if (!globalThis.clickoFiredOnce) {
  //     let clicko = new CustomEvent("click");
  //     setTimeout(() => {
  //       document.querySelector(".dropzone").dispatchEvent(clicko);
  //       globalThis.clickoFiredOnce = true;
  //     }, 50);
  //   }
  // }
</script>

<InView once onview={hydrateDropzoneDomEls} margin={"400px"} threshold={1}>
  <form
    bind:this={daForm}
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
