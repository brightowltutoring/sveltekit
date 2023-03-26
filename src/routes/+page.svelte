<script lang="ts">
	// let PlansSection;
	// let classicoAndMock; // this refers to data that is sent UP from PlansSection.svelte via svelte's createEventDispatcher ... to be used in this parent component (home route)
	// import InView from "$lib/Wrappers/InView.svelte";
	// import LazyMount from '$lib/Wrappers/LazyMount.svelte';
	import DropzoneOpener from './homework/DropzoneOpener.svelte';
	import PlansSection from './plans/PlansSection.svelte';
	import Reviews from './reviews/Reviews.svelte';
	import HorizontalScrollReviews from './reviews/HorizontalScrollReviews.svelte';
	import BackgroundVideo from '../lib/BackgroundVideo.svelte';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<BackgroundVideo />

<div class="grid grid-cols-1 gap-y-52 lg:gap-y-64">
	<section
		class="z-10 flex h-[60vh] items-center justify-center text-center"
		on:click={() => {
			document.getElementById('step1')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}}
	>
		<!-- annoyingly have to add z-10 since background video interferes with the svelte transitioned text in this section -->

		<div class=" grid grid-rows-1">
			{#key ready}
				<div in:slide={{ duration: 500 }} class=" pb-4 font-Poppins text-6xl">
					Math, Physics
					<span class="gradientTextColor"> ... Online! </span>
				</div>

				<button class="animate-bounce font-Nunito text-2xl font-thin"> 👇 get started </button>
			{/key}
		</div>
	</section>

	<!-- second page -->
	<section id="step1" class="grid place-content-center duration-500 hover:scale-105">
		<button
			on:click={() => {
				document.getElementById('step2')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}}
			class="pb-7 text-center font-Poppins text-5xl"
		>
			<span class="gradientTextColor"> 1. Upload your homework </span>
		</button>

		<DropzoneOpener />
	</section>

	<!-- third page -->
	<section id="step2" class="grid place-content-center duration-500">
		<button
			class="pb-7 text-center font-Poppins text-5xl"
			on:click={() => {
				document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}}
		>
			<span class="gradientTextColor"> 2. Schedule a Session </span>
		</button>

		<PlansSection />
		<!-- <LazyMount Import={() => import('./plans/PlansSection.svelte')} /> -->

		<!-- TODO: not yet sure how to deal with on:boop in LazyMount ... this is doing things manually; maybe rethink props logic inside PlansSection to do what on:boop accomplishes (i.e. reducing the card elements to first two) -->

		<!-- <InView
        onview={async () => {
          PlansSection = (await import("$lib/Plans/PlansSection.svelte"))
            .default;
        }}
       >
        <svelte:component
          this={PlansSection}
          plansCards={classicoAndMock}
          on:boop={(e) => {
            classicoAndMock = e.detail.plansCardArray.slice(0, 2);
            console.log("🏡", e.detail.message);
          }}
        />
      </InView> -->

		<!-- Note: 'boop' is a custom svelte event sent from within PlansSection.svelte, containing 'plansCardArray'; here I decide to modify a copy of this data and name it 'classicoAndMock' ... upside of this is not having to import 'plansCardArray' from a js file ...downside is while waiting for this boop event the change in content flashes on the home route (when refreshing the page at the plans section)-->
	</section>

	<!-- fourth page -->
	<section id="reviews" class="mb-[200px] duration-500 sm:mb-[500px]">
		<button
			on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			class="flex w-full justify-center font-Poppins text-5xl"
		>
			<span class="gradientTextColor">3. Do Some Reading <span class="text-black">😎 </span></span>
		</button>

		<!-- <LazyMount Import={() => import('./reviews/Reviews.svelte')} /> -->
		<div class="hidden sm:block">
			<Reviews />
		</div>
		<div class="block sm:hidden">
			<HorizontalScrollReviews />
		</div>
	</section>
</div>

<style>
	.gradientTextColor {
		@apply bg-gradient-to-tr from-indigo-600 to-black bg-clip-text text-transparent;
	}
	:global(html.dark-mode) .gradientTextColor {
		@apply from-red-300 via-white to-white;
	}
</style>
