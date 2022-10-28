<script>
  import PlansComponent from "$lib/PlansComponent.svelte";

  // import SixMathEqnAnim from "$lib/SixMathEqnAnim.svelte";
  // import Testimonials from "$lib/Testimonials.svelte";
  import Dropzone from "$lib/Dropzone.svelte";
  import { isDarkMode } from "$lib/store.js";
  import Reviews from "$lib/Reviews.svelte";
  import { slide } from "svelte/transition";
  // import { quintOut } from "svelte/easing";

  import { onMount } from "svelte";
  // import { afterNavigate } from "$app/navigation";
  // afterNavigate(() => {
  //   window.localStorage.setItem("isDarkModeLS", $isDarkMode);
  // });

  $: gradientTextColor = `text-transparent bg-clip-text bg-gradient-to-tr ${
    $isDarkMode ? "from-red-300 via-white to-white" : "from-indigo-600 to-black"
  }`;

  let ready = false;
  // let vid;

  onMount(() => {
    ready = true;
    // vid.play();
    // console.log(
    //   'window.localStorage.getItem("isDarkModeLS") == true:',
    //   window.localStorage.getItem("isDarkModeLS") == "true"
    // );
  });
</script>

<!-- <video
  class=" absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full {$isDarkMode
    ? 'invert-[0.95] blur-3xl '
    : 'blur-2xl'}"
  autoplay="autoplay"
  loop="loop"
  muted
  defaultMuted
  playsinline
  oncontextmenu="return false;"
  preload="auto"
>
  <source src="/login-bg-video-blurred.mp4" type="video/mp4" />
</video> -->
<!-- preload="auto" -->
<!-- still not able to autoplay on mobile or safari  -->

<video
  controlslist="nodownload"
  playsinline
  autoplay
  muted
  loop
  class=" absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full {$isDarkMode
    ? 'invert-[0.95] blur-3xl '
    : 'blur-2xl'}"
>
  <source src="/login-bg-video-blurred.mp4" type="video/mp4" />
</video>

<!-- </div> -->

<!-- {#if ready}
  <SixMathEqnAnim />
{/if} -->

<!-- grid incase i later want to reorganize "pages" responsively ... also footer kept interesecting with last page -->
<div class="grid grid-cols-1 gap-y-52 lg:gap-y-64">
  <!-- main page -->
  <div class="h-[60vh] flex justify-center items-center text-center">
    <div class="grid grid-rows-1">
      {#if ready}
        <div in:slide={{ duration: 500 }} class="text-6xl font-Poppins pb-4 ">
          Math, Physics
          <span class={gradientTextColor}> ... Online! </span>
        </div>
      {/if}
      <!-- <div class="text-6xl font-Poppins pb-4">We'll be back in October</div> -->
      <div
        class="text-2xl font-Nunito "
        on:click={() => {
          document
            .getElementById("reviews")
            .scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        on:keydown={() => {
          document
            .getElementById("reviews")
            .scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        👉 click for reviews
      </div>
    </div>
  </div>

  <!-- second page -->
  <div id="step1" class="hover:scale-105 duration-500 ">
    <p
      class="text-5xl font-Poppins text-center pb-7 "
      on:keydown={() => {
        document
          .getElementById("step2")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      on:click={() => {
        document
          .getElementById("step2")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      <span class={gradientTextColor}> 1. Upload your homework </span>
    </p>

    <Dropzone textSizeTW={"text-2xl"} />
  </div>

  <!-- third page -->
  <div id="step2" class="duration-500 ">
    <p
      class="text-5xl font-Poppins text-center pb-7"
      on:keydown={() => {
        document
          .getElementById("reviews")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      on:click={() => {
        document
          .getElementById("reviews")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      <span class={gradientTextColor}> 2. Schedule a Session </span>
    </p>

    <PlansComponent />
  </div>

  <!-- fourth page -->
  <!-- <div id="reviews" class=" md:pb-40"> -->
  <div id="reviews" class="mb-[200px] sm:mb-[500px]  duration-500 ">
    <p
      class="text-5xl font-Poppins text-center "
      on:keydown={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      on:click={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <span class={gradientTextColor}> 3. Do Some Reading </span><span
        >😎
      </span>
    </p>
    <Reviews />
  </div>
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
