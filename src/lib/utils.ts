import { showLoginModal, showHomeworkModal, navAppClicked } from '$lib/store';
import { onMount, onDestroy } from 'svelte';
import { browser } from '$app/environment';
// the modules above cannot be dynamically imported in functions below, without failure

import type { RequestEvent } from '@sveltejs/kit';
import UAParser from 'ua-parser-js';

export async function postDummyTextFileToGoogleDrive(name: string) {
	const { PUBLIC_UPLOAD_ENDPOINT } = await import('$env/static/public');
	const data = new FormData();
	const file = new File([`${name}`], `${name}.txt`, {
		type: 'text/plain'
	});
	data.append('file', file);

	await fetch(PUBLIC_UPLOAD_ENDPOINT, {
		method: 'POST',
		body: data
	});
}

export function isPwaFromCookieOrUrl({ cookies, request: { url } }: RequestEvent) {
	let isPWA = false;
	const cookieIsPWA = cookies.get('isPWA');

	if (cookieIsPWA !== undefined) {
		isPWA = cookieIsPWA === 'true';
	} else {
		// isPWA = url.startsWith('/pwa/') || url === '/pwa';
		isPWA = url.includes('pwa-home');
	}

	return { isPWA /*  url: String(url)  */ };
}

// client-side navigator.userAgent results in flash of content .. this is better
export function userAgentFromRequestHeaders(event: RequestEvent) {
	const { request } = event;
	const userAgent = String(request.headers.get('user-agent'));
	const parser = new UAParser(userAgent);
	const isMobile = parser.getDevice().type === 'mobile';
	const isIOS = parser.getOS().name?.toLowerCase() === 'ios';
	// const isIphone = parser.getDevice().model?.toLowerCase() === 'iphone';

	return {
		isMobile,
		isIOS
		// isIphone,
	};
}

// TODO: dec11,2022: I just noticed that the logic of this function (when used inside Navitem.svelte & Navbar.svelte ) is possible with 'event delegation' technique ... i.e. attaching a click event listener on the entire documment, and filtering for event.target.node; might change this to that at a future date. ASIDE: The way I did it here is sveltier (less general) but in some sense more readable WITHIN this framework.
export async function clearNavModals() {
	showLoginModal.set(false);
	showHomeworkModal.set(false);
	navAppClicked.set(false);
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
	const name = 'isPWA';
	// cookeh.eat(name);
	if (cookeh.get(name)) return;

	const isPWA = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
	cookeh.set(name, isPWA, 60 * 60 * 24 * 30);
}

//  inspired from 'https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript', but made into a 'factory' for easier use. Might add serializer code from npm cookie inside my set method.
export const cookeh = {
	// found out hard way that some browser don't support special characters for 'name' ... so now sticking to regular letters (i.e. $isLoggedIn is not allowed as a string)
	set: function (name: string, value: string | boolean, seconds = 60 * 60 * 24) {
		return (document.cookie = `${name}=${value}; max-age=${seconds}; SameSite=None; Secure`);
	},
	get: function (name: string) {
		// return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';

		const match = document.cookie.match(`${name}=(.*?)(;|$)`);
		return match ? decodeURIComponent(match[1]) : '';
	},

	eat: function (name: string) {
		return (document.cookie = name + '=; max-age=0;');
	}
};

// debounce from https://www.freecodecamp.org/news/javascript-debounce-example/; TODO: why is 'args / func.apply(this, args)' syntax necessary
export function debounce(func, timeout = 300) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}

export function disableZoomGestures() {
	for (let eventName of ['gesturestart', 'dblclick']) {
		document.addEventListener(eventName, (e) => {
			e.preventDefault();
			return false;
		});
	}
}

// As of nov18 2022, dynamically importing css failed for dropzone.css when combining with InView.svelte; this seems to be a known bug with vite (https://github.com/vitejs/vite/issues/4237; I updated vite as well) and 'npm run prod' as things works fine on 'npm run dev'. Either way the code here is straightforward, vanilla way of achieving dynamic import of js/css should module bundlers fail awkwardly.
export function cssToHead(id = 'dropzoneCSS', path = '/dropzone.css') {
	if (!document.getElementById(id)) {
		const element = document.createElement('link');
		element.id = id;
		element.href = path;
		element.rel = 'stylesheet';
		document.head.appendChild(element);
	}
}
export function jsToHead(id = 'calendlyJS', path = 'external-website.com/calendly.js') {
	if (!document.getElementById(id)) {
		const element = document.createElement('script');
		element.id = id;
		element.src = path;
		element.type = 'text/javascript';
		document.head.appendChild(element);
	}
}
