<script>
  // import("$lib/Dropzone/dropzone.css");
  // import { Dropzone } from "dropzone";
  export let uniqueId; // needed in order to instantiate multiple dropzones on one page

  import {
    cssToHead,
    // isRunningStandalone
  } from "$lib/utils";

  import { isDarkMode, navHomeworkClicked } from "$lib/store";

  export let text = "🔥";
  export let textSizeTW = "text-3xl";
  export let dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]";
  export let brightnessTW = "brightness-100";
  $: boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";

  import InView from "$lib/InView.svelte";

  let dropzone;

  async function hydrateDropzoneDomEls() {
    console.log("drop it like its 🔥");

    cssToHead("dropzoneCSS", "/dropzone.css"); // await import("$lib/Dropzone/dropzone.css");
    // Dynamic import of 'dropzone.css' crashes when using InView.svelte with this function; it appears to be an issue with vite's 'npm run build'; oddly works fine with 'npm run dev'
    // WORKAROUND: create and append <link:css> from copy of dropzone.css inside src/static folder:

    const { Dropzone } = await import("dropzone");
    const { PUBLIC_UPLOAD_ENDPOINT } = await import("$env/static/public");

    dropzone = new Dropzone("#default", {
      // dropzone = new Dropzone(".dropzone:not(#default)", {
      // dropzone = new Dropzone("#homeRouteDropzone", {
      url: PUBLIC_UPLOAD_ENDPOINT,
      acceptedFiles: ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc",
    });

    dropzoneHandleErroredUploads();

    document.querySelector("#default").id = uniqueId;
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

  function dropzonePopUp() {
    let clicko = new CustomEvent("click");
    setTimeout(() => {
      let dropzone0 = document.querySelectorAll(".dropzone")[0];
      // without the initially-undefined, global variable logic of 'window.clickoFiredOnce', the custom click event would fire twice on the homepage .. i guess because two dropzones were visible there (homepage and modal)
      if (!window.clickoFiredOnce) {
        dropzone0.dispatchEvent(clicko);
        // &&console.log("evento fired on", dropzone0);
        window.clickoFiredOnce = true;
      }
    }, 50);
  }

  import { onMount } from "svelte";
  onMount(() => {
    document
      .querySelector('a[href="/homework"]')
      .addEventListener("click", dropzonePopUp);
  });
  // !!! Previously, instead of the more vanilla-y eventlistener approach just above, I was using '$navHomeworkClicked && dropzonePopUp()' inside the intersection observer function 'hydrateDropzoneDomEls()' .. which worked on chrome, firefox but NOT safari or the PWA on ios simulator ... NO idea why ... assuming intersection observer is buggier on safari
</script>

<!-- dropzone doesnt work well with non-vanilla intersection observer logic, hence ... -->
<InView
  once
  vanilla={".dropzone"}
  onview={hydrateDropzoneDomEls}
  margin={"400px"}
  threshold={1}
/>

<!-- id={uniqueId} -->
<form
  id="default"
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
  <div class="dz-message font-Nunito group-hover:animate-pulse" data-dz-message>
    {text}
  </div>
</form>

<!-- function OLD_WAY_dropzoneHandleErroredUploads() {
  // dropzone.options.autoProcessQueue = false; // default set to true 
  // dropzone.options.parallelUploads = 50;

  // When online, proceed normally. Note: for some reason setTimeout is necessary .. something something js event cycle?

  // dropzone.on("addedfile", () => navigator?.onLine &&
  //   setTimeout(() => dropzone.processQueue(), 0)
  // );

  // When coming back online proceed with uploading files in queue
  // window?.addEventListener("online", () => dropzone.processQueue());

  // When internet cuts out mid-upload, collect 'errored' files (which are of the acceptable type) ...
  let filesToRetry = [];
  dropzone.on("error", (file) => file.accepted && filesToRetry.push(file));

  // ... and reprocess files when internet comes back
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

  // OLD WAY OF DOING 'file.accepted' logic; also required ACCEPTED_FILES_FRONTEND to be defined globally:
  // let fileExt = file.name.split(".").pop(); // e.g png, md, txt
  // if (ACCEPTED_FILES_FRONTEND.includes(fileExt)) filesToRetry.push(file);
} -->
<style>
  /* Oddly without specifiying this css as global, the white background on uploaded images isn't removed for all dropzone instances (e.g. for the nav modal dropzone)  */
  :global(.dropzone .dz-preview.dz-image-preview) {
    background-color: transparent !important;
  }
</style>
