import { goto } from '$app/navigation';
import { showLoginModal, isPWA, isLoggedIn } from '$lib/store';
import { cookeh } from '$lib/utils';
import { get } from 'svelte/store';

export async function logoutFunction() {
	showLoginModal.set(false);

	const [firebaseModule, authModule] = await Promise.all([
		import('./firebase'),
		import('firebase/auth')
	]);

	const { auth } = firebaseModule;
	const { signOut } = authModule;

	signOut(auth)
		// .then(() => goto(get(isPWA) ? '/pwa' : '/'))
		.then(() => {
			isLoggedIn.set(false);
			cookeh.eat('haventLoggedOut', 'redirectUrlFromCookies');
		})
		.catch((error) => console.log('logoutFunction failed', error));
}
