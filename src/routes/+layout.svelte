<script lang="ts">
	import { page } from '$app/stores';
	import { scrollY } from '$lib/store/scrollStore';
	import { isLoggedIn, isSafari } from '$lib/store/clientStore';
	import { cookeh, debounce, disableZoomOnTouchDevices, setIsPwaCookie } from '$lib/utils';
	import Footer from './(rootLayout)/Footer.svelte';
	// import Navbar from './(rootLayout)/Navbar-experimental.svelte';
	import Navbar from './(rootLayout)/Navbar.svelte';
	import '../styles.css';

	export let data;
	// console.log('user', data.user);
	// $: console.log('data.stripeCheckoutUrl', data.stripeCheckoutUrl);

	$: seoString = data.seoString;
	$: isLoggedIn.set(data.haventLoggedOut === 'true');
	isSafari.set(data.isSafari === true);
	// isIOS.set(Boolean(data.isIOS)); // setContext('isIOS', data.isIOS);
	// isPWA.set(Boolean(data.isPWA)); // setContext('isPWA', data.isPWA);

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
