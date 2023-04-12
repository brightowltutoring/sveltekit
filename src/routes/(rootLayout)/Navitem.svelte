<script lang="ts">
	// import InView from "$lib/Wrappers/InView.svelte";

	import type { ComponentType } from 'svelte';
	import type { routesType } from '$lib/store';

	export let href: string;
	export let name: string;
	export let routes: routesType | any;
	export let btnColorHover: string;
	export let icon: ComponentType | undefined;
	export let navIconClicked = false;

	import { clearNavModals } from '$lib/utils';
	import { showLoginModal, showHomeworkModal } from '$lib/store';
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
</script>

<a
	{href}
	on:click={handleNavButtonClicks}
	class="block px-2 py-1 font-Nunito font-thin duration-100 ease-in hover:rounded {btnColorHover} "
>
	<!-- Using the custom 'pwa:' class I now pass in 'hover:bg-red-300 pwa:hover:bg-transparent' for btnColorHover in the parent component which makes '{!$runningStandalone && btnColorHover}' unnecessary ... $runningStandalone boolean had to be defined in store.ts and was set with async javascript in +layout.svelte -->

	<!-- {#if mounted && $runningStandalone} -->
	<div class="hidden h-[50px] w-[50px] flex-col items-center justify-between pwa:flex">
		<svelte:component this={icon} {navIconClicked} />
		<span class="text-center text-xs">{name}</span>
	</div>
	<!-- {:else} -->
	<div class="text-2xl md:text-xl pwa:hidden">{name}</div>
	<!-- {/if} -->
</a>
