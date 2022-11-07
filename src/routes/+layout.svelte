<script>
  import "../app.css";

  import PlansCardObserver from "$lib/Plans/PlansCardObserver.svelte";
  import Modal from "$lib/Modal.svelte";
  import Dropzone from "$lib/Dropzone/Dropzone.svelte";
  import LoginCard from "$lib/Login/LoginCard.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import {
    instDeltaY,
    innerWidth,
    scrollY,
    windowInnerHeight,
    scrollYMax,
    routes,
    lessThan768,
    navLoginClicked,
    navHomeworkClicked,
    isDarkMode,
    // isLoggedIn,
  } from "$lib/store.js";

  import { page } from "$app/stores";
  import { onMount } from "svelte";

  function setScrollYMax() {
    $scrollYMax = document.body.scrollHeight - $windowInnerHeight;
  }
  onMount(() => {
    setScrollYMax();
    window.scrollTo(0, 500); //TODO: testing for mobile to hide addressbar
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
      jankytown = "bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl ";
      // adding the md tailwind breakpoint here is pure jank...so onpageload
      // the page doesnt flicker with bottom-0 first, then settles to top-0
    }
    if ($scrollY > 10 && $scrollY < 400 && $instDeltaY > 0)
      jankytown = "bottom-0 backdrop-blur-3xl ";
    if ($scrollY > 400 && $instDeltaY > 10)
      jankytown = "-bottom-20 backdrop-blur-3xl duration-200";
    if ($instDeltaY < -30)
      jankytown = "bottom-0 backdrop-blur-3xl duration-700";
  }
</script>

<PlansCardObserver />

<svelte:head>
  <!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Poppins:wght@100&display=swap"
    rel="stylesheet"
  /> -->

  <!-- should show up once each!! -->
  {#each Object.keys($routes) as key}
    {#if $page.routeId == "/" && key == "home"}
      <title>{$routes.home.title}</title>
      <meta
        name="description"
        content="Math and Physics Tutoring for the Modern Age."
      />
      <meta og:url="https://thinksolve.io/" />
      <!-- <meta name="image" content="LOGO" /> -->
    {:else if $page.routeId == `/${key}`}
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
/>

<!-- <main
  class={$isDarkMode
    ? "bg-[rgba(37,27,47,0.1)] text-white"
    : "bg-[rgba(253,250,255,0.1)] text-[rgb(37,27,47)]"}
> -->
<main>
  <Modal bind:showModal={$navLoginClicked}>
    <LoginCard />
  </Modal>

  <!-- TODO: temporarily stopping this to debug screenshare -->
  <Modal bind:showModal={$navHomeworkClicked} bgTint={"bg-[rgba(0,0,0,0.1)]"}>
    <Dropzone
      uniqueId={"broccoli"}
      text={"🔥"}
      textSizeTW={"text-6xl"}
      dimensionsTW={"w-[80vw] h-[85vh]"}
      brightnessTW={"brightness-95"}
    />
  </Modal>

  <!-- a unique id is necessary if more than one dropzone exists on the same page... such as with this 'global' modal   -->

  <!-- In order to allow the overflow subcomponent of Navbar (defined in that component) to scroll, 
I have to ALSO put this jank in its wrapping container: "overflow-x-auto overflow-y-hidden w-full". 
Fixed containers  apparently hate having scrollable overflow elements inside.
-->
  <div
    class="md:py-4 py-1 md:px-[7%] z-50 fixed {jankytown} ease-in-out overflow-x-auto overflow-y-hidden w-full "
  >
    <Navbar />
  </div>

  <!-- because of the fixing of navbar, we have to defined a top padding to this slot container -->
  <div class="px-[7%] pt-32 md:block">
    <slot />
    <Footer />
  </div>

  <!-- <div
    class="md:py-4 py-1 md:px-[7%] z-50 fixed {jankytown} ease-in-out overflow-x-auto overflow-y-hidden w-full "
  > -->
  <!-- <div class="px-[7%] h-[100vh] pt-32 md:block">
    <Footer />
  </div> -->
</main>
