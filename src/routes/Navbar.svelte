<script lang="ts">
	export let isLoggedIn = false;
	export let scrollY = 0;

	import { navigating } from '$app/stores';

	import { instDeltaY } from '$lib/store/scrollStore'; // make this 'export let' next?
	import LoginCard from '$routes/login/+page.svelte';
	import Modal from '$src/lib/Wrappers/Modal.svelte';
	// import Dropzone from './homework/Dropzone_NEW.svelte';
	import Dropzone from '$routes/homework/Dropzone.svelte';

	import { onMount } from 'svelte';
	import { scale, fly } from 'svelte/transition';
	import { elasticOut, quintOut } from 'svelte/easing';
	import { isDarkMode } from '$lib/store/clientStore';

	import { routes } from '$lib/store/routesStore';
	import { modals } from '$lib/store/modalsStore';
	import { spring } from 'svelte/motion';
	import { page } from '$app/stores';

	$: ({ data } = $page);
	// $: $isDarkMode = browser && document.documentElement.classList.contains('dark-mode');

	onMount(() => {
		// isDarkMode.set(prefersDarkMode());
		isDarkMode.set(document.documentElement.classList.contains('dark-mode'));

		// update session storage before page reloads; could've done in <svelte:window> as well...
		window.addEventListener('beforeunload', setDarkModeInSessionStorage);
		return () => window.removeEventListener('beforeunload', setDarkModeInSessionStorage);
	});

	let showHideNav = '';

	$: {
		if (scrollY < 10) showHideNav = 'bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-none';

		if (scrollY > 40 && $instDeltaY > 10) {
			showHideNav = 'backdrop-blur-3xl';
		}

		if (scrollY > 400 && $instDeltaY > 10)
			showHideNav = '!-bottom-20  md:!-top-20  backdrop-blur-3xl duration-200';

		if ($instDeltaY < -100 && scrollY !== 0)
			showHideNav = 'bottom-0 md:top-0 backdrop-blur-3xl duration-500';
	}

	let hueRocket = 0;
	let scaleRocket = spring(1, { stiffness: 0.1, damping: 0.25 });

	$: if (isLoggedIn && (data.isPWA === false || null)) {
		hueRocket = $isDarkMode ? 0.75 : 0;
		scaleRocket.set(1 + 0.5 * Math.sin(scrollY));
	}

	// $: $routes.login.name = isLoggedIn ? '🚀' : 'Login';
	$: routes.update((routes) => {
		routes.login.name = isLoggedIn ? '🚀' : 'Login';
		return routes;
	});

	function handleNavButtonClicks(e: MouseEvent, routePath: string) {
		if (routePath === '/homework') {
			e.preventDefault();
			modals.open('homework');
			return;
		}
		if (routePath === '/login') {
			e.preventDefault();
			modals.open('login');
			return;
		}
		modals.closeAll();
	}

	// darkmode functions

	function setDarkModeInSessionStorage() {
		sessionStorage.setItem('isDarkMode', String($isDarkMode));
	}

	function toggleDarkMode() {
		isDarkMode.update((v) => !v);
		document.documentElement.classList.toggle('dark-mode');
	}

	// logo button
	let resetLogoClick: boolean;
	function clickLogo() {
		modals.closeAll();

		resetLogoClick = !resetLogoClick;

		for (const key in $routes) {
			$routes[key as keyof typeof $routes].isCurrent = false;
		}

		$routes.home.isCurrent = true;
	}

	// for toggling 'loader-bar' class
	let showLoader = false;
	let loaderTimeout: NodeJS.Timeout;
	$: if ($navigating?.from?.route.id !== $navigating?.to?.route.id) {
		showLoader = true;
		// sleep(600).then(() => (showLoader = false));
		if (loaderTimeout) clearTimeout(loaderTimeout);
		loaderTimeout = setTimeout(() => {
			showLoader = false;
		}, 600);
	}
</script>

<svelte:head>
	<script lang="ts">
		document.documentElement.classList.toggle('dark-mode', prefersDarkMode());
		function prefersDarkMode() {
			if (sessionStorage.getItem('isDarkMode') === 'true') return true;
			if (sessionStorage.getItem('isDarkMode') === 'false') return false;
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) return true;
			return false;
		}
	</script>
</svelte:head>

<nav
	class="fixed z-50 flex h-fit w-full items-center justify-center ease-in sm:h-[60px] md:px-[7%] md:py-10 {showHideNav} bottom-0 md:top-0 md:justify-between pwa:bottom-0 pwa:translate-y-0 pwa:pt-1"
