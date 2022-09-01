<script>
    import PageTransitions from '$lib/PageTransitions.svelte';
    import { routes } from '$lib/store.js'
    let pageColor = $routes.plans.bgColor  
</script>

<!-- <PageTransitions> -->
    <div class="flex justify-center items-center {pageColor} h-screen"> 
        Plans
    </div>    
<!-- </PageTransitions> -->











