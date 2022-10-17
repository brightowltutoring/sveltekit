<script>
  import { UPLOAD_ENDPOINT } from "$env/static/private";
  // import { elementColor } from "$lib/store.js";
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

<form
  action={UPLOAD_ENDPOINT}
  method="post"
  class="dropzone flex justify-center items-center overflow-scroll brightness-95 backdrop-blur-3xl {dimensionsTW}"
  id="default"
>
  <!-- style:background-color={$elementColor} -->
  <!-- dz-message is a dropzone defined class -->

  <div class="dz-message {dropzoneTextSizeTW} font-Nunito " data-dz-message>
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

<!-- TODO: This non-npm way of using dropzone is a buggy with multiple dropzones on "same page" ... i.e. with the modal dropzone implemented globally, and page specific dropzones -->

<svelte:head>
  <!-- <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script> -->
  <!-- <link
    rel="stylesheet"
    href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css"
    type="text/css"
  /> -->
</svelte:head>

<style>
  form {
    /* margin-bottom: 150px;
    margin-top: 150px; */
    margin: 0 auto;
    border-color: white;
    /* z-index: 999; */
    border-radius: 50px;
  }
</style>
