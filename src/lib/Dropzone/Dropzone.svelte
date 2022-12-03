<script>
  import { browser } from "$app/environment";
  // import("$lib/Dropzone/dropzone.css");
  // transition-transform duration-1000  {$navHomeworkClicked
  //   ? 'scale-100'
  //   : 'scale-0'}
  import {
    isDarkMode,
    // navLoginClicked,
    navHomeworkClicked,
  } from "$lib/store";
  export let testingCSS;
  $: testingCSS = $navHomeworkClicked && "bg-blue-400";

  export let text = "🔥";
  export let textSizeTW = "text-3xl";
  export let dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]";
  export let brightnessTW = "brightness-100";
  $: boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";

  export let uniqueId; // needed in order to instantiate multiple dropzones on one page
  let dropzone;

  // $: if (browser && dropzone?.files.length) {
  //   dropzone.processQueue();
  // }

  import InView from "$lib/InView.svelte";
  import { cssToHead } from "$lib/utils";

  // import { onMount } from "svelte";

  // By default (i.e. when 'dropzone.options.autoProcessQueue = true') dropzone uploads are never re-attempted if internet cuts out OR upload was started while internet was off. The function below works normally when online, but deals with the aforementioned two offline cases to resume/retry upload.

  function dropzoneProcessUploads() {
    dropzone.options.autoProcessQueue = false;
    dropzone.options.parallelUploads = 20;

    // When online proceed regularly
    dropzone.on("addedfile", () => {
      setTimeout(() => navigator?.onLine && dropzone.processQueue(), 0);
      // for some reason setTimeout is necessary .. something something js event cycle?
    });

    // When coming back online proceed with uploading files in queue
    window?.addEventListener("online", () => {
      dropzone.processQueue();
    });

    // When internet cuts out mid-upload, collect files and reprocess when internet comes back
    let filesToRetry = [];
    dropzone.on("error", (file) => filesToRetry.push(file));

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

        // reset collected files array for good measure (not really needed)
        filesToRetry.length == 0;
      }
    });
  }

  async function hydrateDropzoneDomEls() {
    // await import("$lib/Dropzone/dropzone.css");
    //TODO: this crashes when using InView.svelte with this function; it appears to be an issue with vite's 'npm run build' when dynamically importing css. TODO: WORKAROUND: create and append <link:css> from copy of dropzone.css inside src/static folder:
    cssToHead("dropzoneCSS", "/dropzone.css");
    const { Dropzone } = await import("dropzone");
    console.log("drop it like its 🔥");

    const { PUBLIC_UPLOAD_ENDPOINT } = await import("$env/static/public");
    const ACCEPTED_FILES_FRONTEND =
      ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc";

    dropzone = new Dropzone("#default", {
      url: PUBLIC_UPLOAD_ENDPOINT,
      acceptedFiles: ACCEPTED_FILES_FRONTEND,
    });

    dropzoneProcessUploads();

    document.querySelector("#default").id = uniqueId;
  }
</script>

<!-- dropzone doesnt work well with non-vanilla intersection observer logic, hence this component acts as a placeholder for the vanilla intersection observer code -->
<InView once vanilla={".dropzone"} onview={hydrateDropzoneDomEls} />

<!-- on:click={() => {
    dropzone.processQueue();
  }} -->
<form
  id="default"
  method="post"
  style="box-shadow: inset 0 -10px 10px {boxShadowColor}; border-radius: 50px; border-color: transparent; background-color: transparent"
  class="dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl {brightnessTW} {textSizeTW} {dimensionsTW} mx-auto group"
>
  <!-- transition-transform duration-1000 -->
  <div class="dz-message font-Nunito group-hover:animate-pulse" data-dz-message>
    <span>{text}</span>
  </div>
</form>

<!-- Note: Importing dropzone via head external links is buggy with multiple dropzone instances. Also limited when modifying css.
<svelte:head>
  <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
  <link
    rel="stylesheet"
    href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css"
    type="text/css"
  />
</svelte:head> -->
<style>
  /* Oddly without specifiying this css as global, the white background on uploaded images isn't removed for all dropzone instances (e.g. for the nav modal dropzone)  */
  :global(.dropzone .dz-preview.dz-image-preview) {
    background-color: transparent !important;
  }
</style>
