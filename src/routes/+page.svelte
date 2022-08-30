
<script>
    
    import PageTransitions from '$lib/PageTransitions.svelte';
    import { bgColour, scrollY } from '$lib/store.js'
    let pageColor = bgColour.home
	
</script>



<PageTransitions>
    <!-- <main class="flex py-36 px-10 h-[400vh] {pageColor} ">  -->
    <main class="flex h-[2000px] {pageColor} "> 
    <!-- TODO: have to figure a way to do this padding on every page,  without repeating for every page 
        Currently doesnt work with +layout.svelte ... could be due to this wrapping <Pagetransitions>
        -->
        <h1 class="p-24"
        >Home</h1>
    </main>    
</PageTransitions>
    <!-- <div class="flex justify-center items-center h-[400vh] {pageColor} "
   > 
        Home 
    </div>     -->


