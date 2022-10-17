<script>
  import { UPLOAD_ENDPOINT } from "$env/static/private";
  import { elementColor } from "$lib/store.js";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  let clickText = false;
  import { Dropzone } from "dropzone";
  import "/node_modules/dropzone/dist/dropzone.css";
  import { onMount } from "svelte";
  export let dropzoneText = "Drop it like it's 🔥";
  export let dropzoneTextSizeTW = "text-3xl";
  export let uniqueId = "default";
  export let dimensionsTW = "w-[60vw] h-[50vh]";
  let dropzone;

  onMount(() => {
    Dropzone.autoDiscover = false;
    dropzone = new Dropzone("#default", {
      url: UPLOAD_ENDPOINT,
    });
    document.querySelector("#default").id = uniqueId;
  });
</script>

<!-- style:background-color={$elementColor} -->
<form
  action={UPLOAD_ENDPOINT}
  method="post"
  class="dropzone flex justify-center items-center overflow-scroll brightness-95 backdrop-blur-3xl {dropzoneTextSizeTW} {dimensionsTW}  mx-auto "
  id="default"
>
  <!-- dz-message is a dropzone defined class -->
  <div class="dz-message font-Nunito " data-dz-message>
    {#key clickText}
      <span
        in:scale={{ duration: 1000, easing: elasticOut }}
        on:click={() => {
          clickText = !clickText;
        }}
        class="block"
      >
        {dropzoneText}</span
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
  /*  Oddly, to remove the white background on each uploaded image, I have to use svelte's ':global' directive on the css, otherwise it works on some dropzonejs instances  */
  form {
    border-radius: 50px;
    border-style: dotted;
    border-color: white;
  }
  /*  The inline tailwind code "border-1 border-dotted border-white rounded-[50px]" doesn't work consistently with all dropzonejs instances... luckily using vanilla css still works */
</style>
