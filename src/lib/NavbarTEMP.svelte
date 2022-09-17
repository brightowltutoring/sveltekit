<script>
  import LightDarkMode from "$lib/LightDarkMode.svelte";
  import { scale, slide /* fly, fade, blur, */ } from "svelte/transition";
  import { quintOut, elasticOut } from "svelte/easing";
  import Navitem from "./Navitem.svelte";
  import { goto } from "$app/navigation";
  import {
    isLoggedIn,
    routes,
    scrollY,
    instDeltaY,
    isDarkMode,
    lessThan768,
  } from "$lib/store.js";
  import { spring } from "svelte/motion";

  let scaleRocket = spring(1, { stiffness: 0.1, damping: 0.25 });
  let hueRocket = 0;

  $: if ($isLoggedIn) {
    hueRocket = $isDarkMode ? 0.75 : 0;
    scaleRocket.set(1 + 0.5 * Math.sin($scrollY));
  }

  $: $isLoggedIn ? ($routes.login.name = "🚀") : ($routes.login.name = "Login");

  let unique;

  let resetLogoClick;
  function clickLogo() {
    goto("/");
    resetLogoClick = !resetLogoClick;

    for (key in $routes) {
      $routes[key].isCurrent = false;
    }

    $routes.home.isCurrent = true;
  }

  let btnColor = "sm:bg-red-300 rounded";
  let btnColorHover = "hover:bg-red-300";

  // rgba(0,0,0,0) is transparent
  $: gradientColor = $isDarkMode
    ? "bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-[rgb(37,35,91)]"
    : "bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-red-100";
</script>

<logo-and-navbar class="flex md:justify-between justify-center w-full ">
  {#key resetLogoClick}
    <div
      class=" md:translate-y-[0.5rem] md:translate-x-3 hidden md:block text-xl font-Poppins font-semibold 
    md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent"
      in:scale={{ duration: 1200, easing: elasticOut }}
      on:mouseup={clickLogo}
    >
      THINKSOLVE
    </div>
  {/key}

  <!-- class=" md:ml-24  p-1 {gradientColor} rounded-full sticky overflow-y-scroll hideScrollBar " -->
  <nav
    class=" md:ml-24 md:p-1 p-2 {gradientColor} rounded-xl hideScrollBar overflow-auto   "
  >
    {#key unique}
      <ul class="flex flex-row text-xl  items-center">
        {#each Object.keys($routes).slice(0, 3) as KEY}
          <li
            style={KEY == "login" &&
              $isLoggedIn &&
              `transform:scale(${$scaleRocket}); filter:hue-rotate(${hueRocket}turn)`}
          >
            <Navitem
              href={$routes[KEY].href}
              content={$routes[KEY].name}
              bind:bool={$routes[KEY].isCurrent}
              bind:routes={$routes}
              bind:btnColor
              bind:btnColorHover
            />
          </li>
        {/each}

        {#key !$isDarkMode}
          <li
            in:slide={{ duration: 600, easing: quintOut }}
            class="px-3 translate-y-1"
          >
            <LightDarkMode />
          </li>
        {/key}
      </ul>
    {/key}
  </nav>
</logo-and-navbar>
