export async function FirebaseSignerIner() {
	const [storeModule, firebaseModule] = await Promise.all([
		import('$lib/store'),
		import('./firebase')
	]);

	const { showLoginModal, isLoggedIn, loggedInEmail } = storeModule;
	const { auth } = firebaseModule;

	const { onAuthStateChanged, isSignInWithEmailLink } = await import('firebase/auth');
	onAuthStateChanged(auth, (user) => {
		if (user?.email) {
			isLoggedIn.set(true);

			loggedInEmail.set(user.email);
		} else {
			localStorage.removeItem('redirectUrlFromLS');

			isLoggedIn.set(false);

			showLoginModal.set(false);

			loggedInEmail.set('');
		}
	});

	// TODO: should this exist outside of this function?
	// (For magic link only) Confirm the link is a sign-in with email link.

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
