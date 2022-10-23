<script>
  import IconSun from "$lib/IconSun.svelte";
  import IconMoon from "$lib/IconMoon.svelte";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { isDarkMode } from "$lib/store.js";

  function toggleDM() {
    window.document.body.classList.toggle("dark-mode");
    $isDarkMode = !$isDarkMode;
    // $isDarkMode
    //   ? (document.documentElement.style.background = "black")
    //   : (document.documentElement.style.background = "white");
  }
</script>

{#key $isDarkMode}
  <button on:click={toggleDM} in:scale={{ duration: 1000, easing: elasticOut }}>
    {#if $isDarkMode}
      <IconSun />
    {:else}
      <IconMoon />
    {/if}
  </button>
{/key}
