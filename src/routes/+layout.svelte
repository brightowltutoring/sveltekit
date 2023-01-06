<script>
  import Seo from "$lib/Seo.svelte";
  import "../app.css";

  import LazyMount from "$lib/Wrappers/LazyMount.svelte";
  import Modal from "$lib/Wrappers/Modal.svelte";
  import Navbar from "$lib/Nav/Navbar.svelte";
  import Dropzone from "$lib/Dropzone/Dropzone.svelte";
  // import Footer from "$lib/Footer.svelte";
  import InView from "$lib/Wrappers/InView.svelte";
  let FooterComponent; // this component is not 'LazyMount-ed' since LazyMount cannot handle bounded props..yet?

  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { disableZoomGestures, getOS, isRunningStandalone } from "$lib/utils";
  import {
    setInnerWidthViaMatchMedia,
    lessThan768,
    showLoginModal,
    showHomeworkModal,
    navAppClicked,
    isLoggedIn,
    isDarkMode,
  } from "$lib/store";
  import { scale, fly } from "svelte/transition"; // slide, fade, blur
  import { elasticOut, quintOut } from "svelte/easing";

  onMount(async () => {
    // This imports various firebase modules IF user has previously signed in with firebase .. i.e. doesnt ship unnecessary js to people who have never logged in.  TODO: would prefer if 'isUIDfromIDB()' returned 'hasUID' boolean instead ... and to await the result rather than use some arbitrary timeout delay.
    isUIDfromIDB(); // depends on the existence of window.indexedDB
    setTimeout(() => {
      console.log("hasUID", hasUID);
      if (hasUID) onMountFirebase();
    }, 50);

    // $lessThan768 && disableZoomGestures();
    (isRunningStandalone() || $lessThan768) && disableZoomGestures();
    setInnerWidthViaMatchMedia();

    // TODO: on xcode simulator the ipad 10th and ipad air 5th returns as 'macos' not 'ios' ... Main use case is for downloading PWA on ios/android phones, so as long as that works, it's fine.
  });

  let loggedInEmail;
  async function onMountFirebase() {
    const { auth } = await import("$lib/Login/firebase");
    const { onAuthStateChanged, isSignInWithEmailLink } = await import(
      "firebase/auth"
    );

    // Confirm the link is a sign-in with email link.

    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email)
        email = window.prompt("Please provide your email for confirmation");

      const { signInWithEmailLink } = await import("firebase/auth");
      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem("emailForSignIn");
          $showLoginModal = true;
        })
        .catch((error) => console.log("signInWithEmailLink:", error));
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        $isLoggedIn = true;
        loggedInEmail = user.email;

        // loginWelcomeText = user.displayName
        //   ? `Hey ${user.displayName}!`
        //   : `Hey ${user.email}!`;
      } else {
        localStorage.removeItem("redirectUrlFromLS"); // clears on logout only; stays even on refresh/exit!
        $isLoggedIn = false;
        $showLoginModal = false;
        loggedInEmail = "";
      }
    });
    // }
  }

  let hasUID;
  async function isUIDfromIDB() {
    const asyncForEach = (array, callback, done) => {
      const runAndWait = (i) => {
        if (i === array.length) return done();
        return callback(array[i], () => runAndWait(i + 1));
      };
      return runAndWait(0);
    };

    const dump = {};
    let dumpString;

    const dbRequest = window.indexedDB.open("firebaseLocalStorageDb");
    dbRequest.onsuccess = () => {
      try {
        const db = dbRequest.result;
        const stores = ["firebaseLocalStorage"];

        const tx = db.transaction(stores);
        asyncForEach(
          stores,
          (store, next) => {
            const req = tx.objectStore(store).getAll();
            req.onsuccess = () => {
              dump[store] = req.result;
              next();
            };
          },
          () => {
            // let dumpString = await JSON.stringify(dump);
            dumpString = JSON.stringify(dump);
            hasUID = dumpString.includes("uid");
            // console.log("hasUID from inside function", hasUID);
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
  }

  let contactLinkClicked = false;

  const opacityEasingDelay = 100;
  let changeOpacityTo100;
  $: if ($showLoginModal && !$isLoggedIn) {
    setTimeout(() => {
      changeOpacityTo100 =
        "opacity-100 transition-opacity duration-100 ease-in";
    }, opacityEasingDelay);
  }
</script>

<main>
  <Navbar />

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

  <!-- <Modal body bind:showModal={$showLoginModal} bgTint={`backdrop-blur-md `}>
    <LoginCard /> -->
  <Modal body bind:showModal={$showLoginModal} bgTint={`backdrop-blur-md `}>
    <!-- bgTint={`backdrop-blur-md opacity-0 ${changeOpacityTo100}`} -->
    <LazyMount
      Import={() => {
        // this '$showLoginModal' was previously needed due to lazymounting the component .. check later if needed
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
    <!-- NOTE: having the Dropzone lazyMounted prevents the 'popupOnce' logic defined inside Dropzone.svelte; even WITH timeout delay it would not work. Luckily this one modal dropzone has no impact on the perfect lightscore ! -->
  </Modal>

  <div class="px-[7%] pt-32 md:block">
    <slot />

    <!-- <Footer bind:contactLinkClicked /> -->

    <!-- without status 200 check, this breaks error.svelte for all errored pages ... still not sure why -->
    <!-- {#if $page.status == 200 && $page.route.id !== "/classroom"} -->
    {#if $page.route?.id !== "/classroom"}
      <InView
        margin={"200px"}
        onview={async () =>
          (FooterComponent = await import("$lib/Footer.svelte"))}
      >
        {#if FooterComponent}
          <FooterComponent.default bind:contactLinkClicked />
        {/if}
      </InView>
    {/if}
  </div>
</main>

<Seo />

<svelte:head>
  <link rel="manifest" href="/manifest.json" />
</svelte:head>
