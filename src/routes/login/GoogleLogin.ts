import { auth } from './firebase';
import { lessThan768 } from '$lib/store';
import { get } from 'svelte/store';

// import { isRunningStandalone } from "$lib/utils";

// TODOnov29.2022 noticed that ' ' logic did not sign me in ... furthermore 'signInWithPopup' worked perfectly on both the PWA and on the mobile version of the website ... It appears firebase has consolidated the two??
// UPDATE:  dec17,2022: 'https://firebase.google.com/docs/auth/web/redirect-best-practices' explains how and why 'signInWithRedirect' fails .. seems like just using 'signInWithPopup' is easiest option
export async function GoogleLogin() {
	// const auth = await import("$lib/Login/firebase");

	// console.log('get(lessThan768)', get(lessThan768));
	let isLessThan768 = get(lessThan768);
	// console.log('isLessThan768', isLessThan768);

	const {
		GoogleAuthProvider,
		// setPersistence,
		// browserSessionPersistence,
		// inMemoryPersistence,
		browserPopupRedirectResolver
	} = await import('firebase/auth');

	const provider = new GoogleAuthProvider();

	if (get(lessThan768)) {
		// if (isPWA()) {
		const { signInWithRedirect } = await import('firebase/auth');
		signInWithRedirect(auth, provider, browserPopupRedirectResolver)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				// const token = credential!.accessToken;
				// The signed-in user info.
				// const user = result.user;
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
