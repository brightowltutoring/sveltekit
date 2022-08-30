<script>
    import PageTransitions from '$lib/PageTransitions.svelte';
    import { bgColour } from '$lib/store.js'
    let pageColor = bgColour.plans
</script>

<!-- <PageTransitions> -->
    <div class="flex justify-center items-center {pageColor} h-screen"> 
        Plans
    </div>    
<!-- </PageTransitions> -->











