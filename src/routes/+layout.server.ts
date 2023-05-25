import { userAgentFromRequestHeaders, isPwaFromCookieOrUrl } from '$lib/utils';
import { getSeoString } from '$lib/store/routesStore';

export async function load(event) {
	const haventLoggedOut = event.cookies.get('haventLoggedOut');
	const { seoString } = getSeoString(event.url);
	const { isIOS, isMobile, isSafari } = userAgentFromRequestHeaders(event.request.headers);
	const { isPWA } = isPwaFromCookieOrUrl(event);

	return { isMobile, isIOS, isSafari, isPWA, seoString, haventLoggedOut };
}
