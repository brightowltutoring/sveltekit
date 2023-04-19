<script lang="ts">
	import './(rootLayout)/styles.css';
	import Navbar from './(rootLayout)/Navbar.svelte';
	import Footer from './(rootLayout)/Footer.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { setContext } from 'svelte';
	import { debounce, disableZoomOnTouchDevices, setIsPwaCookie } from '$lib/utils';
	import { setInnerWidthViaMatchMedia, scrollY } from '$lib/store';

	export let data;

	setContext('isIOS', data.isIOS);
	setContext('isPWA', data.isPWA);

	onMount(() => {
		disableZoomOnTouchDevices();
		setIsPwaCookie();
		setInnerWidthViaMatchMedia();
	});

	function scrollYSetter() {
		$scrollY = window.scrollY;
	}

	// console.log('$page.status ', $page.status);
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
	<script src="https://meet.jit.si/external_api.js" defer></script>
	{@html data.titleAndMeta}

	<!-- {#if pageStatus === 404 || pageStatus === 500}
		<title>Oops 💩 {pageStatus}</title>
	{/if} -->
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
