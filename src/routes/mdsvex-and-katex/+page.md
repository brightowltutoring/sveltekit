<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css" integrity="sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X" crossorigin="anonymous"> -->
<script>
    import { elementColor } from "$lib/store.js"
    // $:console.log($elementColor)
    import K from '$lib/Katex.svelte'; 
    // this component already includes the commented rel link above, otherwise it's needed
    import { blur, scale, fly, fade} from 'svelte/transition'
    import { elasticOut, /* quintOut,*/ } from 'svelte/easing'

    let x = 2

    function scaleHueElastic(node, { delay = 0, duration = 400, easing=elasticOut }) {
		const o = +getComputedStyle(node).opacity;

		return {
			delay,
			duration,
            easing,
			css: (t) => `
            transform: scale(${t});
            filter: hue-rotate(${t*2}turn);
            `
		};
	}

    
</script>



# The content on this page is written in a markdown file, which uses html, css, svelte components ...thanks to MDsveX + plugins!

<p>&nbsp;</p>

<!-- <div class="h-6"></div> -->


The black math expressions are written in markdown. 

* **Advantage1**: writing lots of inline math expressions — e.g. "..the general Einsteinian equation is **NOT** $E=mc^4$ — bur rather $E^3=m^2c^4 + p^2c^2$..."— is much simpler with markdown. **Advantage2**: Markdown math has identical syntax to Latex. 
* **Disadvantage**: cannot apply css directly to math expression



>The base "2" here — $x=${x}$^2$... —  is taken from script variable. 
> <button class="p-2 shadow-2xl" style:background={$elementColor}  on:click={()=>{x++}}>increment</button>
> <button class="p-2 shadow-2xl" style:background={$elementColor} on:click={()=>{x--}}>decrement</button>

>$$
>\begin{aligned}
>A & = \frac{\pi r^2}{2} \\
> & = \frac{1}{2} \pi r^2
>\end{aligned}
>$$



<!-- \frac{1}{2} \pi r^2 -->

These red math expressions are (katex) svelte components. 
* **Advantage1**: can apply css; the color was done with tailwind and the bounce was done with svelte transition!! **Advantage2**: can use conditional logic (e.g. for loops)
* **Disadvantage1**: terrible for inline math expressions. **Disadvantage2**: syntax starts to depart from latex: escaping characters (i.e. '\\\frac ...') and having to be wrapped within svelte components.

{#each Array(3) as _, i}
<!-- <div class="text-red-500" in:scaleHueElastic> -->
<!-- <div class="text-red-500" in:scale={{easing:elasticOut, duration: 1000}}> -->
<div in:scale={{easing:elasticOut, duration: 1000}}>
	<K d m={'\\int\\limits_\{-\\infty\}\^\{\\infty\}\ e\^\{-x\^\{2\}\}\ \\\,\ dx\ =\ \\sqrt\{\\pi\}'}  />
	<K d m={'\\prod_\{i=a\}\^\{b\}\ f\(i\)'}  />
	<K d m={' A \\overset{!}{=} B; A \\stackrel{!}{=} B'}  />
	<K m={'k = \\frac{aL}{At} \\ln \\frac{h_0}{h_t}'} />
	<K d m={'I=\\int_0^1 f(x) dx'} />
	<K d m={'\\frac{x}{3}'} />
	<K
		d
		m={'S(\\omega)=\\frac{\\alpha g^2}{\\omega^5} ,e^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]}'}
	/>
</div>
{/each}



<!-- tailwind is still very useful inline, however so are original bullet points,   -->
<style>
   
    blockquote {  
        margin: 0;  
        padding-left: 1.4rem;  
        border-left: 8px solid #bbb; 
        /* border-left: 4px solid #dadada;  */
        }
    ul { 
    list-style-type: disc; 
    list-style-position: inside; 
    }
    ol { 
    list-style-type: decimal; 
    list-style-position: inside; 
    }
    ul ul, ol ul { 
    list-style-type: circle; 
    list-style-position: inside; 
    margin-left: 15px; 
    }
    ol ol, ul ol { 
    list-style-type: lower-latin; 
    list-style-position: inside; 
    margin-left: 15px; 
    }
    h1 {
    @apply text-2xl;
    }
    h2 {
    @apply text-xl;
    }
    h3 {
    @apply text-lg;
    }
    a {
    @apply text-blue-600 underline;
    }
</style>