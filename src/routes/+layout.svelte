<script lang="ts">
	import './(rootLayout)/styles.css';
	import Navbar from './(rootLayout)/Navbar.svelte';
	import Footer from './(rootLayout)/Footer.svelte';
	import { onMount, setContext } from 'svelte';
	import { page } from '$app/stores';
	import { debounce, disableZoomOnTouchDevices, setIsPwaCookie } from '$lib/utils';
	import { isLoggedIn, isSafari } from '$lib/store/clientStore';
	import { scrollY } from '$lib/store/scrollStore';

	export let data;
	$: isLoggedIn.set(Boolean(data.haventLoggedOut));
	$: seoString = data.seoString; //this fixed seo data when navigating away from errored page

	setContext('isIOS', data.isIOS); // $isIOS = Boolean(data.isIOS);
	setContext('isPWA', data.isPWA); // $isPWA = Boolean(data.isPWA);

	isSafari.set(Boolean(data.isSafari)); // setContext('isSafari', data.isSafari);
	// TODO: since 'isSafari' is accessed in utils.ts (for 'cookeh' setter definition), at the moment haven't figured out how to do this with setContext

	onMount(() => {
		disableZoomOnTouchDevices();
		setIsPwaCookie();

		// setInnerWidthViaMatchMedia(); // no longer needed since at the moment '$lessThan768' has no use
	});

	function scrollYSetter() {
		scrollY.set(window.scrollY);
	}
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
	<script src="https://meet.jit.si/external_api.js" defer></script>
	{@html seoString}
</svelte:head>

<!-- <Seo /> -->

<svelte:window on:scroll={debounce(() => scrollYSetter(), 20)} on:contextmenu|preventDefault />

<main>
	<Navbar />
	<div class="px-[5%] pt-32">
		<slot />
	</div>

	{#if !['/classroom', '/pwa'].includes($page.route?.id ?? '')}
		<Footer />
	{/if}
</main>
