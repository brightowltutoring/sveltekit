<script>
  import DropzoneHydrator from "$lib/Dropzone/DropzoneHydrator.svelte";
  import { isDarkMode } from "$lib/store.js";
  import "$lib/Dropzone/dropzone.css";
  export let text = "Drop it like it's 🔥";
  export let textSizeTW = "text-3xl";
  export let dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]";
  export let brightnessTW = "brightness-100";

  $: boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";
</script>

<DropzoneHydrator />

<!-- flex justify-center items-center -->
<form
  method="post"
  id="default"
  style="box-shadow: inset 0 -10px 10px {boxShadowColor}; border-radius: 50px; border-color: transparent; background-color: transparent"
  class="dropzone grid place-items-center overflow-scroll backdrop-blur-3xl {brightnessTW} {textSizeTW} {dimensionsTW} mx-auto group"
>
  <!-- dz-message is a dropzone defined class -->
  <div class="dz-message font-Nunito group-hover:animate-pulse" data-dz-message>
    <span>{text}</span>
  </div>
</form>

<!-- Note: Importing dropzone via https link is buggy with multiple dropzone instances and/or svelte's component mounting. Also limited in modifying css when importing from https link -->

<!-- <svelte:head>
  <link
    rel="stylesheet"
    href="/node_modules/dropzone/dist/dropzone.css"
    type="text/css"
  />
</svelte:head> -->
<!-- <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script> -->

<!-- 
<svelte:head>
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
  /*  Oddly, to remove the white background on each uploaded image, I have to use svelte's ':global' directive on the css, otherwise it works only on some dropzonejs instances  */
</style>
