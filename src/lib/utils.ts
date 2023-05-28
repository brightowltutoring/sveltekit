import { isSafari, isDarkMode } from '$lib/store/clientStore';
import { onMount } from 'svelte';
import { get } from 'svelte/store';

//  inspired from 'https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript', but made into a 'factory' for easier use. Might add serializer code from npm cookie inside my set method.
export const cookeh = {
	set: function (
		name: string,
		value: string | boolean,

		{ seconds = 60 * 60 * 24, secure = !get(isSafari) } = {}
	) {
		document.cookie = `${name}=${value}; max-age=${seconds}; SameSite=None${
			secure ? '; Secure' : ''
		}`;
		console.log(`${name} cookie set; secure: ${secure}`);
	},

	get: function (name: string) {
		const match = document.cookie.match(`${name}=(.*?)(;|$)`);
		return match ? decodeURIComponent(match[1]) : '';
	},

	eat: function (...names: string[]) {
		names.forEach((name) => (document.cookie = `${name}=; max-age=0;`));
	}
};

export async function setIsPwaCookie() {
	// cookeh.eat('isPWA'); //testing; keep this commented out unless needed!
	onMount(() => {
		if (cookeh.get('isPWA')) return;

		const isPWA = window.matchMedia('(display-mode: standalone)').matches;
		isPWA && cookeh.set('isPWA', isPWA);
	});
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
	onMount(() => {
		if ('ontouchstart' in window) disableCallBack();

		function disableCallBack() {
			for (let eventName of ['gesturestart', 'dblclick']) {
				document.addEventListener(eventName, (e) => {
					e.preventDefault();
				});
			}
		}
	});
}

// Need to use JS to disable scrolling on firefox, since firefox does not support the :has() css pseudo-selector —— e.g. body:has(element){ overflow:hidden }, is the elegant css way of disabling scroll (for a given route containing a specific element) ——
export function disableScrollingOnPage(pathname: string) {
	onMount(() => {
		const originalOverflow = document.body.style.overflow;
		// navigator.userAgent.toLocaleLowerCase().includes('firefox') &&

		if (pathname === '/classroom' || '/pwa') {
			document.body.style.overflow = 'hidden';
		}

		return () => (document.body.style.overflow = originalOverflow);
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
	const options = {
		root,
		threshold,
		rootMargin: margin
	};
	const observer = new IntersectionObserver(handleIntersect, options);

	if (node) observer.observe(node);
	if (!node && vanilla) {
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
