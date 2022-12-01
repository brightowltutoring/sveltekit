import { auth } from "$lib/firebase";
import { goto } from "$app/navigation";
import { RecaptchaVerifier } from "firebase/auth"; // can I import this dynamically inside generateRecaptcha() function instead??

// TODO: on nov29,2022 these became unncessary since we are not doing 'signinWithRedirect' for either google or twitter login (see code comment below for google and twitter login)
// import { get } from "svelte/store";
// import { lessThan768 } from "$lib/store";

export function regexEmailChecker(EMAIL) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EMAIL);
}
export function regexPhoneChecker(PHONE) {
  return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(PHONE);
}

export async function magicLinkToEmail(EMAIL) {
  // const auth = await import("$lib/firebase");
  const {
    sendSignInLinkToEmail,
    // EmailAuthProvider
  } = await import("firebase/auth");

  // let provider = new EmailAuthProvider();
  // let providerId = provider.providerId;
  // console.log("providerId", providerId);

  await sendSignInLinkToEmail(auth, EMAIL, {
    url: "https://thinksolve.io/",
    handleCodeInApp: true,
  })
    .then(() => {
      window.localStorage.setItem("emailForSignIn", EMAIL);
      console.log("success with sendSignInLinkToEmail!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
    });
}

// TODO: nov29.2022 : google login didnt work with 'signInWithRedirect' logic, so assuming the same for twitter login .. getting rid of the if-else logic and keeping only the 'signInWithPopup' logic
export async function TwitterLogin() {
  // const auth = await import("$lib/firebase");
  const { TwitterAuthProvider } = await import("firebase/auth");
  const provider = new TwitterAuthProvider();

  // if (get(lessThan768)) {
  //   const { signInWithRedirect } = await import("firebase/auth");
  //   signInWithRedirect(auth, provider)
  //     .then((result) => {
  //       // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
  //       // You can use these server side with your app's credentials to access the Twitter API.
  //       const credential = TwitterAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       const secret = credential.secret;

  //       // The signed-in user info.
  //       const user = result.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = TwitterAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // }
  // else {
  const { signInWithPopup } = await import("firebase/auth");
  // console.log("twitter provider?", provider.providerId);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const secret = credential.secret;

      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = TwitterAuthProvider.credentialFromError(error);
      // ...
    });
  // }
}

// TODO: nov29.2022 noticed that 'signinWithRedirect' logic did not sign me in ... furthermore 'signInWithPopup' worked perfectly on both the PWA and on the mobile version of the website ... It appears firebase has consolidated the two??
export async function GoogleLogin() {
  // const auth = await import("$lib/firebase");
  const {
    GoogleAuthProvider,
    // setPersistence,
    // browserSessionPersistence,
    // inMemoryPersistence,
  } = await import("firebase/auth");

  // if (get(lessThan768)) {
  // const { signInWithRedirect } = await import("firebase/auth");
  // signInWithRedirect(auth, provider)
  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //   });
  // }
  // else {
  const { signInWithPopup } = await import("firebase/auth");
  // console.log("google provider?", provider.providerId);

  // setPersistence(auth, browserSessionPersistence).then(() => {
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
  // }); // set persistence block

  // }
}

export async function generateRecaptcha2() {
  // const { RecaptchaVerifier } = await import("firebase/auth");

  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: (response) => {},
    },
    auth
  );
}

export async function SendCodeToPhone(PHONE_NUMBER, APP_VERIFIER) {
  // const auth = await import("$lib/firebase");
  // alert(PHONE_NUMBER); // maybe double check if number is formatted

  const {
    signInWithPhoneNumber,
    // setPersistence,
    // browserSessionPersistence,
  } = await import("firebase/auth");

  // nov30,2022: added this unchecked 'setPersistence' wrapper (which worked with GoogleLogin); 'browserSessionPersistence' makes sure to log user out once the session is closed; for phone authentication this is desirable to discourage multiple people sharing one account
  // setPersistence(auth, browserSessionPersistence).then(() => {})

  signInWithPhoneNumber(auth, PHONE_NUMBER, APP_VERIFIER)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
    });
}

export async function logoutFunction() {
  const { signOut } = await import("firebase/auth");
  signOut(auth)
    .then(() => {
      console.log("logged out");
      goto("/");
    })
    .catch((error) => {
      console.log("logoutFunction failed", error);
    });
}

export async function CheckPhoneCodeAndSignIn() {}
