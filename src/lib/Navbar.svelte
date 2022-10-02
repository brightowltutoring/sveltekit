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
    navLoginClicked,
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

  // let jankytown;
  // // sets jankytown for bigger than med
  // $: if (!$lessThan768) {
  //   if ($scrollY == 0) jankytown = "top-0";

  //   if ($scrollY > 10 && $scrollY < 800 && $instDeltaY > 0)
  //     jankytown = "top-0 backdrop-blur-3xl ";

  //   if ($scrollY > 800 && $instDeltaY > 10)
  //     jankytown = "-top-20 backdrop-blur-3xl ";

  //   if ($instDeltaY < -100) jankytown = "top-0 backdrop-blur-3xl ";
  // }
  // // sets jankytown for smaller than med
  // $: if ($lessThan768) {
  //   if ($scrollY == 0) jankytown = "bottom-0 backdrop-blur-3xl";
  //   if ($scrollY > 10 && $scrollY < 400 && $instDeltaY > 0)
  //     jankytown = "bottom-0 backdrop-blur-3xl ";
  //   if ($scrollY > 400 && $instDeltaY > 10)
  //     jankytown = "-bottom-20  backdrop-blur-3xl";
  //   if ($instDeltaY < -200) jankytown = "bottom-0 backdrop-blur-3xl ";
  // }
</script>

<!-- <div
  class="md:px-[7%] md:py-3 py-1 fixed z-50 {jankytown} md:duration-500 duration-150 ease-in overflow-x-auto overflow-y-hidden w-full "
> -->
<!-- fixed z-50 {jankytown} md:duration-500 duration-150 ease-in overflow-x-auto overflow-y-hidden w-full -->
<logo-and-navbar
  class="flex items-center justify-center md:justify-between gap-x-24"
>
  {#key resetLogoClick}
    <div
      class="md:translate-y-[0.5rem] md:translate-x-3 hidden md:block text-xl font-Poppins font-semibold 
    md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent"
      in:scale={{ duration: 1200, easing: elasticOut }}
      on:click={clickLogo}
    >
      THINKSOLVE
    </div>
  {/key}

  <!-- class=" md:ml-24  p-1 {gradientColor} rounded-full sticky overflow-y-scroll hideScrollBar " -->
  <nav
    class="md:ml-24 md:p-1 p-2  {gradientColor} rounded-xl hideScrollBar overflow-auto  "
  >
    {#key unique}
      <ul class="flex flex-row text-xl  items-center">
        <!-- {#each Object.keys($routes) as KEY} -->
        {#each Object.keys($routes).splice(0, 5) as KEY}
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
