<script>
  import SixMathEqnAnim from "$lib/SixMathEqnAnim.svelte";
  import Testimonials from "$lib/Testimonials.svelte";
  import { isDarkMode, lessThan768 } from "$lib/store.js";
  import Reviews from "$lib/Reviews.svelte";
</script>

<main class="overflow-x-hidden">
  <video
    autoplay
    loop
    muted
    playsinline
    controlslist="nodownload"
    src="/login-bg-video-blurred.mp4"
    class=" absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full {$isDarkMode
      ? 'invert-[0.95] blur-3xl '
      : 'blur-2xl'}"
  />
</main>

<div class="h-3/5 flex justify-center items-center text-center">
  <div class="grid grid-rows-1">
    <div class="text-6xl font-Poppins pb-4">We'll be back in October</div>
    <div class="text-lg font-Nunito ">
      🎃 pressing inquiries can be sent to thinksolve.io[at]gmail.com
      <!-- (check out some <a class="text-orange-500 hover:scale-150" href="/reviews">reviews</a>) -->
      <div
        on:click={() => {
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
        }}
      >
        (click for reviews)
      </div>
    </div>
  </div>
</div>

<div id="reviews" class={!$lessThan768 && "my-80 pb-80"}>
  <Reviews />
</div>

<!-- <SixMathEqnAnim /> -->

<!-- <Testimonials /> -->

<!-- <div class="grid grid-cols-1 gap-y-[600px] sm:gap-y-[330px] py-20"> -->
<!-- <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-[2000px] sm:gap-y-[330px] py-20"> -->

<!-- <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
  {#each reviews as { name, title, date, body }}
    <ReviewCreator {title} {name} {date}>
      {body}
    </ReviewCreator>
  {/each}
</div> -->
