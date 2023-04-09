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
