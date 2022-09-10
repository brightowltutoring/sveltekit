<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>

<script>
	import K from 'svelte-katex'
	const x=2
</script>

<K>ax^2+bx+c=0</K>
<K displayMode>ax^2+bx+c=0</K>


<K>\frac{'{ \\sqrt{3} }'}{ 3}</K>
<K>\sqrt{'{y}'}</K>

<K displayMode>a\sqrt{'{x}'}^2+bx+c=0</K>

