// http://localhost:5173/stripe/api/?answer_2=13hr&invitee_full_name=josh&invitee_email=jonag@pm.me&event_type_name=classico&answer_1=test@tube.com&answer_3=false

// http://localhost:5173/stripe/?assigned_to=ThinkSolve&event_type_uuid=b5ac9745-94c6-4f78-b7f0-e138a082ea5b&event_type_name=Classico%20&event_start_time=2023-08-17T16%3A30%3A00-04%3A00&event_end_time=2023-08-17T17%3A45%3A00-04%3A00&invitee_uuid=d32c1091-ad33-4eb3-94b8-27de95b7581d&invitee_full_name=testy&invitee_email=test%40test.com&answer_2=15%20hr&answer_3=Yes%2C%20please%21

import { STRIPE_KEY } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

import Stripe from 'stripe';
const stripe = new Stripe(STRIPE_KEY, {
	apiVersion: '2022-11-15'
});

export async function GET({ url }) {
	// try {

	const { invitee_email, event_type_name, answer_1, answer_2, answer_3 } = Object.fromEntries(
		url.searchParams
	);

	const dollar_hourly_rate = 50;
	const dollar_hourly_rate_2dec = Math.round(dollar_hourly_rate).toFixed(2);
	const dollar_minute_rate_2dec = (Math.round(dollar_hourly_rate) / 60).toFixed(2);
	const cents_minute_rate = dollar_hourly_rate * (100 / 60);
	const unit_amount = Math.round(cents_minute_rate); // checkout based on time in minutes

	// answer_2 represents hours; quantity is in minutes
	const quantity = Math.ceil(60 * Number(answer_2?.match(/\d+(\.\d{1,2})?/)![0]));

	const isClassico = event_type_name?.trim().toLowerCase() === 'classico';
	const isMock = event_type_name?.trim().toLowerCase() === 'mock';

	const extraEntry = {
		quantity: undefined as number | undefined,
		price_data: {
			currency: 'usd',
			unit_amount: unit_amount,
			product_data: {
				name: undefined as string | undefined,
				description: undefined as string | undefined
			}
		}
	};

	const sessionObject = {
		customer_email: answer_1 ?? invitee_email,
		payment_method_types: ['card'],
		mode: 'payment',
		success_url: `${url.origin}/plans`,
		cancel_url: `${url.origin}/plans`,
		line_items: [
			{
				quantity: quantity as number | undefined,
				price_data: {
					currency: 'usd',
					unit_amount: unit_amount,
					product_data: {
						name: undefined as string | undefined,
						description:
							`All prices calculated using a rate of $${dollar_minute_rate_2dec} per minute (i.e. $${dollar_hourly_rate_2dec} per hour); quantity ("Qty") refers to time in minutes.

						Re-scheduling OR cancellation with refund possible with at least 24 hours notice.
						Cancellation without refund may result if: (1) student arrives late in excess of 15 minutes; (2) homework is not submitted within 12 hours of booking.

						` as string | undefined
					}
				}
			}
		]
	};

	if (isClassico) {
		sessionObject.line_items[0].price_data.product_data.name = 'Classico Session';
	} else if (isMock) {
		let sessionTime = Math.round(sessionObject.line_items[0].quantity as number);
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

	// cookies.set('stripeSessionFullUrl', session.url as string)

	// setting cookie here doesnt persist, so setting and redirecting from page.server.ts of '/plans' instead

	const [stripeUrlWithoutHash, stripeHash] = (session.url as string).split('#');

	// let stripeUrl = stripeUrlWithoutHash + '#' + stripeHash;

	throw redirect(
		308,
		`/plans?stripeUrlWithoutHash=${stripeUrlWithoutHash}&stripeHash=${stripeHash}`
	);

	// throw redirect(308, session.url as string);
	// throw redirect(308, '/');

	// } catch (error) {
	// 	throw redirect(308, '/plans');
	// }
}

// export const GET = async ({ cookies, request }) => {
// 	cookies.set('stripeUrl3', 'gato', { secure: false });

// 	const status = 200; // 308
// 	const referringUrl = '/plans';
// 	// const referringUrl = request.headers.get('Referer') as string;
// 	return new Response(JSON.stringify({ success: true, message: '🍌' }), {
// 		status,
// 		headers: {
// 			'Content-Type': 'application/json',
// 			location: referringUrl
// 		}
// 	});
// };
