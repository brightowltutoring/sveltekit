<script>
  export let href, content, bool, btnColor, btnColorHover, routes, icon;

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

<!-- class=" block px-2 mx-1 font-Nunito font-thin text-2xl md:text-xl {`${btnColorHover}`}  hover:rounded hover:py-1  hover:p-3 duration-300 hover:shadow-lg {bool &&
    `${btnColor} border-b-1 rounded px-3 py-1`}" -->
<a
  on:click={handleNavButtonClicks}
  data-sveltekit-prefetch
  {href}
  class="block font-Nunito font-thin 

  {!isRunningStandalone() &&
    ` ${btnColorHover}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`} "
>
  <!-- px-2 -->
  <!-- {isRunningStandalone() &&
    'hover:scale-125 transition-transform duration-300'}  -->

  <!-- TODO: removing this seems to do nothing?? -->
  <!-- {bool &&
    `${btnColor} border-b-1 rounded px-3 py-1`} -->
  {#if !isRunningStandalone()}
    <!-- {#if !$lessThan768} -->
    {content}
  {:else}
    <div
      class="flex flex-col justify-between items-center w-[50px] h-[50px] mt-2 active:animate-pulse"
    >
      <svelte:component this={icon} />

      <span class="text-xs text-center">{content}</span>
    </div>
  {/if}
</a>
