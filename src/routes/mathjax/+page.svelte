<MathJax/>
<script>
	import MathJax from "$lib/MathJax.svelte";  
	let curlyBackticks = " `{x}` "
	let fracHalf = "\\" + "frac{x}{2}"

	import { blur } from 'svelte/transition'
    import { quintOut } from 'svelte/easing'

</script>

<p>
	Mathjax is alright in vanilla html/js but flickers when using component frameworks (like this here svelte). Additionally reloads crashes the mathjax. Additionally expressions like {fracHalf} aren't processed properly since svelte views the curly-braces-around-x as it's notation for rendering JS variable "x" in the html. To get it to work have to replace x with curly backticks expression {curlyBackticks} within the code
<br>
	
</p>

<span in:blur={{easing:quintOut, duration:400}}>
	$e^x = \frac{2}{3}$
	$$e^x = \frac{`{x}`}{3}$$
</span>


<details open class="bg-red-100 disDetails">
	<summary>hidden mathjax (to hide page load flicker)</summary>
	$$I=\int_0^1 f(x) dx $$
</details>

{#each Array(100) as _,i}
	
<details class="bg-red-100 disDetails">
	<summary>hidden mathjax (to hide page load flicker)</summary>
	$$I=\int_0^1 f(x) dx $$
</details>
{/each}