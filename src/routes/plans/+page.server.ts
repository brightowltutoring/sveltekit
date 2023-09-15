// import { redirect } from '@sveltejs/kit';

// export const load = async ({ cookies, url }) => {
// 	let stripeUrl = cookies.get('stripeUrl');
// 	if (stripeUrl) {
// 		return { stripeUrl };
// 	}
// 	const { stripeUrlWithoutHash, stripeHash } = Object.fromEntries(url.searchParams);
// 	if (stripeUrlWithoutHash && stripeHash && !stripeUrl) {
// 		stripeUrl = stripeUrlWithoutHash + '#' + stripeHash;
// 		cookies.set('stripeUrl', stripeUrl, { maxAge: 60 * 60 * 12 });
// 		throw redirect(307, stripeUrl);
// 	}
// };

// export const actions = {
// 	deleteSession: async ({ cookies }) => cookies.delete('stripeUrl')
// };

// // ABOVE CODE WORKED WHEN REDIRECTED FROM '/stripe/api/+server.ts'

export async function load({ cookies }) {
	let stripeCheckoutUrl = cookies.get('stripeCheckoutUrl');

	return { stripeCheckoutUrl };
}
export const actions = {
	deleteSession: async ({ cookies }) => {
		cookies.delete('stripeCheckoutUrl');
	}
};
