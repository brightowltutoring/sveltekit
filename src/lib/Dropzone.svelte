<script>
  import { UPLOAD_ENDPOINT } from "$env/static/private";
  import { elementColor, isDarkMode } from "$lib/store.js";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  let clickText = false;
  import { Dropzone } from "dropzone";
  import "/node_modules/dropzone/dist/dropzone.css";
  import { onMount } from "svelte";
  export let uniqueId = "default"; // needed in order to instantiate multiple dropzones on one page
  export let text = "Drop it like it's 🔥";
  export let textSizeTW = "text-3xl";
  export let dimensionsTW = "w-[65vw] sm:w-[60vw] h-[60vh]";
  export let brightnessTW = "brightness-100";
  let dropzone;

  $: boxShadowColor = $isDarkMode ? "#1d1c43" : "#ddd";

  onMount(() => {
    // Dropzone.autoDiscover = false;
    dropzone = new Dropzone("#default", {
      url: UPLOAD_ENDPOINT,
    });
    document.querySelector("#default").id = uniqueId;
  });
</script>

<!-- for some reason using tailwing for border styles isnt working -->
<!-- style={`box-shadow: inset 0 -10px 10px ${boxShadowColor}; border-radius: 50px; border-color: transparent`} -->
<form
  action={UPLOAD_ENDPOINT}
  method="post"
  id="default"
  style="box-shadow: inset 0 -10px 10px {boxShadowColor}; border-radius: 50px; border-color: transparent"
  class="dropzone flex justify-center items-center overflow-scroll backdrop-blur-3xl {brightnessTW} {textSizeTW} {dimensionsTW} mx-auto "
>
  <!-- dz-message is a dropzone defined class -->
  <div class="dz-message font-Nunito" data-dz-message>
    {#key clickText}
      <span
        in:scale={{ duration: 1000, easing: elasticOut }}
        on:click={() => {
          clickText = !clickText;
        }}
        class="block"
      >
        {text}</span
      >
    {/key}
  </div>
</form>

<!-- TODO: Importing dropzone via https link is buggy with multiple dropzone instances and/or svelte's component mounting. Also limited in modifying css when importing from https link -->

<!-- <svelte:head>
  <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
  <link
    rel="stylesheet"
    href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css"
    type="text/css"
  />
</svelte:head> -->
<style>
  :global(.dropzone .dz-preview.dz-image-preview) {
    background-color: transparent;
  }
  /*  Oddly, to remove the white background on each uploaded image, I have to use svelte's ':global' directive on the css, otherwise it works only on some dropzonejs instances  */
</style>
