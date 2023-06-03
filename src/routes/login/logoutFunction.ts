import { isLoggedIn } from '$lib/store/clientStore';
import { showLoginModal } from '$lib/store/modalsStore';
import { cookeh } from '$lib/utils';

export async function logoutFunction() {
	showLoginModal.set(false);

	const [{ auth }, { signOut }] = await Promise.all([
		import('$lib/firebase'),
		import('firebase/auth')
	]);

	signOut(auth)
		// .then(() => goto(get(isPWA) ? '/pwa' : '/'))
		.then(() => {
			isLoggedIn.set(false);
			cookeh.eat('haventLoggedOut', 'redirectUrlFromCookies');
		})
		.catch((error) => console.log('logoutFunction failed', error));
}
