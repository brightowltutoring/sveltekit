import { auth } from './firebase';

// nov29.2022 : google login didnt work with 'signInWithRedirect' logic, so assuming the same for twitter login .. getting rid of the if-else logic and keeping only the 'signInWithPopup' logic
// UPDATE:  dec17,2022: 'https://firebase.google.com/docs/auth/web/redirect-best-practices' explains how and why 'signInWithRedirect' fails .. seems like just using 'signInWithPopup' is easiest option
export async function TwitterLogin() {
	// const auth = await import("$lib/Login/firebase");

	const { TwitterAuthProvider, browserPopupRedirectResolver } = await import('firebase/auth');
	const provider = new TwitterAuthProvider();

	// if (get(lessThan768)) {
	// if (isPWA()) {
	//   const { signInWithRedirect } = await import("firebase/auth");
	//   signInWithRedirect(auth, provider, browserPopupRedirectResolver)
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
	// } else {
	const { signInWithPopup } = await import('firebase/auth');
	signInWithPopup(auth, provider, browserPopupRedirectResolver)
		.then((result) => {
			// This gives you a the Twitter OAuth 1.0 Access Token and Secret.
			// You can use these server side with your app's credentials to access the Twitter API.
			const credential = TwitterAuthProvider.credentialFromResult(result);
			const token = credential!.accessToken;
			const secret = credential!.secret;

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
