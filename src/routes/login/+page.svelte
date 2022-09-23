<script>
  import {
    redirectAfterLoginTimeOut,
    redirectSetInterval,
    isLoggedIn,
    isDarkMode,
  } from "$lib/store.js";
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { db, auth } from "$lib/firebase.js";
  import { goto } from "$app/navigation";
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

  // import { page } from '$app/stores'

  let emailFieldValue = "";
  let emptyEmailKey = false;

  onMount(() => {
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

        loginWelcomeText.innerText = user.displayName
          ? `Hey ${user.displayName}!`
          : `Hey ${user.email}!`;
      } else {
        $isLoggedIn = false;
        console.log(`User is NOT signed in`);
      }
    });
  });

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
    let email = emailField.value;
    console.log(email);

    // if(email.length!==0) {
    if (email == "") {
      const actionCodeSettings = {
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
          console.log("error with sendSignInLinkToEmail");
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
          goto(userRedirectUrl);
        }, timeInMS);
      }
    });
  }
  //emd

  function signinWithLinkAndStop() {
    passwordlessLoginBtn.style.opacity = "0.2";
    passwordlessLoginBtn.style.pointerEvents = "none";

    // let emailFieldClone = emailField.cloneNode(true);
    // emailField.parentNode.replaceChild(emailFieldClone, emailField);

    loginViaPasswordlessEmail();

    window.addEventListener(
      "keydown",
      (e) => e.stopImmediatePropagation(),
      true
    );
    window.addEventListener("click", (e) => e.stopImmediatePropagation(), true);
    //TODO: moved to onMount above

    flyingEmoji.style.display = "block";
    emailStatusMessage.style.display = "block";

    emailStatusMessage.innerHTML = /*html*/ `
                <span class="centering" style=" font-weight: bold; font-size: 18px; color: #10bb8a"> 
                    Link sent to email 
                </span>
                `;
  }

  //  Hoisted functions
</script>

<main>
  <div class="loginLogoutDivs " id="logInDiv" style="display: block; ">
    <br />
    <br />

    <button id="googleBtn" on:click={GoogleLogin}>Sign-in with Google</button>
    <br />
    <br />

    <button
      id="passwordlessLoginBtn"
      on:click={() => {
        emailFieldValue == "" && (emptyEmailKey = !emptyEmailKey);
        // emailFieldValue.length==0 && (emptyEmailKey = !emptyEmailKey)
      }}>Sign-in via link</button
    >

    {#key emptyEmailKey}
      <input
        in:scale|local={{ duration: 500, easing: elasticOut }}
        id="emailField"
        bind:value={emailFieldValue}
        type="email"
        placeholder="email"
        on:input={onInputEmailField(emailFieldValue)}
      />
    {/key}

    <span id="emailStatusMessage" class="centering " style="display:none" />
    <span id="flyingEmoji" style="display:none" />
  </div>

  <div class="loginLogoutDivs" id="logOutDiv" style="display: none">
    <h2 class="centering" id="loginWelcomeText">Welcome User</h2>
    <h3 class="centering">Redirecting to your page in</h3>
    <h3 class="centering" style="font-size: 30px;" id="redirectMessage">⌊π⌋</h3>

    <button id="logoutBtn" on:click={logoutFunction}>Logout</button>
  </div>
</main>

<style>
  /* animate plane emoji */

  body {
    overflow-y: hidden;
  }

  #flyingEmoji {
    /* height:10vh;
        width:10vw; */
    display: flex;
    justify-content: center;
    align-items: center;
    animation: xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);
  }

  #flyingEmoji::after {
    content: "🛸";
    display: block;
    width: 1px;
    height: 1px;
    border-radius: 20px;
    animation: yAxis 3s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);
  }

  @keyframes yAxis {
    80% {
      animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
      transform: translateY(-100px) rotate(360deg) scale(2);
    }
  }

  @keyframes xAxis {
    20% {
      animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
      transform: translateX(200px);
    }
  }
  /* animate plane emoji */

  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

  /* css animation to smooth out refresh flicker of DOM   */
  :root {
    --transition-effect: ease-in fadeIn 0.6s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  #logInDiv {
    animation: var(--transition-effect);
    -moz-animation: var(--transition-effect);
    -o-animation: var(--transition-effect);
    -ms-animation: var(--transition-effect);
    -webkit-animation: var(--transition-effect);
  }
  /* css animation to smooth out refresh flicker of DOM   */

  .loginLogoutDivs {
    /* display:block; */
    /* background: red;  */
    margin: 0px auto;
    /* margin-top: 50px; */
    width: 80vw;
    max-width: 380px;
    padding: 20px;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
  }

  .loginLogoutDivs input,
  button {
    /*without this the input is wider*/
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    /*without this the input is wider*/

    /* display: block; */
    width: 100%;
    border-radius: 2px;
    padding: 15px;
    outline: none;
    margin-bottom: 15px;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 16px;
    transition: 0.15s;
    -moz-transition: 0.15s;
    -webkit-transition: 0.15s;
  }

  .loginLogoutDivs input {
    background: #fff;
    border: 1px solid #ccc;
  }

  #googleBtn {
    background: #4285f4;
    border: 1px solid #4285f4;
  }

  #googleBtn:hover {
    color: #4285f4;
    background: #fff;
    border: 1px solid #4285f4;
  }

  .loginLogoutDivs button {
    background: black;
    color: #fff;
    border: 1px solid black;
  }

  .loginLogoutDivs input:hover {
    /* background: hsl(162, 83%, 98%); */
    border: 1px solid #999;
  }

  .loginLogoutDivs button:hover {
    color: black;
    background: #fff;
    border: 1px solid black;
  }

  .loginLogoutDivs input:focus {
    background: rgba(255, 255, 255, 0.5);
  }

  .centering {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
