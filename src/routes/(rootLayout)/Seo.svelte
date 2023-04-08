<script lang="ts">
	import { routes } from '$lib/store';
	import { page } from '$app/stores';

	$: routeId = $page.route.id;

	let routes$ = Object.values($routes);
</script>

<svelte:head>
	{#if $page.status === 404}
		<title>Oops 💩</title>
	{:else}
		{#each routes$ as key, i}
			{@const { title, meta, href } = key}

			<!--TODO: even with this code I have to separate home route from rest ... why?? -->
			{#if i === 0 && routeId === '/'}
				<title>{routes$[0].title}</title>

				{@html routes$[0].meta}
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
