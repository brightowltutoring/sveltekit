<script lang="ts">
	// let PlansSection;
	// let classicoAndMock; // this refers to data that is sent UP from PlansSection.svelte via svelte's createEventDispatcher ... to be used in this parent component (home route)
	// import InView from "$lib/Wrappers/InView.svelte";

	// import LazyMount from '$lib/Wrappers/LazyMount.svelte';
	import { isRunningStandalone } from '$lib/utils';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import DropzoneOpener from './homework/DropzoneOpener.svelte';
	import PlansSection from './plans/PlansSection.svelte';
	import Reviews from './reviews/Reviews.svelte';

	let ready = false;
	onMount(() => {
		ready = true;
		// console.log('isRunningStandalone()', isRunningStandalone());
		// alert(isRunningStandalone());
	});

	console.log('☁️ 🎟️');
</script>

<video
	controlslist="nodownload"
	playsinline
	autoplay
	muted
	loop
	src="/login-bg-video-blurred.mp4"
/>

<!-- class="absolute -z-10 top-0 object-cover w-11/12 h-screen" -->
<!-- {$isDarkMode ? "invert-[0.95] blur-3xl" : "blur-2xl"}  -->
<!-- . . . this code snippet replaced with css darkmode selector logic in <style> section (using svelte :global selector and tailwind css with @apply) to avoid flash of unstyled content on initial page load -->

<!-- {#if !isRunningStandalone()} -->
<div class="grid grid-cols-1 gap-y-52 lg:gap-y-64">
	<!-- main page -->
	<div class="h-[60vh] flex justify-center items-center text-center">
		<div class="grid grid-rows-1">
			<!-- {#if ready} -->
			<div in:slide={{ duration: 500 }} class="text-6xl font-Poppins pb-4">
				Math, Physics
				<span class="gradientTextColor"> ... Online! </span>
			</div>

			<button
				on:click={() => {
					document.getElementById('step1')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}}
				class="animate-bounce text-2xl font-Nunito font-thin"
			>
				👇 get started
			</button>
			<!-- {/if} -->
		</div>
	</div>

	{#if !isRunningStandalone()}
		<!-- second page -->
		<div id="step1" class="hover:scale-105 duration-500 grid place-content-center">
			<button
				on:click={() => {
					document.getElementById('step2')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}}
				class="text-5xl font-Poppins text-center pb-7"
			>
				<span class="gradientTextColor"> 1. Upload your homework </span>
			</button>

			<!-- This opens the modal dropzone; no need to instantiate more than one dropzone component since already available at the layout (i.e root) level of the app. -->
			<!-- <DropzoneOpener /> -->
			<!-- <LazyMount Import={() => import('./homework/DropzoneOpener.svelte')} /> -->
			<DropzoneOpener />
		</div>

		<!-- third page -->
		<div id="step2" class="duration-500 grid place-content-center">
			<button
				class="text-5xl font-Poppins text-center pb-7 "
				on:click={() => {
					document
						.getElementById('reviews')
						?.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}}
			>
				<span class="gradientTextColor"> 2. Schedule a Session </span>
			</button>

			<!-- Dec17,2022: not sure how to handle the custom dispatched event, as before. Maybe rethink PlansSection logic -->
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
		</div>

		<!-- fourth page -->
		<div id="reviews" class="duration-500 mb-[200px] sm:mb-[500px]">
			<button
				on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				class="text-5xl font-Poppins w-full flex justify-center"
			>
				<span class="gradientTextColor">3. Do Some Reading <span class="text-black">😎 </span></span
				>
			</button>

			<Reviews />
			<!-- <LazyMount Import={() => import('./reviews/Reviews.svelte')} /> -->
		</div>
	{/if}
</div>
<!-- {/if} -->

<!-- {#if isRunningStandalone()}
	<div class="h-[70vh] flex justify-center items-center text-center ">
		<button on:click={() => goto('/plans')} class="grid grid-rows-1">
			{#key ready}
				<div in:slide={{ duration: 500 }} class="text-6xl font-Poppins pb-4 ">
					You're on the <span class="gradientTextColor"> App!</span>
				</div>

				<div class="grid px-6 text-2xl font-Nunito font-thin ">
					the navbar is now your friend 🤝
				</div>
			{/key}
		</button>
	</div>
{/if} -->

<!-- <div class="grid grid-cols-1 gap-y-[600px] sm:gap-y-[330px] py-20"> -->
<!-- <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-[2000px] sm:gap-y-[330px] py-20"> -->

<!-- <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
  {#each reviews as { name, title, date, body }}
    <ReviewCreator {title} {name} {date}>
      {body}
    </ReviewCreator>
  {/each}
</div> -->
<style>
	video {
		@apply absolute -z-10 top-0 object-cover w-11/12 h-screen blur-2xl;
	}
	:global(html.dark-mode) video {
		@apply blur-3xl invert-[0.95] hue-rotate-90;
	}

	.gradientTextColor {
		@apply text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-black;
	}
	:global(html.dark-mode) .gradientTextColor {
		@apply from-red-300 via-white to-white;
	}
</style>
