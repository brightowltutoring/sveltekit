<!-- TODO: fix types for: FooterComponent, Import function prop,  -->
<script lang="ts">
	import { SignInWithEmailLink } from './login/SigninWithEmailLink';
	import './styles.css';
	import Seo from './Seo.svelte';
	import LazyMount from '$lib/Wrappers/LazyMount.svelte';
	import Modal from '$lib/Wrappers/Modal.svelte';
	import Navbar from './Navbar.svelte';
	import Dropzone from './homework/Dropzone.svelte';

	let FooterComponent: any; // this component is not 'LazyMount-ed' since LazyMount cannot handle bounded props..yet?
	import Footer from './Footer.svelte';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { disableZoomGestures, getOS, isRunningStandalone } from '$lib/utils';

	import {
		setInnerWidthViaMatchMedia,
		lessThan768,
		showLoginModal,
		showHomeworkModal,
		navAppClicked,
		isDarkMode,
		runningStandalone
	} from '$lib/store';
	import { scale, fly } from 'svelte/transition'; // slide, fade, blur
	import { elasticOut, quintOut } from 'svelte/easing';

	// TODO: EXPERIMENTAL CODE
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
	// TODO: EXPERIMENTAL CODE

	onMount(async () => {
		// This imports various firebase modules IF user has previously signed in with firebase .. i.e. doesnt ship unnecessary js to people who have never logged in.  TODO: would prefer if 'isUIDfromIDB()' returned 'hasUID' boolean instead ... and to await the result rather than use some arbitrary timeout delay.

		isUIDfromIDB();
		setTimeout(async () => {
			if (hasUID) SignInWithEmailLink();
		}, 50);

		// $lessThan768 && disableZoomGestures();

		// initializing the global variable so I don't have to call this function repeatedly
		$runningStandalone = await isRunningStandalone();

		($runningStandalone || $lessThan768) && disableZoomGestures();
		setInnerWidthViaMatchMedia();

		// TODO: on xcode simulator the ipad 10th and ipad air 5th returns as 'macos' not 'ios' ... Main use case is for downloading PWA on ios/android phones, so as long as that works, it's fine.
	});

	let contactLinkClicked = false;

	// TODO: FORM ACTIONS
	// import { page } from '$app/stores';
	// import { enhance } from '$app/forms';
	// TODO: FORM ACTIONS
</script>

<Seo />

<svelte:head>
	<script src="https://meet.jit.si/external_api.js" defer></script>
	<!-- This is placed here — instead of route component — since trying to navigate to '/classroom',say, results in the jitsi function not loading in time. Previously I used a local copy of the jitsi api (js file) with SSR set to false in +page.ts ... which works ... however the page breaks when JS is turned off disallowing <noscript> content -->

	<link rel="manifest" href="/manifest.json" />
</svelte:head>

<main class="flex flex-col min-h-screen">
	<!-- TODO: FORM ACTIONS -->
	<!-- <form method="POST" use:enhance action="/" class="z-[999]">
		<input class="sr-only" name="pathname" type="pathname" value={`${$page.url.pathname}`} />
		<button>submit: {$page.url.pathname}</button>
	</form> -->
	<!-- TODO: FORM ACTIONS -->
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
		<LazyMount bind:contactLinkClicked Import={() => import('./login/LoginCard.svelte')} />
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

		{#if $page.route?.id !== '/classroom' && $page.route?.id !== '/pwa-home'}
			<Footer bind:contactLinkClicked />
		{/if}

		<!-- <InView onview={async () => (FooterComponent = await import('./Footer.svelte'))}>
			{#if !($page.route?.id == '/pwa-home' || '/classroom') && FooterComponent}
				<FooterComponent.default bind:contactLinkClicked />
			{/if}
		</InView> -->
	</div>
</main>
