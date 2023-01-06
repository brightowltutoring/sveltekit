<script>
  // import { browser } from "$app/environment";
  import JitsiUser from "$lib/Jitsi/JitsiUser.svelte";
  import { onMount, onDestroy } from "svelte";
  import { isDarkMode } from "$lib/store";

  // this is to decide in onDestroy to reset to lightmode when navigating away from '/classroom', or to remain in darkmode ... provided darkmode was on before navigating to

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

<JitsiUser />
