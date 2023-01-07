<script>
  import JitsiUser from "$lib/Jitsi/JitsiUser.svelte";
  import { onMount, onDestroy } from "svelte";
  import { isDarkMode } from "$lib/store";

  let wasDarkModeLS = sessionStorage.getItem("isDarkMode");
  onMount(() => {
    $isDarkMode = true;
    document.documentElement.classList.add("dark-mode");
  });
  onDestroy(() => {
    if (wasDarkModeLS === "false") {
      $isDarkMode = false;
      document.documentElement.classList.remove("dark-mode");
    }
  });
</script>

<JitsiUser admin />
