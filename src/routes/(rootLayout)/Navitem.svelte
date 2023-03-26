<!-- TODO: fix types for: routes, icon -->
<script lang="ts">
	// import InView from "$lib/Wrappers/InView.svelte";
	import type { ComponentType } from 'svelte';

	export let href: string;
	export let name: string;
	export let routes: any;
	export let btnColorHover: string;
	export let icon: ComponentType;
	export let navIconClicked = false;
	// bool, btnColor,

	import { clearNavModals } from '$lib/utils';
	import {
		showLoginModal,
		showHomeworkModal,
		// lessThan768,
		runningStandalone
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

	// NOTE: using custom 'pwa' breakpoint, I don't need to rely on javascript and therefore no flash of content is possible

	// let mounted = false;
	// onMount(() => (mounted = true));
</script>

<a
	data-sveltekit-preload-data
	on:click={handleNavButtonClicks}
	{href}
	class=" block px-2 py-1 font-Nunito font-thin duration-100 ease-in hover:rounded {!$runningStandalone &&
		btnColorHover} "
>
	<!-- {#if mounted && $runningStandalone} -->
	<div class="hidden h-[50px] w-[50px] flex-col items-center justify-between pwa:flex">
		<svelte:component this={icon} bind:navIconClicked />
		<span class="text-center text-xs">{name}</span>
	</div>
	<!-- {:else} -->
	<div class="text-2xl md:text-xl pwa:hidden">{name}</div>
	<!-- {/if} -->
</a>
