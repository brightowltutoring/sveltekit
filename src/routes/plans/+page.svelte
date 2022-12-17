<script>
  import PlansSection from "$lib/Plans/PlansSection.svelte";
</script>

<PlansSection on:boop={(e) => console.log("😮", e.detail.message)} />

<!-- <PlansSection
  noTransition
  on:boop={(e) => console.log("😮", e.detail.message)}
/> -->
