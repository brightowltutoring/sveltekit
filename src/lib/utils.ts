import { browser } from '$app/environment';
import { isSafari } from '$lib/store/clientStore';
import { onDestroy, onMount } from 'svelte';
import { get } from 'svelte/store';

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

// Need to use JS to disable scrolling on firefox, since firefox does not support the :has() css pseudo-selector —— e.g. body:has(element){ overflow:hidden }, is the elegant css way of disabling scroll (for a given route containing a specific element) ——
export function disableScrollingOnPage(pathname: string) {
	onMount(() => {
		// navigator.userAgent.toLocaleLowerCase().includes('firefox') &&
		if (pathname === '/classroom' || '/pwa') {
			document.body.style.overflow = 'hidden';
		}
	});

	onDestroy(() => browser && (document.body.style.overflow = 'auto'));
}

// USE ACTIONS BELOW:
export function useInView(
	node?: HTMLElement,
	{
		onview = (target: Element) => console.log('i ❤️ slots'),
		once = true,
		vanilla = false,
		root = undefined,
		threshold = 0,
		margin = '0px'
	} = {}
) {
	const observer = new IntersectionObserver(handleIntersect, {
		root,
		threshold,
		rootMargin: margin
	});

	// when vanilla, this action should be attached to the body of the document, say

	if (node) observer.observe(node);
	if (!node && vanilla) {
		document.querySelectorAll('vanilla').forEach((el) => observer.observe(el));
	}

	function handleIntersect(ENTRIES: IntersectionObserverEntry[], OBSERVER: IntersectionObserver) {
		for (const entry of ENTRIES) {
			if (entry.isIntersecting) {
				onview(entry.target);
				once && OBSERVER.unobserve(entry.target);
			}
		}
	}

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
