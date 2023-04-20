<!--  This a modified version of my original implementation of SEO ... based on checking with JS off in chrome devtools this is implemented on the server! -->
<!-- Pro: simpler and more consolidated than handling 'event.request.url.pathname', passing from layout.server.ts to layout.svelte, AND doesnt break the '+error.svelte' when navigating to faulty path  -->

<script lang="ts">
	import { routes } from '$lib/store';
	import { page } from '$app/stores';

	let routes$ = Object.values($routes);
	// $: routeId = $page.route.id;
	$: pathname = $page.url.pathname;
	$: fullUrl = `https://thinksolve.io${pathname}`;
	// $: console.log('fullUrl', fullUrl);

	const meta = (title: string, description: string | undefined, fullUrl: string) => `
					<title>${title}</title> 
					<meta name="description" content="${description}"/>
					<meta property="og:description" content="${description}"/>
					<meta property="og:url" content="${fullUrl}">
					<link rel="canonical" href="${fullUrl}">
				`;
</script>

<svelte:head>
	{#if $page.status === 404}
		<title>Oops 💩</title>
	{:else}
		{#each routes$ as route, i}
			{#if i === 0 && pathname === '/'}
				{@html `${meta(route.title, route.description, fullUrl)}`}
			{/if}

			{#if i !== 0 && pathname?.includes(route.href)}
				{@html `${meta(route.title, route.description, fullUrl)}`}
			{/if}
		{/each}
	{/if}
</svelte:head>

<!--TODO: old way: -->
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

<!-- Current SEO implementation -->
<!-- 
// +layout.server.ts
import { getTitleAndMetaData } from '$lib/store';
export async function load(event) {
	const { titleAndMeta } = getTitleAndMetaData(event.url.pathname);
	return {  titleAndMeta };
}

// +layout.svelte
<script>
	export let data
</script>
<svelte:head>
	{@html data.titleAndMeta}
</svelte:head>

// store.ts
const routesData = Object.values(routesObj);
export function getTitleAndMetaData(pathname: string) {
	let matchingRoute = routesData[0] as RouteData;

	if (pathname !== '/')
		matchingRoute = routesData.slice(1).find((v) => pathname.includes(v.href)) as RouteData;

	if (!matchingRoute) return { titleAndMeta: '' };

	const fullUrl = `https://thinksolve.io${pathname}`;

	const titleAndMeta = `
		<title>${matchingRoute.title}</title> 
		<meta name="description" content="${matchingRoute.description}"/>
		<meta property="og:description" content="${matchingRoute.description}"/>
		<meta property="og:url" content="${fullUrl}">
		<link rel="canonical" href="${fullUrl}">
		`;

	return { titleAndMeta };
}

 -->
