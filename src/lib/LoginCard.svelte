<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import {
    redirectAfterLoginTimeOut,
    redirectSetInterval,
    isLoggedIn,
    isDarkMode,
    dark_lightened,
    light_darkened,
    navLoginClicked,
  } from "$lib/store.js";
  import { db, auth } from "$lib/firebase.js";
  import { collection, getDocs } from "firebase/firestore/lite";
  import {
    onAuthStateChanged,
    GoogleAuthProvider,
    signOut,
    signInWithPopup,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink,
  } from "firebase/auth";

  $: cardColor = $isDarkMode ? dark_lightened : light_darkened;
  let emailFieldValue = "";
  let emptyEmailKey;

  //  onmount
  onMount(() => {
    const logInDiv = document.querySelector(".logInDiv");
    const logOutDiv = document.querySelector(".logOutDiv");
    const loginWelcomeText = document.querySelector("#loginWelcomeText");

    // TODO: previpously missing login code for passwordless login
    // Confirm the link is a sign-in with email link.
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email)
        email = window.prompt("Please provide your email for confirmation");

      signInWithEmailLink(auth, email, window.location.href)
        .then(() => window.localStorage.removeItem("emailForSignIn"))
        .catch((error) => console.log(error));
      /* Clear email from storage or throw error.*/
    }
    // TODO: previpously missing login code for passwordless login

    onAuthStateChanged(auth, (user) => {
      if (user) {
        $isLoggedIn = true;

        console.log(`User is signed in!`);

        loginToRedirectUrl(user.email);

        logInDiv.style.display = "none";
        logOutDiv.style.display = "block";
        // logInDiv.style.display = "none";
        // logOutDiv.style.display = "block";

        loginWelcomeText.innerText = user.displayName
          ? `Hey ${user.displayName}!`
          : `Hey ${user.email}!`;
      } else {
        $isLoggedIn = false;
        $navLoginClicked = false;
        console.log(`User is NOT signed in`);
        logInDiv.style.display = "block";
        logOutDiv.style.display = "none";
      }
    });
  });
  //   onmount

  //  Hoisted Functions
  function onInputEmailField(EMAIL) {
    // regex checks if has email format
    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EMAIL);

    // if(EMAIL.length === 0) {
    if (EMAIL == "") {
      emailField.style.border = "1px solid #aaa";
      emailField.style.color = "#aaa";
      emailField.style.fontSize = "16px";
    } else if (!isEmail) {
      emailField.style.border = "1.5px solid red";
      emailField.style.color = "red";
      emailField.style.fontSize = "20px";
    } else {
      emailField.style.border = "2px solid #59d0ae";
      emailField.style.backgroundColor = "white";
      emailField.style.color = "#10bb8a"; // green-ish colour

      // these event listeners attached ONLY when regex confirms that the format is email
      passwordlessLoginBtn.addEventListener("click", () =>
        signinWithLinkAndStop()
      );
      emailField.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          signinWithLinkAndStop();
        }
      });
    }
  }

  function GoogleLogin() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function loginViaPasswordlessEmail() {
    // let email = emailField.value;
    let email = emailFieldValue;
    console.log("loginViaPasswordlessEmail", email);

    if (email.length !== 0) {
      // if (email == "") {
      const actionCodeSettings = {
        // url: "https://brightowltutoring.com/login",
        url: "https://thinksolve.io/login",
        handleCodeInApp: true,
      };

      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          window.localStorage.setItem("emailForSignIn", email);
          console.log("success with sendSignInLinkToEmail!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode", errorCode);
          console.log("errorMessage", errorMessage);
          // console.log("error with sendSignInLinkToEmail");
          // ...
        });
    }
  }

  function logoutFunction() {
    // firebase signing out
    signOut(auth)
      .then(() => {
        console.log("logged out");
        goto("/");

        // window.location.replace("/")
      })
      .catch((error) => {
        console.log(error);
        console.log("FAILED firebase signOut function");
      });
  }

  async function loginToRedirectUrl(userEmail) {
    const colRef = collection(db, "email");
    const querySnapshot = await getDocs(colRef);
    querySnapshot.forEach((doc) => {
      if (userEmail === doc.id) {
        let timeInMS = 3000;
        let seconds = parseInt(timeInMS / 1000); // i.e. 3
        // let userRedirectUrl =  doc.data().redirectUrl; /TODO: change this later in firebase
        let userRedirectUrl = "/";

        console.log(`A match! ${doc.id} => ${userRedirectUrl}`);

        // redirect after login
        $redirectSetInterval = setInterval(() => {
          if (seconds > 0) {
            seconds += -1;
            document.getElementById(
              "redirectMessage"
            ).innerHTML = ` ${seconds}`;
          }
        }, 1000);

        // make this a global variable so I can cancel it elsewhere .. i.e. on route changes
        $redirectAfterLoginTimeOut = setTimeout(() => {
          //   $navLoginClicked = false;
          goto(userRedirectUrl);
          $navLoginClicked = false;
        }, timeInMS);
      }
    });
  }
  //emd

  function signinWithLinkAndStop() {
    passwordlessLoginBtn.style.opacity = "0.2";
    passwordlessLoginBtn.style.pointerEvents = "none";

    loginViaPasswordlessEmail();

    // window.addEventListener(
    //   "keydown",
    //   (e) => e.stopImmediatePropagation(),
    //   true
    // );
    // window.addEventListener("click", (e) => e.stopImmediatePropagation(), true);

    // flyingEmoji.style.display = "block";
    emailStatusMessage.style.display = "block";

    emailStatusMessage.innerHTML = `
                <div class="p-3 font-Poppins" style=" color: #10bb8a"> 
                    Link sent to email 
                </div>
                `;
  }

  //  Hoisted functions
