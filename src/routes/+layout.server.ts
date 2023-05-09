import { userAgentFromRequestHeaders, isPwaFromCookieOrUrl } from '$lib/utils';
import { getSeoString } from '$lib/store';

export async function load(event) {
	const haventLoggedOut = event.cookies.get('haventLoggedOut');

	// TODO: testing initializing svelte store here, rather than layout.svelte
	const { seoString } = getSeoString(event.url);
	const { isIOS, isMobile, isSafari } = userAgentFromRequestHeaders(event.request.headers);
	const { isPWA } = isPwaFromCookieOrUrl(event);

	return { isMobile, isIOS, isSafari, isPWA, seoString, haventLoggedOut };
}
