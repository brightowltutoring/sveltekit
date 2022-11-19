<script>
  import PlansComponent from "$lib/Plans/PlansComponent.svelte";
  let classicoAndMock; // this refers to data that is sent UP from PlansComponent.svelte via svelte's createEventDispatcher ... to be used in this parent component (home route)
  import Dropzone from "$lib/Dropzone/Dropzone.svelte";
  import Reviews from "$lib/Reviews/Reviews.svelte";
  import { isRunningStandalone } from "$lib/utils.js";
  import { isDarkMode } from "$lib/store.js";
  import { slide } from "svelte/transition";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  let ready = false;

  onMount(() => (ready = true));

  $: gradientTextColor = `text-transparent bg-clip-text bg-gradient-to-tr ${
    $isDarkMode ? "from-red-300 via-white to-white" : "from-indigo-600 to-black"
  }`;
</script>

<video
  loading="lazy"
  controlslist="nodownload"
  playsinline
  autoplay
  muted
  loop
  class=" absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full {$isDarkMode
    ? 'invert-[0.95] blur-3xl '
    : 'blur-2xl'}"
  src="/login-bg-video-blurred.mp4"
/>

{#if !isRunningStandalone()}
  <div class="grid grid-cols-1 gap-y-52 lg:gap-y-64">
    <!-- main page -->
    <div class="h-[60vh] flex justify-center items-center text-center">
      <div class="grid grid-rows-1">
        {#if ready}
          <div in:slide={{ duration: 500 }} class="text-6xl font-Poppins pb-4 ">
            Math, Physics
            <span class={gradientTextColor}> ... Online! </span>
          </div>

          <div
            on:click={() => {
              document
                // .getElementById("reviews")
                .getElementById("step1")
                .scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            on:keydown={() => {
              document
                .getElementById("reviews")
                .scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            class="animate-bounce text-2xl font-Nunito font-thin "
          >
            👇 get started
          </div>
        {/if}
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

      <Dropzone textSizeTW={"text-2xl"} uniqueId={"tomato"} />
    </div>

    <!-- third page -->
    <div id="step2" class="duration-500  ">
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

      <PlansComponent
        noTransition
        on:boop={(e) => {
          classicoAndMock = e.detail.plansCardArray.slice(0, 2);
          console.log("🏡", e.detail.message);
        }}
        plansCards={classicoAndMock}
      />
      <!-- TODO: 'boop' is a custom svelte event sent from within planscomponent.svelte, containing 'plansCardArray'; here I decide to modify a copy of this data and name it 'classicoAndMock' ... upside of this is not having to import 'plansCardArray' from a js file ...downside is while waiting for this boop event the change in content flashes on the home route (when refreshing the page at the plans section)-->
    </div>

    <!-- fourth page -->

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
{:else}
  <!-- main page -->
  <div class="h-[70vh] flex justify-center items-center text-center ">
    <div
      class="grid grid-rows-1"
      on:click={() => goto("/plans")}
      on:keydown={() => goto("/plans")}
    >
      {#if ready}
        <div in:slide={{ duration: 500 }} class="text-6xl font-Poppins pb-4 ">
          You're on the
          <span class={gradientTextColor}> App! </span>
        </div>

        <div class="grid px-6 text-2xl font-Nunito font-thin ">
          the navbar is now your friend 🤝
        </div>
      {/if}
    </div>
  </div>
{/if}

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

<!-- // TODO: these four blocks of code were my attempt to simulate a user dragging their screen down on mobile device .. again goal is to hide addressbar in doing so
    window.dispatchEvent(new Event("touchstart"));

    window.dispatchEvent(new Event("touchmove"));

    setTimeout(() => {
      window.scrollTo({
        top: 100,
        behavior: "smooth",
      });
    }, 500);
    setTimeout(() => {
      window.dispatchEvent(new Event("touchend"));
    }, 1000);

     // window.addEventListener("touchstart", () => {
    //   console.log("window touchstart (actually fired dispatch event)");
    // });
    // window.addEventListener("touchend", () => {
    //   console.log("window touchend (actually fired dispatch event)");
    // }); -->
<style>
  .page {
    display: grid;
    grid-gap: 10px;
    grid-template-rows: repeat(auto-fit, minmax(100vh, 1fr));
  }
</style>
