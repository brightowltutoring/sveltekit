<!-- TODO: currently breaks on route change in svelte/sveltekit -->
<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
	
</svelte:head>

<script>
	import katex from 'katex'

	let render = n => katex.render(n.textContent, n) 
	// let render = n => katex.render(String.raw`${n.textContent}`, n) 
	import { navigating } from '$app/stores';

	console.log($navigating);

</script>


<span use:render><slot></slot></span>