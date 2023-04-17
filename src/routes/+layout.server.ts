import { userAgentFromRequestHeaders, isPwaFromCookieOrUrl } from '$lib/utils';
import { getRouteMetaData } from '$lib/store';

export async function load(event) {
	const { title, meta } = getRouteMetaData(event.url.pathname); // for seo

	const { isIOS, isMobile } = userAgentFromRequestHeaders(event);
	const { isPWA } = isPwaFromCookieOrUrl(event);

	return { isMobile, isIOS, isPWA, title, meta };
}
