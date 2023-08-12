// import { redirect } from '@sveltejs/kit';
// import { STRIPE_KEY } from '$env/static/private';

// import Stripe from 'stripe';
// const stripe = new Stripe(STRIPE_KEY, {
// 	apiVersion: '2022-11-15'
// });

// export async function GET({ url }) {
// 	const uryy = url;

// 	throw redirect(307, '/stripe');
// }

// export async function GET({ url }) {
// 	try {
// 		const USP = url.searchParams;

// 		const invitee_full_name = USP.get('invitee_full_name');
// 		const invitee_email = USP.get('invitee_email');
// 		const event_type_name = USP.get('event_type_name');
// 		const answer_1 = USP.get('answer_1'); // this now reflects the payment email, if it exists
// 		const answer_2 = USP.get('answer_2');
// 		const answer_3 = USP.get('answer_3');

// 		email = answer_1 ?? invitee_email;

// 		let firstNameLowerCase = invitee_full_name?.split(' ')[0].toLowerCase();
// 		firstName = firstNameLowerCase?.charAt(0).toUpperCase() + firstNameLowerCase!.slice(1);

// 		// converts answer_2 from 1.25 hr to 1.25 to 75 .. representing 75 minutes, say
// 		let answer_2_processed = answer_2!.match(/\d+(\.\d{1,2})/)![0];
// 		quantity = parseFloat(answer_2_processed) * 60;

// 		// answer_3 relates to adding digital session notes
// 		if (answer_3) extra = true;

// 		// event_type_name sets session as classico or mock
// 		for (let el of ['classico', 'mock']) {
// 			if (event_type_name!.toLowerCase().includes(el)) {
// 				service = el;
// 				break;
// 			}
// 		}

// 		if (service && quantity) {
// 			const [{ app }, { getFunctions, httpsCallable }, { loadStripe }, { PUBLIC_STRIPE_KEY }] =
// 				await Promise.all([
// 					import('$lib/firebase'),
// 					import('firebase/functions'),
// 					import('@stripe/stripe-js/pure'),
// 					import('$env/static/public')
// 				]);

// 			// create checkout session using url params ... but only if some actually exist
// 			const stripeSessionIdGCF = httpsCallable(getFunctions(app), 'stripeSessionIdGCF');
// 			const { data }: any = await stripeSessionIdGCF({
// 				email,
// 				extra,
// 				service,
// 				quantity
// 			});

// 			const stripe = await loadStripe(PUBLIC_STRIPE_KEY);
// 			stripe?.redirectToCheckout({ sessionId: data.id });

// 			console.log('stripe to the moon 🚀');

// 			window.history.replaceState({}, '', `/${btoa(String(url))}`); // shows url parameters in base64
// 			// Stripe(PUBLIC_STRIPE_KEY).redirectToCheckout({ sessionId: data.id }); //non-typescript
// 		}
// 	} catch (error) {
// 		console.log('stripeRedirectToCheckout failed', error);
// 		setTimeout(() => {
// 			loading_status = false;
// 			goto('/plans');
// 		}, 1000);
// 	}
// }

// // async (data) => {
// // 	const quantity = parseInt(data.quantity);
// // 	const dollar_hourly_rate = eval(data.dollar_hourly_rate) || 50;
// // 	const cents_minute_rate = dollar_hourly_rate * (100 / 60);
// // 	const unit_amount = parseInt(cents_minute_rate); // checkout based on time in minutes

// // 	const dollar_hourly_rate_2dec = parseFloat(dollar_hourly_rate).toFixed(2);
// // 	const dollar_minute_rate_2dec = parseFloat(dollar_hourly_rate / 60).toFixed(2);

// // 	let sessionObject = {
// // 		payment_method_types: ['card'],
// // 		mode: 'payment',
// // 		success_url: 'https://thinksolve.io/plans',
// // 		cancel_url: 'https://thinksolve.io/plans',
// // 		line_items: [
// // 			{
// // 				quantity: quantity,
// // 				price_data: {
// // 					currency: 'usd',
// // 					unit_amount: unit_amount,
// // 					product_data: {
// // 						name: '(THIS IS NOT A SESSION)',
// // 						description: `All prices calculated using a rate of $${dollar_minute_rate_2dec} per minute (i.e. $${dollar_hourly_rate_2dec} per hour); quantity ("Qty") refers to time in minutes.

// // 							Re-scheduling OR cancellation with refund possible with at least 24 hours notice.
// // 							Cancellation without refund may result if: (1) student arrives late in excess of 15 minutes; (2) homework is not submitted within 12 hours of booking.

// // 							`
// // 					}
// // 				}
// // 			}
// // 		]
// // 	};

// // 	if (data.email) {
// // 		sessionObject.customer_email = data.email;
// // 	}

// // 	// updates session object based on 'service' url parameter .. specifically if mock chosen instead of classico
// // 	// note: to retrieve default behaviour need to "null check" 'data.service'
// // 	if (data.service) {
// // 		if (data.service.toLowerCase() == 'classico') {
// // 			sessionObject.line_items[0].price_data.product_data.name = 'Classico Session';
// // 		} else if (data.service.toLowerCase() == 'mock') {
// // 			let sessionTime = parseInt(sessionObject.line_items[0].quantity);
// // 			let testCreationCostInMinutes = 90;

// // 			sessionObject.line_items[0].quantity = testCreationCostInMinutes + sessionTime;
// // 			sessionObject.line_items[0].price_data.product_data.description += `Price includes session time (${sessionTime} minutes) and mock test creation & answers (equivalent to ${testCreationCostInMinutes} minutes). `;
// // 			sessionObject.line_items[0].price_data.product_data.name = 'Mock Test Session';
// // 		}
// // 	}

// // 	if (data.extra) {
// // 		let extraEntry;
// // 		if (data.service.toLowerCase() == 'classico') {
// // 			extraEntry = {
// // 				quantity: 60,
// // 				price_data: {
// // 					currency: 'usd',
// // 					unit_amount: unit_amount,
// // 					product_data: {
// // 						name: 'Digital Session Notes',
// // 						description:
// // 							'Equivalent to 60 minutes of time. Your notes will become available via the login page (login with ONE of the following providers: email, google, or twitter). '
// // 					}
// // 				}
// // 			};
// // 		} else if (data.service.toLowerCase() == 'mock') {
// // 			extraEntry = {
// // 				quantity: 120,
// // 				price_data: {
// // 					currency: 'usd',
// // 					unit_amount: unit_amount,
// // 					product_data: {
// // 						name: 'Digital Solution Key',
// // 						description:
// // 							'Equivalent to 120 minutes of time. Your solution key will become available via the login page (login with ONE of the following providers: email, google, or twitter).'
// // 					}
// // 				}
// // 			};
// // 		}
// // 		sessionObject.line_items = [...sessionObject.line_items, extraEntry];
// // 	}

// // 	// finally creates the checkout session using the session object
// // 	const session = await stripe.checkout.sessions.create(sessionObject);

// // 	// stripe creates a session id for us, to process the payment (used on client side)
// // 	return {
// // 		id: session.id
// // 	};
// // };
