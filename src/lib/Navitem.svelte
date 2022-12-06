<script>
  export let navIconClicked = false;
  export let href, content, btnColorHover, routes, icon;
  // bool, btnColor,

  import { isRunningStandalone } from "$lib/utils";
  import {
    navLoginClicked,
    navHomeworkClicked,
    clearNavModals,
    lessThan768,
  } from "./store";
  import { page } from "$app/stores";

  // this allows going back and button click matching with route
  // could've done this in if/else but the boolean nature here made it unnecessary
  $: for (let key in routes) {
    routes[key].isCurrent = routes[key].href === $page.url.pathname;
  }

  function handleNavButtonClicks(e) {
    // resets all modals (so modals don't continuously pile up)
    // e.preventDefault();
    clearNavModals();

    // sets the correct modal
    if (href == "/homework") {
      e.preventDefault();
      $navHomeworkClicked = true;
      return;
    }
    if (href == "/login") {
      e.preventDefault();
      $navLoginClicked = true;
      return;
    }
  }
</script>

<a
  on:click={handleNavButtonClicks}
  data-sveltekit-preload-data
  {href}
  class="block font-Nunito font-thin 

  {!isRunningStandalone() &&
    ` ${btnColorHover}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`} "
>
  <!-- TODO: removing this seems to do nothing?? -->
  <!-- {bool &&
    `${btnColor} border-b-1 rounded px-3 py-1`} -->
  <!-- {#if !$lessThan768} -->
  {#if !isRunningStandalone()}
    {content}
  {:else}
    <!-- md:px-10 added in case downloaded on ipad/mac .. makes the icon buttons spaced out in top right corner of screen -->
    <div
      class="flex flex-col justify-between items-center w-[50px] h-[50px] mt-1 active:animate-pulse md:px-10"
    >
      <svelte:component this={icon} bind:navIconClicked />

      <span class="text-xs text-center">{content}</span>
    </div>
  {/if}
</a>
