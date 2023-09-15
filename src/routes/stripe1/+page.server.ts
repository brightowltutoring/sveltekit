// http://localhost:5173/stripe1?answer_2=4.98hr&invitee_full_name=jon&invitee_email=jonag@pm.me&event_type_name=classico&answer_1=brightowl.edu@gmail.com&answer_3=true

// Works on vercel (https://sveltekit-u7qb.vercel.app/stripe1?answer_2=1.25hr&invitee_full_name=jon&invitee_email=jonag@pm.me&event_type_name=classico&answer_1=brightowl.edu@gmail.com&answer_3=true)

// Works on netlify (https://64d70110faf31948e15eed3d--thinksolveio.netlify.app/stripe1/?answer_2=1.25hr&invitee_full_name=jon&invitee_email=jonag@pm.me&event_type_name=classico&answer_1=brightowl.edu@gmail.com&answer_3=true)

// Doesn't work on cloudflare pages (https://thinksolve.io/stripe1?answer_2=1.25hr&invitee_full_name=jon&invitee_email=jonag@pm.me&event_type_name=classico&answer_1=brightowl.edu@gmail.com&answer_3=true) ... CF pages doesnt allow ssr so load function doesnt fire?
// UPDATE: WORKS ON CF PAGES doing everything server side way via 'stripe/api/+server.ts', without need for client-side
// UPDATE2: now working on cf pages??

import { redirect } from '@sveltejs/kit';

// import { STRIPE_KEY } from '$env/static/private';
// import Stripe from 'stripe';
// const stripe = new Stripe(STRIPE_KEY, {
// 	apiVersion: '2022-11-15'
// });

export const prerender = false;
export async function load({ url, cookies }) {
	// const { invitee_full_name, invitee_email, event_type_name, answer_1, answer_2, answer_3 } =
	// 	Object.fromEntries(url.searchParams.entries());
	const USP = url.searchParams;
	const invitee_full_name = USP.get('invitee_full_name');
	const invitee_email = USP.get('invitee_email');
	const event_type_name = USP.get('event_type_name');

	if (!event_type_name) {
		return;
	}

	const { STRIPE_KEY } = await import('$env/static/private');
	const { Stripe } = await import('stripe');
	const stripe = new Stripe(STRIPE_KEY, {
		apiVersion: '2022-11-15'
	});
	const answer_1 = USP.get('answer_1'); // this now reflects the payment email, if it exists
	const answer_2 = USP.get('answer_2');
	const answer_3 = USP.get('answer_3');

	const firstNameLowerCase = invitee_full_name?.split(' ')[0].toLowerCase();
	const firstName = firstNameLowerCase?.charAt(0).toUpperCase() + firstNameLowerCase!.slice(1);

	const quantity = Math.ceil(60 * Number(answer_2?.match(/\d+(\.\d{1,2})?/)![0]));
	const dollar_hourly_rate = 50;
	const cents_minute_rate = dollar_hourly_rate * (100 / 60);
	const unit_amount = Math.round(cents_minute_rate); // checkout based on time in minutes

	const dollar_hourly_rate_2dec = Math.round(dollar_hourly_rate).toFixed(2);
	const dollar_minute_rate_2dec = (Math.round(dollar_hourly_rate) / 60).toFixed(2);

	const isClassico = event_type_name?.trim().toLowerCase() === 'classico';
	const isMock = event_type_name?.trim().toLowerCase() === 'mock';

	const extraEntry = {
		quantity: 0,
		price_data: {
			currency: 'usd',
			unit_amount: unit_amount,
			product_data: {
				name: '',
				description: ''
			}
		}
	};

	let sessionObject = {
		customer_email: answer_1 ?? invitee_email,
		payment_method_types: ['card'],
		mode: 'payment',
		success_url: `${url.origin}/plans`,
		cancel_url: `${url.origin}/plans`,
		line_items: [
			{
				quantity: quantity,
				price_data: {
					currency: 'usd',
					unit_amount: unit_amount,
					product_data: {
						name: '(THIS IS NOT A SESSION)',
						description: `All prices calculated using a rate of $${dollar_minute_rate_2dec} per minute (i.e. $${dollar_hourly_rate_2dec} per hour); quantity ("Qty") refers to time in minutes.

							Re-scheduling OR cancellation with refund possible with at least 24 hours notice.
							Cancellation without refund may result if: (1) student arrives late in excess of 15 minutes; (2) homework is not submitted within 12 hours of booking.

							`
					}
				}
			}
		]
	};

	if (isClassico) {
		sessionObject.line_items[0].price_data.product_data.name = 'Classico Session';
	} else if (isMock) {
		let sessionTime = Math.round(sessionObject.line_items[0].quantity);
		let testCreationCostInMinutes = 90;

		sessionObject.line_items[0].quantity = testCreationCostInMinutes + sessionTime;
		sessionObject.line_items[0].price_data.product_data.description += `Price includes session time (${sessionTime} minutes) and mock test creation & answers (equivalent to ${testCreationCostInMinutes} minutes). `;
		sessionObject.line_items[0].price_data.product_data.name = 'Mock Test Session';
	}

	if (answer_3) {
		if (isClassico) {
			extraEntry.quantity = 60;
			extraEntry.price_data.product_data = {
				name: 'Digital Session Notes',
				description:
					'Equivalent to 60 minutes of time. Your notes will become available via the login page (login with ONE of the following providers: email, google, or twitter). '
			};
		} else if (isMock) {
			extraEntry.quantity = 120;
			extraEntry.price_data.product_data = {
				name: 'Digital Solution Key',
				description:
					'Equivalent to 120 minutes of time. Your solution key will become available via the login page (login with ONE of the following providers: email, google, or twitter).'
			};
		}
		sessionObject.line_items = [...sessionObject.line_items, extraEntry];
	}

	const session = await stripe.checkout.sessions.create(sessionObject as any);

	const sessionUrl = session.url;

	if (sessionUrl == null) {
		throw new Error('Session URL is null');
	}

	cookies.set('stripeUrltesy', sessionUrl);

	throw redirect(308, sessionUrl);
}
