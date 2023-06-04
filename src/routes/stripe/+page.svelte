<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { elasticOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	// variables related to url parameters
	// let urlSearch: string,
	let url: URL,
		service: string,
		extra: boolean,
		quantity: number,
		email: string | null,
		firstName: string;

	let loading_status = true;
	onMount(async () => await stripeRedirectToCheckout());

	async function stripeRedirectToCheckout() {
		try {
			url = new URL(window.location.href);
			const USP = url.searchParams;

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
				const [{ app }, { getFunctions, httpsCallable }, { loadStripe }, { PUBLIC_STRIPE_KEY }] =
					await Promise.all([
						import('$lib/firebase'),
						import('firebase/functions'),
						import('@stripe/stripe-js/pure'),
						import('$env/static/public')
					]);

				// create checkout session using url params ... but only if some actually exist
				const stripeSessionIdGCF = httpsCallable(getFunctions(app), 'stripeSessionIdGCF');
				const { data }: any = await stripeSessionIdGCF({
					email,
					extra,
					service,
					quantity
				});

				const stripe = await loadStripe(PUBLIC_STRIPE_KEY);
				stripe?.redirectToCheckout({ sessionId: data.id });

				console.log('stripe to the moon 🚀');

				window.history.replaceState({}, '', `/${btoa(String(url))}`); // shows url parameters in base64
				// Stripe(PUBLIC_STRIPE_KEY).redirectToCheckout({ sessionId: data.id }); //non-typescript
			}
		} catch (error) {
			console.log('stripeRedirectToCheckout failed', error);
			setTimeout(() => {
				// loading_status = false;
				// goto('/plans');
			}, 1000);
		}
	}
</script>

{#if loading_status}
	<first-level class="!grid h-[60vh] w-full animate-pulse place-content-center overflow-hidden">
		{#if service && quantity}
			<span
				in:fly={{ y: -400, duration: 2000, easing: elasticOut }}
				class="loading animate-bounce text-center font-Poppins text-2xl"
			>
				Almost there {firstName}
			</span>
			<br /><br />
		{/if}
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
	/* third-level {
		background-color: rgb(80, 140, 137);
		opacity: 0.5;
	} */
	/* second-level {
		background-color: rgb(230, 78, 78);
	}
	first-level {
		background-color: rgb(108, 108, 199);
	} */
</style>
