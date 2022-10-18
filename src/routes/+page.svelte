<script>
  import PlansComponent from "$lib/PlansComponent.svelte";

  import SixMathEqnAnim from "$lib/SixMathEqnAnim.svelte";
  // import Testimonials from "$lib/Testimonials.svelte";
  import Dropzone from "$lib/Dropzone.svelte";
  import { isDarkMode } from "$lib/store.js";
  import Reviews from "$lib/Reviews.svelte";
  import { slide } from "svelte/transition";
  // import { quintOut } from "svelte/easing";
  import { onMount } from "svelte";

  let ready = false;
  onMount(() => {
    ready = true;
  });
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

<!-- {#if ready}
  <SixMathEqnAnim />
{/if} -->

<div class="h-3/5 flex justify-center items-center text-center">
  <div class="grid grid-rows-1">
    {#if ready}
      <div in:slide={{ duration: 500 }} class="text-6xl font-Poppins pb-4">
        Math, Physics ... Online!
      </div>
    {/if}
    <!-- <div class="text-6xl font-Poppins pb-4">We'll be back in October</div> -->
    <div
      class="text-lg font-Nunito "
      on:click={() => {
        document
          .getElementById("reviews")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      👉 click for reviews
    </div>
  </div>
</div>

<div id="step1" class="-z-50 mt-80 hover:scale-105 duration-500 ">
  <p
    class="text-5xl font-Poppins text-center pb-7 "
    on:click={() => {
      document
        .getElementById("step2")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }}
  >
    1. Upload your homework
  </p>

  <!-- <Dropzone text={"🚀"} textSizeTW={"text-5xl"} /> -->
  <!-- backgroundTW={" backdrop-blur-3xl"} -->
  <Dropzone textSizeTW={"text-2xl"} />
  <!-- backgroundTW={"bg-purple-200 bg-opacity-20"} -->
</div>

<div id="step2" class="-z-50 mt-80 hover:scale-105 duration-500 ">
  <p
    class="text-5xl font-Poppins text-center pb-7"
    on:click={() => {
      document
        .getElementById("reviews")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }}
  >
    2. Schedule a Session
  </p>

  <PlansComponent />
</div>

<!-- <div id="reviews" class=" md:pb-40"> -->
<div id="reviews" class="-z-50 mt-80 hover:scale-105 duration-500 ">
  <p
    class="text-5xl font-Poppins text-center "
    on:click={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    3. Do Some Reading 😎
  </p>
  <Reviews />
</div>

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
