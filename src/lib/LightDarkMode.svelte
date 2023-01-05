<script>
  import IconSun from "$lib/Icons/IconSun.svelte";
  import IconMoon from "$lib/Icons/IconMoon.svelte";
  import { scale, slide } from "svelte/transition";
  import { elasticOut, quintOut } from "svelte/easing";
  import { isDarkMode } from "$lib/store";
  import { browser } from "$app/environment";

  // This (global) component alters the darkmode JS and CSS DURING the session, including the setting of localStorage reference for continuity into the next session.
  // NOTE: this component does NOT handle darkmode on initial page load. To properly set the darkmode CSS on initial page load —— so that there is no flash of content —— I have to use a script inside app.html to set the body css using localStorage darkmode reference. For non-body elements I use css parent selector logic (with 'body' as the parent) in the style section of the component; this is mostly useful for top-of-page elements, all other elements that depend on darkmode css could be set with the simpler 'js-in-tailwind-css' way.

  // use last session's '$isDarkMode' value OR from system preferences
  browser && isDarkModer();

  function isDarkModer() {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const lastSessionWasDarkmode =
      localStorage.getItem("isDarkModeLS") == "true";

    // -----
    // if (prefersDark || lastSessionWasDarkmode) {
    if (lastSessionWasDarkmode) {
      $isDarkMode = true;
    } else {
      $isDarkMode = false;
    }
    // -----
    // if (prefersDark) {
    //   $isDarkMode = true;
    // }

    // if (lastSessionWasDarkmode) {
    // if (prefersDark) {
    //   $isDarkMode = true;
    // } else {
    //   $isDarkMode = false;
    // }
  }
  // const prefersDark =
  //   browser && window.matchMedia("(prefers-color-scheme: dark)").matches;

  // const lastSessionWasDarkmode =
  //   browser && localStorage.getItem("isDarkModeLS") == "true";

  // if (prefersDark || lastSessionWasDarkmode) {
  //   $isDarkMode = true;
  // } else {
  //   $isDarkMode = false;
  // }

  // during session set local storage darkmode çopy reactively via global variable '$isDarkMode'
  $: browser && localStorage.setItem("isDarkModeLS", $isDarkMode);

  function toggleDM() {
    $isDarkMode = !$isDarkMode;
    document.body.classList.toggle("dark-mode");
  }
</script>

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

<style>
  :root {
    --light: #f7f7f7;
    --dark: rgb(20, 13, 33);
    /* --light_darkened: rgb(224, 229, 232); */
    /* --dark_lightened: rgb(38, 35, 51); */
  }
  :global(body) {
    background: var(--light);
    color: var(--dark);
    transition: background-color 0.3s;
  }

  :global(body.dark-mode) {
    background: var(--dark);
    color: var(--light);
  }
</style>
