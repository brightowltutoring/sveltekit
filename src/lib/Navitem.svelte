<script>
  import {
    isDarkMode,
    navLoginClicked,
    navHomeworkClicked,
    redirectSetInterval,
    redirectAfterLoginTimeOut,
  } from "./store.js";
  import { slide } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { page } from "$app/stores";

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
    class="{bool &&
      `${btnColor} border-b-1 rounded px-3 py-1`} flex justify-center px-2 mx-1 font-Nunito md:text-xl text-2xl selection:bg-transparent {`${btnColorHover}`}  hover:rounded hover:py-1  hover:p-3 duration-300 hover:shadow-lg"
    in:slide={{ duration: 800, easing: elasticOut }}
    on:click={() => {
      if (href !== "/login") {
        clearTimeout($redirectAfterLoginTimeOut);
        clearInterval($redirectSetInterval);
        // these necessary, otherwise redirects when navigating away from login modal
      }
      if (href == "/homework") {
        $navHomeworkClicked = true;
        $navLoginClicked = false;

        goto(href);
        return;
      }
      if (href == "/login") {
        $navLoginClicked = true;
        $navHomeworkClicked = false;
        clearTimeout($redirectAfterLoginTimeOut);
        clearInterval($redirectSetInterval);
        // goto(href);
        return;
      }
      $navLoginClicked = false;
      $navHomeworkClicked = false;
      clickOnNavLinks();

      // this janky solution allows for the embeded jitsu to load ... otherwise I had to
      //  manually reload the page and use "export const router = false" for the +page.js
      if (href == "/screenshare") {
        // goto(href);
        setTimeout(() => {
          location.reload();
          return;
        }, 100);
      }

      goto(href);
    }}
  >
    {content}
  </button>
{/key}

<style>
</style>
