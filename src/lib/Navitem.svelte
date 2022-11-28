<script>
  export let href, content, btnColorHover, routes, icon;
  // bool, btnColor,

  import { isRunningStandalone } from "$lib/utils";
  import { navLoginClicked, navHomeworkClicked, clearNavModals } from "./store";
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

<a
  on:click={handleNavButtonClicks}
  data-sveltekit-prefetch
  {href}
  class="block font-Nunito font-thin 

  {!isRunningStandalone() &&
    ` ${btnColorHover}  hover:rounded py-1 px-2 duration-300 ease-in-out text-2xl md:text-xl`} "
>
  <!-- TODO: removing this seems to do nothing?? -->
  <!-- {bool &&
    `${btnColor} border-b-1 rounded px-3 py-1`} -->
  {#if !isRunningStandalone()}
    {content}
  {:else}
    <div
      class="flex flex-col justify-between items-center w-[50px] h-[50px] mt-1 active:animate-pulse"
    >
      <svelte:component this={icon} />

      <span class="text-xs text-center">{content}</span>
    </div>
  {/if}
</a>
