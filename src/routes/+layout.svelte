<script lang="ts">
	import './(rootLayout)/styles.css';
	import Seo from './(rootLayout)/Seo.svelte';
	import Navbar from './(rootLayout)/Navbar.svelte';
	import Footer from './(rootLayout)/Footer.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { setContext } from 'svelte';
	import { debounce, disableZoomOnTouchDevices, setIsPwaCookie } from '$lib/utils';
	import { setInnerWidthViaMatchMedia, scrollY } from '$lib/store';

	export let data;
	const { isIOS, /* isMobile, */ isPWA /* url */ } = data;

	setContext('isIOS', isIOS);
	setContext('isPWA', isPWA);

	onMount(() => {
		// if (isMobile) disableZoomGestures();
		disableZoomOnTouchDevices();
		setIsPwaCookie();
		setInnerWidthViaMatchMedia();
	});

	function scrollYSetter() {
		$scrollY = window.scrollY;
		// console.log('$scrollY', $scrollY);
	}
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
	<script src="https://meet.jit.si/external_api.js" defer></script>
</svelte:head>

<!-- <IsPWA /> -->
<Seo />

<!-- <svelte:window bind:scrollY={$scrollY} on:contextmenu|preventDefault /> -->
<svelte:window on:scroll={debounce(() => scrollYSetter(), 20)} on:contextmenu|preventDefault />

<!-- <main class="flex min-h-screen flex-col"> -->
<main>
	<Navbar />

	<div class="px-[5%] pt-32 md:block">
		<slot />
	</div>

	{#if !['/classroom', '/pwa'].includes($page.route?.id ?? '')}
		<!-- {#if !['/classroom', '/pwa-home'].includes($page.route?.id ?? '')} -->
		<Footer />
	{/if}
</main>
