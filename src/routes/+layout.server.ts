import UAParser from 'ua-parser-js';

export async function load({ request }) {
	const isPWA = request.headers.has('X-PWA-Request');
	// TODO: add a custom PWA request header 'X-PWA-Request' to sw.js so that this works when coming from a PWA

	const userAgent = String(request.headers.get('user-agent'));
	const parser = new UAParser(userAgent);
	const isMobile = parser.getDevice().type === 'mobile';

	// console.log('isMobile server-side', isMobile);
	console.log('isPWA server-side', isPWA);

	// console.log('request.headers', request.headers);

	return {
		isMobile,
		isPWAFromLoad: isPWA
	};
}
