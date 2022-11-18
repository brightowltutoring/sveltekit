<script>
  import HydrateDropzone from "$lib/Dropzone/HydrateDropzone.svelte";
  // import InView from "$lib/InView.svelte";

  // export let uniqueId = "default";
  import { isDarkMode } from "$lib/store.js";
  export let text = "Drop it like it's 🔥";
  export let textSizeTW = "text-3xl";
  export let dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]";
  export let brightnessTW = "brightness-100";
  $: boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";

  // TODO: for some reason using <InView><slot/></Inview> logic works in development but not in production; when running 'npm run dev' I get the message 'ERROR: Could not resolve "./dropzone2.js"'
  // import InView from "$lib/InView.svelte";
  // export let uniqueId = "default"; // needed in order to instantiate multiple dropzones on one page
  // let dropzone;
  // async function hydrateDropzoneDomEls() {
  //   console.log("drop it like its 🔥");
  //   const { PUBLIC_UPLOAD_ENDPOINT } = await import("$env/static/public");

  //   const ACCEPTED_FILES_FRONTEND =
  //     ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc";

  //   const { Dropzone } = await import("dropzone");
  //   await import("$lib/Dropzone/dropzone.css");

  //   dropzone = new Dropzone("#default", {
  //     url: PUBLIC_UPLOAD_ENDPOINT,
  //     acceptedFiles: ACCEPTED_FILES_FRONTEND,
  //   });

  //   document.querySelector("#default").id = uniqueId;
  // }
</script>

<HydrateDropzone />

<!-- id={uniqueId} -->
<!-- grid place-items-center -->
<form
  id="default"
  method="post"
  style="box-shadow: inset 0 -10px 10px {boxShadowColor}; border-radius: 50px; border-color: transparent; background-color: transparent"
  class="dropzone flex justify-center items-center flex-wrap overflow-scroll backdrop-blur-3xl {brightnessTW} {textSizeTW} {dimensionsTW} mx-auto group "
>
  <div class="dz-message font-Nunito group-hover:animate-pulse" data-dz-message>
    <!-- dz-message is a dropzone defined class -->
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
  :global(.dropzone .dz-preview.dz-image-preview) {
    background-color: transparent !important;
  }

  /* Oddly without specifiying this css as global, the white background on uploaded images isn't removed for all dropzone instances (e.g. for the nav modal dropzone)  */
</style>
