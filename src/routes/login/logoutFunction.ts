import { auth } from './firebase';
import { goto } from '$app/navigation';

export async function logoutFunction() {
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
