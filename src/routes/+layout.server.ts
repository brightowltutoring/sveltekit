import { getSeoString } from '$src/lib/store/routesStore.js';
import { isPwaFromCookieOrUrl, userAgentFromRequestHeaders } from '$lib/utils.server';

export async function load(event) {
	// const haventLoggedOut = event.locals.haventLoggedOut;

	const url = event.request.url;
	const haventLoggedOut = event.cookies.get('haventLoggedOut');

	const { seoString } = getSeoString(event.url);
	const { isIOS, isMobile, isSafari } = userAgentFromRequestHeaders(event.request.headers);
	const { isPWA } = isPwaFromCookieOrUrl(event);

	return {
		isMobile,
		isIOS,
		isSafari,
		isPWA,
		seoString,
		haventLoggedOut,
		url,
		user: event.locals.user
	};
}
