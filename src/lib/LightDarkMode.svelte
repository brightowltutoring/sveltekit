<script>
  import IconSun from "$lib/Icons/IconSun.svelte";
  import IconMoon from "$lib/Icons/IconMoon.svelte";
  import { scale, slide } from "svelte/transition";
  import { elasticOut, quintOut } from "svelte/easing";
  import { isDarkMode } from "$lib/store";
  import { browser } from "$app/environment";

  // Initially sets $isDarkMode's truthiness using client-side settings
  browser && ($isDarkMode = initialTheme() === "dark");

  function toggleDM() {
    $isDarkMode = !$isDarkMode;

    // These two can also be rewritten with svelte-reactive statements (using '$' and 'browser'), however it's a little more readable (and less code) to consolidate here
    document.documentElement.classList.toggle("dark-mode");
    sessionStorage.setItem("isDarkModeLS", $isDarkMode);
  }

  function initialTheme() {
    if (sessionStorage.getItem("isDarkModeLS") === "true") return "dark";
    if (sessionStorage.getItem("isDarkModeLS") === "false") return "light";
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    return "light";
  }
</script>

<main>
  {#key $isDarkMode}
    <!-- Currently using nested 'divs' to compose two svelte transitions. This can be done with a custom function as well (TODO:) such as on: https://svelte.dev/repl/f5c42c6dc6774f29ad9350cd2dc2d299?version=3.38.3 -->
    <div in:slide={{ duration: 600, easing: quintOut }}>
      <button
        on:click={toggleDM}
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

<svelte:head>
  <script>
    if (initialTheme() === "dark")
      document.documentElement.classList.add("dark-mode");

    function initialTheme() {
      if (sessionStorage.getItem("isDarkModeLS") === "true") return "dark";
      if (sessionStorage.getItem("isDarkModeLS") === "false") return "light";
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        return "dark";
      return "light";
    }
  </script>
  <!-- Using this head script — which fires before the body is loaded — achieves darkmode WITHOUT an initial flash of content DESPITE retrieving darkmode information from the client (sessionStorage & window.matchMedia) -->
  <!-- 
      ... So why do people insist on complex server-side methods involving framework-specific code AND cookies API ??   Cookies offer a custom lifetime, however isn't the desired approach for this boolean theme (dark/light) to 1) initialize with device settings, 2) update with session settings? -->
</svelte:head>
