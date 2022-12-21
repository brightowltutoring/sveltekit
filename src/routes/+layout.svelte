<script>
  import "../app.css";
  import {
    scale,
    fly,
    // slide, fade, blur
  } from "svelte/transition";
  import { elasticOut, quintOut } from "svelte/easing";

  import Navbar from "$lib/Nav/Navbar.svelte";
  import InView from "$lib/Wrappers/InView.svelte";
  import Modal from "$lib/Wrappers/Modal.svelte";
  import Dropzone from "$lib/Dropzone/Dropzone.svelte";

  // import LoginCard from "$lib/Login/LoginCard.svelte";
  // import Footer from "$lib/Footer.svelte";
  let FooterComponent;

  import {
    instDeltaY,
    scrollY,
    setInnerWidthViaMatchMedia,
    lessThan768,
    showLoginModal,
    showHomeworkModal,
    navAppClicked,
    isDarkMode,
    isLoggedIn,
  } from "$lib/store";

  import { disableZoomGestures, getOS, isRunningStandalone } from "$lib/utils";

  import { onMount } from "svelte";

  onMount(() => {
    // $lessThan768 && disableZoomGestures();
    (isRunningStandalone() || $lessThan768) && disableZoomGestures();
    setInnerWidthViaMatchMedia();

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

  // import { page } from "$app/stores";
  // import { routes } from "$lib/store";
  import LazyMount from "$lib/Wrappers/LazyMount.svelte";

  let contactLinkClicked = false;

  // for logincard ui .. which is lazy loaded below
  const opacityEasingDelay = 100;
  let changeOpacityTo100;
  $: if ($showLoginModal && !$isLoggedIn) {
    setTimeout(() => {
      changeOpacityTo100 =
        "opacity-100 transition-opacity duration-100 ease-in";
    }, opacityEasingDelay);
  }
</script>

<svelte:head>
  <link rel="manifest" href="/manifest.json" />
</svelte:head>

<svelte:window bind:scrollY={$scrollY} on:contextmenu|preventDefault />

<main>
  <Modal showModal={contactLinkClicked} bgTint={"backdrop-blur-3xl"}>
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

  <!--dec 16,2022: Logincard contains firebase modules and svg icon in svelte components ... lazy loading this yields a perfect lighthouse score (Logincard.svelte is loaded!), however due to the asynchronous nature of dynamic import the UI takes a hit ... which is why I also use 'opacity easing' in Modal.svelte. Seems so janky, however the alternative is much worse: granularly dynamic import everything inside Logincard. Oh and for some reason have to reset '$showLoginModal = true' ... haven't yet figured why it flicker to false when first clicking the login button -->

  <!-- UPDATE: the timeout here is 250ms and 100 ms and in opacity easing logic defined above. These are magic numbers as far as im concerned, up until now the logincard has been jittery on mobile -->

  <Modal
    body
    bind:showModal={$showLoginModal}
    bgTint={`backdrop-blur-md opacity-0 ${changeOpacityTo100}`}
  >
    <!-- <LoginCard /> -->
    <LazyMount
      Import={() => {
        setTimeout(() => ($showLoginModal = true), 2.5 * opacityEasingDelay); //opacityEasingDelay = 100ms
        return import("$lib/Login/LoginCard.svelte");
      }}
    />
  </Modal>

  <Modal bind:showModal={$showHomeworkModal} bgTint={"bg-[rgba(0,0,0,0.1)]"}>
    <Dropzone
      textSizeTW={"text-6xl"}
      dimensionsTW={"w-[80vw] h-[85vh]"}
      brightnessTW={"brightness-95"}
    />
    <!--TODO: note: luckily this one modal dropzone has no impact on the perfect lightscore .. having the Dropzone lazyMounted (which I had done before) would prevent the 'popupOnce' logic defined inside Dropzone.svelte; even WITH timeout delay it would not work -->

    <!-- <LazyMount
    Import={() => import("$lib/Dropzone/Dropzone.svelte")}
    textSizeTW={"text-6xl"}
    dimensionsTW={"w-[80vw] h-[85vh]"}
    brightnessTW={"brightness-95"}
  /> -->
  </Modal>

  <!-- TODO: removed 'overflow-x-auto overflow-y-hidden' on nov27,2022 ...doesnt seem necessary given 'overflow-x-scroll overflow-y-hidden' is already used on ul element in navbar.svelte -->
  <div class=" z-50 md:py-4 md:px-[7%] fixed {jankytown} ease-in-out w-full ">
    <Navbar />
  </div>

  <!-- because of the fixing of navbar, we have to defined a top padding to this slot container -->
  <!-- TODO: this padding is not needed for smaller than md -->

  <div class="px-[7%] pt-32 md:block">
    <slot />

    <!-- <Footer bind:contactLinkClicked /> -->

    <!-- When passing bounded variables, cannot (yet) use the LazyMount way-->
    <InView
      margin={"200px"}
      onview={async () =>
        (FooterComponent = await import("$lib/Footer.svelte"))}
    >
      {#if FooterComponent}
        <FooterComponent.default bind:contactLinkClicked />
      {/if}
    </InView>

    <!-- <LazyMount
      bind:contactLinkClicked
      Import={ () => import("$lib/Footer.svelte")}
    /> -->

    <!-- Failed attempt to consolidate lazy import block; comes down to import statement disallowing variable path. Update: passing import via a function prop seems to work, but then passing bounded props doesnt seem to work ..also the markup is already as large as the original  -->
  </div>
</main>
