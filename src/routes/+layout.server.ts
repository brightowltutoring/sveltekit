import { userAgentFromRequestHeaders, isPwaFromCookieOrUrl } from '$lib/utils';
import { getTitleAndMetaData } from '$lib/store';

export async function load(event) {
	const { titleAndMeta } = getTitleAndMetaData(event.url.pathname);
	const { isIOS, isMobile } = userAgentFromRequestHeaders(event.request.headers);
	const { isPWA } = isPwaFromCookieOrUrl(event);

	return { isMobile, isIOS, isPWA, titleAndMeta };
}
