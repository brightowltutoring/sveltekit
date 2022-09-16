<script>
  import "../app.css";
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
    // elementColor,
  } from "$lib/store.js";

  // $: console.log(" elementColor", $elementColor);

  import { page } from "$app/stores";
  import { onMount } from "svelte";
  // import { auth } from '$lib/firebase.js'
  // import { onAuthStateChanged } from "firebase/auth"

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

  $: $scrollY > scrollThreshold && console.log("$scrollY > scrollThreshold");

  let jankytown;
  let scrollThreshold = 1200;

  // bigger than med
  $: if (!$lessThan768) {
    // jankytown = "top-0";
    if ($scrollY == 0) jankytown = "top-0";
    if ($scrollY > 10 && $instDeltaY > 0)
      jankytown = "-top-20 backdrop-blur-3xl ";
    if ($scrollY > 800 && $instDeltaY > 10) jankytown = "-top-20  ";
    if ($instDeltaY < -100) jankytown = "top-0 backdrop-blur-3xl ";
  }
  // smaller than med
  $: if ($lessThan768) {
    // jankytown = "bottom-0 backdrop-blur-3xl ";
    if ($scrollY == 0) jankytown = "bottom-0 backdrop-blur-3xl";
    if ($scrollY > 10 && $instDeltaY > 0)
      jankytown = "-bottom-20 backdrop-blur-3xl ";
    if ($scrollY > 800 && $instDeltaY > 10) jankytown = "-bottom-20  ";
    if ($instDeltaY < -100) jankytown = "bottom-0 backdrop-blur-3xl ";
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

<!-- TODO: this jank allows the navbar to be fixable, and elements within to be overflow scrollable -->
<!--  style=" overflow-x: scroll; width: 100%;"  or with tailwind: "overflow-x-auto w-full"-->
<!-- I still have to hideScrollBar inside the subcomponent of the navbar -->
<div
  class="px-[7%] py-2 fixed z-50 {jankytown} duration-300 overflow-x-auto overflow-y-hidden w-full "
>
  <Navbar />
</div>

<div class="px-[7%] h-[100vh] pt-20 md:block">
  <slot />
</div>
