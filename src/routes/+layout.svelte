<script lang="ts">
	export let data;

	import '../styles.css';
	import { page } from '$app/stores';
	import { scrollY } from '$lib/store/scrollStore';
	import { isLoggedIn, isSafari } from '$lib/store/clientStore';
	import { debounce, disableZoomOnTouchDevices, setIsPwaCookie } from '$lib/utils';
	import Footer from './(rootLayout)/Footer.svelte';
	import Navbar from './(rootLayout)/Navbar_NEW.svelte';

	$: seoString = data.seoString;
	$: isLoggedIn.set(data.haventLoggedOut === 'true');
	isSafari.set(data.isSafari === true);

	disableZoomOnTouchDevices();
	setIsPwaCookie();

	function scrollYSetter() {
		scrollY.set(window.scrollY);
	}
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
	{@html seoString}
	{#if data.url.includes('classroom')}
		<script
			src="https://8x8.vc/vpaas-magic-cookie-0c93f8c4b4d6403cbf9746e035d5660e/external_api.js"
		></script>
	{/if}
</svelte:head>

<!-- <svelte:window bind:scrollY={$scrollY} on:contextmenu|preventDefault /> -->
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
