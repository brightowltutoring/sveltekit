<script>
  import { scale, slide /* fly, fade, blur, */ } from "svelte/transition";
  import { quintOut, elasticOut } from "svelte/easing";
  import Navitem from "./Navitem.svelte";
  import Hamburger from "./Hamburger.svelte";
  import { goto } from "$app/navigation";
  import {
    burgerBreakPoint,
    isLoggedIn,
    routes,
    scrollY,
    instDeltaY,
    isDarkMode,
    fractionScroll,
  } from "$lib/store.js";
  import { spring } from "svelte/motion";

  let scaleRocket = spring(1, { stiffness: 0.1, damping: 0.25 });
  let hueRocket = 0;

  $: if ($isLoggedIn) {
    hueRocket = $isDarkMode ? 0.75 : 0;
  }
  $: if ($isLoggedIn && !$burgerBreakPoint) {
    scaleRocket.set(1 + 0.5 * Math.sin($scrollY));
  }

  export let mobileHamburgerClosed;
  let mobileOpen = "";
  $: mobileHamburgerClosed = mobileOpen;
  $: $isLoggedIn ? ($routes.login.name = "🚀") : ($routes.login.name = "Login");
  // $: logoTextColor=`color:hsl(359,100%,${100*$fractionScroll}%)`

  let unique;
  let hamburgerBtn; //for css version of hamburger button only

  let resetLogoClick;
  function clickLogo() {
    goto("/");
    resetLogoClick = !resetLogoClick;

    for (key in $routes) {
      $routes[key].isCurrent = false;
    }

    $routes.home.isCurrent = true;
  }

  // $instDeltaY>0 essentially means "currently scrolling down" as $instDeltaY relaxes to 0 shortly.
  // $instDeltaY == 0, jankytown is not updated.

  let btnColor = "md:bg-red-300 ";
  let btnColorHover = "md:hover:bg-red-300";
  $: gradientColor = $isDarkMode
    ? "bg-gradient-to-b sm:bg-gradient-to-r from-[rgb(37,27,47)] via-[rgb(37,27,47)] to-[rgb(37,35,51)]"
    : "bg-gradient-to-b sm:bg-gradient-to-r from-[rgb(247,247,247)] via-[rgb(247,247,247)] to-red-100";

  import LightDarkMode from "$lib/LightDarkMode.svelte";
</script>

<Hamburger bind:mobileOpen bind:unique />
<!-- <Hamburger {hamburgerBtn} bind:mobileOpen bind:unique /> -->

<logo-and-navbar
  class="flex md:inline-flex md:justify-between h-[85vh] md:h-16 justify-center items-center md:w-full  {!mobileOpen &&
    'hidden'} "
>
  <!-- styling from sep 11 @ 240pm -->
  <!--  class=" translate-y-[0.2rem] translate-x-3 hidden md:block text-xl font-Poppins font-semibold pl-[5%] md:pr-20
    md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent" -->
  {#key resetLogoClick}
    <div
      class=" translate-y-[0.2rem] translate-x-3 hidden md:block text-xl font-Poppins font-semibold md:pr-20
    md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent"
      in:scale={{ duration: 1200, easing: elasticOut }}
      on:mouseup={clickLogo}
    >
      THINKSOLVE
    </div>
  {/key}

  <!-- mx-5 shadow-xl w-1/2 -->
  <nav
    class="p-1 {gradientColor} rounded-full hideScrollBar  md:overflow-x-auto md:h-[44px] h-1/2 overflow-y-auto  "
  >
    <!-- <nav
    class="sm:overflow-x-auto sm:overflow-y-hidden overflow-y-auto overflow-x-hidden bg-red-0 h-1/2 sm:h-full {!$burgerBreakPoint &&
      'hideScrollBar'} overflow-scroll "
  > -->
    {#key unique}
      <ul class="flex flex-col md:flex-row text-3xl md:text-lg items-center">
        {#if $burgerBreakPoint && mobileOpen}
          {#key !$isDarkMode}
            <li in:slide={{ duration: 600, easing: quintOut }} class="pb-3 ">
              <LightDarkMode />
            </li>
          {/key}
        {/if}

        {#each Object.keys($routes) as KEY}
          <li
            class="py-3 md:p-0 "
            style={KEY == "login" &&
              $isLoggedIn &&
              `transform:scale(${$scaleRocket}); filter:hue-rotate(${hueRocket}turn)`}
          >
            <Navitem
              bind:mobileOpen
              href={$routes[KEY].href}
              content={$routes[KEY].name}
              bind:bool={$routes[KEY].isCurrent}
              bind:routes={$routes}
              bind:btnColor
              bind:btnColorHover
            />
          </li>
        {/each}

        {#if !$burgerBreakPoint}
          {#key !$isDarkMode}
            <li
              in:slide={{ duration: 600, easing: quintOut }}
              class="px-3 translate-y-1"
            >
              <LightDarkMode />
            </li>
          {/key}
        {/if}
      </ul>
    {/key}
  </nav>
</logo-and-navbar>

<!-- <style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .hideScrollBar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .hideScrollBar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style> -->
