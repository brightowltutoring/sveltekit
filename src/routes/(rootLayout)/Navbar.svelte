<script lang="ts">
	import LightDarkMode from './LightDarkMode.svelte';
	import NavModals from './NavModals.svelte';
	import Navitem from './Navitem.svelte';

	import {
		isLoggedIn,
		routes,
		scrollY,
		isDarkMode,
		showLoginModal,
		showHomeworkModal,
		instDeltaY
	} from '$lib/store';

	import { spring } from 'svelte/motion';
	import { getContext } from 'svelte';
	import LogoButton from './LogoButton.svelte';
	import AppNavButton from './AppNavButton.svelte';

	const isIOS = getContext('isIOS');

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

	const isPwaFromContext = getContext('isPWA');
	$: if ($isLoggedIn && (isPwaFromContext === false || null)) {
		// $: if ($isLoggedIn && (sessionStorage.getItem('isPwaMode') === 'false' || null)) {
		hueRocket = $isDarkMode ? 0.75 : 0;
		scaleRocket.set(1 + 0.5 * Math.sin($scrollY));
	}

	$: $routes.login.name = $isLoggedIn ? '🚀' : 'Login';
</script>

<NavModals />

<nav
	class="fixed z-50 flex h-fit w-full items-center justify-center ease-in sm:h-[60px] md:px-[7%] md:py-10 {showHideNav} bottom-0 md:top-0 md:justify-between pwa:bottom-0 pwa:translate-y-0 pwa:pt-1"
>
	<LogoButton />

	<ul
		class="grid w-full grid-flow-col place-items-center gap-1 overflow-y-hidden overflow-x-scroll rounded-md bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-red-200 text-xl scrollbar-hide dark:to-[rgb(37,35,91)] md:ml-24 md:w-auto md:rounded-xl pwa:m-0 pwa:pb-0"
	>
		<li class={isIOS ? 'block pwa:hidden' : 'hidden'}>
			<AppNavButton />
		</li>

		<!-- {#each Object.keys($routes).slice(1, 5) as key}
				{@const { routePath, name, icon, isCurrent } = $routes[key]} -->
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
				<Navitem
					{navIconClicked}
					{routePath}
					{icon}
					{name}
					bind:routes={$routes}
					btnColorHover={'notpwa:hover:bg-red-300 '}
				/>
				<!-- without this bind PWA svg's dont work! -->
			</li>
		{/each}

		<!-- TODO: padding seems to do nothing -->
		<li class=" py-2 md:scale-100 pwa:scale-100 notpwa:translate-y-1">
			<LightDarkMode />
		</li>
	</ul>
</nav>
