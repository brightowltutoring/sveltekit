<script>
  import LazyMount from "$lib/Wrappers/LazyMount.svelte";
  // import PlansSection from "$lib/Plans/PlansSection.svelte";
</script>

<LazyMount Import={() => import("$lib/Plans/PlansSection.svelte")} />

<!-- <PlansSection on:boop={(e) => console.log("😮", e.detail.message)} /> -->
<!-- <PlansSection on:boop={(e) => console.log("😮", e.detail.message)} /> -->

<!-- <PlansSection
  noTransition
  on:boop={(e) => console.log("😮", e.detail.message)}
/> -->
