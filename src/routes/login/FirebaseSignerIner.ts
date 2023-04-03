// import { showLoginModal, isLoggedIn, loggedInEmail } from '$lib/store';

export async function FirebaseSignerIner() {
	const { showLoginModal, isLoggedIn, loggedInEmail } = await import('$lib/store');
	const { auth } = await import('./firebase');

	const { onAuthStateChanged } = await import('firebase/auth');
	onAuthStateChanged(auth, (user) => {
		if (user?.email) {
			isLoggedIn.set(true);
			// $isLoggedIn = true;
			// loggedInEmail = user.email;
			loggedInEmail.set(user.email);
		} else {
			localStorage.removeItem('redirectUrlFromLS');
			// $isLoggedIn = false;
			isLoggedIn.set(false);
			// $showLoginModal = false;
			showLoginModal.set(false);
			// loggedInEmail = '';
			loggedInEmail.set('');
		}
	});

	// TODO: should this exist outside of this function?
	// (For magic link only) Confirm the link is a sign-in with email link.
	const { isSignInWithEmailLink } = await import('firebase/auth');
	if (isSignInWithEmailLink(auth, window.location.href)) {
		let email: string | null = window.localStorage.getItem('emailForSignIn');
		if (!email) email = window.prompt('Please provide your email for confirmation');
		else {
			const { signInWithEmailLink } = await import('firebase/auth');
			signInWithEmailLink(auth, email, window.location.href)
				.then(() => {
					window.localStorage.removeItem('emailForSignIn');
					// $showLoginModal = true;
					showLoginModal.set(true);
				})
				.catch((error) => console.log('signInWithEmailLink:', error));
		}
	}
}
