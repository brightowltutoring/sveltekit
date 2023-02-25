<script>
	export let bindThis;
	export let onClick = () => {};
	export let innerText = '';
	export let bgColorTW = 'bg-rose-400';
</script>

<button
	bind:this={bindThis}
	on:click={onClick}
	class=" group flex w-full items-center justify-center gap-5 rounded-md {bgColorTW} p-4 text-white duration-200 hover:scale-[1.01] hover:shadow-md group-hover:bg-opacity-90 dark:bg-opacity-80 dark:group-hover:bg-opacity-90"
>
	<span class="duration-500 group-hover:scale-[1.15]">
		<!-- where the icon goes -->
		<slot />
	</span>

	<span>{innerText}</span>
</button>
