<script lang="ts">
	import { page } from '$app/stores';
	import { scrollY } from '$lib/store/scrollStore';
	import { isIOS, isLoggedIn, isPWA, isSafari } from '$lib/store/clientStore';
	import { debounce, disableZoomOnTouchDevices, setIsPwaCookie } from '$lib/utils';
	import { onMount } from 'svelte';
	import Footer from './(rootLayout)/Footer.svelte';
	import Navbar from './(rootLayout)/Navbar.svelte';
	import './(rootLayout)/styles.css';

	export let data;
	$: seoString = data.seoString;
	$: isLoggedIn.set(Boolean(data.haventLoggedOut));
	isIOS.set(Boolean(data.isIOS)); // setContext('isIOS', data.isIOS);
	isPWA.set(Boolean(data.isPWA)); // setContext('isPWA', data.isPWA);
	isSafari.set(Boolean(data.isSafari));

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
