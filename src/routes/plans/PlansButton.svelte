<script lang="ts">
	import type { payButton } from './plansCardStuff';
	export let button: payButton;

	import Modal from '$lib/Wrappers/Modal.svelte';
	import Loading from '$lib/Loading.svelte';
	import StripeCheckout from '$routes/stripe/StripeCheckout.svelte';
	import { onMount } from 'svelte';

	let showModal = false;

	let myIframe: HTMLIFrameElement;

	let myIframeSrc: string | undefined = undefined;

	let iframeLoaded = false;
	function setIframeLoadedTrue() {
		iframeLoaded = true;
		console.log('iframe loaded son');
	}

	onMount(() => {
		myIframe.addEventListener('load', setIframeLoadedTrue);
		return () => {
			myIframe.removeEventListener('load', setIframeLoadedTrue);
		};
	});

	function handleIframeAndModal(e: MouseEvent) {
		e.preventDefault();
		myIframeSrc = button.url;

		if (e.type === 'click') {
			showModal = true;
		}
	}
</script>

<Modal body bind:showModal bgTW={'bg-[rgba(0,0,0,0.1)]'}>
	{#if !iframeLoaded}
		<Loading />
	{:else}
		<StripeCheckout />
	{/if}

	<iframe
		class="opacity-0 transition-opacity duration-300 ease-in {iframeLoaded &&
			'opacity-100'} fixed bottom-0 h-[90%] w-full rounded-xl border-dotted border-gray-500 backdrop-blur-3xl md:w-[80%] md:-translate-y-5"
		title="Thinksolve Plans"
		src={myIframeSrc}
		bind:this={myIframe}
	/>
</Modal>

<a
	href={button.url}
	on:click={(e) => handleIframeAndModal(e)}
	on:mouseenter={(e) => handleIframeAndModal(e)}
	class="m-1 rounded-md p-4 text-xl text-white duration-200 hover:scale-105 hover:rounded-lg hover:shadow-md {button.opacityTW} {$$props.class} "
>
	<span>{button.text}</span>
</a>
