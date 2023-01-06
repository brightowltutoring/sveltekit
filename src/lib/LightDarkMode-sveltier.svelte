<script>
  import IconSun from "$lib/Icons/IconSun.svelte";
  import IconMoon from "$lib/Icons/IconMoon.svelte";
  import { scale, slide } from "svelte/transition";
  import { elasticOut, quintOut } from "svelte/easing";
  import { isDarkMode } from "$lib/store";
  import { browser } from "$app/environment";

  // CSS dark-mode reactively changes with $isDarkMode. NOTE: the initial-page-load dark-mode is NOT set here; this is set with head script in app.html using the same 'initialTheme()' function
  $: if ($isDarkMode) {
    browser && document.documentElement.classList.add("dark-mode");
  } else {
    browser && document.documentElement.classList.remove("dark-mode");
  }

  // Initially sets $isDarkMode to true or false, using sessionStorage and matchMedia logic
  browser && ($isDarkMode = initialTheme() === "dark");

  // During session set local storage darkmode çopy reactively via global variable '$isDarkMode'
  $: browser && sessionStorage.setItem("isDarkModeLS", $isDarkMode);

  function initialTheme() {
    if (sessionStorage.getItem("isDarkModeLS") === "true") return "dark";
    if (sessionStorage.getItem("isDarkModeLS") === "false") return "light";
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    return "light";
  }
</script>

{#key $isDarkMode}
  <!-- Currently using nested 'divs' to compose two svelte transitions. This can be done with a custom function as well (TODO:) such as on: https://svelte.dev/repl/f5c42c6dc6774f29ad9350cd2dc2d299?version=3.38.3 -->
  <div in:slide={{ duration: 600, easing: quintOut }}>
    <button
      on:click={() => ($isDarkMode = !$isDarkMode)}
      in:scale={{ duration: 1000, easing: elasticOut }}
    >
      {#if $isDarkMode}
        <IconSun />
      {:else}
        <IconMoon />
      {/if}
    </button>
  </div>
{/key}
