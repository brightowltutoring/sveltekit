<script lang="ts">
	import { stripeRedirectToCheckout } from './stripeRedirectToCheckout';
	import { fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	// variables related to url parameters
	let urlSearch: string;
	let service: string | undefined;
	let firstName: string | undefined;
	let quantity: number | undefined;
	let slideKey = false;

	onMount(async () => {
		slideKey = true;
		urlSearch = window.location.search.slice(1); // gets everything after "?" in url
		window.history.replaceState({}, '', `/${btoa(urlSearch)}`); // shows url parameters in base64

		let returnVal = await stripeRedirectToCheckout(urlSearch);
		quantity = returnVal?.quantity;
		service = returnVal?.service;
		firstName = returnVal?.firstName;
	});
</script>

<!-- <svelte:head>
  <title>Stripe Checkout</title>
  <script src="https://js.stripe.com/v3/" async></script>
</svelte:head> -->
<!-- moving to +layout.svelte with 'defer' attribute, since  -->

<main>
	{#if slideKey && service && quantity}
		<div
			in:fly={{ y: -400, duration: 2000, easing: elasticOut }}
			class="loading animate-bounce pt-20 text-center font-Poppins text-5xl"
		>
			Almost there {firstName}
		</div>
		<!-- {:else}
		<div class=" pt-20 text-center font-Poppins text-5xl">
			Oops ... there was a mistake. Please try again.
		</div> -->
	{/if}
</main>

<style>
	.loading:after {
		content: ' . . .';
		animation: dots 1s steps(5, end) infinite;
	}

	@keyframes dots {
		0%,
		40% {
			color: rgba(0, 0, 0, 0);
		}
	}
</style>
