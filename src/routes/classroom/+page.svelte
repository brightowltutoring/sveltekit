<script lang="ts">
  import JitsiUser from "./JitsiUser.svelte";
  import { browser } from "$app/environment";
  import { onMount, onDestroy } from "svelte";
  import { isDarkMode } from "$lib/store";

  // this is to decide in onDestroy to reset to lightmode when navigating away from '/classroom', or to remain in darkmode ... provided darkmode was on before navigating to

  let wasDarkModeLS = browser && sessionStorage.getItem("isDarkMode");

  onMount(() => {
    $isDarkMode = true;
    document.documentElement.classList.add("dark-mode");
  });
  onDestroy(() => {
    if (wasDarkModeLS === "false" || null) {
      $isDarkMode = false;
      document.documentElement.classList.remove("dark-mode");
    }
  });
</script>

<JitsiUser />
