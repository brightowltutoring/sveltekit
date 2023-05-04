import { userAgentFromRequestHeaders, isPwaFromCookieOrUrl } from '$lib/utils';
import { getSeoString } from '$lib/store';

// import { get } from 'svelte/store';
// import { isLoggedIn } from '$lib/store';

export async function load(event) {
	const haventLoggedOut = event.cookies.get('haventLoggedOut');

	const { seoString } = getSeoString(event.url);
	const { isIOS, isMobile } = userAgentFromRequestHeaders(event.request.headers);
	const { isPWA } = isPwaFromCookieOrUrl(event);

	// console.log('isLoggedIn before', get(isLoggedIn));
	// isLoggedIn.set(false);
	// console.log('isLoggedIn after', get(isLoggedIn));

	return { isMobile, isIOS, isPWA, seoString, haventLoggedOut };
}
