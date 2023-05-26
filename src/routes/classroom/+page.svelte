<script lang="ts">
	import EnableJavascript from '$lib/EnableJavascript.svelte';
	import JitsiUser from './JitsiUser.svelte';
	import { page } from '$app/stores';
	import { isDarkMode } from '$lib/store/clientStore';
	import { disableScrollingOnPage } from '$lib/utils';
	import { onDestroy, onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	disableScrollingOnPage($page.url.pathname);
	let initiallyInLightmode: boolean;

	onMount(() => {
		initiallyInLightmode = $isDarkMode === false;
		document.documentElement.classList.add('dark-mode');
		isDarkMode.set(true);
	});

	onDestroy(() => {
		if (initiallyInLightmode) {
			isDarkMode.set(false);
			document.documentElement.classList.remove('dark-mode');
		}
	});
</script>

<EnableJavascript />

<div
	class="disableScrollOnThisPage"
	in:scale={{
		duration: 2000,
		easing: quintOut
	}}
>
	<JitsiUser />
</div>
