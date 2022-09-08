<script>
	import katex from "katex";
	export let math;
	export let displayMode = false;
	
	const options = {
		displayMode: displayMode,
		throwOnError: false
	}
	
	$: katexString = katex.renderToString(math, options);

	import { scale, fade, slide, fly } from 'svelte/transition'
	import { elasticOut, quintOut } from "svelte/easing"

	
   

</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
	
</svelte:head>

<div in:fly={{x:30, duration:1000, easing:elasticOut }}>
	{@html katexString}
</div>

