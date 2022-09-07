<script>
    import GalleryScale from "$lib/GalleryScale.svelte";
    let Src = "/reviews/review-ben.png"
    let Alt="review ben"
</script>
Home

<div class="font-Poppins text-center sm:text-5xl text-4xl pb-5 pt-20 ">
    TESTIMONIALS
</div>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 " >

    <GalleryScale Src={"/reviews/review-ben-bare.png"} Alt={"review ben"}/> 
    <GalleryScale Src={"/reviews/review-efe-bare.png"} Alt={"review ben"}/> 
    <GalleryScale Src={"/reviews/review-miranda-bare.png"} Alt={"review ben"}/> 
    <GalleryScale Src={"/reviews/review-paola-bare.png"} Alt={"review ben"}/> 
    <GalleryScale Src={"/reviews/review-rob-bare.png"} Alt={"review ben"}/> 
    <GalleryScale Src={"/reviews/review-tj-bare.png"} Alt={"review ben"}/> 
    <GalleryScale Src={"/reviews/review-zaara-bare.png"} Alt={"review ben"}/> 
    
    <!-- <div class="relative">
        <input type="checkbox" class="absolute peer opacity-100 "/>
        <img class="peer-checked:scale-[2] peer-checked:bg-white duration-200 hover:shadow-lg" src="/reviews/review-ben-bare.png" alt="review ben">
    </div> -->
</div>






<!-- <style>
    .relative input {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
}
</style> -->