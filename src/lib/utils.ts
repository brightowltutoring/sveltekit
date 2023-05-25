import { get } from 'svelte/store';
import { isSafari } from '$lib/store/clientStore';

import { onMount, onDestroy } from 'svelte';
import { browser } from '$app/environment';
// the modules above cannot be dynamically imported in functions below, without failure

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

// Need to use JS to disable scrolling on firefox, since firefox does not support the :has() css pseudo-selector —— e.g. body:has(element){ overflow:hidden }, is the elegant css way of disabling scroll (for a given route containing a specific element) ——
export async function disableScrollingOnPage(pathname: string) {
	onMount(() => {
		// navigator.userAgent.toLocaleLowerCase().includes('firefox') &&
		if (pathname === '/classroom' || '/pwa') {
			document.body.style.overflow = 'hidden';
		}
	});

	onDestroy(() => browser && (document.body.style.overflow = 'auto'));
}

export function setIsPwaCookie() {
	// cookeh.eat('isPWA'); //testing; keep this commented out unless needed!
	if (cookeh.get('isPWA')) return;

	const isPWA = window.matchMedia('(display-mode: standalone)').matches;
	isPWA && cookeh.set('isPWA', isPWA);
}

//  inspired from 'https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript', but made into a 'factory' for easier use. Might add serializer code from npm cookie inside my set method.
export const cookeh = {
	set: function (
		name: string,
		value: string | boolean,

		{ seconds = 60 * 60 * 24, secure = !get(isSafari) } = {}
	) {
		console.log(`${name} cookie set`);
		document.cookie = `${name}=${value}; max-age=${seconds}; SameSite=None${
			secure ? '; Secure' : ''
		}`;
	},

	get: function (name: string) {
		const match = document.cookie.match(`${name}=(.*?)(;|$)`);
		return match ? decodeURIComponent(match[1]) : '';
	},

	eat: function (...names: string[]) {
		names.forEach((name) => {
			document.cookie = `${name}=; max-age=0;`;
		});
	}
};

// debounce from https://www.freecodecamp.org/news/javascript-debounce-example/; TODO: why is 'args / func.apply(this, args)' syntax necessary
// export function debouncer(func: any, timeout = 300) {
// 	let timer: ReturnType<typeof setTimeout>;

// 	return (...args) => {
// 		clearTimeout(timer);
// 		timer = setTimeout(() => {
// 			func.apply(this, args);
// 		}, timeout);
// 	};
// }

// TODO: chatgpt properly-typed version:

type FunctionType = (...args: any[]) => void;
export function debounce<f extends FunctionType>(func: f, timeout = 300) {
	let timerId: NodeJS.Timeout;

	return (...args: Parameters<f>) => {
		timerId && clearTimeout(timerId);
		timerId = setTimeout(() => func(...args), timeout);
	};
}

export function disableZoomOnTouchDevices() {
	if ('ontouchstart' in window) disableCallBack();

	function disableCallBack() {
		for (let eventName of ['gesturestart', 'dblclick']) {
			document.addEventListener(eventName, (e) => {
				e.preventDefault();
			});
		}
	}
}
