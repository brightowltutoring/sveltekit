<script>
    import PageTransitions from '$lib/PageTransitions.svelte';
    import { bgColour } from '$lib/store.js'
    let pageColor = bgColour.etc  


    // import { onMount } from 'svelte'
	// $: onMount(() => {
    //     body.style.color = "red"
	// })
    
</script>

<!-- <div class="flex h-[400vh]" style:background={pageColor}>  -->
<!-- <PageTransitions >
    <div class="flex  {pageColor} h-[400vh]"> 
        Etcetera
    </div>    
</PageTransitions> -->
<div class="flex justify-center items-center {pageColor} h-[400vh]"> 
    Etc
</div>    
  

<!-- <style>
    body {
      background: white;
    }
</style> -->
















