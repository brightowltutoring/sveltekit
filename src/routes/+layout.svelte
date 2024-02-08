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
	import { iframeModals } from './plans/PlansButton-testing.svelte';
	import Modal from '$src/lib/Wrappers/Modal.svelte';
	import Loading from '$src/lib/Loading.svelte';

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
</script>

{#each $iframeModals as iframe}
	<IframeModal bind:iframe />
{/each}

<!-- {#each $iframeModals as _, i}
	<IframeModal bind:iframe={$iframeModals[i]} />
{/each} -->

<!-- {#each $iframeModals as iframe, i}
	<Modal
		on:closeModal={() => (iframe.bool = false)}
		body
		modalOpen={iframe.bool}
		bgTW={'bg-[rgba(0,0,0,0.1)]'}
	>
		{#if !iframe.loading}
			<Loading />
		{/if}

		<iframe
			class="opacity-0 transition-opacity duration-300 ease-in {iframe.loading &&
				'opacity-100'} fixed bottom-0 h-[90%] w-full rounded-xl border-dotted border-gray-500 backdrop-blur-3xl md:w-[80%] md:-translate-y-5"
			title="Thinksolve Plans"
			src={iframe.url}
		/>
	</Modal>
{/each} -->

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
