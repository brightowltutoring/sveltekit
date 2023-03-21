import { auth } from './firebase';

import { lessThan768 } from '$lib/store';
import { get } from 'svelte/store';

// nov29,2022 noticed that ' ' logic did not sign me in ... furthermore 'signInWithPopup' worked perfectly on both the PWA and on the mobile version of the website ...
// UPDATE:  dec17,2022: 'https://firebase.google.com/docs/auth/web/redirect-best-practices' explains how and why 'signInWithRedirect' fails .. seems like just using 'signInWithPopup' is easiest option... however safari (and hence the pwa for iphone) blocks the initial popup ... might need to implement double click??
export async function GoogleLogin() {
	// const auth = await import("$lib/Login/firebase");

	const {
		GoogleAuthProvider,
		// setPersistence,
		// browserSessionPersistence,
		// inMemoryPersistence,
		browserPopupRedirectResolver
	} = await import('firebase/auth');

	const provider = new GoogleAuthProvider();

	// if (isPWA()) {

	if (get(lessThan768)) {
		const { signInWithRedirect } = await import('firebase/auth');
		signInWithRedirect(auth, provider, browserPopupRedirectResolver)
			// signInWithRedirect(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				// const token = credential!.accessToken;
				// The signed-in user info.
				// const user = result.user;
				alert('signInWithRedirect worked!');
			})
			.catch((error) => {
				alert('there was an error with const signInWithRedirect');
				console.log('signInWithRedirect error', error);
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
	} else {
		const { signInWithPopup } = await import('firebase/auth');

		// setPersistence(auth, browserSessionPersistence).then(() => {
		signInWithPopup(auth, provider, browserPopupRedirectResolver)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential!.accessToken;
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
	}
}
