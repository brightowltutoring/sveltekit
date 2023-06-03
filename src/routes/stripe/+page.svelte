<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { elasticOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	// variables related to url parameters
	let urlSearch: string,
		service: string,
		extra: boolean,
		quantity: number,
		email: string | null,
		firstName: string;

	let slideKey = false;
	onMount(async () => {
		urlSearch = window.location.search.slice(1); // gets everything after "?" in url
		window.history.replaceState({}, '', `/${btoa(urlSearch)}`); // shows url parameters in base64

		await stripeRedirectToCheckout();
		slideKey = true;
	});

	async function stripeRedirectToCheckout() {
		try {
			const USP = new URLSearchParams(urlSearch);

			// alert(USP);
			const invitee_full_name = USP.get('invitee_full_name');
			const invitee_email = USP.get('invitee_email');
			const event_type_name = USP.get('event_type_name');
			const answer_1 = USP.get('answer_1'); // this now reflects the payment email, if it exists
			const answer_2 = USP.get('answer_2');
			const answer_3 = USP.get('answer_3');

			email = answer_1 ?? invitee_email;

			let firstNameLowerCase = invitee_full_name?.split(' ')[0].toLowerCase();
			firstName = firstNameLowerCase?.charAt(0).toUpperCase() + firstNameLowerCase!.slice(1);

			// converts answer_2 from 1.25 hr to 1.25 to 75 .. representing 75 minutes, say
			let answer_2_processed = answer_2!.match(/\d+(\.\d{1,2})/)![0];
			quantity = parseFloat(answer_2_processed) * 60;

			// answer_3 relates to adding digital session notes
			if (answer_3) extra = true;

			// event_type_name sets session as classico or mock
			for (let el of ['classico', 'mock']) {
				if (event_type_name!.toLowerCase().includes(el)) {
					service = el;
					break;
				}
			}

			if (service && quantity) {
				// NOW load all modules relevant to stripe checkout creation, in a non-blocking way
				const [{ app }, { getFunctions, httpsCallable }, { loadStripe }, { PUBLIC_STRIPE_KEY }] =
					await Promise.all([
						import('$lib/firebase'),
						import('firebase/functions'),
						import('@stripe/stripe-js/pure'),
						import('$env/static/public')
					]);
				// const { app } = firebaseModule;
				// const { getFunctions, httpsCallable } = firebaseFunctionsModule;
				// const { loadStripe } = loadStripeModule;
				// const { PUBLIC_STRIPE_KEY } = envPublicModule;

				// create checkout session using url params ... but only if some actually exist
				const stripeSessionIdGCF = httpsCallable(getFunctions(app), 'stripeSessionIdGCF');
				const { data }: any = await stripeSessionIdGCF({
					email,
					extra,
					service,
					quantity
				});

				// create checkout session; Stripe() comes from head script

				const stripe = await loadStripe(PUBLIC_STRIPE_KEY);
				stripe?.redirectToCheckout({ sessionId: data.id });

				// Stripe(PUBLIC_STRIPE_KEY).redirectToCheckout({ sessionId: data.id }); //non-typescript
			}
		} catch (error) {
			console.log('stripeRedirectToCheckout failed', error);
			goto('/');
		}
	}
</script>

<main>
	{#if slideKey && service && quantity}
		<div
			in:fly={{ y: -400, duration: 2000, easing: elasticOut }}
			class="loading animate-bounce pt-20 text-center font-Poppins text-5xl"
		>
			Almost there {firstName}
		</div>
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
