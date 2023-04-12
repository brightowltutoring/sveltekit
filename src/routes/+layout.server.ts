export const prerender = true;

import { userAgentFromRequestHeaders, isPwaFromCookieOrUrl } from '$lib/utils';

export async function load(event) {
	const { isIOS, isMobile } = userAgentFromRequestHeaders(event);
	const { isPWA /* url */ } = isPwaFromCookieOrUrl(event);

	// const haventLoggedOut = event.cookies.get('haventLoggedOut');

	return {
		// haventLoggedOut,
		isMobile,
		isIOS,
		isPWA
		// url
	};
}
