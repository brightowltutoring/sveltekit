<script lang="ts">
	import { page } from '$app/stores';
	import { scrollY } from '$lib/store/scrollStore';
	import { isIOS, isLoggedIn, isPWA, isSafari } from '$lib/store/clientStore';
	import { debounce, disableZoomOnTouchDevices, setIsPwaCookie } from '$lib/utils';
	import Footer from './(rootLayout)/Footer.svelte';
	import Navbar from './(rootLayout)/Navbar.svelte';
	import './(rootLayout)/styles.css';
	import { beforeNavigate } from '$app/navigation';
	import { browser } from '$app/environment';

	export let data;
	$: seoString = data.seoString;
	$: isLoggedIn.set(Boolean(data.haventLoggedOut));
	isIOS.set(Boolean(data.isIOS)); // setContext('isIOS', data.isIOS);
	isPWA.set(Boolean(data.isPWA)); // setContext('isPWA', data.isPWA);
	isSafari.set(Boolean(data.isSafari));

	disableZoomOnTouchDevices();
	setIsPwaCookie();

	// setInnerWidthViaMatchMedia(); // no longer needed since at the moment '$lessThan768' has no use

	function scrollYSetter() {
		scrollY.set(window.scrollY);
	}

	// $: if (data.url.includes('classroom') && browser) {
	// 	// Load the external library
	// 	const script = document.createElement('script');
	// 	script.src =
	// 		'https://8x8.vc/vpaas-magic-cookie-0c93f8c4b4d6403cbf9746e035d5660e/external_api.js';
	// 	document.head.appendChild(script);
	// }
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
	<!-- {#if data.url.includes('classroom')}
		<script
			src="https://8x8.vc/vpaas-magic-cookie-0c93f8c4b4d6403cbf9746e035d5660e/external_api.js"
			async
		></script>
	{/if} -->

	{@html seoString}
</svelte:head>

<!-- <Seo /> -->

<svelte:window on:scroll={debounce(() => scrollYSetter(), 20)} on:contextmenu|preventDefault />

<main>
	<Navbar />
	<div class="px-[5%] pt-32">
		<slot />
	</div>

	{#if !['/classroom', '/pwa', '/stripe'].includes($page.route?.id ?? '')}
		<Footer />
	{/if}
</main>
