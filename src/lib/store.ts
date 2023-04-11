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

type RouteData = {
	name: string;
	href: string;
	title: string;
	isCurrent: boolean;
	meta?: string;
	icon?: ComponentType;
};

export type routesType = Record<
	'home' | 'login' | 'plans' | 'homework' | 'classroom' | 'faq' | 'stripe' | 'physics' | 'math',
	RouteData
>;

const routesObj = {
	home: {
		name: 'Home',
		href: '/',
		title: 'Thinksolve.io 💫',
		isCurrent: false,
		meta: `<meta name="description" content="Math and Physics Tutoring for the Modern Age."/>
    <meta property="og:url" content="https://thinksolve.io/">`,
		icon: IconHome
	},
	login: {
		name: 'Login',
		href: '/login',
		title: 'Login 🚀',
		isCurrent: false,
		meta: `<meta name="description" content="Log in page."/> 
		<meta property="og:url" content="https://thinksolve.io/login">`,
		icon: IconLogin
	},
	plans: {
		name: 'Plans',
		href: '/plans',
		title: 'Plans 💡',
		isCurrent: false,
		meta: `<meta name="description" content="Choose between Classic or Mock session; book a time and date; pay now or later."/>
    <meta property="og:url" content="https://thinksolve.io/plans">`,
		icon: IconPlans
	},

	homework: {
		name: 'Homework',
		href: '/homework',
		title: 'Homework 📚',
		isCurrent: false,
		meta: `<meta name="description" content="Click and submit your homework here; we accept all relevant file types for homework submission."/>
    <meta property="og:url" content="https://thinksolve.io/homework">`,
		icon: IconHomework
	},
	classroom: {
		name: 'Classroom',
		href: '/classroom',
		title: 'Classroom 🍎',
		isCurrent: false,
		meta: `<meta name="description" content="You are on the classroom page! Hit join to enter, our scheduled session will start shortly. "/>
    <meta property="og:url" content="https://thinksolve.io/classroom">`,
		icon: IconClassroom
	},
	faq: {
		name: 'FAQ',
		href: '/faq',
		title: 'FAQ 🙋‍♀️',
		isCurrent: false,
		meta: `<meta og:url="https://thinksolve.io/faq" />`
	},
	stripe: {
		name: 'Stripe',
		href: '/stripe',
		title: 'Stripe 💰',
		isCurrent: false
	},
	physics: {
		name: 'physics',
		href: '/physics',
		title: 'physics 🚀',
		isCurrent: false
	},
	math: {
		name: 'math',
		href: '/math',
		title: 'math',
		isCurrent: false
	}
};

export const routes = writable<routesType>(routesObj);

// Experimental and alternate code below

// testing an array way to deal with the routes object
export const routes2 = writable<RouteData[]>(Object.values(routesObj));

// testing an map way to deal with the first key-value level of routes object
type routesMapType = Map<string, RouteData>;
// type routesMapType = Map<'home' | 'login' | 'plans' | 'homework' | 'classroom' | 'faq' | 'stripe' | 'physics' | 'math', RouteData>;

export const routesMap = writable<routesMapType>(new Map(Object.entries(routesObj)));

// export interface routesType {
// 	home: RouteData;
// 	login: RouteData;
// 	plans: RouteData;
// 	homework: RouteData;
// 	classroom: RouteData;
// 	faq?: RouteData;
// 	stripe?: RouteData;
// 	physics?: RouteData;
// 	math?: RouteData;
// }
