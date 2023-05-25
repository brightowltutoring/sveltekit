<script lang="ts">
	import JitsiUser from './JitsiUser.svelte';
	import EnableJavascript from '$lib/EnableJavascript.svelte';

	import { onMount, onDestroy } from 'svelte';
	import { isDarkMode } from '$lib/store/clientStore';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import { disableScrollingOnPage } from '$lib/utils';

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
