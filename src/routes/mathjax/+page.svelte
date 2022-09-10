<MathJax/>
<script>
	import MathJax from "$lib/MathJax.svelte";  
	

	// import { blur, scale, fly, fade} from 'svelte/transition'
    // import { quintOut, elasticOut } from 'svelte/easing'

	let num = 50


</script>

<p>

	$$ \frac{`{x}`}{3} $$
	{`$$\\frac{x}{3}$$`}
	
	{`$$ 
	S (\\omega)=\\frac{\\alpha g^2}{\\omega^5} \,
	e ^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]} 
	$$`}
</p>

		
{#each Array(num) as _,i}

<details >
	<!-- <p in:scale={{ easing:elasticOut, delay:200, duration: 1000}}> -->
		<summary>{i}</summary>
	<p>

			$$ \frac{`{x}`}{3} $$
			{`$$\\frac{x}{3}$$`}
			
			{`$$ 
			S (\\omega)=\\frac{\\alpha g^2}{\\omega^5} \,
			e ^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]} 
			$$`}
	</p>
</details>
		{/each}