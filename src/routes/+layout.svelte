<!-- TODO: fix types for: FooterComponent, Import function prop,  -->
<script lang="ts">
	import './styles.css';
	import Seo from './Seo.svelte';
	import LazyMount from '$lib/Wrappers/LazyMount.svelte';
	import Modal from '$lib/Wrappers/Modal.svelte';
	import Navbar from './Navbar.svelte';
	import Dropzone from './homework/Dropzone.svelte';
	import InView from '$lib/Wrappers/InView.svelte';
	let FooterComponent: any; // this component is not 'LazyMount-ed' since LazyMount cannot handle bounded props..yet?
	// import Footer from './Footer.svelte';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { disableZoomGestures, getOS, isRunningStandalone } from '$lib/utils';

	import {
		setInnerWidthViaMatchMedia,
		lessThan768,
		showLoginModal,
		showHomeworkModal,
		navAppClicked,
		isLoggedIn,
		isDarkMode
	} from '$lib/store';
	import { scale, fly } from 'svelte/transition'; // slide, fade, blur
	import { elasticOut, quintOut } from 'svelte/easing';

	onMount(async () => {
		// This imports various firebase modules IF user has previously signed in with firebase .. i.e. doesnt ship unnecessary js to people who have never logged in.  TODO: would prefer if 'isUIDfromIDB()' returned 'hasUID' boolean instead ... and to await the result rather than use some arbitrary timeout delay.

		isUIDfromIDB();

		setTimeout(() => {
			// console.log("hasUID", hasUID);
			if (hasUID) onMountFirebase();
		}, 50);

		// $lessThan768 && disableZoomGestures();
		(isRunningStandalone() || $lessThan768) && disableZoomGestures();
		setInnerWidthViaMatchMedia();

		// TODO: on xcode simulator the ipad 10th and ipad air 5th returns as 'macos' not 'ios' ... Main use case is for downloading PWA on ios/android phones, so as long as that works, it's fine.
	});

	let loggedInEmail;
	async function onMountFirebase() {
		const { auth } = await import('./login/firebase');
		const { onAuthStateChanged, isSignInWithEmailLink } = await import('firebase/auth');

		// Confirm the link is a sign-in with email link.

		if (isSignInWithEmailLink(auth, window.location.href)) {
			let email: string | null = window.localStorage.getItem('emailForSignIn');
			if (!email) email = window.prompt('Please provide your email for confirmation');
			else {
				const { signInWithEmailLink } = await import('firebase/auth');
				signInWithEmailLink(auth, email, window.location.href)
					.then(() => {
						window.localStorage.removeItem('emailForSignIn');
						$showLoginModal = true;
					})
					.catch((error) => console.log('signInWithEmailLink:', error));
			}
		}

		onAuthStateChanged(auth, (user) => {
			if (user) {
				$isLoggedIn = true;
				loggedInEmail = user.email;
			} else {
				localStorage.removeItem('redirectUrlFromLS'); // clears on logout only; stays even on refresh/exit!
				$isLoggedIn = false;
				$showLoginModal = false;
				loggedInEmail = '';
			}
		});
	}

	let hasUID = false;
	async function isUIDfromIDB() {
		const dbName = 'firebaseLocalStorageDb';
		const stores = ['firebaseLocalStorage'];
		const dbRequest = window.indexedDB.open(dbName);

		const dump: Record<string, any> = {};
		let dumpString;
		let hasUIDinner;

		dbRequest.onsuccess = async function () {
			try {
				const tx = dbRequest.result.transaction(stores);

				asyncForEach(
					stores,
					function CALLBACK(store: string, next) {
						const req = tx.objectStore(store).getAll();
						req.onsuccess = function () {
							dump[store] = req.result;
							next();
						};
					},
					function DONE() {
						dumpString = JSON.stringify(dump);
						hasUIDinner = dumpString.includes('uid');
						hasUID = hasUIDinner;
						// return hasUIDinner;
					}
				);
			} catch (error) {
				console.log(error);
			}
		};

		function asyncForEach(
			array: Array<string>,
			callback: (a: string, b: any) => void,
			done: () => void
		) {
			// let finalValue=''
			function runAndWait(i: number): any {
				if (i === array.length) {
					// finalValue = done()
					return done();
				}
				return callback(array[i], () => runAndWait(i + 1));
			}
			return runAndWait(0);
		}
	}

	// const opacityEasingDelay = 100;
	// let changeOpacityTo100;
	// $: if ($showLoginModal && !$isLoggedIn) {
	//   setTimeout(() => {
	//     changeOpacityTo100 =
	//       "opacity-100 transition-opacity duration-100 ease-in";
	//   }, opacityEasingDelay);
	// }

	let contactLinkClicked = false;
