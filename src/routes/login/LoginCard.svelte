<script lang="ts">
	export let noTransition = false;

	import GoogleLoginButton from './GoogleLoginButton.svelte';
	import MagicLinkSection from './MagicLinkSection.svelte';
	import PhoneAuthSection from './PhoneAuthSection.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import { quintOut, elasticOut } from 'svelte/easing';
	import { cookeh } from '$lib/utils';
	import { logoutFunction } from './logoutFunction';
	import { isLoggedIn, showLoginModal } from '$lib/store';

	let loginWelcomeText = 'Howdy!';
	// Allows to convert infinite 'animate-ping' tailwind animation to short animation;
	// logic in 'signinWithLinkAndStop' function. Normally would do this with svelte and keyed block,
	// however the destruction/creation of the element interferes with event fire logic I want to maintain
	let loggedInEmail: string | null = '';

	// these were previously store variables, but the reactive statement below takes care of things
	let redirectAfterLoginTimeOut: ReturnType<typeof setTimeout>;
	let redirectSetInterval: ReturnType<typeof setInterval>;

	// !$showLoginModal just means when unclicking login button ... rename at a future date?

	$: if (!$showLoginModal && $isLoggedIn) {
		clearInterval(redirectSetInterval);
		clearTimeout(redirectAfterLoginTimeOut);
	}

	$: if ($showLoginModal && $isLoggedIn) {
		showLoginModalRedirect(loggedInEmail);
	}

	$: if ($isLoggedIn || (!$isLoggedIn && $showLoginModal)) onMount(onMountFirebase);
	// onMount(async () => await onMountFirebase()); //above seemingly has no performance gains

	async function onMountFirebase() {
		console.log('check check');
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
				return; // ts complaint fix?
			}

			signInWithEmailLink(auth, email, window.location.href)
				.then(() => {
					window.localStorage.removeItem('emailForSignIn');
					$showLoginModal = true;
				})
				.catch((error) => console.log('signInWithEmailLink:', error));
		}

		// TODO: this code fires when component mounts, but would rather download firebase modules as needed .. i.e. cookie based logic as I had in layout.svelte

		onAuthStateChanged(auth, (user) => {
			if (user) {
				$isLoggedIn = true;

				cookeh.set('haventLoggedOut', String($isLoggedIn));

				loggedInEmail = user.email;

				if (user.email) loginWelcomeText = `Hey ${user.email}!`;
				if (user.displayName) loginWelcomeText = `Hey ${user.displayName}!`;
			} else {
				$isLoggedIn = false;
				cookeh.eat('haventLoggedOut', 'redirectUrlFromCookies');
				loggedInEmail = '';
			}
		});

		// }
	}

	// this function needs to detect logout too to reset store
	function redirectLogic(userRedirectUrl = '/login') {
		let redirectTimeInMS = 3000;
		let seconds = redirectTimeInMS / 1000; // i.e. 3

		redirectSetInterval = setInterval(() => {
			if (seconds > 0) {
				seconds += -1;
				document.getElementById('timeLeft')!.innerHTML = ` ${seconds}`;
			}
		}, 1000);

		redirectAfterLoginTimeOut = setTimeout(() => {
			$showLoginModal = false;
			// document.getElementById("timeLeft").innerHTML = 3;
			document.getElementById('timeLeft')!.innerHTML = '3'; //TODO: potential bug
			goto(userRedirectUrl);
		}, redirectTimeInMS);
	}

	async function showLoginModalRedirect(userEmail: string | null) {
		let redirectUrlFromCookies = cookeh.get('redirectUrlFromCookies');

		if (redirectUrlFromCookies) {
			redirectLogic(redirectUrlFromCookies);

			console.log('redirectUrlFromCookies', redirectUrlFromCookies);
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
				cookeh.set('redirectUrlFromCookies', '/');
				redirectLogic('/');
			}
		}
	}
</script>

<main>
	<!-- TODO: this breaks the expected '/login' behaviour .. i.e. no content unless button clicked  -->
	{#if !$isLoggedIn}
		<!-- {#if !$isLoggedIn} -->
		<!-- {#key !noTransition && $showLoginModal} -->
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

			<!-- <TwitterLoginButton /> -->
		</login-card>
		<!-- {/key} -->
	{/if}

	{#if $isLoggedIn && $showLoginModal}
		<!-- {#if $isLoggedIn} -->
		<!-- {#key !noTransition && $showLoginModal} -->
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
		<!-- {/key} -->
	{/if}
</main>

<!-- :global(html.dark-mode) :where(login-card, logout-card) {
		@apply bg-[#262333];
	} -->

<style lang="postcss">
	login-card,
	logout-card {
		@apply relative mx-auto block w-[90vw] rounded-2xl bg-[#f2f7fa] px-5 py-10 font-Poppins text-xl shadow-md duration-300 hover:scale-[1.01] hover:rounded-3xl dark:bg-[#262333] sm:w-[500px] sm:p-10;
	}
</style>
