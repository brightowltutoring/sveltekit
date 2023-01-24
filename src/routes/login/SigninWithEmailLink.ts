import { showLoginModal, isLoggedIn, loggedInEmail } from '$lib/store';

// previously in +layout.svelte and named 'onMountFirebase()'; both the version there and here are broken though... thinking it has to do with 'isUIDfromIDB()' check there
export async function SignInWithEmailLink() {
	const { auth } = await import('./firebase');
	const { onAuthStateChanged, isSignInWithEmailLink } = await import('firebase/auth');

	// Confirm the link is a sign-in with email link.

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

	onAuthStateChanged(auth, (user) => {
		if (user?.email) {
			isLoggedIn.set(true);
			// $isLoggedIn = true;
			// loggedInEmail = user.email;
			loggedInEmail.set(user.email);
		} else {
			localStorage.removeItem('redirectUrlFromLS'); // clears on logout only; stays even on refresh/exit!
			// $isLoggedIn = false;
			isLoggedIn.set(false);
			// $showLoginModal = false;
			showLoginModal.set(false);
			// loggedInEmail = '';
			loggedInEmail.set('');
		}
	});
}
