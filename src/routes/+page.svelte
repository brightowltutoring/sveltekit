<script>

    import GalleryScale from "$lib/GalleryScale.svelte"


    const reviewers = [ 
        "zaara",
        "miranda",
        "ben",
        "efe",
        "paola",
        "rob",
        "tj",
    ]
 
    
</script>




<div class="font-Poppins text-center sm:text-5xl text-4xl pb-20 ">
    TESTIMONIALS  $$m^3$$

    
</div>

<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 " >
    {#each reviewers as name }
        <GalleryScale Src={`/reviews/review-${name}-bare.png`} Alt={`review ${name}`}/> 
    {/each}    
</div>






<!-- <style>
    .relative input {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
}
</style> -->