<MathJax/>
<script>
	import MathJax from "$lib/MathJax.svelte";  
	let curlyBackticks = " `{x}` "
	let fracHalf = "\\" + "frac{x}{2}"

	import { blur, scale, fly, fade} from 'svelte/transition'
    import { quintOut, elasticOut } from 'svelte/easing'

	let num = 100
	$: delayy = num / 4
	$: durationn = 16*num


</script>

<p>
	Mathjax is alright in vanilla html/js but flickers when using component frameworks (like this here svelte). Additionally reloads crashes the mathjax. Additionally expressions like {fracHalf} aren't processed properly since svelte views the curly-braces-around-x as it's notation for rendering JS variable "x" in the html. To get it to work have to replace x with curly backticks expression {curlyBackticks} within the code
<br>
	
</p>

<!-- $$I=\int_0^1 f(x) dx $$ -->
{#each Array(num) as _,i}
	<p in:scale={{ easing:elasticOut, delay:20, duration: 1000}}>
	<!-- <p in:fly={{x:300, easing:quintOut, duration:1200}}> -->
		{i} 

		$$ \frac{`{x}`}{3} $$

		$\frac{`{x}`}{3}$

		{`$$\\frac{x}{3}$$`}
		{`$$ 
			S (\\omega)=\\frac{\\alpha g^2}{\\omega^5} \,
		e ^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]} 
		$$`}
	</p>
	<!-- {`$$x = \\frac{t}{3}$$`} -->
{/each}