<script lang="ts">
	export let data;
	const { haventLoggedOut, isIOS, isMobile } = data;

	import { setContext } from 'svelte';
	setContext('isIOS', isIOS);

	import './(rootLayout)/styles.css';
	import GlobalModals from './(rootLayout)/GlobalModals.svelte';
	import Seo from './(rootLayout)/Seo.svelte';
	import Navbar from './(rootLayout)/Navbar.svelte';
	import Footer from './(rootLayout)/Footer.svelte';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { setInnerWidthViaMatchMedia, contactLinkClicked } from '$lib/store';

	import {
		disableZoomGestures
		// cookeh
	} from '$lib/utils';
	// import { FirebaseSignerIner } from './login/FirebaseSignerIner';

	onMount(() => {
		isMobile && disableZoomGestures();
		setInnerWidthViaMatchMedia();

		// should add check if someone fired a magicLink .. magicLink still doesnt work cross browser

		// This doesnt seem to work as I expect ... since logincard loads the firebase modules as specified in 'FirebaseSignerIner()'. TODO: do cookie based loading of the relevant firebase login modules
		// cookeh.get(`haventLoggedOut`) && FirebaseSignerIner();
		// haventLoggedOut && FirebaseSignerIner();
	});
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />

	<script src="https://meet.jit.si/external_api.js" defer></script>
	<!-- This is placed here — instead of route component — since trying to navigate to '/classroom', say, results in the jitsi function not loading in time. Previously I used a local copy of the jitsi api (js file) with SSR set to false in +page.ts ... which works ... however the page breaks when JS is turned off disallowing <noscript> content -->
</svelte:head>

<Seo />
<GlobalModals />

<main class="flex min-h-screen flex-col">
	<Navbar />

	<div class="px-[5%] pt-32 md:block">
		<slot />
	</div>

	<!-- {#if $page.route?.id !== '/classroom' && $page.route?.id !== '/pwa-home'} -->

	{#if !['/classroom', '/pwa-home'].includes($page.route?.id ?? '')}
		<Footer bind:contactLinkClicked={$contactLinkClicked} />
	{/if}
</main>
