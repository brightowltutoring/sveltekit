<script lang="ts">
	import { scale } from 'svelte/transition';
	import { modals } from '$lib/store/modalsStore';
	import { routes } from '$lib/store/routesStore';
	import { elasticOut } from 'svelte/easing';

	let resetLogoClick: boolean;
	function clickLogo() {
		// clearNavModals();
		modals.closeAll();

		resetLogoClick = !resetLogoClick;

		for (const key in $routes) {
			$routes[key as keyof typeof $routes].isCurrent = false;
		}
		// this jank taken from: https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b

		$routes.home.isCurrent = true;
	}
</script>

{#key resetLogoClick}
	<a
		href="/"
		on:click={clickLogo}
		class="hidden p-2 font-Poppins text-xl transition-transform selection:bg-transparent hover:scale-110
    active:text-red-600 md:block md:translate-x-3 md:translate-y-[0.1rem] md:text-[min(5.5vw,40px)]"
		in:scale={{ duration: 1200, easing: elasticOut }}
	>
		THINKSOLVE
	</a>
{/key}
