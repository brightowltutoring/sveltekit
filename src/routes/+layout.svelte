<script lang="ts">
	export let data;

	import '../styles.css';
	import { page } from '$app/stores';
	import { scrollY } from '$lib/store/scrollStore';
	import { isSafari, isLoggedIn } from '$lib/store/clientStore';
	import { debounce, disableZoomOnTouchDevices, setIsPwaCookie } from '$lib/utils';
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';
	import { onMount } from 'svelte';
	import IframeModal from '$src/lib/IframeModal.svelte';
	import { iframeModals } from './plans/PlansButton.svelte';
	import IframeModals from '$src/lib/IframeModals.svelte';

	isSafari.set(data.isSafari === true);
	$: seoString = data.seoString;
	$: isLoggedIn.set(data.haventLoggedOut === 'true');

	const login = () => isLoggedIn.set(true);
	const logout = () => isLoggedIn.set(false);

	onMount(() => {
		document.addEventListener('login', login);
		document.addEventListener('logout', logout);

		return () => {
			document.removeEventListener('login', login);
			document.removeEventListener('logout', logout);
		};
	});

	disableZoomOnTouchDevices();
	setIsPwaCookie();
	function scrollYSetter() {
		scrollY.set(window.scrollY);
	}

	// let target = new EventTarget();
	// setContext('target', target);
	// receive(target, { login, logout });
</script>

<!-- why does this not work? works in svelte 5 -->
<!-- <IframeModals  /> -->

<!-- bind works too -->
{#each $iframeModals as iframe}
	<IframeModal {iframe} />
{/each}

<svelte:head>
	{@html seoString}
	{#if data.isMobile}
		<link rel="manifest" href="/manifest.json" />
	{/if}
	<!-- {#if data.url.includes('classroom')}
		<script
			src="https://8x8.vc/vpaas-magic-cookie-0c93f8c4b4d6403cbf9746e035d5660e/external_api.js"
		></script>
	{/if} -->
</svelte:head>

<!-- <svelte:document on:login={login} on:logout={logout} /> -->
<!-- <svelte:window bind:scrollY={$scrollY} on:contextmenu|preventDefault /> -->
<svelte:window on:scroll={debounce(() => scrollYSetter(), 20)} on:contextmenu|preventDefault />

<main>
	<Navbar isLoggedIn={$isLoggedIn} scrollY={$scrollY} />
	<div class="px-[5%] pt-32">
		<slot />
	</div>

	{#if !['/classroom', '/pwa', '/stripe'].includes($page.route?.id ?? '')}
		<Footer />
	{/if}
</main>
