<!--  This a modified version of my original implementation of SEO ... based on checking with JS off in chrome devtools this is implemented on the server! -->
<!-- Pro: simpler and more consolidated than handling 'event.request.url.pathname', passing from layout.server.ts to layout.svelte, AND doesnt break the '+error.svelte' when navigating to faulty path  -->

<script lang="ts">
	import { routes, type RouteData } from '$lib/store/routesStore';
	import { page } from '$app/stores';

	let routes$ = Object.values($routes);

	$: pathname = $page.url.pathname;
	$: fullUrl = $page.url.href;

	// this is what gets returned in <svelte:head> below
	$: seoString = getSeoString(pathname);

	function getSeoString(pathname: string) {
		let matchingRoute = routes$[0];

		if (pathname !== '/')
			matchingRoute = routes$.slice(1).find((v) => pathname.includes(v.routePath)) as RouteData;

		const {
			meta: { title, description }
		} = matchingRoute;

		return ` 	<title>${title}</title> 
					<meta name="description" content="${description}"/>
					<meta property="og:description" content="${description}"/>
					<meta property="og:url" content="${fullUrl}">
					<link rel="canonical" href="${fullUrl}">
				`;
	}
</script>

<svelte:head>
	{#if $page.status === 404}
		<title>Oops 💩</title>
	{:else}
		{@html `${seoString}`}
	{/if}
</svelte:head>
