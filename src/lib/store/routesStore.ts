import IconHome from '$lib/Icons/NavIcons/IconHome.svelte';
import IconLogin from '$lib/Icons/NavIcons/IconLogin.svelte';
import IconPlans from '$lib/Icons/NavIcons/IconPlans.svelte';
import IconHomework from '$lib/Icons/NavIcons/IconHomework.svelte';
import IconClassroom from '$lib/Icons/NavIcons/IconClassroom.svelte';

import type { ComponentType } from 'svelte';
import { writable } from 'svelte/store';

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

const routesObj = {
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

const routesData = Object.values(routesObj);
export function getSeoString(url: URL) {
	const pathname = url.pathname;
	let matchingRoute = routesData[0] as RouteData;

	if (pathname !== '/')
		matchingRoute = routesData.slice(1).find((v) => {
			return pathname === v.routePath || pathname.startsWith(v.routePath + '/');
		}) as RouteData;

	if (!matchingRoute) return { seoString: '<title>Oops 💩</title>' };

	const href = url.href;
	const { title, description } = matchingRoute.meta;

	return {
		seoString: `
			<title>${title}</title> 
			<meta name="description" content="${description}"/>
			<meta property="og:description" content="${description}"/>
			<meta property="og:url" content="${href}">
			<link rel="canonical" href="${href}">
		`
	};
}
