import { userAgentFromRequestHeaders } from '$lib/utils';

export async function load(event) {
	// set in head script tag in <PWA/>
	// event.setHeaders({})
	const { isIOS, isMobile } = userAgentFromRequestHeaders(event);

	// TODO: may delete
	const haventLoggedOut = event.cookies.get('haventLoggedOut');

	return {
		haventLoggedOut,
		isMobile,
		isIOS
		// isPWA
	};
}
