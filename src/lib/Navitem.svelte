<script>
  import { slide } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { page } from "$app/stores";
  import {
    redirectAfterLoginTimeOut,
    redirectSetInterval,
  } from "$lib/store.js";
  import { goto, prefetch } from "$app/navigation";

  export let href, content, bool, btnColor, btnColorHover, routes;

  // this allows going back and button click matching with route
  // could've done this in if/else but the boolean nature here made it unnecessary
  $: for (let key in routes) {
    routes[key].isCurrent = routes[key].href === $page.url.pathname;
  }

  let unique;

  function clickOnNavLinks() {
    // on each click, clears rest of button clicks
    for (let key in routes) {
      routes[key].isCurrent = false;
    }
    bool = !bool; //sets button click to corresponding route
    unique = !unique; // to reanimate the non-mobile links
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
      `${btnColor} border-b-1 rounded px-3 py-1`} flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent {`${btnColorHover}`}  hover:rounded hover:py-1  hover:px-3 duration-300 hover:shadow-lg"
  >
    {content}
  </button>
{/key}

<style>
</style>
