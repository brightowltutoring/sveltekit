import type { RequestEvent } from '@sveltejs/kit';
import UAParser from 'ua-parser-js';

export function isPwaFromCookieOrUrl({ cookies, request: { url } }: RequestEvent) {
	let isPWA = false;
	const cookieIsPWA = cookies.get('isPWA');

	if (cookieIsPWA !== undefined) {
		isPWA = cookieIsPWA === 'true';
	} else {
		isPWA = url.includes('pwa');
	}

	return { isPWA };
}

// client-side navigator.userAgent results in flash of content .. this is better
export function userAgentFromRequestHeaders(headers: Headers) {
	const userAgent = String(headers.get('user-agent'));
	const parser = new UAParser(userAgent);
	const isMobile = parser.getDevice().type === 'mobile';
	const isIOS = parser.getOS().name?.toLowerCase() === 'ios';

	const browser = parser.getBrowser().name?.toLowerCase();
	const isSafari = browser?.includes('safari');
	// const isIphone = parser.getDevice().model?.toLowerCase() === 'iphone';

	return {
		isMobile,
		isIOS,
		isSafari
	};
}
