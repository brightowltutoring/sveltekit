<MathJax/>
<script>
	import MathJax from "$lib/MathJax.svelte";  
	let curlyBackticks = " `{x}` "
	let fracHalf = "\\" + "frac{x}{2}"

	// import { fade,scale } from 'svelte/transition'
	// import { elasticOut, sineOut, bounceIn, bounceOut, bounceInOut} from "svelte/easing"

</script>

<div>
	Mathjax is alright in vanilla html/js but flickers when using component frameworks (like this here svelte). Additionally reloads crashes the mathjax. Additionally expressions like {fracHalf} aren't processed properly since svelte views the curly-braces-around-x as it's notation for rendering JS variable "x" in the html. To get it to work have to replace x with curly backticks expression {curlyBackticks} within the code
	<br>
	<br>


	<!-- <div in:scale={{duration:1500, easing:elasticOut }}></div> -->
		$$e^x = \frac{`{x}`}{3}$$ 
		$$e^x = \frac{`{2}`}{3}$$
	<!-- </div> -->

		




</div>