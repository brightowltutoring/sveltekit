<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { slide, fly, scale } from "svelte/transition";
  import { quintOut, elasticOut } from "svelte/easing";
  import {
    isLoggedIn,
    isDarkMode,
    elementColor,
    navLoginClicked,
  } from "$lib/store.js";
  import { logoutFunction } from "$lib/Login/loginFunctions.js";

  import { app, auth } from "$lib/firebase.js";
  import { onAuthStateChanged, isSignInWithEmailLink } from "firebase/auth";

  import TwitterLoginButton from "$lib/Login/TwitterLoginButton.svelte";
  import GoogleLoginButton from "$lib/Login/GoogleLoginButton.svelte";
  import MagicLinkSection from "$lib/Login/MagicLinkSection.svelte";
  import PhoneAuthSection from "$lib/Login/PhoneAuthSection.svelte";
  // import CloseButton from "$lib/CloseButton.svelte";

  // element identifiers (previously referenced via queryselectors and ids)

  let loginWelcomeText;

  // Allows to convert infinite 'animate-ping' tailwind animation to short animation;
  // logic in 'signinWithLinkAndStop' function. Normally would do this with svelte and keyed block,
  // however the destruction/creation of the element interferes with event fire logic I want to maintain

  let loggedInEmail;

  // these were previously store variables, but the reactive statement below takes care of things
  let redirectAfterLoginTimeOut;
  let redirectSetInterval;

  // !$navLoginClicked just means when unclicking login button ... rename at a future date?
  $: if (!$navLoginClicked) {
    clearInterval(redirectSetInterval);
    clearTimeout(redirectAfterLoginTimeOut);
  }

  $: if ($navLoginClicked && $isLoggedIn) {
    navLoginClickedRedirect(loggedInEmail);
  }

  onMount(async () => {
    // Confirm the link is a sign-in with email link.
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }

      const { signInWithEmailLink } = await import("firebase/auth");
      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem("emailForSignIn");
          $navLoginClicked = true;
        })
        .catch((error) => console.log("signInWithEmailLink:", error));
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // let providerId = user.providerData[0].providerId;
        // console.log("providerId", providerId);
        $isLoggedIn = true;
        loggedInEmail = user.email;

        console.log(`User is signed in!`);

        loginWelcomeText.innerText = user.displayName
          ? `Hey ${user.displayName}!`
          : `Hey ${user.email}!`;
      } else {
        localStorage.removeItem("redirectUrlFromLS"); // clears on logout only; stays even on refresh/exit!
        $isLoggedIn = false;
        $navLoginClicked = false;
        loggedInEmail = "";

        console.log(`User is NOT signed in`);
      }
    });
  });

  //  Hoisted Functions

  function isRunningStandalone() {
    return window.matchMedia("(display-mode: standalone)").matches;
  }

  // this function needs to detect logout too to reset store
  function redirectLogic(userRedirectUrl = "/login") {
    let redirectTimeInMS = 3000;
    let seconds = parseInt(redirectTimeInMS / 1000); // i.e. 3

    // redirectSetInterval and redirectAfterLoginTimeOut are global variables, the state of which is also controlled above via a reactive statement

    redirectSetInterval = setInterval(() => {
      if (seconds > 0) {
        seconds += -1;
        document.getElementById("timeLeft").innerHTML = ` ${seconds}`;
      }
    }, 1000);

    redirectAfterLoginTimeOut = setTimeout(() => {
      $navLoginClicked = false;
      document.getElementById("timeLeft").innerHTML = 3;
      goto(userRedirectUrl);
    }, redirectTimeInMS);
  }

  async function navLoginClickedRedirect(userEmail) {
    let redirectUrlFromLS = localStorage.getItem("redirectUrlFromLS");
    console.log("redirectUrlFromLS", redirectUrlFromLS);

    if (redirectUrlFromLS) {
      redirectLogic(redirectUrlFromLS);
    } else {
      const { getFirestore, collection, getDocs } = await import(
        "firebase/firestore/lite"
      );
      const db = getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "email"));
      const querySnapshotSize = querySnapshot.size;
      const docs = querySnapshot.docs; // forEach can use querySnapshot directly, however 'break' logic becomes convoluted with try-catch block and throwing 'BreakException={}' (see: https://stackoverflow.com/questions/2641347/short-circuit-array-foreach-like-calling-break)
      for (const i in docs) {
        const doc = docs[i];

        if (userEmail === doc.id) {
          localStorage.setItem("redirectUrlFromLS", doc.data().redirectUrl);
          redirectUrlFromLS = localStorage.getItem("redirectUrlFromLS");
          redirectLogic(redirectUrlFromLS);
          return; // break;
        }
        // without parseInt(i) this math conditional breaks
        if (parseInt(i) === querySnapshotSize - 1) {
          localStorage.setItem("redirectUrlFromLS", "/");
          redirectUrlFromLS = localStorage.getItem("redirectUrlFromLS");
          redirectLogic(redirectUrlFromLS);
        }
      }
    }
  }
</script>

{#if $navLoginClicked && !$isLoggedIn}
  <!-- <div
    class="w-11/12 sm:w-[500px]"
    in:fly={{ y: 300, duration: 1000, easing: elasticOut }}
  > -->
  <!-- in:scale={{ duration: 500, easing: quintOut }} -->
  <login-card
    in:slide={{ duration: 400, easing: quintOut }}
    class=" block relative text-xl hover:scale-[1.01]  font-Poppins  shadow-md {$isDarkMode
      ? 'hover:shadow-xl '
      : 'hover:shadow-lg'} rounded-2xl hover:rounded-3xl mx-auto py-10 px-5 sm:p-10 text-center duration-300 w-11/12 sm:w-[500px]"
    style={`background:${$elementColor}`}
  >
    <!-- <div class="absolute -top-2 -right-2">
          <CloseButton />
        </div> -->

    {#if !isRunningStandalone()}
      <MagicLinkSection />
    {:else}
      <PhoneAuthSection />
    {/if}

    <p class="py-5">or</p>

    <!-- since these don't update the DOM, placed them in separate components -->
    <GoogleLoginButton />
    <TwitterLoginButton />
  </login-card>
  <!-- </div> -->
{:else if $navLoginClicked && $isLoggedIn}
  <!-- in:slide={{ duration: 400, easing: quintOut }} -->
  <logout-card
    in:slide={{ duration: 1000, easing: elasticOut }}
    class="relative hover:scale-[1.01]  font-Poppins  shadow-md {$isDarkMode
      ? 'hover:shadow-xl '
      : 'hover:shadow-lg'} rounded-2xl hover:rounded-3xl mx-auto py-5 px-3 sm:p-7 text-center duration-300 w-11/12 sm:w-[500px] "
    style={`background:${$elementColor}`}
  >
    <p bind:this={loginWelcomeText}>Welcome User</p>
    <div id="redirectMessage">
      Redirecting to your page in
      <div style="font-size: 30px;" id="timeLeft">⌊π⌋</div>
    </div>

    <button id="logoutBtn" on:click={logoutFunction}>Logout</button>
  </logout-card>
{/if}

<!-- {#if $navLoginClicked && $isLoggedIn}{/if} -->
