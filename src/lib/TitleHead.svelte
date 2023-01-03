<script>
  import { page } from "$app/stores";
  import { routes } from "$lib/store";
</script>

<svelte:head>
  <link rel="manifest" href="/manifest.json" />

  {#if $page.status == 200}
    {@const slashlessRoute = $page.route.id.slice(1)}

    {#if slashlessRoute == ""}
      <title>{$routes.home.title}</title>

      {@html $routes.home.meta}
      <!-- meta tag now included in store object -->
      <!-- for some reason without svelte's '@html', the meta tags break upon reloading certain routes (like plans) -->
    {:else}
      {#each Object.keys($routes).slice(1) as key}
        {@const title = $routes[key].title}

        {#if slashlessRoute.startsWith(key)}
          <title>{title}</title>
          <!-- //TODO: meta tags are not attaching uniquely on route changes -->
          {#if $routes[key].meta}
            {@html $routes[key].meta}
          {/if}
        {/if}
      {/each}
    {/if}
  {:else}
    <!-- {:else if $page.status == 404} -->
    <title>Oops 💩</title>
  {/if}
</svelte:head>
