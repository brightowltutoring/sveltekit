<script>
  import JitsiUser from "$lib/JitsiUser.svelte";
  import { onMount, onDestroy } from "svelte";
  import { isDarkMode } from "$lib/store.js";

  onMount(() => {
    $isDarkMode = true;
    window.document.body.classList.add("dark-mode");
  });
  onDestroy(() => {
    $isDarkMode = false;
    window.document.body.classList.remove("dark-mode");
  });
</script>

<JitsiUser />
