<!-- <svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head> -->

<script>
	import K from '$lib/K.svelte'
	// import { goto } from '$app/navigation'
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css" integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn" crossorigin="anonymous">
</svelte:head>

<!-- <button on:click={()=>{
	goto('/')
}}>Home using goto()</button>

<a href='\'>Home using anchor tag</a> -->

Simple 
<K >x_i = y^2_j</K>
<br />
Another <K>E = mc^2</K>
<br />
Complex no escape <K>{String.raw`c = \pm\sqrt{a^2 + b^2}`}</K>
<br />
Escape the braces <K>c = \pm\sqrt{'{'}a^2 + b^2{'}'}</K>
<br />
Escape the slashes <K>{`c = \\pm\\sqrt{a^2 + b^2}`}</K>
<br />