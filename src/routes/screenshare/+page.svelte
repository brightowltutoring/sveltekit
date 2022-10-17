<script>
  import JitsiUser from "$lib/JitsiUser.svelte";

  import { onMount } from "svelte";
  import { isDarkMode } from "$lib/store.js";

  onMount(() => {
    $isDarkMode = true;
    window.document.body.classList.toggle("dark-mode");
  });
</script>

<JitsiUser />
