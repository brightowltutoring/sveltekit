<!-- TODO: fix types for: FooterComponent, Import function prop,  -->
<script lang="ts">
	// export let data;
	// const { haventLoggedOut, testCookie } = data;

	import './(rootLayout)/styles.css';
	import GlobalModals from './(rootLayout)/GlobalModals.svelte';
	import Seo from './(rootLayout)/Seo.svelte';
	import Navbar from './(rootLayout)/Navbar.svelte';
	import Footer from './(rootLayout)/Footer.svelte';
	// let FooterComponent: any; // this component is not 'LazyMount-ed' since LazyMount cannot handle bounded props..yet?

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import {
		setInnerWidthViaMatchMedia,
		lessThan768,
		runningStandalone,
		contactLinkClicked
	} from '$lib/store';

	import { disableZoomGestures, isPWA, cookeh } from '$lib/utils';
	import { FirebaseSignerIner } from './login/FirebaseSignerIner';

	// import { browser } from '$app/environment';
	// let isiPhone = browser && navigator.userAgent.toLowerCase().includes('iphone');
	// browser && alert(`isiPhone: ${isiPhone}`);

	onMount(async () => {
		// should add check if someone fired a magicLink .. magicLink still doesnt work cross browser

		if (cookeh.get(`haventLoggedOut`)) FirebaseSignerIner();

		// initializing the global variable so I don't have to call this function repeatedly
		$runningStandalone = await isPWA();

		($runningStandalone || $lessThan768) && disableZoomGestures();
		setInnerWidthViaMatchMedia();
	});

	// TODO: FORM ACTIONS
	// import { page } from '$app/stores';
	// import { enhance } from '$app/forms';
	// TODO: FORM ACTIONS
</script>

<!-- TODO: FORM ACTIONS -->
<!-- <form method="POST" use:enhance action="/" class="z-[999]">
		<input class="sr-only" name="pathname" type="pathname" value={`${$page.url.pathname}`} />
		<button>submit: {$page.url.pathname}</button>
	</form> -->
<!-- TODO: FORM ACTIONS -->

<svelte:head>
	<link rel="manifest" href="/manifest.json" />

	<script src="https://meet.jit.si/external_api.js" defer></script>
	<!-- This is placed here — instead of route component — since trying to navigate to '/classroom', say, results in the jitsi function not loading in time. Previously I used a local copy of the jitsi api (js file) with SSR set to false in +page.ts ... which works ... however the page breaks when JS is turned off disallowing <noscript> content -->
</svelte:head>

<Seo />
<GlobalModals />

<main class="flex min-h-screen flex-col">
	<Navbar />

	<!-- px-[7%] -->
	<div class="pt-32 md:block lg:px-[6%]">
		<slot />
	</div>

	<!-- {#if $page.route?.id !== '/classroom' && $page.route?.id !== '/pwa-home'} -->
	{#if !['/classroom', '/pwa-home'].includes($page.route?.id ?? '')}
		<Footer bind:contactLinkClicked={$contactLinkClicked} />
	{/if}
</main>
