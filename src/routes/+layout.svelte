<script>
  import { slide, scale, fly, fade, blur } from "svelte/transition";
  import { elasticOut, quintOut } from "svelte/easing";
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
    // isDarkMode
  } from "$lib/store";

  import { disableZoomGestures, getOS, isRunningStandalone } from "$lib/utils";

  import { page } from "$app/stores";
  import { onMount } from "svelte";

  onMount(() => {
    // $lessThan768 && disableZoomGestures();
    (isRunningStandalone() || $lessThan768) && disableZoomGestures();
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
  <!-- although the 'app' button is also screened in Navbar.svelte, it's also a good idea to not render the popup here -->
  {#if getOS() == "iOS"}
    <Modal showModal={$navAppClicked} bgTint={"bg-[#6c79f4] text-white"}>
      <!-- bgTint={$isDarkMode ? "bg-[#5262f7]" : "bg-[#a5adf5]"} -->
      {#key !$navAppClicked}
        <!-- bg-[#818cf8] -->
        <!-- in:slide={{ duration: 1300, easing: elasticOut }} -->
        <div
          in:fly={{ x: 100, duration: 1300, easing: elasticOut }}
          class="font-Poppins text-5xl sm:text-6xl p-10 "
        >
          On iOS Safari 🚀

          <ul class="pt-10 flex flex-col gap-y-10">
            <li
              class="text-xl font-bold"
              in:fly={{
                x: 100,
                delay: 200,
                duration: 1300,
                easing: quintOut,
              }}
            >
              <div class="text-6xl">1.</div>
              Click share icon (box-and-arrow) at the bottom of screen
            </li>

            <li
              class="text-xl font-bold"
              in:fly={{
                x: 100,
                delay: 400,
                duration: 1000,
                easing: quintOut,
              }}
            >
              <div class="text-6xl">2.</div>
              Click 'Add to Home Screen'
            </li>
          </ul>
        </div>
      {/key}
    </Modal>
  {/if}

  <!-- WITHOUT bind I am able to keep state on the logincard ...which is useful for phone auth sms code logic, however annoyingly the svg icon color does not update back to default color when unclicking -->

  <Modal bind:showModal={$showLoginModal}>
    <LoginCard />
  </Modal>

  <Modal bind:showModal={$showHomeworkModal} bgTint={"bg-[rgba(0,0,0,0.1)]"}>
    <Dropzone
      uniqueId={"modalDropzone"}
      textSizeTW={"text-6xl"}
      dimensionsTW={"w-[80vw] h-[85vh]"}
      brightnessTW={"brightness-95"}
    />
  </Modal>

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
