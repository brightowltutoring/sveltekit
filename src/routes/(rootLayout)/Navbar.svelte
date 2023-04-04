<script lang="ts">
	import LightDarkMode from './LightDarkMode.svelte';
	import Navitem from './Navitem.svelte';

	import { scale /* fade, fly, slide, blur*/ } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { debounce, clearNavModals } from '$lib/utils';
	import {
		isLoggedIn,
		routes,
		scrollY,
		isDarkMode,
		navAppClicked,
		showLoginModal,
		showHomeworkModal,
		instDeltaY
	} from '$lib/store';
	import { spring } from 'svelte/motion';
	import { getContext } from 'svelte';

	const isIOS = getContext('isIOS');
	const hideIfNotIOS = !isIOS && 'hidden'; // PWA download popup shows on android already
	// $: hideIfNotIOS = getOS() !== 'iOS' && 'hidden'; // PWA download popup shows on android already

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

	// $: if ($isLoggedIn && !isPWA()) {
	$: if ($isLoggedIn && (sessionStorage.getItem('isPWA') === 'false' || null)) {
		hueRocket = $isDarkMode ? 0.75 : 0;
		scaleRocket.set(1 + 0.5 * Math.sin($scrollY));
	}

	$: $routes.login.name = $isLoggedIn ? '🚀' : 'Login';

	let resetLogoClick: boolean;
	function clickLogo() {
		clearNavModals();
		// goto('/');

		resetLogoClick = !resetLogoClick;

		for (const key in $routes) {
			$routes[key as keyof typeof $routes].isCurrent = false;
		}
		// this jank taken from: https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b

		$routes.home.isCurrent = true;
	}

	function handleAppNavClick() {
		clearNavModals();
		$navAppClicked = true;
	}

	const debounceTime = 25;
	function scrollYSetter() {
		$scrollY = window.scrollY;
	}
</script>

<!-- <svelte:window bind:scrollY={$scrollY} on:contextmenu|preventDefault /> -->
<svelte:window
	on:scroll={debounce(() => scrollYSetter(), debounceTime)}
	on:contextmenu|preventDefault
/>

<!-- gap-x-24 -->
<nav
	class="fixed bottom-0 z-50 w-full ease-in md:top-0 md:h-16 md:px-[7%] md:pb-16 md:pt-4 pwa:bottom-0 pwa:translate-y-0 {showHideNav}"
>
	<logo-and-navbar class="flex w-full items-center justify-center gap-x-32 md:justify-between">
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

		<!-- TODO: for some reason 'grid grid-flow-col place-items-center w-screen' works but 'flex flex-row items-center justify-center w-screen' does not. Noticed that adding 'justify-center' with flex here clips the navbar, disallowing the expected overflow-x-scroll behaviour -->
		<!-- bgGradientColor  -->
		<ul
			class="grid w-full grid-flow-col place-items-center gap-1 overflow-y-hidden overflow-x-scroll rounded-md bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-red-200 p-2 text-xl scrollbar-hide dark:to-[rgb(37,35,91)] md:ml-24 md:w-auto md:rounded-xl md:p-1"
		>
			<li class="pwa:hidden {hideIfNotIOS}">
				<button
					class="border-b-1 rounded px-3 py-1 font-Nunito text-2xl font-thin duration-300 hover:rounded hover:bg-indigo-400 hover:text-white hover:shadow-lg
  active:animate-pulse md:text-xl"
					on:click={handleAppNavClick}
				>
					App
				</button>
			</li>

			{#each Object.keys($routes).slice(1, 5) as KEY}
				{@const { href, name, icon, isCurrent } = $routes[KEY]}
				{@const navIconClicked =
					(href == '/homework' && $showHomeworkModal) ||
					(href == '/login' && $showLoginModal) ||
					isCurrent}
				{@const loggedInDynamicRocket =
					KEY == 'login' &&
					$isLoggedIn &&
					`transform:scale(${$scaleRocket}); filter:hue-rotate(${hueRocket}turn)`}

				<li style={`${loggedInDynamicRocket}`}>
					<!-- use:clickOutside2={{
						onClickOutside2: () => alert(`${href}`),
						// useThisAction: href === '/plans' || href === '/homework'
						// useThisAction: ['/plans', '/homework'].includes(href)
					}} -->

					<Navitem
						{navIconClicked}
						{href}
						{icon}
						{name}
						bind:routes={$routes}
						btnColorHover={'notpwa:hover:bg-red-300'}
					/>
					<!-- btnColorHover={'hover:bg-red-300 pwa:hover:bg-transparent'} -->
				</li>
			{/each}

			<li class="translate-y-1 scale-125 py-2 md:scale-100">
				<!-- use:clickOutside2={{ onClickOutside2: () => alert('go duck duck') }} -->
				<!-- use:clickOutside
				on:click_outside={() => alert('go duck duck')} -->

				<LightDarkMode />
			</li>
		</ul>
	</logo-and-navbar>
</nav>

<!-- <style>
	.bgGradientColor {
		@apply bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-red-200;
	}

	:global(html.dark-mode) .bgGradientColor {
		@apply to-[rgb(37,35,91)];
	}


</style> -->
