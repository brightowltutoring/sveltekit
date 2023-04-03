import { userAgentFromRequestHeaders } from '$lib/utils';

export async function load(event) {
	const { isIOS, isMobile } = userAgentFromRequestHeaders(event);

	// TODO: may delete
	const haventLoggedOut = event.cookies.get('haventLoggedOut');

	return {
		haventLoggedOut,
		isMobile,
		isIOS
		// isIphone,
	};
}
