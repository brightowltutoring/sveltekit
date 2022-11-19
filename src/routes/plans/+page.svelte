<script>
  import PlansComponent from "$lib/Plans/PlansComponent.svelte";
</script>

<PlansComponent on:boop={(e) => console.log("😮", e.detail.message)} />
<!-- <PlansComponent noTransition on:boop={(e) => console.log("😮", e.detail.message)} /> -->
