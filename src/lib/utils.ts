import { browser } from '$app/environment';
import { onMount, onDestroy } from 'svelte';
import { scale } from 'svelte/transition';
import { showLoginModal, showHomeworkModal, navAppClicked } from '$lib/store';

import UAParser from 'ua-parser-js';
import type { RequestEvent } from '@sveltejs/kit';

// replaces getOS() function since this now works on server-side alongside (layout) load function
export function userAgentFromRequestHeaders(event: RequestEvent) {
	const { request } = event;
	const userAgent = String(request.headers.get('user-agent'));
	const parser = new UAParser(userAgent);
	// const isMobile = parser.getDevice().type === 'mobile';
	// const isIphone = parser.getDevice().model?.toLowerCase() === 'iphone';
	const isIOS = parser.getOS().name?.toLowerCase() === 'ios';

	// console.log('request', request.headers);
	// console.log('isMobile server-side', isMobile);
	// console.log('isIphone', isIphone);
	// console.log('parser.getDevice()', parser.getOS());

	return {
		// isMobile,
		// isIphone,
		isIOS
	};
}

// svelte use action
export function clickOutside(node: HTMLElement, useThisAction = true) {
	if (!node || !useThisAction) return;

	document.addEventListener('click', dispatchClickOutsideEvent, true);

	return {
		destroy() {
			document.removeEventListener('click', dispatchClickOutsideEvent, true);
		}
	};

	function dispatchClickOutsideEvent(event) {
		let target = <HTMLElement>event.target;

		if (!node.contains(target)) {
			node.dispatchEvent(new CustomEvent('click_outside'));
		}
	}
}

interface clickOutside2Params {
	onClickOutside2: () => void;
	useThisAction?: boolean;
}

// svelte use action ... but without dispatching/handling custom event. Code on the node element is similar: i.e. 'use:clickOutside on:click_outside={() => alert('sofie sofie')}' vs 'use:clickOutside2={{onClickOutside2: () => alert('go duck duck')}}', with the latter being unified in a single element attribute
export function clickOutside2(node: HTMLElement, params: clickOutside2Params) {
	const { onClickOutside2, useThisAction = true } = params;

	if (!node || !useThisAction) return;
	//  .. if looping over many elements, it would be nice to switch the action off by passing some index level boolean

	document.addEventListener('click', dispatchOnClickOutside2, true);

	return {
		destroy() {
			document.removeEventListener('click', dispatchOnClickOutside2, true);
		}
	};

	function dispatchOnClickOutside2(event) {
		let target = <HTMLElement>event.target;

		if (!node.contains(target)) onClickOutside2();
	}
}

// TODO: dec11,2022: I just noticed that the logic of this function (when used inside Navitem.svelte & Navbar.svelte ) is possible with 'event delegation' technique ... i.e. attaching a click event listener on the entire documment, and filtering for event.target.node; might change this to that at a future date. ASIDE: The way I did it here is sveltier (less general) but in some sense more readable WITHIN this framework.
export function clearNavModals() {
	showLoginModal.set(false);
	showHomeworkModal.set(false);
	navAppClicked.set(false);
}

// Need to use JS to disable scrolling on firefox, since firefox does not support the :has() css pseudo-selector —— e.g. body:has(element){ overflow:hidden }, is the elegant css way of disabling scroll (for a given route containing a specific element) ——
export function disableScrollingOnPage(pathname: string) {
	onMount(() => {
		// navigator.userAgent.toLocaleLowerCase().includes('firefox') &&
		if (pathname === '/classroom' || '/pwa-home') {
			document.body.style.overflow = 'hidden';
		}
	});

	onDestroy(() => browser && (document.body.style.overflow = 'auto'));
}

//  inspired from 'https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript', but made into a 'factory' for easier use

