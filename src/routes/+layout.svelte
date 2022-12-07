<script>
  import {
    slide,
    // fly, fade, blur, scale
  } from "svelte/transition";
  import {
    elasticOut,
    // quintOut
  } from "svelte/easing";
  import "../app.css";
  import Modal from "$lib/Modal.svelte";
  import Dropzone from "$lib/Dropzone/Dropzone.svelte";
  import LoginCard from "$lib/Login/LoginCard.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import {
    instDeltaY,
    scrollY,
    routes,
    setInnerWidthViaMatchMedia,
    lessThan768,
    showLoginModal,
    showHomeworkModal,
    navAppClicked,
  } from "$lib/store";

  import { disableZoomGestures, isRunningStandalone, getOS } from "$lib/utils";

  import { page } from "$app/stores";
  import { onMount } from "svelte";

  onMount(() => {
    $lessThan768 && disableZoomGestures();
    // isRunningStandalone() && disableZoomGestures();
    setInnerWidthViaMatchMedia();
    // alert(getOS());
    // TODO: on xcode simulator the ipad 10th and ipad air 5th returns as 'macos' not 'ios' ... Main use case is for downloading PWA on ios/android phones, so as long as that works, it's fine.
  });

  // $: console.log("$instDeltaY", $instDeltaY);
  let jankytown;

  // sets jankytown for bigger than med.

  let verticalThreshold = 800;
  let verticalThresholdMobile = 400;

  $: if (!$lessThan768) {
    if ($scrollY < 10) jankytown = "top-0";

    if ($scrollY > 10 && $scrollY < verticalThreshold)
      jankytown = "top-0 backdrop-blur-3xl duration-1000";

    if ($scrollY > verticalThreshold && $instDeltaY > 10) {
      jankytown = "-top-20 backdrop-blur-3xl duration-200";
    }

    if ($instDeltaY < -100) jankytown = "top-0 backdrop-blur-3xl duration-700";
  }
  // sets jankytown for smaller than med
  $: if ($lessThan768) {
    if ($scrollY >= 0 && $scrollY < verticalThresholdMobile) {
      // if ($scrollY <= verticalThresholdMobile) {
      jankytown =
        "bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-3xl duration-200";
    }
    if ($scrollY > verticalThresholdMobile && $instDeltaY > 20)
      jankytown = "-bottom-28 duration-400";
    if ($instDeltaY < -30)
      jankytown = "bottom-0 backdrop-blur-3xl duration-700";
  }
</script>

<svelte:head>
  <link rel="manifest" href="/manifest.json" />
  <!-- <link rel="apple-touch-icon" href="" /> -->

  <!-- should show up once each!! -->
  {#each Object.keys($routes) as key}
    {#if $page.route.id == "/" && key == "home"}
      <title>{$routes.home.title}</title>
      <meta
        name="description"
        content="Math and Physics Tutoring for the Modern Age."
      />
      <meta og:url="https://thinksolve.io/" />
      <!-- <meta name="image" content="LOGO" /> -->
    {:else if $page.route.id == `/${key}`}
      <title>{$routes[key].title}</title>
    {/if}
  {/each}
</svelte:head>

<svelte:window
  bind:scrollY={$scrollY}
  on:contextmenu={(e) => e.preventDefault()}
/>

<main>
  <Modal showModal={$navAppClicked} bgTint={"bg-[#818cf8]"}>
    {#key !$navAppClicked}
      <div
        in:slide={{ duration: 1300, easing: elasticOut }}
        class=" font-Poppins font-bold text-5xl sm:text-6xl text-center p-10"
      >
        Coming soon! 🚀
      </div>
    {/key}
  </Modal>

  <!-- WITHOUT bind I am able to keep state on the logincard ...which is useful for phone auth sms code logic, however annoyingly the svg icon color does not update back to default color when unclicking -->

  <Modal bind:showModal={$showLoginModal}>
    <LoginCard />
  </Modal>

  <!-- previously used this if block due to multiple-dropzone-on-one-page-interference ..  -->
  <!-- {#if $showHomeworkModal} -->
  <Modal bind:showModal={$showHomeworkModal} bgTint={"bg-[rgba(0,0,0,0.1)]"}>
    <Dropzone
      uniqueId={"modalDropzone"}
      textSizeTW={"text-6xl"}
      dimensionsTW={"w-[80vw] h-[85vh]"}
      brightnessTW={"brightness-95"}
    />
  </Modal>
  <!-- {/if} -->

  <!-- TODO: removed 'overflow-x-auto overflow-y-hidden' on nov27,2022 ...doesnt seem necessary given 'overflow-x-scroll overflow-y-hidden' is already used on ul element in navbar.svelte -->
  <div class=" z-50 md:py-4 md:px-[7%] fixed {jankytown} ease-in-out w-full">
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
