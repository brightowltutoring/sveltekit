<!-- currently not in use -->
<script>
  import { isDarkMode } from "$lib/store.js";

  import { onMount } from "svelte";

  onMount(() => {
    window.document.body.classList.toggle("dark-mode");
    $isDarkMode = true;
    // window.document.body.classList.remove("dark-mode");
    // $isDarkMode = false;
  });
</script>
