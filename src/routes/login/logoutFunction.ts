import { auth } from './firebase';
import { goto } from '$app/navigation';

import { showLoginModal } from '$lib/store';

export async function logoutFunction() {
	showLoginModal.set(false);

	const { signOut } = await import('firebase/auth');
	signOut(auth)
		.then(() => {
			console.log('logged out');
			goto('/');
		})
		.catch((error) => {
			console.log('logoutFunction failed', error);
		});
}
