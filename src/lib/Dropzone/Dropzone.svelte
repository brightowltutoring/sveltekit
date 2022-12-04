<script>
  // import("$lib/Dropzone/dropzone.css");
  import { isDarkMode, navHomeworkClicked } from "$lib/store";
  export let testingCSS;
  $: testingCSS = $navHomeworkClicked && "bg-blue-400";

  export let text = "🔥";
  export let textSizeTW = "text-3xl";
  export let dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]";
  export let brightnessTW = "brightness-100";
  $: boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";

  import InView from "$lib/InView.svelte";
  import { cssToHead } from "$lib/utils";

  export let uniqueId; // needed in order to instantiate multiple dropzones on one page
  let dropzone;

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

  // By default dropzone uploads are never re-attempted if internet cuts out OR upload was started while internet was off. The function below works normally when online, but deals with the aforementioned two offline cases to resume/retry uploads.
  function dropzoneProcessUploads() {
    dropzone.options.autoProcessQueue = false; // default set to true ... which is troublesome for offline cases
    dropzone.options.parallelUploads = 50;

    // When online, proceed normally. Note: for some reason setTimeout is necessary .. something something js event cycle?
    dropzone.on("addedfile", () =>
      setTimeout(() => navigator?.onLine && dropzone.processQueue(), 0)
    );

    // When coming back online proceed with uploading files in queue
    window?.addEventListener("online", () => dropzone.processQueue());

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
  }
</script>

<!-- dropzone doesnt work well with non-vanilla intersection observer logic, hence ... -->
<InView once vanilla={".dropzone"} onview={hydrateDropzoneDomEls} />

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

<style>
  /* Oddly without specifiying this css as global, the white background on uploaded images isn't removed for all dropzone instances (e.g. for the nav modal dropzone)  */
  :global(.dropzone .dz-preview.dz-image-preview) {
    background-color: transparent !important;
  }
</style>
