<script>
    import PageTransitions from '$lib/PageTransitions.svelte';
    import { bgColour } from '$lib/store.js'
    let pageColor = bgColour.about  


    // import { onMount } from 'svelte'
	// $: onMount(() => {
    //     body.style.color = "red"
	// })
    
</script>

<PageTransitions >
    <div class="flex {pageColor} h-[400vh]"> 
    <!-- <div class="flex h-[400vh]" style:background={pageColor}>  -->
        About 
    </div>    
    <!-- <div class="flex justify-center items-center {pageColor} h-[400vh]"> 
        About 
    </div>     -->
</PageTransitions>
  

<!-- <style>
    body {
      background: white;
    }
</style> -->
















