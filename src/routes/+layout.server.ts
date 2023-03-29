import { userAgentFromRequestHeaders } from '$lib/utils';

export async function load(event) {
	const { isIOS } = userAgentFromRequestHeaders(event);

	return {
		// isMobile,
		// isIphone,
		isIOS
	};
}
