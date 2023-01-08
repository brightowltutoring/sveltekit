<script lang="ts">
  import IconSun from "$lib/Icons/IconSun.svelte";
  import IconMoon from "$lib/Icons/IconMoon.svelte";
  import { scale, slide } from "svelte/transition";
  import { elasticOut, quintOut } from "svelte/easing";
  import { isDarkMode } from "$lib/store";
  import { browser } from "$app/environment";

  function initialTheme() {
    if (sessionStorage.getItem("isDarkMode") === "true") return "dark-mode";
    if (sessionStorage.getItem("isDarkMode") === "false") return "";
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark-mode";
    return "";
  }

  // Initialize $isDarkMode using client-side settings via 'initialTheme()';
  // Note: 'initialTheme()' declaration AND dark-mode css initialization done in head of document (see <svelte:head> below)
  browser && ($isDarkMode = initialTheme() === "dark-mode");

  function toggleDarkMode() {
    $isDarkMode = !$isDarkMode;

    // These two can also be rewritten with svelte-reactive statements (using '$' and 'browser'), however it's a little more readable (and less code) to consolidate here
    document.documentElement.classList.toggle("dark-mode");
    sessionStorage.setItem("isDarkMode", $isDarkMode.toString());
  }
</script>

<svelte:head>
  <script>
    document.documentElement.classList.add(initialTheme());

    function initialTheme() {
      if (sessionStorage.getItem("isDarkMode") === "true") return "dark-mode";
      if (sessionStorage.getItem("isDarkMode") === "false") return "";
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        return "dark-mode";
      return "";
    }
  </script>
  <!-- ... For darkmode/lightmode, why do people insist on complex server-side methods involving framework-specific code AND cookies API ?? Cookies offer a custom lifetime, however isn't the desired approach for this boolean theme (dark/light) to 1) initialize with device settings, 2) update with session settings? -->
</svelte:head>

<main>
  {#key $isDarkMode}
    <!-- Currently using nested 'divs' to compose two svelte transitions. This can be done with a custom function as well (TODO:) such as on: https://svelte.dev/repl/f5c42c6dc6774f29ad9350cd2dc2d299?version=3.38.3 -->
    <div in:slide={{ duration: 600, easing: quintOut }}>
      <button
        on:click={toggleDarkMode}
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
</main>