>
	<!-- LOADER BAR -->
	<span class:loader-bar-fireship={showLoader} class="absolute bottom-0 left-0 sm:top-0" />

	{#key resetLogoClick}
		<a
			href="/"
			on:click={clickLogo}
			in:scale={{ duration: 1200, easing: elasticOut }}
			class="hidden p-2 font-Poppins text-xl transition-transform selection:bg-transparent hover:scale-110
			active:text-red-600 md:block md:translate-x-3 md:translate-y-[0.1rem] md:text-[min(5.5vw,40px)]"
		>
			THINKSOLVE
		</a>
	{/key}

	<ul
		class="background-animate grid w-full grid-flow-col place-items-center gap-1 overflow-y-hidden overflow-x-scroll rounded-md bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-red-200 text-xl scrollbar-hide dark:to-[#25235b] md:ml-24 md:w-auto md:rounded-xl pwa:m-0 pwa:pb-0"
	>
		<li class={data.isIOS ? 'block pwa:hidden' : 'hidden'}>
			<button
				on:click={() => modals.open('navApp')}
				class="border-b-1 rounded px-3 py-1 font-Nunito text-2xl font-thin duration-300 hover:rounded hover:bg-indigo-400 hover:text-white hover:shadow-lg active:animate-pulse md:text-xl"
			>
				App
			</button>
		</li>

		{#each Object.values($routes).slice(1, 5) as { routePath, name, icon, isCurrent }}
			{@const navIconClicked =
				isCurrent ||
				(routePath === '/homework' && $modals.homework) ||
				(routePath === '/login' && $modals.contactLink)}

			{@const loggedInDynamicRocket =
				routePath === '/login' && isLoggedIn
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

		<li class="px-3 py-2 md:scale-100 pwa:scale-100 notpwa:translate-y-1">
			<button class="fadeIn w-[24px]" on:click={toggleDarkMode}>
				{#key $isDarkMode}
					<img
						in:scale={{ duration: 1000, easing: elasticOut }}
						height="24"
						width="24"
						alt={$isDarkMode ? 'sun svg' : 'moon svg'}
						src={$isDarkMode ? '/sun.svg' : '/moon.svg'}
					/>
				{/key}
			</button>
		</li>
	</ul>
</nav>

<!-- <NavModals /> -->
<section>
	<Modal
		all
		modalOpen={data.isIOS && $modals.navApp}
		on:closeModal={() => modals.close('navApp')}
		bgTW={'text-white bg-gradient-to-br from-[#6c79f4] to-rose-400'}
	>
		<ul class="flex flex-col gap-y-8 p-10 font-Poppins text-3xl sm:text-6xl">
			<li in:scale={{ duration: 1300, easing: elasticOut }}>
				<div class="text-6xl">1.</div>
				Open Safari
			</li>
			<li in:fly={{ x: 100, delay: 1200, duration: 1000, easing: quintOut }}>
				<div class="text-6xl">2.</div>
				<div class="flex flex-row items-center justify-center gap-x-2 pt-2">
					<span> Click share icon</span>
					<img
						class="h-7 w-7 -translate-y-1 invert"
						src="/safari-share-icon.png"
						alt="safari share icon"
					/>
				</div>
			</li>

			<li class="text-black" in:fly={{ x: 200, delay: 2000, duration: 1200, easing: quintOut }}>
				<div class="text-6xl">3.</div>
				Click 'Add to Home Screen' 🚀
			</li>
		</ul>
	</Modal>

	<Modal
		on:closeModal={() => modals.close('login')}
		modalOpen={$modals.login}
		bgTW={'backdrop-blur-md'}
	>
		<LoginCard />
	</Modal>

	<Modal
		transitionsOff
		modalOpen={$modals.homework}
		on:closeModal={() => modals.close('homework')}
		bgTW={'bg-[rgba(0,0,0,0.1)]'}
	>
		<Dropzone
			textSizeTW={'text-6xl'}
			dimensionsTW={'w-[80vw] h-[85vh]'}
			brightnessTW={'brightness-95'}
		/>
	</Modal>
</section>

<style lang="postcss">
	.loader-bar-fireship {
		--gradient-from: #f97316;
		--gradient-via: #a855f7;
		--gradient-to: #ec4899;
		background-image: linear-gradient(
			to right,
			var(--gradient-from),
			var(--gradient-via),
			var(--gradient-to)
		);
		background-size: 200% 200%;
		animation:
			gradient-move 1.8s infinite,
			grow-width 0.1s forwards ease-in;
	}

	@keyframes gradient-move {
		0% {
			background-position: left;
		}

		50% {
			background-position: right;
		}

		100% {
			background-position: left;
		}
	}

	@keyframes grow-width {
		0% {
			width: 0%;
			height: 1px;
		}
		80% {
			width: 80%;
			height: 6px;
		}
		100% {
			width: 100%;
			height: 4px;
		}
	}

	.fadeIn {
		animation: fadeIn 0.8s ease;
		transform-origin: center;
	}

	@keyframes fadeIn {
		0% {
			transform: scale(0) rotate(120deg);
		}

		100% {
			transform: scale(1) rotate(0deg);
		}
	}
</style>
