<script>
  import HydrateDropzone from "$lib/Dropzone/HydrateDropzone.svelte";
  import { isDarkMode } from "$lib/store.js";
  export let text = "Drop it like it's 🔥";
  export let textSizeTW = "text-3xl";
  export let dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]";
  export let brightnessTW = "brightness-100";
  $: boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";
</script>

<HydrateDropzone />

<form
  method="post"
  id="default"
  style="box-shadow: inset 0 -10px 10px {boxShadowColor}; border-radius: 50px; border-color: transparent; background-color: transparent"
  class="dropzone grid place-items-center overflow-scroll backdrop-blur-3xl {brightnessTW} {textSizeTW} {dimensionsTW} mx-auto group "
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
