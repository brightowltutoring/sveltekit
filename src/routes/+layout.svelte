<script lang="ts">
	import './(rootLayout)/styles.css';
	import Navbar from './(rootLayout)/Navbar.svelte';
	import Footer from './(rootLayout)/Footer.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { debounce, disableZoomOnTouchDevices, setIsPwaCookie } from '$lib/utils';
	import {
		setInnerWidthViaMatchMedia,
		scrollY,
		isLoggedIn,
		isIOS,
		isPWA,
		isSafari
	} from '$lib/store';

	// import Seo from './(rootLayout)/SeoStatic2.svelte';

	export let data;
	$isLoggedIn = Boolean(data.haventLoggedOut);
	$isIOS = Boolean(data.isIOS);
	$isPWA = Boolean(data.isPWA);
	$isSafari = Boolean(data.isSafari);

	onMount(() => {
		disableZoomOnTouchDevices();
		setIsPwaCookie();
		setInnerWidthViaMatchMedia();
	});

	function scrollYSetter() {
		$scrollY = window.scrollY;
	}
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
	<script src="https://meet.jit.si/external_api.js" defer></script>
	{@html data.seoString}
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
