<script>
  import "../app.css";
  import Navbar from "$lib/Navbar.svelte";
  import {
    burgerBreakPoint,
    instDeltaY,
    innerWidth,
    scrollY,
    windowInnerHeight,
    scrollYMax,
    isLoggedIn,
    redirectAfterLoginTimeOut,
    redirectSetInterval,
    routes,
    // elementColor,
  } from "$lib/store.js";

  // $: console.log(" elementColor", $elementColor);

  import { page } from "$app/stores";
  import { onMount } from "svelte";
  // import { auth } from '$lib/firebase.js'
  // import { onAuthStateChanged } from "firebase/auth"

  let mobileHamburgerClosed = true;

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

    // onAuthStateChanged( auth, user => {
    // 	if( user ) {
    // 		$isLoggedIn = true
    // 		console.log("$isLoggedIn",$isLoggedIn)
    // 	}
    // 	else {
    // 		$isLoggedIn = false
    // 		console.log("$isLoggedIn",$isLoggedIn)
    // 	}
    // })
  });

  let jankytown = "";

  let justScrolledUp = false;
  $: console.log("justScrolledUp", justScrolledUp);

  function wasScrollingUp() {
    if ($instDeltaY > 0) {
      justScrolledUp = false;
      return;
    }
    if ($instDeltaY < 0) {
      justScrolledUp = true;
      return;
    }
  }

  $: if (!$burgerBreakPoint) {
    if (justScrolledUp) jankytown = "backdrop-blur-3xl top-0";
    if ($scrollY == 0) jankytown = "top-3";
    if ($scrollY > 0) jankytown = "top-0 backdrop-blur-3xl ";
    // if ($scrollY > 100 && !justScrolledUp) jankytown = "top-0 backdrop-blur-md";
    // if ($scrollY > 200 && !justScrolledUp) jankytown = "-top-20";
  }

  let xPaddingAndMargin = "px-[4%] md:px-[7%]";

  // let variableTop = "top-6";
  // $: if (!$burgerBreakPoint) {
  //   if ($instDeltaY > 0 && $scrollY > 250) variableTop = "-top-20 ";
  //   if ($instDeltaY < 0 && $scrollY > 250) variableTop = "top-6";
  // }
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
  on:scroll={wasScrollingUp}
/>

<!-- <div class="{xPaddingAndMargin} py-2 sticky {variableTop} z-50 duration-300 "> -->
<div class="{xPaddingAndMargin} py-2 sticky  {jankytown} z-50 duration-300 ">
  <Navbar bind:mobileHamburgerClosed />
</div>

<div
  class="{xPaddingAndMargin} {mobileHamburgerClosed &&
    $burgerBreakPoint &&
    'hidden opacity-0'} h-[100vh] pt-20 md:block transition-all duration-500"
>
  <slot />
</div>
