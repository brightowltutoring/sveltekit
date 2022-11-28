<script>
  import { isDarkMode } from "$lib/store.js";
  $: fillColor = $isDarkMode ? "white" : "black";

  let scaleTW = "scale-[1.5] origin-top";
  let size = 20;
</script>

<svg width={size} height={size} viewBox="0 0 {size} {size}" class={scaleTW}>
  <path
    fill={fillColor}
    d="M14 10L8 5v3H1v4h7v3l6-5zm3 7H9v2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9v2h8v14z"
  />
</svg>
