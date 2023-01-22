<!-- TODO: fix types for: routes, icon -->
<script lang="ts">
	// import InView from "$lib/Wrappers/InView.svelte";
	import { onMount, type ComponentType } from 'svelte';

	export let href: string,
		name: string,
		routes: any,
		btnColorHover: string,
		icon: ComponentType,
		navIconClicked: boolean = false;
	// bool, btnColor,

	import { isRunningStandalone } from '$lib/utils';
	import { runningStandalone } from '$lib/store';
	import {
		showLoginModal,
		showHomeworkModal,
		clearNavModals
		// lessThan768,
	} from '$lib/store';
	import { page } from '$app/stores';

	// this allows going back and button click matching with route
	// could've done this in if/else but the boolean nature here made it unnecessary
	$: for (let key in routes) {
		routes[key].isCurrent = routes[key].href === $page.url.pathname;
	}

	function handleNavButtonClicks(e: MouseEvent) {
		// resets all modals (so modals don't continuously pile up)
		clearNavModals();

		// sets the correct modal
		if (href == '/homework') {
			e.preventDefault();
			$showHomeworkModal = true;
			return;
		}
		if (href == '/login') {
			e.preventDefault();
			$showLoginModal = true;
			return;
		}
	}

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<a
	data-sveltekit-preload-data
	on:click={handleNavButtonClicks}
	{href}
	class="block font-Nunito font-thin hover:rounded px-2 py-1  duration-100 ease-in {!$runningStandalone &&
		btnColorHover} "
>
	<!-- fadeInFromNone -->

	<!-- This ridiculous if block is necessary if want a default navbar that works when js is turned off (i.e. !mounted is truthy), OTHERWISE await a PWA check to give the PWA version of the navbar, else produce default navbar again -->
	{#if !mounted || !$runningStandalone}
		<div class="text-2xl md:text-xl">{name}</div>
	{:else}
		<!-- {#await isRunningStandalone() then isTrue} -->
		<!-- {#if isTrue} -->
		<!-- {#if runningStandalone} -->
		<div class="flex flex-col justify-between items-center h-[50px] w-[50px]">
			<svelte:component this={icon} bind:navIconClicked />
			<span class="text-xs text-center">{name}</span>
		</div>
		<!-- {:else}
			<div class="text-2xl md:text-xl">{name}</div>
		{/if} -->
		<!-- {/await} -->
	{/if}
</a>
