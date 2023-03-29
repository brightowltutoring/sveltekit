import { app } from '../login/firebase';
import { getFunctions, httpsCallable } from 'firebase/functions';
const functions = getFunctions(app);

// import "@stripe/stripe-js";
import { loadStripe } from '@stripe/stripe-js/pure';
import { PUBLIC_STRIPE_KEY } from '$env/static/public';
// const PUBLIC_STRIPE_KEY = import.meta.env.VITE_STRIPE_KEY;
let SERVICE: string = '';
let EXTRA: boolean = false;
let QUANTITY: number;
let EMAIL: string | null;
let FIRSTNAME: string;

export async function stripeRedirectToCheckout(URLSEARCH: string) {
	try {
		const USP = new URLSearchParams(URLSEARCH);

		// alert(USP);
		const invitee_full_name = USP.get('invitee_full_name');
		const invitee_email = USP.get('invitee_email');
		const event_type_name = USP.get('event_type_name');
		const answer_1 = USP.get('answer_1'); // this now reflects the payment email, if it exists
		const answer_2 = USP.get('answer_2');
		const answer_3 = USP.get('answer_3');

		EMAIL = answer_1 ?? invitee_email;

		let firstNameLowerCase = invitee_full_name?.split(' ')[0].toLowerCase();
		FIRSTNAME = firstNameLowerCase?.charAt(0).toUpperCase() + firstNameLowerCase!.slice(1);

		// converts answer_2 from 1.25 hr to 1.25 to 75 .. representing 75 minutes, say
		let answer_2_processed = answer_2!.match(/\d+(\.\d{1,2})/)![0];
		QUANTITY = parseFloat(answer_2_processed) * 60;

		// answer_3 relates to adding digital session notes
		if (answer_3) EXTRA = true;

		// event_type_name sets session as classico or mock
		for (let el of ['classico', 'mock']) {
			if (event_type_name!.toLowerCase().includes(el)) {
				SERVICE = el;
				break;
			}
		}

		if (SERVICE && QUANTITY) {
			// create checkout session using url params ... but only if some actually exist
			const stripeSessionIdGCF = httpsCallable(functions, 'stripeSessionIdGCF');
			const { data }: any = await stripeSessionIdGCF({
				EMAIL,
				EXTRA,
				SERVICE,
				QUANTITY
			});

			// create checkout session; Stripe() comes from head script

			const stripe = await loadStripe(PUBLIC_STRIPE_KEY);

			stripe?.redirectToCheckout({ sessionId: data.id });

			// Stripe(PUBLIC_STRIPE_KEY).redirectToCheckout({ sessionId: data.id }); //non-typescript

			return {
				service: SERVICE,
				quantity: QUANTITY,
				firstName: FIRSTNAME
			};
		}
	} catch (error) {
		console.log('stripeRedirectToCheckout failed', error);
	}
}