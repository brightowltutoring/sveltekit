import { userAgentFromRequestHeaders } from '$lib/utils';

export async function load(event) {
	const { isMobile, isIphone, isIOS } = userAgentFromRequestHeaders(event);

	return {
		isMobile,
		isIphone,
		isIOS
	};
}
