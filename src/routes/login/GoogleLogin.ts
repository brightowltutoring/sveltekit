// import { auth } from './firebase';
// import { signInWithPopup, GoogleAuthProvider, browserPopupRedirectResolver } from 'firebase/auth';
// const provider = new GoogleAuthProvider();

export async function GoogleLogin() {
	const { auth } = await import('./firebase');

	const {
		GoogleAuthProvider,
		browserPopupRedirectResolver,
		// setPersistence, browserSessionPersistence, inMemoryPersistence,
		signInWithPopup
	} = await import('firebase/auth');

	const provider = new GoogleAuthProvider();

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
