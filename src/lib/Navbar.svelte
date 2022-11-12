<script>
  import LightDarkMode from "$lib/LightDarkMode.svelte";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import Navitem from "./Navitem.svelte";
  import { goto } from "$app/navigation";
  import {
    isLoggedIn,
    routes,
    scrollY,
    isDarkMode,
    navLoginClicked,
    navHomeworkClicked,
    elementColor,
    isRunningStandalone,
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
    $navLoginClicked = false;
    $navHomeworkClicked = false;
    goto("/");
    resetLogoClick = !resetLogoClick;

    for (let key in $routes) {
      $routes[key].isCurrent = false;
    }

    $routes.home.isCurrent = true;
  }

  let btnColor = "sm:bg-red-300 rounded";
  let btnColorHover = "hover:bg-red-300 ";

  // via-[rgba(0,0,0,0)]
  $: bgGradientColor = `bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)]  ${
    $isDarkMode ? "to-[rgb(37,35,91)]" : "to-red-200"
  }`;

  // let app = true;
</script>

<!-- gap-x-24 -->
<logo-and-navbar
  class=" flex items-center justify-center  md:justify-between gap-x-10 "
>
  {#key resetLogoClick}
    <div
      class="md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins 
    md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent"
      in:scale={{ duration: 1200, easing: elasticOut }}
      on:keydown={clickLogo}
      on:click={clickLogo}
    >
      THINKSOLVE
    </div>
  {/key}

  <nav
    class="md:ml-24 md:p-1 p-3 {bgGradientColor} rounded-md md:rounded-xl hideScrollBar overflow-auto  "
  >
    {#key unique}
      <ul class="flex flex-row text-xl items-center">
        <!-- TODO: on:click directs to download the PWA -->
        {#if !isRunningStandalone()}
          <!-- {#key app} -->
          <!-- in:scale={{ duration: 800, easing: elasticOut }} -->
          <li
            on:click={() => {
              // app = !app;
              alert("Coming soon 🚀");
              $navLoginClicked = false;
              $navHomeworkClicked = false;
            }}
            class=" mx-1 font-Nunito font-thin text-2xl md:text-xl hover:rounded hover:py-1  hover:p-3 duration-300 hover:shadow-lg  {$elementColor} active:bg-indigo-400 active:text-white duration-200
               border-b-1 rounded px-3 py-1 "
          >
            App
          </li>
          <!-- {/key} -->
        {/if}

        <!-- {#each Object.keys($routes).splice(0, 5) as KEY} -->
        {#each Object.keys($routes).slice(0, 5) as KEY}
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

        <li class="px-3 translate-y-1">
          <LightDarkMode />
        </li>
      </ul>
    {/key}
  </nav>
</logo-and-navbar>
