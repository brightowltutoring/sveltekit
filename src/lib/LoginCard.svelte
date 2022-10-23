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
  import { db, auth } from "$lib/firebase.js";
  import { collection, getDocs } from "firebase/firestore/lite";
  import {
    onAuthStateChanged,
    // sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink,
  } from "firebase/auth";

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

  //  onmount
  onMount(() => {
    const logInDiv = document.querySelector(".logInDiv");
    const logOutDiv = document.querySelector(".logOutDiv");
    const loginWelcomeText = document.querySelector("#loginWelcomeText");
    const passwordlessLoginBtn = document.querySelector(
      "#passwordlessLoginBtn"
    );
    const emailField = document.querySelector("#emailField");

    // TODO: testing these out here rather than inside anothe ructoin

    passwordlessLoginBtn.addEventListener("click", signinWithLinkAndStop);
    emailField.addEventListener("keydown", signinWithLinkAndStop);

    // Confirm the link is a sign-in with email link.
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }

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
    // const colRef = collection(db, "email");
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
  <!-- <p class="text-5xl pb-10">Login</p> -->
  <div class="logInDiv p-5">
    <div
      on:click={GoogleLogin}
      in:scale={{ duration: 600, easing: elasticOut }}
      class="   bg-[#4285f4]  hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-90'
        : 'group-hover:bg-opacity-90'} text-xl text-white "
    >
      <!-- google logo plus adjacent text  -->
      <ul class="flex justify-center items-center gap-5">
        <!-- <ul class="flex justify-left items-center gap-5  px-10"> -->
        <li>
          <!-- google logo -->
          <svg height="24" width="24" viewBox="0 0 210 210">
            <path
              fill="white"
              d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
S0,162.897,0,105z"
            />
          </svg>
          <!-- google logo -->
        </li>
        <li>Sign-in with Google</li>
      </ul>
    </div>

    <p class="py-5">or</p>

    <div
      id="passwordlessLoginBtn"
      in:scale={{ duration: 600, easing: elasticOut }}
      class=" bg-red-400   hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-80'
        : 'group-hover:bg-opacity-80'} text-xl text-white "
    >
      <ul class="flex justify-center items-center gap-5">
        <li>
          <svg height="24" width="24" viewBox="0 0 485 485">
            <path
              fill="white"
              d="M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5
s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485c32.731,0,64.491-6.414,94.397-19.063l-11.688-27.63
C299.022,449.384,271.194,455,242.5,455C125.327,455,30,359.673,30,242.5S125.327,30,242.5,30S455,125.327,455,242.5
c0,51.323-31.534,74.699-60.834,74.699c-29.299,0-60.833-23.375-60.833-74.699c0-50.086-40.747-90.833-90.833-90.833
s-90.833,40.748-90.833,90.833s40.747,90.833,90.833,90.833c29.655,0,56.034-14.286,72.622-36.335
c4.248,8.577,9.594,16.336,16.04,23.113c16.613,17.468,38.988,27.087,63.004,27.087c24.017,0,46.392-9.62,63.005-27.087
C475.377,300.97,485,274.132,485,242.5C485,177.726,459.775,116.829,413.974,71.026z M242.5,303.333
c-33.543,0-60.833-27.29-60.833-60.833s27.29-60.833,60.833-60.833s60.833,27.29,60.833,60.833S276.043,303.333,242.5,303.333z"
            />
          </svg>
        </li>

        <li>Get Magic Link</li>
      </ul>
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
