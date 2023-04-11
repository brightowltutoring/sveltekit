import { userAgentFromRequestHeaders, isPwaFromCookieOrUrl } from '$lib/utils';

export async function load(event) {
	const { isIOS, isMobile } = userAgentFromRequestHeaders(event);
	const { isPWA } = isPwaFromCookieOrUrl(event);

	// TODO: may delete
	const haventLoggedOut = event.cookies.get('haventLoggedOut');

	return {
		haventLoggedOut,
		isMobile,
		isIOS,
		isPWA
	};
}
