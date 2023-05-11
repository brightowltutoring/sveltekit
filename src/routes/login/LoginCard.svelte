<script lang="ts">
	export let noTransition = false;

	import GoogleLoginButton from './GoogleLoginButton.svelte';
	import MagicLinkSection from './MagicLinkSection.svelte';
	import PhoneAuthSection from './PhoneAuthSection.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import { quintOut, elasticOut } from 'svelte/easing';
	import { cookeh } from '$lib/utils';
	import { logoutFunction } from './logoutFunction';
	import { isLoggedIn, showLoginModal, isPWA } from '$lib/store';

	let loginWelcomeText = 'Howdy!';
	let loggedInEmail: string | null = '';

	let redirectAfterLoginTimeOut: ReturnType<typeof setTimeout>;
	let redirectSetInterval: ReturnType<typeof setInterval>;

	onMount(async () => {
		await onMountFirebase();
		console.log('created 🚀');
	});

	onDestroy(async () => {
		clearInterval(redirectSetInterval);
		clearTimeout(redirectAfterLoginTimeOut);
		console.log('destroyed!');
	});

	async function onMountFirebase() {
		const [firebaseModule, authModule] = await Promise.all([
			import('./firebase'),
			import('firebase/auth')
		]);

		const { auth } = firebaseModule;
		const { isSignInWithEmailLink, signInWithEmailLink, onAuthStateChanged } = authModule;

		// Confirm the link is a sign-in with email link.

		if (isSignInWithEmailLink(auth, window.location.href)) {
			let email = window.localStorage.getItem('emailForSignIn');
			if (!email) {
				email = window.prompt('Please provide your email for confirmation');
				return;
			}

			signInWithEmailLink(auth, email, window.location.href)
				.then(() => {
					window.localStorage.removeItem('emailForSignIn');
					$showLoginModal = true;
				})
				.catch((error) => console.log('signInWithEmailLink:', error));
		}

		onAuthStateChanged(auth, (user) => {
			if (user) {
				$isLoggedIn = true;

				loggedInEmail = user.email;
				showLoginModalRedirect(loggedInEmail);

				cookeh.set('haventLoggedOut', $isLoggedIn);

				if (user.email) loginWelcomeText = `Hey ${user.email}!`;
				if (user.displayName) loginWelcomeText = `Hey ${user.displayName}!`;
			} else {
				$isLoggedIn = false;
				loggedInEmail = '';

				cookeh.eat('haventLoggedOut', 'redirectUrlFromCookies');
			}
		});
	}

	// this function needs to detect logout too to reset store
	function redirectLogic(userRedirectUrl = '/login') {
		let redirectTimeInMS = 3000;
		let seconds = Math.trunc(redirectTimeInMS / 1000); // i.e. 3
		let timeLeftElement = document.getElementById('timeLeft');

		redirectSetInterval = setInterval(() => {
			if (seconds > 0) {
				seconds += -1;
				if (timeLeftElement) timeLeftElement.innerHTML = ` ${seconds}`;
				console.log('seconds', seconds);
			}
		}, 1000);

		redirectAfterLoginTimeOut = setTimeout(() => {
			clearInterval(redirectSetInterval);
			clearTimeout(redirectAfterLoginTimeOut);

			$showLoginModal = false;
			goto(userRedirectUrl);
		}, redirectTimeInMS);
	}

	async function showLoginModalRedirect(userEmail: string | null) {
		let redirectUrlFromCookies = cookeh.get('redirectUrlFromCookies');

		if (redirectUrlFromCookies) {
			redirectLogic(redirectUrlFromCookies);
		} else {
			console.log('getdocs from firestore');
			const [firebaseModule, firestoreModule] = await Promise.all([
				import('./firebase'),
				import('firebase/firestore/lite')
			]);

			const { app } = firebaseModule;
			const { getFirestore, collection, getDocs } = firestoreModule;

			// 'email' refers to a custom database
			const querySnapshotDocs = (await getDocs(collection(getFirestore(app), 'email'))).docs;
			for (const doc of querySnapshotDocs) {
				if (userEmail === doc.id) {
					redirectUrlFromCookies = doc.data().redirectUrl;

					break;
				}
			}

			if (redirectUrlFromCookies) {
				cookeh.set('redirectUrlFromCookies', redirectUrlFromCookies);

				redirectLogic(redirectUrlFromCookies);
			} else {
				let defaultRoute = $isPWA ? '/pwa' : '/';

				cookeh.set('redirectUrlFromCookies', defaultRoute);

				redirectLogic(defaultRoute);
			}
		}
	}
</script>

<main>
	{#if !$isLoggedIn}
		<login-card in:slide={{ duration: 400, easing: quintOut }}>
			<GoogleLoginButton />
			<p class="py-3" />
			<div class="hidden pwa:block">
				<PhoneAuthSection />
			</div>
			<div class="pwa:hidden">
				<MagicLinkSection />

				<p class="py-3" />
				<PhoneAuthSection />
			</div>
		</login-card>
	{/if}

	{#if $isLoggedIn}
		<logout-card in:slide={{ duration: noTransition ? 0 : 1000, easing: elasticOut }}>
			<p>{loginWelcomeText}</p>

			<div>
				Redirecting in
				<div class="p-5 text-5xl" id="timeLeft">3</div>
			</div>

			<button
				class="rounded-lg bg-rose-300 p-4 text-2xl font-medium text-white duration-200 ease-in hover:scale-110 hover:rounded-xl"
				on:click={logoutFunction}>Logout</button
			>
		</logout-card>
	{/if}
</main>

<style lang="postcss">
	login-card,
	logout-card {
		@apply relative mx-auto block w-[90vw] rounded-2xl bg-[#f2f7fa] px-5 py-10 font-Poppins text-xl shadow-md duration-300 hover:scale-[1.01] hover:rounded-3xl dark:bg-[#262333] sm:w-[500px] sm:p-10;
	}
</style>
