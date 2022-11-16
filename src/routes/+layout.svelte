<script>
  import {
    scale,
    // fly, slide
  } from "svelte/transition";
  import {
    quintOut,
    // elasticOut,
  } from "svelte/easing";
  import "../app.css";
  import Modal from "$lib/Modal.svelte";
  import Dropzone from "$lib/Dropzone/Dropzone.svelte";
  import LoginCard from "$lib/Login/LoginCard.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import {
    instDeltaY,
    // innerWidth,
    scrollY,
    // windowInnerHeight, TODO: remove?
    // scrollYMax, TODO: remove?
    routes,
    setInnerWidthViaMatchMedia,
    lessThan768,
    navLoginClicked,
    navHomeworkClicked,
    // isDarkMode,
    // isLoggedIn,
  } from "$lib/store.js";

  import { page } from "$app/stores";
  import { onMount } from "svelte";

  // TODO: remove?
  // function setScrollYMax() {
  //   $scrollYMax = document.body.scrollHeight - $windowInnerHeight;
  // }

  // disables pinchzoom
  function disablePinchZoom() {
    document.addEventListener("gesturestart", (e) => {
      e.preventDefault();
      return false;
    });
  }

  onMount(() => {
    // setScrollYMax(); TODO: remove?
    disablePinchZoom();

    setInnerWidthViaMatchMedia();
  });

  $: console.log("$instDeltaY", $instDeltaY);

  let jankytown;

  // Since '$instDeltaY' is updated continuously on scroll, the entire reactive statement blocks below are checked continuously (as evidenced by a top console log) is there a way to do this without refiring the entire block??
  // Maybe only check speeds as thresholds and not every single speed....kinda like match media??

  // sets jankytown for bigger than med.

  let verticalThreshold = 800;
  let verticalThresholdMobile = 400;

  $: if (!$lessThan768) {
    // console.log("yeet over");
    // if ($scrollY == 0) jankytown = "top-0";

    // if ($scrollY > 10 && $scrollY < 800 && $instDeltaY > 0)
    //   jankytown = "top-0 backdrop-blur-3xl ";
    if ($scrollY >= 0 && $scrollY < verticalThreshold)
      jankytown = "top-0 backdrop-blur-3xl duration-1000";

    if ($scrollY > verticalThreshold && $instDeltaY > 10) {
      jankytown = "-top-20 backdrop-blur-3xl duration-200";
    }

    if ($instDeltaY < -100) jankytown = "top-0 backdrop-blur-3xl duration-700";
  }
  // sets jankytown for smaller than med
  $: if ($lessThan768) {
    // console.log("yeet under");

    // if ($scrollY ==0) {
    if ($scrollY < verticalThresholdMobile) {
      jankytown = "bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl";
    }
    // if ($scrollY > 10 && $scrollY < verticalThresholdMobile && $instDeltaY > 0)
    //   jankytown = "bottom-0 backdrop-blur-3xl ";
    if ($scrollY > verticalThresholdMobile && $instDeltaY > 20)
      jankytown = "-bottom-20 backdrop-blur-3xl duration-200";
    if ($instDeltaY < -30)
      jankytown = "bottom-0 backdrop-blur-3xl duration-700";
  }
</script>

<svelte:head>
  <link rel="manifest" href="/manifest.json" />

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

<!-- bind:innerWidth={$innerWidth} --><!-- this now taken care of with 'setInnerWidthViaMatchMedia()' -->
<svelte:window
  bind:scrollY={$scrollY}
  on:contextmenu={(e) => e.preventDefault()}
/>

<!-- TODO: remove? -->
<!-- bind:innerHeight={$windowInnerHeight} -->
<!-- on:resize={setScrollYMax} -->

<!-- class={$isDarkMode
    ? "bg-[rgba(37,27,47,0.1)] text-white"
    : "bg-[rgba(253,250,255,0.1)] text-[rgb(37,27,47)]"} -->

<main>
  <Modal bind:showModal={$navLoginClicked}>
    <LoginCard />
  </Modal>

  <Modal bind:showModal={$navHomeworkClicked} bgTint={"bg-[rgba(0,0,0,0.1)]"}>
    {#if $navHomeworkClicked}
      <div in:scale={{ duration: 300, easing: quintOut }}>
        <Dropzone
          uniqueId={"broccolii"}
          text={"🔥"}
          textSizeTW={"text-6xl"}
          dimensionsTW={"w-[80vw] h-[85vh]"}
          brightnessTW={"brightness-95"}
        />
      </div>
    {/if}
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
  <!-- TODO: this padding is not needed for smaller than md -->
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
