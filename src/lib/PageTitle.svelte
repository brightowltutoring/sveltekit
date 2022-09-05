<script>
    import { page } from '$app/stores'	
    import { routes
    // , routesKeysArray 
    } from '$lib/store.js'
</script>


<svelte:head>
	{#each Object.keys($routes) as key }
        {#if $page.routeId == "" }
            <title>{ $routes.home.title }  </title>
        {:else if $page.routeId == key }
            <title>{ $routes[ key ].title } </title>
		{/if}
	{/each}

</svelte:head>


