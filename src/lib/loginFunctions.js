import { auth } from "$lib/firebase.js";

export async function GoogleLogin() {
  const { GoogleAuthProvider, signInWithPopup } = await import("firebase/auth");

  await signInWithPopup(auth, new GoogleAuthProvider())
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

export async function logoutFunction() {
  const { signOut } = await import("firebase/auth");

  // firebase signing out
  await signOut(auth)
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

export function regexEmailChecker(EMAIL) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EMAIL);
}

export async function magicLinkToEmail(EMAIL) {
  const { sendSignInLinkToEmail } = await import("firebase/auth");

  await sendSignInLinkToEmail(auth, EMAIL, {
    url: "https://thinksolve.io/",
    handleCodeInApp: true,
  })
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the EMAIL locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", EMAIL);
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
