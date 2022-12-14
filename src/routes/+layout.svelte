<script>
  import "../app.css";
  import {
    scale,
    fly,
    // slide, fade, blur
  } from "svelte/transition";
  import { elasticOut, quintOut } from "svelte/easing";

  import Modal from "$lib/Wrappers/Modal.svelte";
  import Dropzone from "$lib/Dropzone/Dropzone.svelte";
  import LoginCard from "$lib/Login/LoginCard.svelte";
  import Navbar from "$lib/Nav/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import {
    instDeltaY,
    scrollY,
    setInnerWidthViaMatchMedia,
    lessThan768,
    showLoginModal,
    showHomeworkModal,
    navAppClicked,
    isDarkMode,
  } from "$lib/store";

  import { disableZoomGestures, getOS, isRunningStandalone } from "$lib/utils";

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

  import { page } from "$app/stores";
  import { routes } from "$lib/store";

  let contactLinkClicked = false;
</script>

<svelte:head>
  <link rel="manifest" href="/manifest.json" />
  <!-- <TitlesHead /> -->
  {#if $page.status == 200}
    {@const slashlessRoute = $page.route.id.slice(1)}

    {#if slashlessRoute == ""}
      <title>{$routes.home.title}</title>
      <meta
        name="description"
        content="Math and Physics Tutoring for the Modern Age."
      />
      <meta og:url="https://thinksolve.io/" />
      <!-- TODO: for some reason this doesn't work when site is deployed to cloudflare -->
      <!-- {:else if Object.keys($routes).includes(slashlessRoute)}
      <title>{$routes[slashlessRoute].title}</title> -->
    {:else}
      {#each Object.keys($routes).slice(1) as key}
        {@const title = $routes[key].title}

        {#if slashlessRoute.startsWith(key)}
          <title>{title}</title>
        {/if}
      {/each}
    {/if}
  {:else if $page.status == 404}
    <title>Oops 💩</title>
  {/if}
</svelte:head>

<svelte:window bind:scrollY={$scrollY} on:contextmenu|preventDefault />

<!-- bgTint={"text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"} -->
<main>
  <Modal showModal={contactLinkClicked} bgTint={"backdrop-blur-3xl "}>
    {#key !contactLinkClicked}
      <ul
        in:scale={{
          duration: 1500,
          easing: elasticOut,
        }}
        class="text-center flex flex-col gap-y-2 font-Poppins sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r  {$isDarkMode
          ? 'from-teal-200 via-rose-300 to-pink-200 '
          : 'from-teal-700 via-rose-700 to-pink-700 '}"
      >
        <li>Email:</li>
        <li class="p-5">thinksolve.io@gmail.com</li>
      </ul>
    {/key}
  </Modal>

  <!-- although the 'app' button is also screened in Navbar.svelte, it's also a good idea to not render the popup here -->
  {#if getOS() == "iOS"}
    <!-- <Modal showModal={$navAppClicked} bgTint={"bg-[#6c79f4] text-white"}> -->

    <Modal
      showModal={$navAppClicked}
      bgTint={"text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"}
    >
      {#key !$navAppClicked}
        <ul
          in:scale
          class="p-10 flex flex-col gap-y-8 font-Poppins text-3xl sm:text-6xl"
        >
          <li
            in:scale={{
              x: 100,
              duration: 1300,
              easing: elasticOut,
            }}
          >
            <div class="text-6xl">1.</div>
            Open Safari
          </li>
          <li
            in:fly={{
              x: 100,
              delay: 1200,
              duration: 1000,
              easing: quintOut,
            }}
          >
            <div class="text-6xl">2.</div>
            <div class="flex flex-row justify-center items-center gap-x-2 pt-2">
              <span> Click share icon</span>
              <img
                class="w-7 h-7 -translate-y-1  invert"
                src="/safari-share-icon.png"
                alt="safari share icon"
              />
            </div>
          </li>

          <li
            class=" text-black"
            in:fly={{
              x: 200,
              delay: 2000,
              duration: 1200,
              easing: quintOut,
            }}
          >
            <div class="text-6xl ">3.</div>
            Click 'Add to Home Screen' 🚀
          </li>
        </ul>
      {/key}
    </Modal>
  {/if}

  <!-- WITHOUT bind I am able to keep state on the logincard ...which is useful for phone auth sms code logic, however annoyingly the svg icon color does not update back to default color when unclicking -->

  <Modal bind:showModal={$showLoginModal}>
    <LoginCard />
  </Modal>

  <Modal bind:showModal={$showHomeworkModal} bgTint={"bg-[rgba(0,0,0,0.1)]"}>
    <!-- uniqueId={"modalDropzone"} -->
    <Dropzone
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
    <Footer bind:contactLinkClicked />
  </div>

  <!-- <div
    class="md:py-4 py-1 md:px-[7%] z-50 fixed {jankytown} ease-in-out overflow-x-auto overflow-y-hidden w-full "
  > -->
  <!-- <div class="px-[7%] h-[100vh] pt-32 md:block">
    <Footer />
  </div> -->
</main>
