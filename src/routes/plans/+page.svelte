<script>
  import PlansComponent from "$lib/Plans/PlansComponent.svelte";
</script>

<PlansComponent
  on:boop={(e) => {
    console.log("this message collected on /plans", e.detail.message);
  }}
/>
<!-- <PlansComponent hasTransition={false} /> -->
