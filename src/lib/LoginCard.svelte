<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import {
    isLoggedIn,
    isDarkMode,
    elementColor,
    navLoginClicked,
  } from "$lib/store.js";
  import {
    GoogleLogin,
    logoutFunction,
    regexEmailChecker,
    magicLinkToEmail,
  } from "$lib/loginFunctions.js";

  import { auth } from "$lib/firebase.js";
  import { collection, getDocs } from "firebase/firestore/lite";
  import { onAuthStateChanged, isSignInWithEmailLink } from "firebase/auth";
  import IconGoogle from "$lib/IconGoogle.svelte";
  import IconEmail from "$lib/IconEmail.svelte";

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

  $: if ($navLoginClicked == false) {
    clearInterval(redirectSetInterval);
    clearTimeout(redirectAfterLoginTimeOut);
  }

  onMount(async () => {
    const logInDiv = document.querySelector(".logInDiv");
    const logOutDiv = document.querySelector(".logOutDiv");
    const loginWelcomeText = document.querySelector("#loginWelcomeText");
    const passwordlessLoginBtn = document.querySelector(
      "#passwordlessLoginBtn"
    );
    const emailField = document.querySelector("#emailField");

    passwordlessLoginBtn.addEventListener("click", signinWithLinkAndStop);
    emailField.addEventListener("keydown", signinWithLinkAndStop);

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
        .catch((error) => console.log(error));
      /* Clear email from storage or throw error.*/
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        $isLoggedIn = true;
        loggedInEmail = user.email;
        // get the loggedInEmail IF user is authenticated; outside logic determines redirect when login nav item clicked

        // loginToRedirectUrl(user.email);

        console.log(`User is signed in! YEET`);

        logInDiv.style.display = "none";
        logOutDiv.style.display = "block";

        loginWelcomeText.innerText = user.displayName
          ? `Hey ${user.displayName}!`
          : `Hey ${user.email}!`;
      } else {
        $isLoggedIn = false;
        $navLoginClicked = false;
        loggedInEmail = "";

        console.log(`User is NOT signed in`);
        logInDiv.style.display = "block";
        logOutDiv.style.display = "none";
      }
    });
  });

  $: if ($navLoginClicked) {
    loginToRedirectUrl(loggedInEmail);
    // loginToRedirectUrl(user.email);
  }
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

  async function loginToRedirectUrl(userEmail) {
    const { db } = await import("$lib/firebase.js");
    const querySnapshot = await getDocs(collection(db, "email"));
    querySnapshot.forEach((doc) => {
      if (userEmail === doc.id) {
        // TODO: maybe make this global
        let redirectTimeInMS = 3000;
        let seconds = parseInt(redirectTimeInMS / 1000); // i.e. 3
        // let userRedirectUrl =  doc.data().redirectUrl; /TODO: change this later in firebase
        let userRedirectUrl = "/";

        console.log(`A match! ${doc.id} => ${userRedirectUrl}`);

        // redirect after login
        redirectSetInterval = setInterval(() => {
          if (seconds > 0) {
            seconds += -1;
            document.getElementById("timeLeft").innerHTML = ` ${seconds}`;
          }
        }, 1000);

        // make this a global variable so I can cancel it elsewhere .. i.e. on route changes
        redirectAfterLoginTimeOut = setTimeout(() => {
          $navLoginClicked = false;
          document.getElementById("timeLeft").innerHTML = 3;
          goto(userRedirectUrl);
        }, redirectTimeInMS);
      }
    });
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

      passwordlessLoginBtn.style.opacity = "0.5";
      passwordlessLoginBtn.style.pointerEvents = "none";
    }
  }

  //  Hoisted functions
</script>

<card
  class="hover:scale-[102%] font-Poppins shadow-md {$isDarkMode
    ? 'hover:shadow-xl '
    : 'hover:shadow-lg'} rounded-2xl hover:rounded-3xl mx-auto  min-w-fit w-full sm:max-w-lg  p-10 m-1 text-center duration-300 group"
  style={`background:${$elementColor}`}
>
  <div class="logInDiv p-5">
    <div
      on:click={GoogleLogin}
      on:keydown={GoogleLogin}
      in:scale={{ duration: 600, easing: elasticOut }}
      class="   bg-[#4285f4]  hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-90'
        : 'group-hover:bg-opacity-90'} text-xl text-white "
    >
      <signin-button class="flex justify-center items-center gap-5">
        <IconGoogle />
        <span>Sign-in with Google</span>
      </signin-button>
    </div>

    <p class="py-5">or</p>

    <div
      id="passwordlessLoginBtn"
      in:scale={{ duration: 600, easing: elasticOut }}
      class=" bg-red-400   hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-80'
        : 'group-hover:bg-opacity-80'} text-xl text-white "
    >
      <signin-button class="flex justify-center items-center gap-5">
        <IconEmail />
        <span>Get Magic Link</span>
      </signin-button>
    </div>

    <input
      on:keyup={onInputEmailField(emailFieldValue)}
      class="text-center p-3 mt-3 w-full {shortPing} "
      id="emailField"
      bind:value={emailFieldValue}
      type="email"
      placeholder="email"
    />

    <span id="emailStatusMessage" />
  </div>

  <div class="logOutDiv" style="display:none">
    <p id="loginWelcomeText">Welcome User</p>
    <div id="redirectMessage">
      Redirecting to your page in
      <div style="font-size: 30px;" id="timeLeft">⌊π⌋</div>
    </div>
    <button id="logoutBtn" on:click={logoutFunction}>Logout</button>
  </div>
</card>