// weird how I recreated a simplified version of sveltekit's cookie api .. lol ...but that is intended to work server side??
export const cookeh = {
	// found out hard way that some browser don't support special characters for 'name' ... so now sticking to regular letters (i.e. $isLoggedIn is not allowed as a string)
	set: function (name: string, value: string | boolean, seconds = 60 * 60 * 24) {
		return (document.cookie = `${name}=${value}; max-age=${seconds}; SameSite=None; Secure`);
	},
	get: function (name: string) {
		return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';
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
	// return () => {
	//   clearTimeout(timer);
	//   timer = setTimeout(func, timeout);
	// };
}

// UPDATE (mar28,2023): replaced with 'userAgentFromRequestHeaders()' since the state that it returns is done on the server-side, hence able to conditionally show UI without flash of content (getOS relies on client-side js 'navigator.userAgent')
// modified on nov29,2022 from: https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js
// TODO: might need to add 'browser &&' if this function is not called inside an onMount
// TODO: on xcode simulator the ipad 10th and ipad air 5th returns as 'macos' not 'ios'
export function getOS() {
	let userAgent = browser && navigator.userAgent;
	let platform = browser && navigator.platform;
	let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
	let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
	let iosPlatforms = ['iPhone', 'iPad', 'iPod'];
	let os = null;

	// if (macosPlatforms.indexOf(platform) !== -1) {
	if (macosPlatforms.includes(platform)) {
		os = 'Mac OS';
	} else if (iosPlatforms.includes(platform)) {
		os = 'iOS';
	} else if (windowsPlatforms.includes(platform)) {
		os = 'Windows';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
	} else if (/Linux/.test(platform)) {
		os = 'Linux';
	}

	// alert(os);
	return os;
}

export function disableZoomGestures() {
	for (let eventName of ['gesturestart', 'dblclick']) {
		browser &&
			document.addEventListener(eventName, (e) => {
				e.preventDefault();
				return false;
			});
	}
}

// this javascript implementation is largely replaced by the (tailwind) css 'pwa:' prefixer ... using custom tailwind config (under theme.extend.screens.pwa )
export async function isPWA() {
	return browser && window.matchMedia('(display-mode: standalone)').matches;
}

// custom easing functions
export function scaleYN(node, args) {
	return args.noTransition ? null : scale(node, args);
	// This conditionally returns scale or no transition
	// Alternatively can use the following code to produce the same effect:
	//  <div
	//     in:scale={{
	//       duration: noTransition ? 0 : 1000,
	//       delay: noTransition ? 0 : 100 * i,
	//       easing: elasticOut,
	//     }}
	//     >
	//   </div>
}

// export function moduloScale(node, {easing = elasticOut, duration = 1000}) {

//   return {
//     easing,
//     duration,
//     css: (t,u) =>
//     ` filter: hue-rotate(${10*u}turn) blur(${t*4}px);
//     `
//   }
// }

export function customEase(t) {
	// supercon function
	// let a = 0.344
	// let b = 1.4
	// let a = 1
	// let b = 2.7
	// return b*Math.exp(-a/t)

	// curtain effect created on: https://www.desmos.com/calculator/kr2w0zv092
	// return 2*Math.tanh(t)*Math.sin(8*t)

	let u = t;
	return (1 / 8) * (8 * u) * Math.sin(8 * u); // less dramatic takeoff

	// ... i think this reproduces sineOut svelte easing
	// let τ = 4
	// return Math.sin( (2 * Math.PI / τ ) * t );
	// with period of 4, goes from 0 to 1 when t∈[0,1]

	// step function
	// if (t < 0.3) return 0;
	// if (t < 0.6) return 0.3;
	// if (t < 0.9) return 0.6;
	// return 1;
}

// { delay = 0, easing = elasticOut, duration = 3000 }
export function customFade(node, { delay = 0, duration = 3000 }) {
	return {
		delay,
		// easing,
		duration,
		css: (t, u) =>
			` opacity: ${0.8 * u + t};
        filter: hue-rotate(${0.15 * u}turn) 
                blur(${u}px);
      `
	};
}

// { X = 0, Y = -100, easing = quintOut, duration = 300 }
export function slider(node, { X = 0, Y = -100, duration = 300 }) {
	return {
		X,
		Y,
		// easing,
		duration,
		css: (t, u) =>
			` transform: translate(${X * u}px, ${Y * u}px);
        opacity: ${t};
      `
	};
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
