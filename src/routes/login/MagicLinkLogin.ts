// import { auth } from './firebase';

import { writable } from 'svelte/store';
export const magicLinkInputVisible$ = writable(false);

export function regexEmailChecker(EMAIL: string) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EMAIL);
}

export async function magicLinkToEmail(EMAIL: string) {
	const [firebaseModule, firebaseAuthModule] = await Promise.all([
		import('./firebase'),
		import('firebase/auth')
	]);

	const { auth } = firebaseModule;
	const { sendSignInLinkToEmail } = firebaseAuthModule;

	await sendSignInLinkToEmail(auth, EMAIL, {
		url: 'https://thinksolve.io/',
		handleCodeInApp: true
	})
		.then(() => {
			window.localStorage.setItem('emailForSignIn', EMAIL);
			console.log('success with sendSignInLinkToEmail!');
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log('errorCode', errorCode);
			console.log('errorMessage', errorMessage);
		});
}
