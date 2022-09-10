<!-- Mathjax has greater scope of functions but katex is faster
idea: when needed can place mathjax in drop down menus
-->
<script>
  // import Component
  import K from "$lib/Katex.svelte";

  // math equations
  const math1 = "V=\\frac{1}{3}\\pi r^2 h";
  const math2 = "x=-\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}";
  const math3 = "ax^2+bx+c=0";

  // set up array and index for reactivity and initialize
  const mathArray = [math1, math2, math3];
  let index = 0;
  $: math = mathArray[index];

  // changeMath function for button click
  function changeMath() {
    // increase index
    index = (index + 1) % 3;
  }
</script>

<!-- testing using both mathjax and katex on same page ...-->

# heyo

{#each Array(40) as _, i}
  <K d m={"I=\\int_0^1 f(x) dx"} />
  <!-- <K d m={String.raw`
	I=\int_0^1 f(x) dx
`}/> -->
{/each}

<!-- {#each Array(2) as _,i}

	<Katex math={"I=\\int_0^1 f(x) dx"} displayMode/>

{/each} -->
<!-- 
<p class="text-2xl text-center">KaTeX svelte component demo </p>

<h2>Inline math</h2>
Our math equation: <Katex {math} /> and it is inline.

<h2>Displayed math</h2>
Our math equation: <Katex {math} tr={true} displayMode/> and it is displayed.



<h2>Reactivity</h2>
<button on:click={changeMath}>
	Displaying equation {index}
</button>

<h2>Static math expression within HTML</h2> 
<Katex math={"V=\\pi \\textrm{ m}^3 "}/>



Check out <a rel="external" href="https://www.npmjs.com/package/svelte-katex">Svelte KaTeX</a> for an implementation of a Svelte KaTeX component that takes markup via slots

<h2>
	Disucssion of various approaches
</h2>
Visit <a rel="external" href="https://svelte-math.vercel.app">Svelte Math</a> to see a discussion of various ways to implement math in Svelte/SvelteKit.

<style>
	a {
		background-color: lightgray;
		text-decoration: underline;
		font-weight: 700;
		padding: 0.5em;
	}


</style> -->
