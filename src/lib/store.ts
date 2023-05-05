import { writable, derived, get } from 'svelte/store';

// alternative to globalThis variables
export const magicLinkInputVisible$ = writable(false);
export const popUpOnceBoolean$ = writable(false);
export const submitOnce$ = writable(false);

// not used as much .. but keeping just in case
export const isDarkMode = writable(false);

// TODO: added jan 22 when moving function from +layout.svelte to SigninWithEmailLink.ts; may delete
export const loggedInEmail = writable('');

export const contactLinkClicked = writable(false);

// these are intialized set at the layout level; isLoggedIn can be toggled in other components
export const isLoggedIn = writable(false);
export const isPWA = writable(false);
export const isIOS = writable(false);
export const isSafari = writable(false);

export const lastScrollY = writable(0);
export const scrollY = writable(0);

let delayedScrollY = get(scrollY);
export const instDeltaY = derived(scrollY, ($scrollY) => {
	setTimeout(() => {
		delayedScrollY = get(scrollY);
	}, 50);

	return $scrollY - delayedScrollY;
});

export const innerWidth = writable(0);
export const lessThan768 = derived(innerWidth, ($innerWidth) => $innerWidth < 768);

// Could do something like '$innerWidth = window.innerWidth' inside .svelte file, however value would be updating continuously
export function setInnerWidthViaMatchMedia(pixelWidth = 768) {
	innerWidth.set(window.innerWidth);
	console.log(`LANDED at ${get(innerWidth)}`);

	window
		.matchMedia(`(max-width: ${pixelWidth}px)`)
		.addEventListener('change', handleInnerWidthChange);

	function handleInnerWidthChange(event: MediaQueryListEvent) {
		innerWidth.set(window.innerWidth);
		event.matches
			? console.log(`UNDER ${pixelWidth}px 🙈`)
			: console.log(`OVER ${pixelWidth}px 😄`);
	}
}

export const showLoginModal = writable(false);
export const showHomeworkModal = writable(false);
export const navAppClicked = writable(false);

import IconHome from '$lib/Icons/NavIcons/IconHome.svelte';
import IconLogin from '$lib/Icons/NavIcons/IconLogin.svelte';
import IconPlans from '$lib/Icons/NavIcons/IconPlans.svelte';
import IconHomework from '$lib/Icons/NavIcons/IconHomework.svelte';
import IconClassroom from '$lib/Icons/NavIcons/IconClassroom.svelte';

import type { ComponentType } from 'svelte';

export type RouteData = {
	name: string;
	routePath: string;
	isCurrent: boolean;
	description?: string;
	title?: string;
	icon?: ComponentType;
	meta: {
		title: string;
		description?: string;
	};
	modal?: boolean;
};

export type routesType = Record<
	'home' | 'login' | 'plans' | 'homework' | 'classroom' | 'faq' | 'stripe' | 'physics' | 'math',
	RouteData
>;

export const routesObj = {
	home: {
		name: 'Home',
		routePath: '/',
		isCurrent: false,
		meta: {
			title: 'Thinksolve.io 💫',
			description: 'Math and Physics Tutoring for the Modern Age.'
		},
		icon: IconHome
	},
	login: {
		name: 'Login',
		routePath: '/login',
		isCurrent: false,
		meta: {
			title: 'Login 🚀',
			description: 'Log in page.'
		},
		icon: IconLogin
	},
	plans: {
		name: 'Plans',
		routePath: '/plans',
		isCurrent: false,
		meta: {
			title: 'Plans 💡',
			description: 'Choose between Classic or Mock session; book a time and date; pay now or later.'
		},

		icon: IconPlans
	},

	homework: {
		name: 'Homework',
		routePath: '/homework',
		isCurrent: false,
		meta: {
			title: 'Homework 📚',
			description:
				'Click and submit your homework here; we accept all relevant file types for homework submission.'
		},

		icon: IconHomework
	},
	classroom: {
		name: 'Classroom',
		routePath: '/classroom',
		isCurrent: false,

		meta: {
			title: 'Classroom 🍎',
			description:
				'You are on the classroom page! Hit join to enter, our scheduled session will start shortly.'
		},

		icon: IconClassroom
	},
	faq: {
		name: 'FAQ',
		routePath: '/faq',
		isCurrent: false,
		meta: { title: 'FAQ 🙋‍♀️' }
	},
	stripe: {
		name: 'Stripe',
		routePath: '/stripe',
		meta: { title: 'Stripe 💰' },
		isCurrent: false
	},
	physics: {
		name: 'physics',
		routePath: '/physics',
		meta: { title: 'physics 🚀' },
		isCurrent: false
	},
	math: {
		name: 'math',
		routePath: '/math',
		meta: { title: 'math' },
		isCurrent: false
	}
};

export const routes = writable<routesType>(routesObj);

// testing an array way to deal with the routes object
export const routes2 = writable<RouteData[]>(Object.values(routesObj));

const routesData = Object.values(routesObj);
export function getSeoString(url: URL) {
	const pathname = url.pathname;
	const fullUrl = url.href;

	let matchingRoute = routesData[0] as RouteData;

	if (pathname !== '/')
		matchingRoute = routesData.slice(1).find((v) => {
			return pathname === v.routePath || pathname.startsWith(v.routePath + '/');
		}) as RouteData;

	if (!matchingRoute) return { seoString: '<title>Oops 💩</title>' };

	const seoString = `
		<title>${matchingRoute.meta?.title}</title> 
		<meta name="description" content="${matchingRoute.meta.description}"/>
		<meta property="og:description" content="${matchingRoute.meta.description}"/>
		<meta property="og:url" content="${fullUrl}">
		<link rel="canonical" routePath="${fullUrl}">
		`;

	return { seoString };
}
