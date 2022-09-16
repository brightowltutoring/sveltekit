<script>
  import { slide } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { page } from "$app/stores";
  import {
    isDarkMode,
    redirectAfterLoginTimeOut,
    redirectSetInterval,
  } from "$lib/store.js";
  import { goto, prefetch } from "$app/navigation";

  export let href, content, bool, btnColor, btnColorHover, routes;

  // this allows going back and button click matching with route
  // could've done this in if/else but the boolean nature here made it unnecessary
  $: for (let key in routes) {
    routes[key].isCurrent = routes[key].href === $page.url.pathname;
    // routes[key].isCurrent =
    //   key == $page.routeId || ($page.routeId.length == 0 && key == "home");
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

    if (routes.login.isCurrent) {
      window.document.body.classList.remove("dark-mode");
      $isDarkMode = false;
    }

    // if (routes.jitsi.isCurrent) {
    //   window.document.body.classList.add("dark-mode");
    //   $isDarkMode = true;
    // }
  }
</script>

{#key unique}
  <button
    in:slide={{ duration: 800, easing: elasticOut }}
    on:click={() => {
      clickOnNavLinks();
      clearTimeout($redirectAfterLoginTimeOut);
      clearInterval($redirectSetInterval);
      prefetch(href);
      goto(href);
    }}
    class="{bool &&
      `${btnColor} md:border-b-1 md:rounded md:px-3 md:py-1`} flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent {`${btnColorHover}`}  md:hover:rounded md:hover:py-1  md:hover:px-3 duration-300 hover:shadow-lg"
  >
    {content}
  </button>
{/key}

<style>
</style>
