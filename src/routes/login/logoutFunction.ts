import { goto } from '$app/navigation';
import { showLoginModal } from '$lib/store';

export async function logoutFunction() {
	showLoginModal.set(false);

	const [firebaseModule, authModule] = await Promise.all([
		import('./firebase'),
		import('firebase/auth')
	]);

	const { auth } = firebaseModule;
	const { signOut } = authModule;

	signOut(auth)
		.then(() => {
			console.log('logged out');
			goto('/');
		})
		.catch((error) => {
			console.log('logoutFunction failed', error);
		});
}
