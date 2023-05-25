<script lang="ts">
	import type { ComponentType } from 'svelte';
	import type { routesType } from '$lib/store/routesStore';
	import { showLoginModal, showHomeworkModal, clearNavModals } from '$lib/store/modalsStore';
	import { page } from '$app/stores';

	export let routePath: string;
	export let name: string;
	export let routes: routesType | any;
	export let btnColorHover: string;
	export let icon: ComponentType | undefined;
	export let navIconClicked = false;

	// this allows going back and button click matching with route
	// could've done this in if/else but the boolean nature here made it unnecessary

	$: for (let key in routes) {
		routes[key].isCurrent = routes[key].routePath === $page.url.pathname;
	}
	function handleNavButtonClicks(e: MouseEvent) {
		// resets all modals (so modals don't continuously pile up)
		clearNavModals();

		// sets the correct modal
		if (routePath == '/homework') {
			e.preventDefault();
			showHomeworkModal.set(true);
			return;
		}
		if (routePath == '/login') {
			e.preventDefault();
			showLoginModal.set(true);
			return;
		}
	}
</script>

<a
	href={routePath}
	on:click={handleNavButtonClicks}
	class="block px-2 py-1 font-Nunito font-thin duration-100 ease-in hover:rounded {btnColorHover}  "
>
	<div
		class="hidden h-10
	 w-10 flex-col items-center justify-between pwa:flex"
	>
		<svelte:component this={icon} {navIconClicked} />
		<span class="scale-[0.95] text-center text-xs">{name}</span>
	</div>

	<div class="text-2xl md:text-xl pwa:hidden">{name}</div>
</a>
