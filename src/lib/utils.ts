import { isDarkMode } from '$lib/store/clientStore';
import { page } from '$app/stores';
import { onMount } from 'svelte';
import { get } from 'svelte/store';
// import { browser } from '$app/environment';
export const is_client = typeof window !== 'undefined'; // framework agnostic version of 'browser'

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

//  inspired from 'https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript', but made into a 'factory' for easier use. Might add serializer code from npm cookie inside my set method.
export const cookeh = {
	set: function (
		name: string,
		value: string | boolean,

		{ seconds = 60 * 60 * 24, secure = !get(page).data.isSafari } = {}
		// { seconds = 60 * 60 * 24, secure = !get(isSafari) } = {}
	) {
		if (!is_client) return;

		document.cookie = `${name}=${value}; max-age=${seconds}; SameSite=None${
			secure ? '; Secure' : ''
		}`;
		console.log(`${name} cookie set; secure: ${secure}`);
	},

	get: function (name: string) {
		if (!is_client) return;
		const match = document.cookie.match(`${name}=(.*?)(;|$)`);
		return match ? decodeURIComponent(match[1]) : '';
	},

	eat: function (...names: string[]) {
		if (!is_client) return;
		names.forEach((name) => (document.cookie = `${name}=; max-age=0;`));
	}
};

export async function setIsPwaCookie() {
	if (!is_client) return;

	if (cookeh.get('isPWA')) return;

	const isPWA = window.matchMedia('(display-mode: standalone)').matches;
	isPWA && cookeh.set('isPWA', isPWA);
}

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
	if (!is_client) return;

	if ('ontouchstart' in window) {
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
		// const originalOverflow = document.body.style.overflow;
		// navigator.userAgent.toLocaleLowerCase().includes('firefox') &&

		if (pathname === '/classroom' || '/pwa') {
			document.body.style.overflow = 'hidden';
		}

		return () => (document.body.style.overflow = 'auto');
		// return () => (document.body.style.overflow = originalOverflow);
	});
}

// USE ACTIONS BELOW:
export function useInView(
	node?: HTMLElement,
	{
		onview = (target: Element) => console.log('i ❤️ slots'),
		once = true,
		vanilla = undefined as string | undefined,
		root = undefined,
		threshold = 0,
		margin = '0px'
	} = {}
) {
	const options = { root, threshold, rootMargin: margin };
	const observer = new IntersectionObserver(handleIntersect, options);

	if (node) observer.observe(node);
	if (!node && vanilla) {
		// if (!is_client) return;
		document.querySelectorAll(vanilla).forEach((el) => observer.observe(el));
		// document.querySelectorAll(`${vanilla}`).forEach((el) => observer.observe(el));
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

// useful action when wanting to do onclick on a non-button element, and want to avoid a11y complaint. Currently haven't found a nice way to reproduce the svelte event modifiers like '|self'
type EventTypes = Event | KeyboardEvent;
type HandlerType = (event: EventTypes) => void;
export function clickOrKeydown(node: HTMLElement, handler: HandlerType) {
	node.addEventListener('click', handleClickOrKeydown);
	node.addEventListener('keydown', handleClickOrKeydown);

	function handleClickOrKeydown(event: EventTypes) {
		if (event.type === 'keydown' || event.type === 'click') handler(event);
	}

	return {
		destroy() {
			node.removeEventListener('click', handleClickOrKeydown);
			node.removeEventListener('keydown', handleClickOrKeydown);
		}
	};
}

// NOTE: In the vanilla case, I would have to do:
// let inView;

// onMount(() => {
// 	inView = useInView(undefined, {
// 		vanilla: 'IMG'
// 	});

// 	return () => inView.destroy();
// });

// OR do:
// let inView =
// 	browser &&
// 	useInView(undefined, {
// 		vanilla: 'IMG'
// 	});

// onDestroy(() => {
// 	inView && inView.destroy();
// });

export function inDarkOutOriginal() {
	onMount(() => {
		let initiallyInLightmode = !get(isDarkMode);
		document.documentElement.classList.add('dark-mode');
		isDarkMode.set(true);

		return () => {
			if (initiallyInLightmode) {
				isDarkMode.set(false);
				document.documentElement.classList.remove('dark-mode');
			}
		};
	});
}

export function cssToHead(id = 'dropzoneCSS', path = '/dropzone.css') {
	if (!is_client) return;

	if (!document.getElementById(id)) {
		const element = document.createElement('link');
		element.id = id;
		element.href = path;
		element.rel = 'stylesheet';
		document.head.appendChild(element);
	}
}
export function jsToHead(id = 'calendlyJS', path = 'external-website.com/calendly.js') {
	if (!is_client) return;

	if (!document.getElementById(id)) {
		const element = document.createElement('script');
		element.id = id;
		element.src = path;
		element.type = 'text/javascript';
		document.head.appendChild(element);
	}
}

import { PUBLIC_UPLOAD_ENDPOINT } from '$env/static/public';

export async function sendDummyTextFileToGoogleDrive(name: string) {
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
