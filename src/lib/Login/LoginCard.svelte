<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { slide } from "svelte/transition";
  import { elasticOut, quintOut } from "svelte/easing";
  import {
    isLoggedIn,
    isDarkMode,
    elementColor,
    navLoginClicked,
  } from "$lib/store.js";
  import {
    GoogleLogin,
    TwitterLogin,
    logoutFunction,
    regexEmailChecker,
    magicLinkToEmail,
  } from "$lib/Login/loginFunctions.js";

  import { app, auth } from "$lib/firebase.js";
  import { onAuthStateChanged, isSignInWithEmailLink } from "firebase/auth";
  import IconGoogle from "$lib/Icons/IconGoogle.svelte";
  import IconEmail from "$lib/Icons/IconEmail.svelte";
  import IconTwitter from "$lib/Icons/IconTwitter.svelte";
  // import Layout from "../../routes/+layout.svelte";
  // import CloseButton from "$lib/CloseButton.svelte";

  // element identifiers (previously referenced via queryselectors and ids)
  let magicLinkBtn;
  let emailField;

  let loginWelcomeText;
  let emailFieldValue = "";

  let isEmail = false; // this global variable is updated with regex to verify email input

  // Allows to convert infinite 'animate-ping' tailwind animation to short animation;
  // logic in 'signinWithLinkAndStop' function. Normally would do this with svelte and keyed block,
  // however the destruction/creation of the element interferes with event fire logic I want to maintain
  let emptyEmailInputAnimated;
  let magicLinkSent = false;
  $: shortPing = !magicLinkSent && emptyEmailInputAnimated && "animate-ping";
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
    // Confirm the link is a sign-in with email link. TODO: place in function??
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
        // let providerId = user.providerData[0].providerId; // TODO: have to check this or email
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

  function onInputEmailField(EMAIL) {
    isEmail = regexEmailChecker(EMAIL);
    if (EMAIL == "") {
      emailField.style.border = "1px solid #aaa";
      emailField.style.color = "#aaa";
      emailField.style.fontSize = "16px";
    } else if (!isEmail) {
      emailField.style.border = "1.5px solid red";
      emailField.style.color = "red";
      emailField.style.fontSize = "20px";
    } else if (isEmail) {
      emailField.style.border = "2px solid #59d0ae";
      emailField.style.backgroundColor = "white";
      emailField.style.color = "#10bb8a"; // green-ish colour
    }
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

  function signinWithLinkAndStop(e) {
    if ((e.type == "click" || e.key == "Enter") && emailFieldValue == "") {
      emptyEmailInputAnimated = true;
      setTimeout(
        () => (emptyEmailInputAnimated = !emptyEmailInputAnimated),
        100
      );
    }
    if ((e.type == "click" || e.key == "Enter") && isEmail) {
      magicLinkToEmail(emailFieldValue);
      magicLinkSent = true;
      emailFieldValue = "";

      emailStatusMessage.style.display = "block";

      emailStatusMessage.innerHTML = `
                  <div class="p-3 font-Poppins" style=" color: #10bb8a"> 
                      Link sent to email 🚀
                  </div>
                  `;

      emailField.style.opacity = "0.5";
      emailField.style.pointerEvents = "none";

      magicLinkBtn.style.opacity = "0.5";
      magicLinkBtn.style.pointerEvents = "none";
    }
  }
</script>

{#if $navLoginClicked && !$isLoggedIn}
  <login-card
    in:slide={{ duration: 400, easing: quintOut }}
    class="relative text-xl hover:scale-[1.01]  font-Poppins  shadow-md {$isDarkMode
      ? 'hover:shadow-xl '
      : 'hover:shadow-lg'} rounded-2xl hover:rounded-3xl mx-auto py-10 px-5 sm:p-10 text-center duration-300 w-11/12 sm:w-[500px] "
    style={`background:${$elementColor}`}
  >
    <!-- <div class="absolute -top-2 -right-2">
        <CloseButton />
      </div> -->

    <!-- in:scale={{ duration: 600, easing: elasticOut }} -->
    <signin-button
      bind:this={magicLinkBtn}
      on:click={signinWithLinkAndStop}
      on:keydown={signinWithLinkAndStop}
      class="group bg-red-400 hover:scale-[1.01]  hover:shadow-md  duration-200 rounded-md p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-80'
        : 'group-hover:bg-opacity-80'}  text-white flex justify-center items-center gap-5"
    >
      <span class="group-hover:scale-[1.15] duration-500">
        <IconEmail />
      </span>
      <span>Get Magic Link</span>
    </signin-button>

    <!-- on:keydown={(e) => {
        signinWithLinkAndStop(e);
      }} -->
    <input
      on:keydown={(e) => {
        signinWithLinkAndStop(e);
      }}
      on:paste={onInputEmailField(emailFieldValue)}
      on:keyup={onInputEmailField(emailFieldValue)}
      bind:this={emailField}
      class="text-center p-3 mt-3 w-full {shortPing} focus:outline-none "
      bind:value={emailFieldValue}
      type="email"
      placeholder="email"
    />

    <span id="emailStatusMessage" />

    <p class="py-5">or</p>

    <!-- in:scale={{ duration: 600, easing: elasticOut }} -->
    <signin-button
      on:keydown={GoogleLogin}
      on:click={GoogleLogin}
      class="group mb-6  bg-[#4285f4]  hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-90'
        : 'group-hover:bg-opacity-90'}  text-white  flex justify-center items-center gap-5"
    >
      <span class="group-hover:scale-[1.15] duration-500">
        <IconGoogle />
      </span>
      <span>Sign-in with Google</span>
    </signin-button>

    <!-- in:scale={{ duration: 600, easing: elasticOut }} -->
    <signin-button
      on:click={TwitterLogin}
      on:keydown={TwitterLogin}
      class=" group bg-[#1d9bf0]  hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-90'
        : 'group-hover:bg-opacity-90'} text-white  flex justify-center items-center gap-5"
    >
      <span class="group-hover:scale-[1.15] duration-500">
        <IconTwitter />
      </span>
      <span>Sign-in with Twitter</span>
    </signin-button>
  </login-card>
{/if}

{#if $navLoginClicked && $isLoggedIn}
  <logout-card
    in:slide={{ duration: 100, easing: quintOut }}
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
