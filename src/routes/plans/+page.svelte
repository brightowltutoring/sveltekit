<script>
  import Modal from "$lib/Wrappers/Modal.svelte";
  import PlansComponent from "$lib/Plans/PlansComponent.svelte";
  let showMe = false;
</script>

<!-- {#if !showMe} -->
<PlansComponent on:boop={(e) => console.log("😮", e.detail.message)} />
<!-- {/if} -->
<!-- <PlansComponent noTransition on:boop={(e) => console.log("😮", e.detail.message)} /> -->

<!-- TODO: testing -->
<!-- <button
  on:click={() => {
    showMe = true;
  }}>show me</button
>
<Modal bind:showModal={showMe}>
  <iframe
    class="sm:h-5/6 w-full h-full bg-red-400 relative "
    src="https://calendly.com/thinksolve/mock-stripe?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1&primary_color=2aa5d6"
    frameborder="0"
  />
</Modal> -->
