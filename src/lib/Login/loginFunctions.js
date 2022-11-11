import { auth } from "$lib/firebase.js";
import { goto } from "$app/navigation";
// import { TwitterAuthProvider, GoogleAuthProvider } from "firebase/auth";

// these two are necessary to grab the browsers width, i.e. import module depending if mobile or not
import { get } from "svelte/store";
import { lessThan768 } from "$lib/store.js";

export function regexEmailChecker(EMAIL) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EMAIL);
}

export async function magicLinkToEmail(EMAIL) {
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

export async function TwitterLogin() {
  const { TwitterAuthProvider } = await import("firebase/auth");
  const provider = new TwitterAuthProvider();

  if (get(lessThan768)) {
    const { signInWithRedirect } = await import("firebase/auth");
    signInWithRedirect(auth, provider)
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
  } else {
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
  }
}

export async function GoogleLogin() {
  const { GoogleAuthProvider } = await import("firebase/auth");
  const provider = new GoogleAuthProvider();

  if (get(lessThan768)) {
    const { signInWithRedirect } = await import("firebase/auth");
    signInWithRedirect(auth, provider)
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
  } else {
    const { signInWithPopup } = await import("firebase/auth");
    // console.log("google provider?", provider.providerId);
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
