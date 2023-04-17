<!-- This entire implementation was wrong, as this "SEO" logic is only instantiated on the client-side!! TODO: Logic explained at bottom of this page-->

<script lang="ts">
	import { routes /* routes2  */ } from '$lib/store';
	import { page } from '$app/stores';

	let routes$ = Object.values($routes);
	$: routeId = $page.route.id;
</script>

<!-- new way: -->
<svelte:head>
	{#if $page.status === 404}
		<title>Oops 💩</title>
	{:else}
		{#each routes$ as key, i}
			{@const { title, meta, href } = key}

			{#if i === 0 && routeId === '/'}
				<title>{routes$[i].title}</title>

				{@html routes$[i].meta}
			{/if}

			{#if routeId?.includes(href)}
				<title>{title}</title>

				{#if meta}
					{@html meta}
				{/if}
			{/if}
		{/each}
	{/if}
</svelte:head>

<!-- old way: -->
<!-- <svelte:head>
	{#if $page.status === 404}
		<title>Oops 💩</title>
	{:else if routeId?.slice(1) === ''}
		<title>{$routes2[0].title}</title>

		{@html $routes2[0].meta}
	{:else}
		{#each $routes2 as key}
			{@const { title, meta, href } = key}

			{#if routeId?.includes(href)}
				<title>{title}</title>

				{#if meta}
					{@html meta}
				{/if}
			{/if}
		{/each}
	{/if}
</svelte:head> -->

<!-- TODO: this code below explains idea now -->
<!-- 
// +layout.server.ts
import { getRouteMetaData } from '$lib/store';
export async function load(event) {
	const { title, meta } = getRouteMetaData(event.url.pathname); // for seo

	return {  title, meta };
}

// +layout.svelte
export let data;
$: ({ title, meta } = data);

<svelte:head>
	<title>{title}</title>
	{@html meta}
</svelte:head>

// store.ts
type RouteData = {
	name: string;
	href: string;
	title: string;
	isCurrent: boolean;
	meta?: string;
	icon?: ComponentType;
	modal?: boolean;
};
const routesObj = {
	home: {
		name: 'Home',
		href: '/',
		title: 'Thinksolve.io 💫',
		isCurrent: false,
		meta: ` <meta name="description" content="Math and Physics Tutoring for the Modern Age."/>
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
// ...
};

export function getRouteMetaData(pathname: string) {
	const routes = Object.values(routesObj);
	const matchingRoute = routes.find((v) => v.href === pathname) as RouteData;

	if (!matchingRoute) return { title: '', meta: '' };

	return {
		title: matchingRoute.title,
		meta: matchingRoute.meta
	};
} -->
