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
	import {
		isLoggedIn,
		showLoginModal,
		isSafari,
		isPWA
		// redirectAfterLoginTimeOut, // TODO: delete
		// redirectSetInterval // TODO: delete
	} from '$lib/store';

	let loginWelcomeText = 'Howdy!';
	// Allows to convert infinite 'animate-ping' tailwind animation to short animation;
	// logic in 'signinWithLinkAndStop' function. Normally would do this with svelte and keyed block,
	// however the destruction/creation of the element interferes with event fire logic I want to maintain
	let loggedInEmail: string | null = '';

	// these were previously store variables, but the reactive statement below takes care of things

	let redirectAfterLoginTimeOut: ReturnType<typeof setTimeout>;
	let redirectSetInterval: ReturnType<typeof setInterval>;

	// // handling this in onMount now; specifically within 'onAuthStagechanged' detection of user (firebase function)
	// $: if ($showLoginModal && $isLoggedIn) {
	// 	showLoginModalRedirect(loggedInEmail);
	// }

	// // handling this in onDestroy now
	// $: if (!$showLoginModal && $isLoggedIn) {
	// 	clearInterval(redirectSetInterval);
	// 	clearTimeout(redirectAfterLoginTimeOut);
	// 	console.log('!$showLoginModal && $isLoggedIn');
	// }

	//TODO: for some reason $isLoggedIn, initialized via cookie, is falsy on safari ... even it previously set to true ... According to 'https://github.com/sveltejs/kit/issues/6632' the fix involves setting 'secure' to false when setting the cookie
	// $: if ($isLoggedIn || (!$isLoggedIn && $showLoginModal))
	onMount(async () => {
		await onMountFirebase();

		// alert('hey');
		console.log('created');
	});

	onDestroy(async () => {
		clearInterval(redirectSetInterval);
		clearTimeout(redirectAfterLoginTimeOut);
		console.log('destroyed!');
	});

	// onMount(async () => await onMountFirebase());

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

		// TODO: this code fires when component mounts, but would rather download firebase modules as needed .. i.e. cookie based logic as I had in layout.svelte

		onAuthStateChanged(auth, (user) => {
			if (user) {
				loggedInEmail = user.email;
				showLoginModalRedirect(loggedInEmail);

				cookeh.set('haventLoggedOut', $isLoggedIn, { secure: !$isSafari });
				$isLoggedIn = true;

				if (user.email) loginWelcomeText = `Hey ${user.email}!`;
				if (user.displayName) loginWelcomeText = `Hey ${user.displayName}!`;
			} else {
				loggedInEmail = '';

				// this code also in logoutFunction.ts ... currently it was buggy when just in logoutFunction.ts. TODO: resolve this

				cookeh.eat('haventLoggedOut', 'redirectUrlFromCookies');
				$isLoggedIn = false;
			}
		});

		// }
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
			// this removed from reactive statement above, since it makes sense to clear after the set timeout directly, rather than depend on some svelte global variables which indirectly do the same thing
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
					console.log('redirectUrlFromCookies from firestore', redirectUrlFromCookies);
					break;
				}
			}

			if (redirectUrlFromCookies) {
				// cookeh.set('redirectUrlFromCookies', redirectUrlFromCookies);
				cookeh.set('redirectUrlFromCookies', redirectUrlFromCookies, { secure: !$isSafari });
				redirectLogic(redirectUrlFromCookies);
			} else {
				let defaultRoute = $isPWA ? '/pwa' : '/';
				// cookeh.set('redirectUrlFromCookies', defaultRoutes);
				cookeh.set('redirectUrlFromCookies', defaultRoute, { secure: !$isSafari });
				redirectLogic(defaultRoute);
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

	<!-- {#if $isLoggedIn && $showLoginModal} -->
	{#if $isLoggedIn}
		<!-- {#key !noTransition && $showLoginModal} -->
		<logout-card in:slide={{ duration: noTransition ? 0 : 1000, easing: elasticOut }}>
			<p>{loginWelcomeText}</p>
			<!-- <p>{!$isLoggedIn ? 'Howdy' : loginWelcomeText}</p> -->

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
