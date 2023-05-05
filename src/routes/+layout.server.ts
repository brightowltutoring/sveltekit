import { userAgentFromRequestHeaders, isPwaFromCookieOrUrl } from '$lib/utils';
import { getSeoString } from '$lib/store';

export async function load(event) {
	const haventLoggedOut = event.cookies.get('haventLoggedOut');
	// for some reason safari deletes the cookies unless security is set to false ... which is now possible with the way I have defined 'cookeh.set'. This explains why the cookie was undefined in ios simulator but in chrome was persisted.

	const { seoString } = getSeoString(event.url);
	const { isIOS, isMobile, isSafari } = userAgentFromRequestHeaders(event.request.headers);
	const { isPWA } = isPwaFromCookieOrUrl(event);

	return { isMobile, isIOS, isSafari, isPWA, seoString, haventLoggedOut };
}
