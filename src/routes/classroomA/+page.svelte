<script>
  import JitsiUser from "$lib/Jitsi/JitsiUser.svelte";
  import { onMount, onDestroy } from "svelte";
  import { isDarkMode } from "$lib/store";

  let wasDarkModeLS = sessionStorage.getItem("isDarkModeLS");
  onMount(() => {
    $isDarkMode = true;
    document.body.classList.add("dark-mode");
  });
  onDestroy(() => {
    if (wasDarkModeLS === "false") {
      $isDarkMode = false;
      window.document.body.classList.remove("dark-mode");
    }
  });
</script>

<JitsiUser admin />
