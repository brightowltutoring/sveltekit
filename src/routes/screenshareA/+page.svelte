<script>
  import JitsiUserAdmin from "$lib/JitsiUserAdmin.svelte";
  import { onMount } from "svelte";
  import { isDarkMode } from "$lib/store.js";

  onMount(() => {
    $isDarkMode = true;
    window.document.body.classList.toggle("dark-mode");
  });
</script>

<JitsiUserAdmin />
