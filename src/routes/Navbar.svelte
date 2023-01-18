<script lang="ts">
	// import type { ComponentType } from 'svelte';

	import LightDarkMode from './LightDarkMode.svelte';
	import Navitem from './Navitem.svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { isRunningStandalone, getOS } from '$lib/utils';
	import {
		isLoggedIn,
		routes,
		scrollY,
		isDarkMode,
		navAppClicked,
		clearNavModals,
		elementColor,
		showLoginModal,
		showHomeworkModal,
		instDeltaY
	} from '$lib/store';
	import { spring } from 'svelte/motion';

	let showHideNav = '';

	$: {
		if ($scrollY < 10) showHideNav = 'bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-none';

		if ($instDeltaY < 0 && $scrollY != 0) showHideNav = 'bottom-0 md:top-0 backdrop-blur-3xl';

		if ($scrollY > 400 && $instDeltaY > 10) {
			showHideNav = '-bottom-20 md:-top-20 backdrop-blur-3xl duration-200';
		}
	}

	let hueRocket = 0;
	let scaleRocket = spring(1, { stiffness: 0.1, damping: 0.25 });

	$: if ($isLoggedIn && !isRunningStandalone()) {
		hueRocket = $isDarkMode ? 0.75 : 0;
		scaleRocket.set(1 + 0.5 * Math.sin($scrollY));
	}

	$: $routes.login.name = $isLoggedIn ? '🚀' : 'Login';

	let resetLogoClick: boolean;
	function clickLogo() {
		clearNavModals();
		goto('/');

		resetLogoClick = !resetLogoClick;

		for (let key in $routes) {
			$routes[key].isCurrent = false;
		}

		$routes.home.isCurrent = true;
	}

	function handleAppNavClick() {
		clearNavModals();
		$navAppClicked = true;
	}

	let hideIfNotIOS = getOS() !== 'iOS' && 'hidden'; // PWA download popup shows on android already

	let hideIfRunningStandalone = isRunningStandalone() && 'hidden';

	// let fadeInToFullOpacity = browser && 'opacity-100 transition-opacity duration-300 ease-in';
	// THIS NOW REPLACED BY CUSTOM TAILWIND CSS ANIMATION: animate-fadeIn

	// 'hideIfRunningStandalone' hides part of the navbar ui if accessing in standalone mode (i.e. from the app) ... however the change in content flickers. To remedy the flicker I have the navbar start with zero opacity and then 'fadeInToFullOpacity' transitions to max opacity using sveltekit's 'browser' check.

	import { debounce } from '$lib/utils';
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

<main
	class="animate-fadeIn z-50 md:py-4 md:px-[7%] fixed md:h-16  w-full bottom-0 md:top-0 {showHideNav} "
>
	<logo-and-navbar class="flex items-center justify-center gap-x-32 md:justify-between w-full">
		<!-- opacity-0 {fadeInToFullOpacity}  -->
		{#key resetLogoClick}
			<!-- previously was a button, but anchor tag 'degrades gracefully'  -->
			<a
				href="/"
				on:click={clickLogo}
				class="p-2 md:translate-y-[0.1rem] md:translate-x-3 hidden md:block text-xl font-Poppins 
    md:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent"
				in:scale={{ duration: 1200, easing: elasticOut }}
			>
				THINKSOLVE
			</a>
		{/key}

		<!-- TODO: for some reason 'grid grid-flow-col place-items-center w-screen' works but 'flex flex-row items-center justify-center w-screen' does not. Noticed that adding 'justify-center' with flex here clips the navbar, disallowing the expected overflow-x-scroll behaviour -->
		<ul
			class="bgGradientColor text-xl grid grid-flow-col place-items-center w-full gap-1 p-2 rounded-md md:rounded-xl md:ml-24 md:p-1 md:w-auto hideScrollBar overflow-x-scroll overflow-y-hidden"
		>
			<!-- py-3 px-5 -->
			<!-- <ul
    class="flex flex-row items-center justify-center w-screen text-xl  {bgGradientColor} hideScrollBar overflow-x-scroll rounded-md md:rounded-xl  md:ml-24 md:p-1 py-3 px-5 "
  > -->

			<!-- <li class={hideIfRunningStandalone || hideIfNotIOS}> -->
			<li class="{hideIfRunningStandalone} {hideIfNotIOS} ">
				<button
					class="font-Nunito font-thin text-2xl md:text-xl hover:rounded py-1 px-2 duration-300 hover:shadow-lg  {$elementColor} hover:bg-indigo-400 hover:text-white  active:animate-pulse duration-200
      border-b-1 rounded "
					on:click={handleAppNavClick}
				>
					App
				</button>
			</li>

			<!-- {#each Object.keys($routes).slice(0, 6) as KEY} -->
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

				<!-- typescript complains if i dont wrap the js variable in a template string -->
				<li style={`${loggedInDynamicRocket}`}>
					<Navitem
						{navIconClicked}
						{href}
						{icon}
						{name}
						bind:routes={$routes}
						btnColorHover={'hover:bg-red-300'}
					/>
					<!-- btnColor={'sm:bg-red-300 rounded'} -->
				</li>
			{/each}

			<!-- <li
        class="py-2 translate-y-1 scale-125 md:scale-100 {hideIfRunningStandalone}"
      > -->
			<li class="py-2 translate-y-1 scale-125 md:scale-100 ">
				<LightDarkMode />
			</li>
		</ul>
	</logo-and-navbar>
</main>

<style>
	.bgGradientColor {
		@apply bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-red-200;
	}
	:global(html.dark-mode) .bgGradientColor {
		@apply to-[rgb(37,35,91)];
	}
</style>
