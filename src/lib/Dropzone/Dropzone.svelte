<script>
  import { navLoginClicked } from "$lib/store.js";
  // import { navHomeworkClicked } from "$lib/store";
  // export let noTransition = false;
  // import { scale } from "svelte/transition";
  // import { quintOut } from "svelte/easing";

  import { isDarkMode, navHomeworkClicked } from "$lib/store";
  export let text = "Drop it like it's 🔥";
  export let textSizeTW = "text-3xl";
  export let dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]";
  export let brightnessTW = "brightness-100";
  $: boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";

  import InView from "$lib/InView.svelte";
  import { cssToHead } from "$lib/utils";
  export let uniqueId; // needed in order to instantiate multiple dropzones on one page
  let dropzone;

  async function hydrateDropzoneDomEls() {
    console.log("drop it like its 🔥");
    const { PUBLIC_UPLOAD_ENDPOINT } = await import("$env/static/public");

    const ACCEPTED_FILES_FRONTEND =
      ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc";

    const { Dropzone } = await import("dropzone");

    // await import("$lib/Dropzone/dropzone.css");
    //TODO: this crashes when using InView.svelte with this function; it appears to be an issue with vite's 'npm run build' when dynamically importing css. TODO: WORKAROUND: create and append <link:css> from copy of dropzone.css inside src/static folder:
    cssToHead("dropzoneCSS", "/dropzone.css");

    dropzone = new Dropzone("#default", {
      url: PUBLIC_UPLOAD_ENDPOINT,
      acceptedFiles: ACCEPTED_FILES_FRONTEND,
    });

    document.querySelector("#default").id = uniqueId;
  }

  let testTransition = $navLoginClicked && "scale-50";
  // let testTransition = `${$navHomeworkClicked && "scale-100"} ${
  //   $navLoginClicked && "scale-50"
  // } `;
</script>

<!-- dropzone doesnt work well with non-vanilla intersection observer logic, hence this component acts as a placeholder for the vanilla intersection observer code -->

<!-- {#key !noTransition && $navHomeworkClicked} -->
<InView once vanilla={".dropzone"} onview={hydrateDropzoneDomEls} />
<!-- in:scale={{ duration: 300, easing: quintOut }} -->
<!-- {$navHomeworkClicked
    ? 'duration-1000 ease-in-out transition-transform scale-100 '
    : 'duration-1000 ease-in-out transition-transform scale-10 '} -->
<form
  id="default"
  method="post"
  style="box-shadow: inset 0 -10px 10px {boxShadowColor}; border-radius: 50px; border-color: transparent; background-color: transparent"
  class=" transition-transform duration-1000 dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl {brightnessTW} {textSizeTW} {dimensionsTW} mx-auto group"
>
  <div class="dz-message font-Nunito group-hover:animate-pulse" data-dz-message>
    <span>{text}</span>
  </div>
</form>
<!-- {/key} -->

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
