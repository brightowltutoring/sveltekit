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
  data-sveltekit-prefetch
  {href}
  on:click={handleNavButtonClicks}
  class=" block px-2 mx-1 font-Nunito font-thin 
  {!isRunningStandalone() &&
    ` ${btnColorHover} hover:rounded hover:py-1 hover:p-3 duration-200 ease-in-out hover:shadow-lg text-2xl md:text-xl`} "
>
  <!-- {isRunningStandalone() &&
    'hover:scale-125 transition-transform duration-300'}  -->

  <!-- TODO: removing this seems to do nothing?? -->
  <!-- {bool &&
    `${btnColor} border-b-1 rounded px-3 py-1`} -->
  {#if !isRunningStandalone()}
    <!-- {#if !$lessThan768} -->
    {content}
  {:else}
    <div class="flex flex-col justify-around items-center w-[60px] h-[60px]">
      <div class="w-1/2 h-1/2 grid place-content-center">
        <svelte:component this={icon} />
      </div>
      <div class="text-xs p-2">{content}</div>
    </div>
  {/if}
</a>
