<script>
  import { plansCardArray } from "$lib/Plans/plansCardArray.js";
  import PlansComponent from "$lib/Plans/PlansComponent.svelte";
</script>

<PlansComponent on:boop={(e) => console.log("😮", e.detail.message)} />
<!-- hasTransition={false}  -->
