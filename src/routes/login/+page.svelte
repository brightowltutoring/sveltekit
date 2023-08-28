<script lang="ts">
	import { enhance } from '$app/forms';
	export let noTransition = false;

	import GoogleLoginButton from './GoogleLoginButton.svelte';
	import MagicLinkSection from './MagicLinkSection.svelte';
	import PhoneAuthSection from './PhoneAuthSection.svelte';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	$: ({ data } = $page);
	import { isLoggedIn /* isPWA  */ } from '$lib/store/clientStore';
	import { showLoginModal } from '$lib/store/modalsStore';
	import { cookeh } from '$lib/utils';
	import { onDestroy, onMount } from 'svelte';
	import { elasticOut, quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import { logoutFunction } from './logoutFunction';

	// const isPWA: boolean = getContext('isPWA');
	let loggedInEmail: string | null = '';
	let loggedInDisplayName: string | null = '';

	let loginWelcomeText = 'Howdy!';
	$: loginWelcomeText = `Hey ${loggedInDisplayName || loggedInEmail}`;

	let redirectAfterLoginTimeOut: ReturnType<typeof setTimeout>;
	let redirectSetInterval: ReturnType<typeof setInterval>;

	let redirectTimeInMS = 3000;
	let seconds = Math.trunc(redirectTimeInMS / 1000);

	$: if ($isLoggedIn && !$showLoginModal && $page.route.id !== '/login') {
		clearInterval(redirectSetInterval);
		clearTimeout(redirectAfterLoginTimeOut);
	}

	onMount(async () => {
		await onMountFirebase();
		// console.log('mounted like a 🗻');
	});

	onDestroy(() => {
		clearInterval(redirectSetInterval);
		clearTimeout(redirectAfterLoginTimeOut);
		// console.log('destroyed!');
	});

	async function onMountFirebase() {
		const [{ auth }, { isSignInWithEmailLink, signInWithEmailLink, onAuthStateChanged }] =
			await Promise.all([import('$lib/firebase'), import('firebase/auth')]);

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
					showLoginModal.set(true);
				})
				.catch((error) => console.log('signInWithEmailLink:', error));
		}

		onAuthStateChanged(auth, (user) => {
			if (user) {
				loggedInDisplayName = user.displayName;
				loggedInEmail = user.email;
				showLoginModalRedirect(loggedInEmail);

				isLoggedIn.set(true);
				cookeh.set('haventLoggedOut', $isLoggedIn);

				// cookeh.set('haventLoggedOut', Boolean(user));
			} else {
				loggedInEmail = '';
			}

			// these couldve been set in else branch, but now in logoutFunction.ts
			// cookeh.eat('haventLoggedOut', 'redirectUrlFromCookies');
			// isLoggedIn.set(false);

			// this commented out code can only be set in logoutFunction.ts, otherwise the login modal is 'continuously closed'
			// showLoginModal.set(false);
		});
	}

	function redirectLogic(userRedirectUrl = '/login') {
		redirectSetInterval = setInterval(() => {
			if (seconds > 0) seconds += -1;
		}, 1000);

		redirectAfterLoginTimeOut = setTimeout(() => {
			clearInterval(redirectSetInterval);
			clearTimeout(redirectAfterLoginTimeOut);

			showLoginModal.set(false);
			goto(userRedirectUrl);
		}, redirectTimeInMS);
	}

	async function showLoginModalRedirect(userEmail: string | null) {
		let redirectUrlFromCookies = cookeh.get('redirectUrlFromCookies');

		if (redirectUrlFromCookies) {
			redirectLogic(redirectUrlFromCookies);
		} else {
			console.log('getdocs from firestore');
			const [{ app }, { getFirestore, collection, getDocs }] = await Promise.all([
				import('$lib/firebase'),
				import('firebase/firestore/lite')
			]);

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
				let defaultRoute = data.isPWA ? '/pwa' : '/';
				// let defaultRoute = $isPWA ? '/pwa' : '/';

				cookeh.set('redirectUrlFromCookies', defaultRoute);

				redirectLogic(defaultRoute);
			}
		}
	}
</script>

{#if !$isLoggedIn}
	<login-card in:slide|global={{ duration: 400, easing: quintOut }}>
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
{:else}
	<logout-card in:slide|global={{ duration: noTransition ? 0 : 1000, easing: elasticOut }}>
		<p>{loginWelcomeText}</p>

		Redirecting in
		<p class="p-5 text-5xl">{seconds}</p>

		<!-- on:click={logoutFunction} -->
		<form method="POST" use:enhance={logoutFunction}>
			<button
				formaction={'/logout'}
				class="rounded-lg bg-rose-300 p-4 text-2xl font-medium text-white duration-200 ease-in hover:scale-110 hover:rounded-xl"
			>
				Logout
			</button>
		</form>
	</logout-card>
{/if}

<style lang="postcss">
	login-card,
	logout-card {
		@apply relative mx-auto block w-[90vw] rounded-2xl bg-[#f2f7fa] px-5 py-10 font-Poppins text-xl shadow-md duration-300 hover:scale-[1.01] hover:rounded-3xl dark:bg-[#262333] sm:w-[500px] sm:p-10;
	}
</style>
