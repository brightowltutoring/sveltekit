<!-- <script>
	import { fly } from 'svelte/transition';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { loadStripe } from '@stripe/stripe-js/pure';
	// import { loadStripe } from '@stripe/stripe-js';

	import { onMount } from 'svelte';
	import { elasticOut } from 'svelte/easing';
	import { OAuthCredential } from 'firebase/auth';

	export let data;
	$: sessionId = data.sessionId;
	$: firstName = data.firstName;

	$: console.log('sessionId', sessionId);
	$: console.log('firstName', firstName);

	console.log('test rocket 🚀');

	let loading_status = true;
	onMount(async () => {
		const stripe = await loadStripe(PUBLIC_STRIPE_KEY);
		stripe?.redirectToCheckout({ sessionId });
	});
</script>

{#if loading_status}
	<first-level class="!grid h-[60vh] w-full animate-pulse place-content-center overflow-hidden">
		<span
			in:fly={{ y: -400, duration: 2000, easing: elasticOut }}
			class="loading animate-bounce text-center font-Poppins text-2xl"
		>
			Almost there {firstName}
		</span>
		<br /><br />

		<second-level class="!flex w-full scale-[150%] space-x-5 md:scale-[200%]">
			<third-level class="COMMON_COLOR h-12 w-12 rounded-full" />

			<third-level class="!flex flex-col place-content-center space-y-2">
				<fourth-level class="COMMON_COLOR h-4 w-40 rounded" />
				<fourth-level class="COMMON_COLOR h-4 w-20 rounded" />
			</third-level>
		</second-level>
	</first-level>
{/if}

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
	fourth-level,
	third-level,
	second-level,
	first-level {
		display: block;
	}

	.COMMON_COLOR {
		background-color: rgb(80, 140, 137);
		opacity: 0.4;
	}
</style> -->

Error son
