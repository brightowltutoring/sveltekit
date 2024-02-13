
// http://localhost:5175/stripe?answer_2=1hr&invitee_full_name=jew&invitee_email=jonag@pm.me&event_type_name=classico&answer_1=jor@jor.com&answer_4=No%2C%20if%20you%20may%20please%20provide%20the%20material%20%28extra%20fee%3A%20%2425%29&answer_3=true

// http://localhost:5175/stripe?answer_2=1.7hr&invitee_full_name=jew&invitee_email=jonag@pm.me&event_type_name=classico&answer_1=jor@jor.com&answer_3=true

// http://localhost:4173/stripe?answer_2=0.3hr&invitee_full_name=jew&invitee_email=jonag@pm.me&event_type_name=classico&answer_1=joe@blow.com&answer_3=true

import { redirect } from '@sveltejs/kit';
import { getStripeSessionData } from './getStripeSessionData';

const redirectValue = 307; // vs 308?

export async function load({ url, cookies }) {
	const { stripeCheckoutUrl, sessionName } = await getStripeSessionData(url);

	if (!stripeCheckoutUrl || !sessionName) {
		redirect(redirectValue, '/');
	}

	/* @migration task: add path argument */
	cookies.set('stripeCheckoutUrl', stripeCheckoutUrl, { path: '/' });
	/* @migration task: add path argument */
	cookies.set('sessionName', sessionName, { path: '/' });

	redirect(redirectValue, stripeCheckoutUrl);
}
