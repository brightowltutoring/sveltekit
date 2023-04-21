import { userAgentFromRequestHeaders, isPwaFromCookieOrUrl } from '$lib/utils';
import { getSeoString } from '$lib/store';

export async function load(event) {
	const { seoString } = getSeoString(event.url);
	const { isIOS, isMobile } = userAgentFromRequestHeaders(event.request.headers);
	const { isPWA } = isPwaFromCookieOrUrl(event);

	return { isMobile, isIOS, isPWA, seoString };
}
