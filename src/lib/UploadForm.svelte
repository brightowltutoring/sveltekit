<script>
  import { onMount } from "svelte";
  import { UPLOAD_ENDPOINT } from "$env/static/private";
  import { elementColor } from "$lib/store.js";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  let clickText = false;
  export let dropzoneText = "Drop it like it's 🔥";
  export let dropzoneTextSizeTW = "text-2xl";

  let dzNumImages = 0;

  // onMount(() => {
  //   dzNumImages = document.querySelectorAll(".dz-image").length;
  // });
</script>

<svelte:head>
  <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
  <link
    rel="stylesheet"
    href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css"
    type="text/css"
  />
</svelte:head>

<!-- <main> -->

<form
  method="post"
  class="dropzone flex justify-center items-center"
  action={UPLOAD_ENDPOINT}
  style:background-color={$elementColor}
  on:click={() => {
    dzNumImages = document.querySelectorAll(".dz-image").length;
    console.log("dzNumImages", dzNumImages);
  }}
>
  <!-- dz-message is a dropzone defined class -->

  <div
    class="dz-message {dropzoneTextSizeTW} font-Nunito text-red-400 "
    data-dz-message
  >
    {#key clickText}
      <span
        class="block"
        in:scale={{ duration: 1000, easing: elasticOut }}
        on:click={() => {
          clickText = !clickText;
        }}
      >
        {dropzoneText}</span
      >
    {/key}
  </div>
</form>

<!-- </main> -->
<style>
  /* main {
  } */
  form {
    margin-bottom: 150px;
    margin-top: 150px;
    width: 80vw;
    height: 50vh;
    border-color: #ddd;
    z-index: 999;
    border-radius: 50px;
  }
</style>
