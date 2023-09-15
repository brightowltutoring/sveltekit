// http://localhost:4173/stripe?answer_2=4.3hr&invitee_full_name=josh&invitee_email=jonag@pm.me&event_type_name=classico&answer_1=joe@blow.com&answer_3=true

import { redirect } from '@sveltejs/kit';
import { getStripeCheckoutUrl } from './getStripeCheckoutUrl';

const redirectValue = 307; // vs 308?

export async function load({ url, cookies }) {
	const stripeCheckoutUrl = (await getStripeCheckoutUrl(url)) as string;

	if (!stripeCheckoutUrl) {
		throw redirect(redirectValue, '/');
	}

	cookies.set('stripeCheckoutUrl', stripeCheckoutUrl);
	throw redirect(redirectValue, stripeCheckoutUrl);
}
