<script lang="ts">
	// import TwitterLoginButton from './TwitterLoginButton.svelte';
	import GoogleLoginButton from './GoogleLoginButton.svelte';
	import MagicLinkSection from './MagicLinkSection.svelte';
	import PhoneAuthSection from './PhoneAuthSection.svelte';
	// import CloseButton from "$lib/CloseButton.svelte";

	// TODO: commented out on dec12, 2022  due to code splitting / dynamic importing
	// import { app, auth } from "./firebase";

	// import { auth } from "./firebase";
	// import { onAuthStateChanged, isSignInWithEmailLink } from "firebase/auth";

	// import { browser } from "$app/environment";

	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import { quintOut, elasticOut } from 'svelte/easing';
	// isRunningStandalone
	import { cookeh, clickOutside2 } from '$lib/utils';
	import { logoutFunction } from './logoutFunction';
	import { isLoggedIn, showLoginModal } from '$lib/store';

	export let noTransition = false;

	let loginWelcomeText: string;

	// Allows to convert infinite 'animate-ping' tailwind animation to short animation;
	// logic in 'signinWithLinkAndStop' function. Normally would do this with svelte and keyed block,
	// however the destruction/creation of the element interferes with event fire logic I want to maintain

	let loggedInEmail: string | null;

	// these were previously store variables, but the reactive statement below takes care of things
	let redirectAfterLoginTimeOut: ReturnType<typeof setTimeout>;
	let redirectSetInterval: ReturnType<typeof setInterval>;

	// !$showLoginModal just means when unclicking login button ... rename at a future date?
	$: if (!$showLoginModal) {
		clearInterval(redirectSetInterval);
		clearTimeout(redirectAfterLoginTimeOut);
	}

	$: if ($showLoginModal && $isLoggedIn) {
		showLoginModalRedirect(loggedInEmail);
	}

	onMount(onMountFirebase);
	// onMount(async () => {
	// 	// runningStandalone = await isPWA();
	// 	onMountFirebase();
	// });

	async function onMountFirebase() {
		const { auth } = await import('./firebase');
		const { onAuthStateChanged, isSignInWithEmailLink } = await import('firebase/auth');

		// Confirm the link is a sign-in with email link.

		if (isSignInWithEmailLink(auth, window.location.href)) {
			let email = window.localStorage.getItem('emailForSignIn');
			if (!email) {
				email = window.prompt('Please provide your email for confirmation');
				return; // ts complaint fix?
			}

			const { signInWithEmailLink } = await import('firebase/auth');
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

				cookeh.set('haventLoggedOut', $isLoggedIn);

				loggedInEmail = user.email;

				loginWelcomeText = 'Howdy!';
				if (user.email) loginWelcomeText = `Hey ${user.email}!`;
				if (user.displayName) loginWelcomeText = `Hey ${user.displayName}!`;
			} else {
				$isLoggedIn = false;
				cookeh.eat('haventLoggedOut');

				localStorage.removeItem('redirectUrlFromLS'); // clears on logout only; stays even on refresh/exit!

				loggedInEmail = '';
			}
		});
		// }
	}

	//  Hoisted Functions

	// this function needs to detect logout too to reset store
	function redirectLogic(userRedirectUrl = '/login') {
		let redirectTimeInMS = 3000;
		let seconds = redirectTimeInMS / 1000; // i.e. 3
		// let seconds = parseInt(redirectTimeInMS / 1000); // i.e. 3

		// redirectSetInterval and redirectAfterLoginTimeOut are global variables, the state of which is also controlled above via a reactive statement

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
		let redirectUrlFromLS = localStorage.getItem('redirectUrlFromLS');
		console.log('redirectUrlFromLS', redirectUrlFromLS);

		if (redirectUrlFromLS) {
			redirectLogic(redirectUrlFromLS);
		} else {
			const { getFirestore, collection, getDocs } = await import('firebase/firestore/lite');

			// TODO:dynamic importing added on dec12,2022
			const { app } = await import('./firebase');

			const db = getFirestore(app);
			const querySnapshot = await getDocs(collection(db, 'email'));
			const querySnapshotSize = querySnapshot.size;
			const docs = querySnapshot.docs; // forEach can use querySnapshot directly, however 'break' logic becomes convoluted with try-catch block and throwing 'BreakException={}' (see: https://stackoverflow.com/questions/2641347/short-circuit-array-foreach-like-calling-break)
			for (const i in docs) {
				const doc = docs[i];

				if (userEmail === doc.id) {
					localStorage.setItem('redirectUrlFromLS', doc.data().redirectUrl);
					redirectUrlFromLS = localStorage.getItem('redirectUrlFromLS')!;
					redirectLogic(redirectUrlFromLS);
					return; // break;
				}
				// without parseInt(i) this math conditional breaks
				if (parseInt(i) === querySnapshotSize - 1) {
					localStorage.setItem('redirectUrlFromLS', '/');
					redirectUrlFromLS = localStorage.getItem('redirectUrlFromLS')!;
					redirectLogic(redirectUrlFromLS);
				}
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

<style>
	login-card,
	logout-card {
		@apply relative mx-auto block w-[90vw] rounded-2xl bg-[#f2f7fa] px-5 py-10 font-Poppins text-xl shadow-md duration-300 hover:scale-[1.01] hover:rounded-3xl sm:w-[500px] sm:p-10;
	}

	/* for some reason the custom 'dark:' tailwind utility class is not working */
	:global(html.dark-mode) :where(login-card, logout-card) {
		@apply bg-[#262333];
	}
</style>
