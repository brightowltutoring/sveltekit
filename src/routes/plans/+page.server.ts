export const load = async ({ cookies, url }) => {
	let stripeUrl = cookies.get('stripeUrl');

	if (stripeUrl) {
		return { stripeUrl };
	}

	const { stripeUrlWithoutHash, stripeHash } = Object.fromEntries(url.searchParams);

	if (stripeUrlWithoutHash && stripeHash && !stripeUrl) {
		stripeUrl = stripeUrlWithoutHash + '#' + stripeHash;
		cookies.set('stripeUrl', stripeUrl);
	}

	return { stripeUrl };
};

export const actions = {
	deleteSession: async ({ cookies }) => cookies.delete('stripeUrl')
};
