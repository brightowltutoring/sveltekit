<!-- Decided to create this one, complex-ish, component rather than N '+page.js' files from which to export route-specific title data ... For prototyping (and future changes) it would be a nightmare otherwise. The title updates don't seem slow, so.. -->
<script>
  import { page } from "$app/stores";
  import { routes } from "$lib/store";
</script>

{#if $page.status == 200}
  {@const slashlessRoute = $page.route.id.slice(1)}
  <!-- e.g. /plans becomes plans -->

  {#if slashlessRoute == ""}
    <title>{$routes.home.title}</title>
    <meta
      name="description"
      content="Math and Physics Tutoring for the Modern Age."
    />
    <meta og:url="https://thinksolve.io/" />
    <!-- METHOD 1: -->
  {:else if Object.keys($routes).includes(slashlessRoute)}
    <title>{$routes[slashlessRoute].title}</title>
    <!-- {:else} -->
    <!-- METHOD 2: -->
    <!-- i.e. I have removed the 'home' key -->
    <!-- {@const homeLessKeys = Object.keys($routes).slice(1)} -->
    <!-- {@const matchIndex = homeLessKeys.indexOf(slashlessRoute)} -->
    <!-- {@const titulo = $routes[homeLessKeys[matchIndex]].title} -->

    <!-- {@const matchKey = Object.keys($routes)
      .slice(1)
      .find((key) => key == slashlessRoute)} -->
    <!-- {@const titulo = $routes[matchKey].title} -->

    <!-- METHOD 3: -->
    <!-- {#each homeLessKeys as key}
      {@const title = $routes[key].title}

      {#if slashlessRoute.startsWith(key)}
        <title>{title}</title>
      {/if}
    {/each} -->
  {/if}
{:else if $page.status == 404}
  <title>Oops 💩</title>
{:else}
  <title> Unexpected query ... </title>
{/if}