</script>

<Seo />
<svelte:head>
	<link rel="manifest" href="/manifest.json" />
	<!-- <script>
		if (window.matchMedia('(display-mode: standalone)').matches) {
			document.cookie = 'deviceMode=pwa';

			setTimeout(() => {
				document.getElementById('navvy').classList.add('bg-red-500');
			}, 0);
		} else {
			document.cookie = 'deviceMode=not-pwa';
		}
	</script> -->
</svelte:head>

<main class="flex flex-col min-h-screen">
	<Navbar />

	<Modal showModal={contactLinkClicked} bgTint={'backdrop-blur-3xl'}>
		{#key !contactLinkClicked}
			<ul
				in:scale={{
					duration: 1500,
					easing: elasticOut
				}}
				class="text-center flex flex-col gap-y-2 font-Poppins sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r  {$isDarkMode
					? 'from-teal-200 via-rose-300 to-pink-200 '
					: 'from-teal-700 via-rose-700 to-pink-700 '}"
			>
				<li>Email:</li>
				<li class="p-5">thinksolve.io@gmail.com</li>
			</ul>
		{/key}
	</Modal>

	<!-- although the 'app' button is also screened in Navbar.svelte, it's also a good idea to not render the popup here -->
	{#if getOS() == 'iOS'}
		<Modal
			showModal={$navAppClicked}
			bgTint={'text-white bg-gradient-to-br from-[#6c79f4] to-rose-400'}
		>
			{#key !$navAppClicked}
				<ul in:scale class="p-10 flex flex-col gap-y-8 font-Poppins text-3xl sm:text-6xl">
					<li
						in:scale={{
							duration: 1300,
							easing: elasticOut
						}}
					>
						<div class="text-6xl">1.</div>
						Open Safari
					</li>
					<li
						in:fly={{
							x: 100,
							delay: 1200,
							duration: 1000,
							easing: quintOut
						}}
					>
						<div class="text-6xl">2.</div>
						<div class="flex flex-row justify-center items-center gap-x-2 pt-2">
							<span> Click share icon</span>
							<img
								class="w-7 h-7 -translate-y-1  invert"
								src="/safari-share-icon.png"
								alt="safari share icon"
							/>
						</div>
					</li>

					<li
						class=" text-black"
						in:fly={{
							x: 200,
							delay: 2000,
							duration: 1200,
							easing: quintOut
						}}
					>
						<div class="text-6xl ">3.</div>
						Click 'Add to Home Screen' 🚀
					</li>
				</ul>
			{/key}
		</Modal>
	{/if}

	<!-- <Modal body bind:showModal={$showLoginModal} bgTint={`backdrop-blur-md `}>
    <LoginCard /> -->
	<Modal body bind:showModal={$showLoginModal} bgTint={`backdrop-blur-md `}>
		<!-- bgTint={`backdrop-blur-md opacity-0 ${changeOpacityTo100}`} -->

		<LazyMount bind:contactLinkClicked Import={() => import('./login/LoginCard.svelte')} />
		<!-- <LazyMount
      Import={() => {
        setTimeout(() => ($showLoginModal = true), 2.5 * opacityEasingDelay); //opacityEasingDelay = 100ms
        return import("$lib/Login/LoginCard.svelte");
      }}
    /> -->
	</Modal>

	<Modal bind:showModal={$showHomeworkModal} bgTint={'bg-[rgba(0,0,0,0.1)]'}>
		<Dropzone
			textSizeTW={'text-6xl'}
			dimensionsTW={'w-[80vw] h-[85vh]'}
			brightnessTW={'brightness-95'}
		/>
		<!-- NOTE: having the Dropzone lazyMounted prevents the 'popupOnce' logic defined inside Dropzone.svelte; even WITH timeout delay it would not work. Luckily this one modal dropzone has no impact on the perfect lightscore ! -->
	</Modal>
	<!-- <main> -->

	<!-- <div> -->
	<div class="px-[7%] pt-32 md:block">
		<slot />

		<!-- <Footer bind:contactLinkClicked /> -->

		<InView onview={async () => (FooterComponent = await import('./Footer.svelte'))}>
			{#if $page.route?.id !== '/classroom' && FooterComponent}
				<FooterComponent.default bind:contactLinkClicked />
			{/if}
		</InView>
	</div>
</main>
