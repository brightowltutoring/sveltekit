<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	export let bgColorTW = 'bg-rose-400';
	export let innerText = '';
	export let icon: SvelteComponent | any = undefined;
</script>

<button
	on:click
	class="group z-50 flex w-full items-center justify-center gap-5 rounded-md p-4 text-white {bgColorTW} duration-200 hover:scale-[1.01] hover:shadow-md group-hover:bg-opacity-90 dark:bg-opacity-80 dark:group-hover:bg-opacity-90"
>
	<span class="duration-500 group-hover:scale-[1.15]">
		<!-- where the icon goes -->
		<svelte:component this={icon} />
		<!-- <slot /> -->
	</span>

	<span>{innerText}</span>
</button>
