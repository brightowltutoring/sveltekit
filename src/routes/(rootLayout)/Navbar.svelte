<script lang="ts">
	import { spring } from 'svelte/motion';
	import LightDarkMode from './LightDarkMode.svelte';
	import NavModals from './NavModals.svelte';
	import { showLoginModal, showHomeworkModal, clearNavModals } from '$lib/store/modalsStore';
	import { isLoggedIn, isDarkMode, isIOS, isPWA } from '$lib/store/clientStore';
	import { scrollY, instDeltaY } from '$lib/store/scrollStore';
	import { routes } from '$lib/store/routesStore';
	import LogoButton from './LogoButton.svelte';
	import AppNavButton from './AppNavButton.svelte';

	let showHideNav = '';

	$: {
		if ($scrollY < 10) showHideNav = 'bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-none';

		if ($scrollY > 40 && $instDeltaY > 10) {
			showHideNav = 'backdrop-blur-3xl duration-200';
		}

		if ($scrollY > 400 && $instDeltaY > 10)
			showHideNav =
				'bottom-0 translate-y-20 md:top-0 md:-translate-y-20 backdrop-blur-3xl duration-200';

		if ($instDeltaY < -100 && $scrollY !== 0)
			showHideNav = 'bottom-0 md:top-0 backdrop-blur-3xl duration-500';
	}

	let hueRocket = 0;
	let scaleRocket = spring(1, { stiffness: 0.1, damping: 0.25 });

	$: if ($isLoggedIn && ($isPWA === false || null)) {
		hueRocket = $isDarkMode ? 0.75 : 0;
		scaleRocket.set(1 + 0.5 * Math.sin($scrollY));
	}

	// $: $routes.login.name = $isLoggedIn ? '🚀' : 'Login';
	$: routes.update((routes) => {
		routes.login.name = $isLoggedIn ? '🚀' : 'Login';
		return routes;
	});

	function handleNavButtonClicks(e: MouseEvent, routePath: string) {
		clearNavModals();

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

<NavModals />

<nav
	class="fixed z-50 flex h-fit w-full items-center justify-center ease-in sm:h-[60px] md:px-[7%] md:py-10 {showHideNav} bottom-0 md:top-0 md:justify-between pwa:bottom-0 pwa:translate-y-0 pwa:pt-1"
>
	<LogoButton />

	<ul
		class="grid w-full grid-flow-col place-items-center gap-1 overflow-y-hidden overflow-x-scroll rounded-md bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-red-200 text-xl scrollbar-hide dark:to-[rgb(37,35,91)] md:ml-24 md:w-auto md:rounded-xl pwa:m-0 pwa:pb-0 background-animate"
	>
		<li class={$isIOS ? 'block pwa:hidden' : 'hidden'}>
			<AppNavButton />
		</li>

		{#each Object.values($routes).slice(1, 5) as { routePath, name, icon, isCurrent }}
			{@const navIconClicked =
				isCurrent ||
				(routePath === '/homework' && $showHomeworkModal) ||
				(routePath === '/login' && $showLoginModal)}

			{@const loggedInDynamicRocket =
				routePath === '/login' && $isLoggedIn
					? `transform:scale(${$scaleRocket}); filter:hue-rotate(${hueRocket}turn)`
					: null}

			<li style={loggedInDynamicRocket}>
				<a
					href={routePath}
					on:click={(e) => handleNavButtonClicks(e, routePath)}
					class="block px-2 py-1 font-Nunito font-thin duration-100 ease-in hover:rounded notpwa:hover:bg-red-300"
				>
					<div class="hidden h-10 w-10 flex-col items-center justify-between pwa:flex">
						<svelte:component this={icon} {navIconClicked} />
						<span class="scale-[0.95] text-center text-xs">{name}</span>
					</div>

					<div class="text-2xl md:text-xl pwa:hidden">{name}</div>
				</a>
			</li>
		{/each}

		<li class="py-2 md:scale-100 pwa:scale-100 notpwa:translate-y-1">
			<LightDarkMode />
		</li>
	</ul>
</nav>
