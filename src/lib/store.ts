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
export const isLoggedIn = writable(false);
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
	title: string;
	isCurrent: boolean;
	// meta?: string;
	description?: string;
	icon?: ComponentType;
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
		title: 'Thinksolve.io 💫',
		isCurrent: false,
		description: 'Math and Physics Tutoring for the Modern Age.',
		// 	meta: ` <meta name="description" content="Math and Physics Tutoring for the Modern Age."/>
		// <meta property="og:url" content="https://thinksolve.io/"> <link rel="canonical" routePath="https://thinksolve.io/">
		// `,
		icon: IconHome
	},
	login: {
		name: 'Login',
		routePath: '/login',
		title: 'Login 🚀',
		isCurrent: false,
		description: 'Log in page.',
		// meta: `<meta name="description" content="Log in page."/>
		// <meta property="og:url" content="https://thinksolve.io/login"> <link rel="canonical" routePath="https://thinksolve.io/login">
		// `,
		icon: IconLogin
	},
	plans: {
		name: 'Plans',
		routePath: '/plans',
		title: 'Plans 💡',
		isCurrent: false,
		description: 'Choose between Classic or Mock session; book a time and date; pay now or later.',
		// 	meta: `<meta name="description" content="Choose between Classic or Mock session; book a time and date; pay now or later."/>
		// <meta property="og:url" content="https://thinksolve.io/plans"> <link rel="canonical" routePath="https://thinksolve.io/plans">
		// `,
		icon: IconPlans
	},

	homework: {
		name: 'Homework',
		routePath: '/homework',
		title: 'Homework 📚',
		isCurrent: false,
		description:
			'Click and submit your homework here; we accept all relevant file types for homework submission.',
		// 	meta: `<meta name="description" content="Click and submit your homework here; we accept all relevant file types for homework submission."/>
		// <meta property="og:url" content="https://thinksolve.io/homework"> <link rel="canonical" routePath="https://thinksolve.io/homework">
		// `,
		icon: IconHomework
	},
	classroom: {
		name: 'Classroom',
		routePath: '/classroom',
		title: 'Classroom 🍎',
		isCurrent: false,
		description:
			'You are on the classroom page! Hit join to enter, our scheduled session will start shortly.',
		// 	meta: `<meta name="description" content="You are on the classroom page! Hit join to enter, our scheduled session will start shortly. "/>
		// <meta property="og:url" content="https://thinksolve.io/classroom"> <link rel="canonical" routePath="https://thinksolve.io/classroom">
		// `,
		icon: IconClassroom
	},
	faq: {
		name: 'FAQ',
		routePath: '/faq',
		title: 'FAQ 🙋‍♀️',
		isCurrent: false
		// meta: `<meta og:url="https://thinksolve.io/faq" /> <link rel="canonical" routePath="https://thinksolve.io/faq">
		// `
	},
	stripe: {
		name: 'Stripe',
		routePath: '/stripe',
		title: 'Stripe 💰',
		isCurrent: false
	},
	physics: {
		name: 'physics',
		routePath: '/physics',
		title: 'physics 🚀',
		isCurrent: false
	},
	math: {
		name: 'math',
		routePath: '/math',
		title: 'math',
		isCurrent: false
	}
};

export const routes = writable<routesType>(routesObj);

// testing an array way to deal with the routes object
export const routes2 = writable<RouteData[]>(Object.values(routesObj));

const routesData = Object.values(routesObj);
export function getSeoString(pathname: string) {
	let matchingRoute = routesData[0] as RouteData;

	if (pathname !== '/')
		matchingRoute = routesData.slice(1).find((v) => {
			return pathname === v.routePath || pathname.startsWith(v.routePath + '/');
		}) as RouteData;

	if (!matchingRoute) return { seoString: '<title>Oops 💩</title>' };

	const fullUrl = `https://thinksolve.io${pathname}`;

	const seoString = `
		<title>${matchingRoute.title}</title> 
		<meta name="description" content="${matchingRoute.description}"/>
		<meta property="og:description" content="${matchingRoute.description}"/>
		<meta property="og:url" content="${fullUrl}">
		<link rel="canonical" routePath="${fullUrl}">
		`;

	return { seoString };
}
