<script>
  import { routes } from "$lib/store";
  import { page } from "$app/stores";
</script>

<svelte:head>
  {#if $page.status !== 200}
    <title>Oops 💩</title>
  {:else}
    {@const slashlessRoute = $page.route.id && $page.route.id.slice(1)}

    {#if slashlessRoute == ""}
      <title>{$routes.home.title}</title>

      {@html $routes.home.meta}
    {:else}
      {#each Object.keys($routes).slice(1) as key}
        {@const title = $routes[key].title}

        {#if slashlessRoute.startsWith(key)}
          <title>{title}</title>

          {#if $routes[key].meta}
            {@html $routes[key].meta}
          {/if}
        {/if}
      {/each}
    {/if}
  {/if}
</svelte:head>
