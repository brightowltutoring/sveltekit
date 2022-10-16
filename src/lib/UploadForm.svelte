<script>
  import { UPLOAD_ENDPOINT } from "$env/static/private";
  import { elementColor } from "$lib/store.js";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  let clickText = false;
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
  class="dropzone"
  action={UPLOAD_ENDPOINT}
  style:background-color={$elementColor}
>
  <!-- dz-message is a dropzone defined class -->

  <div class=" dz-message text-2xl font-Nunito text-red-400 " data-dz-message>
    {#key clickText}
      <span
        class=" block"
        in:scale={{ duration: 1000, easing: elasticOut }}
        on:click={() => {
          clickText = !clickText;
        }}
      >
        Drop it like it's 🔥</span
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
    background: #fff;
    width: 80vw;
    height: 30vh;
    margin: 0 auto;
    border-color: #ddd;
    z-index: 999;
    border-radius: 50px;
  }
</style>
