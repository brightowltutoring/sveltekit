<script>
  import { isDarkMode } from "$lib/store.js";
  $: fillColor = $isDarkMode ? "white" : "black";
  $: focusFillColorTW = $isDarkMode
    ? "focus:fill-green-400 focus:outline-none"
    : "focus:fill-red-500 focus:outline-none";
  // $: focusFillColorTW = $isDarkMode
  //   ? "focus:fill-green-400 focus:outline-none"
  //   : "focus:fill-red-500 focus:outline-none";
  let scaleTW = "scale-150";
</script>

<svg class={scaleTW} width="20px" height="20px" viewBox="0 0 20 20">
  <!-- class={focusFillColorTW} -->
  <!-- tabindex="-1" -->
  <path
    class="hover:fill-red-500"
    fill={fillColor}
    d="M14 10L8 5v3H1v4h7v3l6-5zm3 7H9v2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9v2h8v14z"
  /></svg
>
