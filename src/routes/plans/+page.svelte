<script>
  // $page.route.id.slice(1)
  import { page } from "$app/stores";
  import { routes } from "$lib/store"; // used in svelte:tag
  import PlansSection from "$lib/Plans/PlansSection.svelte";
</script>

<svelte:head>
  {@html $routes[$page.route.id.slice(1)].meta}
</svelte:head>

<PlansSection />
<!-- <PlansSection on:boop={(e) => console.log("😮", e.detail.message)} /> -->

<!-- <PlansSection
  noTransition
  on:boop={(e) => console.log("😮", e.detail.message)}
/> -->

<!-- DEC 18 2022: for routes of a single component, makes sense to not lazy mount the component and allow the background prerendering to do it's thing  -->
<!-- <script>
  import LazyMount from "$lib/Wrappers/LazyMount.svelte";
</script>
<LazyMount Import={() => import("$lib/Plans/PlansSection.svelte")} /> -->
