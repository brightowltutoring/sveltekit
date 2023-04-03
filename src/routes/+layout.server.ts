import { userAgentFromRequestHeaders } from '$lib/utils';

export async function load(event) {
	// const isPwaFromHeader = event.request.headers.get('User-Agent');
	// console.log('isPwaFromHeader', isPwaFromHeader);
	const { isIOS, isMobile } = userAgentFromRequestHeaders(event);

	// TODO: may delete
	const haventLoggedOut = event.cookies.get('haventLoggedOut');

	return {
		haventLoggedOut,
		isMobile,
		isIOS
		// isPwaFromHeader
		// isIphone,
	};
}
