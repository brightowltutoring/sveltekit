<script>
  import ReviewCreator from "$lib/Reviews/reviewCreator.svx";
  import { reviews } from "$lib/Reviews/reviews.js";
  // import HydrateReviewStars from "$lib/Reviews/HydrateReviewStars.svelte";
  // <HydrateReviewStars /> adds star.webp images to ReviewCreator component (which contains img elements); removes opacity-0 from the css prop 'whenImageNotLoaded' ..i.e. this logic is a fallback when the image is not loaded in time
  let whenImageNotLoaded = "opacity-0 transition-opacity duration-500 ease-in";
  console.log("reviews now with slots");
</script>

<div class="scale-90 ">
  <!-- <div
    class="grid grid-cols-dynamic gap-x-10  gap-y-[80vw] sm:gap-y-[55vw] md:gap-y-[65vw] lg:gap-y-[45vw] -translate-y-60 sm:translate-y-0"
  > -->

  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10  gap-y-[500px] lg:gap-y-[700px] -translate-y-60 sm:translate-y-0"
  >
    {#each reviews as { name, title, date, body }}
      <ReviewCreator {title} {name} {date} {whenImageNotLoaded}>
        {body}
      </ReviewCreator>
    {/each}
  </div>
</div>
