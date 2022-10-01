<script>
  import "../app.css";
  import LoginCard from "$lib/LoginCard.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import {
    instDeltaY,
    innerWidth,
    scrollY,
    windowInnerHeight,
    scrollYMax,
    isLoggedIn,
    redirectAfterLoginTimeOut,
    redirectSetInterval,
    routes,
    lessThan768,
    navLoginClicked,
  } from "$lib/store.js";

  import { page } from "$app/stores";
  import { onMount } from "svelte";

  function setScrollYMax() {
    $scrollYMax = document.body.scrollHeight - $windowInnerHeight;
  }

  function clearRedirectStuff() {
    clearTimeout($redirectAfterLoginTimeOut);
    clearInterval($redirectSetInterval);
  }

  onMount(() => {
    console.log("isLoggedIn", $isLoggedIn);
    setScrollYMax();
  });

  let jankytown;
  // sets jankytown for bigger than med
  $: if (!$lessThan768) {
    if ($scrollY == 0) jankytown = "top-0";

    if ($scrollY > 10 && $scrollY < 800 && $instDeltaY > 0)
      jankytown = "top-0 backdrop-blur-3xl ";

    if ($scrollY > 800 && $instDeltaY > 10)
      jankytown = "-top-20 backdrop-blur-3xl duration-200";

    if ($instDeltaY < -100) jankytown = "top-0 backdrop-blur-3xl duration-700";
  }
  // sets jankytown for smaller than med
  $: if ($lessThan768) {
    if ($scrollY == 0) {
      $page.url.pathname !== "/screenshare"
        ? (jankytown = "bottom-0 backdrop-blur-3xl ")
        : (jankytown = "-bottom-20 backdrop-blur-3xl ");
    }
    if ($scrollY > 10 && $scrollY < 400 && $instDeltaY > 0)
      jankytown = "bottom-0 backdrop-blur-3xl ";
    if ($scrollY > 400 && $instDeltaY > 10)
      jankytown = "-bottom-20 backdrop-blur-3xl duration-200";
    if ($instDeltaY < -130)
      jankytown = "bottom-0 backdrop-blur-3xl duration-700";
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Poppins:wght@100&display=swap"
    rel="stylesheet"
  />

  {#each Object.keys($routes) as key}
    {#if $page.routeId == ""}
      <title>{$routes.home.title}</title>
    {:else if $page.routeId == key}
      <title>{$routes[key].title}</title>
    {/if}
  {/each}
</svelte:head>

<svelte:window
  bind:scrollY={$scrollY}
  bind:innerWidth={$innerWidth}
  bind:innerHeight={$windowInnerHeight}
  on:resize={setScrollYMax}
  on:contextmenu={(event) => event.preventDefault()}
  on:popstate={clearRedirectStuff}
/>

<!-- In order to allow the overflow subcomponent of Navbar (defined in that component) to scroll, 
I have to ALSO put this jank in its wrapping container: "overflow-x-auto overflow-y-hidden w-full". 
Fixed containers  apparently hate having scrollable overflow elements inside.
-->

<div
  on:click|self={() => {
    $navLoginClicked = false;
  }}
  class=" md:py-4 py-1 md:px-[7%] {$navLoginClicked
    ? 'bg-[rgba(0,0,0,0.4)]'
    : 'hidden'} fixed w-full h-full flex justify-center items-center z-10"
>
  <LoginCard />
</div>

<div
  class=" md:py-4 py-1 md:px-[7%] z-50 fixed {jankytown} ease-in-out overflow-x-auto overflow-y-hidden w-full "
>
  <Navbar />
</div>

<!-- because of the fixing of navbar, we have to defined a top padding to this slot container -->
<div class="px-[7%] h-[100vh] pt-32 md:block">
  <slot />
</div>
