<script>
  import { slide } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { page } from "$app/stores";
  import {
    isXs,
    isDarkMode,
    redirectAfterLoginTimeOut,
    redirectSetInterval,
  } from "$lib/store.js";
  import { goto } from "$app/navigation";

  export let href, content, bool, mobileOpen, btnColor, btnColorHover, routes;

  // this allows going back and button click matching with route
  // could've done this in if/else but the boolean nature here made it unnecessary
  $: for (let key in routes) {
    let condition =
      key == $page.routeId || ($page.routeId.length == 0 && key == "home");
    routes[key].isCurrent = condition;
  }

  let unique;

  function clickOnNavLinks() {
    // on each click, clears rest of button clicks
    for (let key in routes) {
      routes[key].isCurrent = false;
    }

    //sets button click to corresponding route
    bool = !bool;

    unique = !unique; // to reanimate the non-mobile links

    $isXs && (mobileOpen = !mobileOpen);

    if (routes.login.isCurrent) {
      window.document.body.classList.remove("dark-mode");
      $isDarkMode = false;
    }
  }
</script>

<!-- href={href} -->
{#key unique}
  <button
    in:slide={{ duration: 800, easing: elasticOut }}
    on:click|preventDefault={() => {
      clickOnNavLinks();
      clearTimeout($redirectAfterLoginTimeOut);
      clearInterval($redirectSetInterval);
      goto(href);
    }}
    class="{bool &&
      `${btnColor} sm:border-b-1 sm:rounded sm:px-3 sm:py-1`} flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent {`${btnColorHover}`}  sm:hover:rounded sm:hover:py-1  sm:hover:px-3 duration-300 hover:shadow-lg"
  >
    {content}
  </button>
{/key}

<style>
</style>
