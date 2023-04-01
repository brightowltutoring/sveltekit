// import { auth } from './firebase';

export function regexEmailChecker(EMAIL: string) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EMAIL);
}

export async function magicLinkToEmail(EMAIL: string) {
	const { auth } = await import('./firebase');
	const {
		sendSignInLinkToEmail
		// EmailAuthProvider
	} = await import('firebase/auth');

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