</script>

<div
  class=" cardCSS font-Poppins shadow-md {$isDarkMode
    ? 'hover:shadow-xl'
    : 'hover:shadow-lg'} rounded-xl  mx-auto w-1/3 min-w-fit  p-10 m-1 text-center duration-300 group"
  style={`background:${cardColor}`}
>
  <div class="logInDiv">
    <div
      on:click={GoogleLogin}
      in:scale={{ duration: 600, easing: elasticOut }}
      class="   bg-[#4285f4]  hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-80'
        : 'group-hover:bg-opacity-80'} text-xl text-white "
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
      on:click={() => {
        emailFieldValue == "" && (emptyEmailKey = !emptyEmailKey);
      }}
      class=" bg-red-400   hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 {$isDarkMode
        ? 'group-hover:bg-opacity-80'
        : 'group-hover:bg-opacity-80'} text-xl text-white "
    >
      <ul class="flex justify-center items-center gap-5">
        <!-- <ul class="flex justify-left items-center gap-7 px-10"> -->
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
        <li>Sign-in with Link</li>
      </ul>
    </div>

    {#key emptyEmailKey}
      <input
        on:input={onInputEmailField(emailFieldValue)}
        class="text-center p-5"
        in:scale|local={{ duration: 500, easing: elasticOut }}
        id="emailField"
        bind:value={emailFieldValue}
        type="email"
        placeholder="email"
      />
    {/key}
    <span id="emailStatusMessage" />
  </div>

  <div class="logOutDiv" style="display:none">
    <p id="loginWelcomeText">Welcome User</p>
    <p>Redirecting to your page in</p>
    <p style="font-size: 30px;" id="redirectMessage">⌊π⌋</p>
    <button id="logoutBtn" on:click={logoutFunction}>Logout</button>
  </div>
</div>

<style>
  .cardCSS {
    transform: perspective(1000px) rotateX(12deg);

    z-index: 10;
    -webkit-transform: translateZ(-1px);
  }

  .cardCSS:hover {
    transform: perspective(1000px) rotateX(0deg) scale(1.02);
  }
</style>
