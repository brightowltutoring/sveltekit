{#key num }
<KatexIntersectionObserver />
{/key}

<script>
    import { isDarkMode } from "$lib/store.js";
    import KatexIntersectionObserver from "$lib/KatexIntersectionObserver.svelte"
    // I have yet to figure out for the life of me why I have to break this up into 
    // two components (KatexIntersectionObserver & KatexDataProp)
    // Trying to use the logic all in one makes things laggy when using lots of math
    import K from "$lib/KatexDataProp.svelte"
    let numMax = 300
    let numMDMax = numMax
    $: num = numMax
    $: numMD = numMDMax

     let equations = [
        "\\int_{M}d\\omega=\\int_{\\partial M}\\omega",
        "G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}",
        " (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ",
        "\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}",
        "z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c",
    ];


    let x=2

    // $: proseInvert = $isDarkMode? "prose-invert" : ""
</script>

<!-- <article class="prose "> -->

 <article class="prose lg:prose-lg ">


  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  <!-- ... -->


<K d m={"\\underbrace{u\'-P(x)u^2-Q(x)u-R(x)}_{\\text{=0, since~$u$ is a particular solution.}}"}/>




$$
\underbrace{u'-P(x)u^2-Q(x)u-R(x)}_{\text{=0, since~$u$ is a particular solution.}}
$$


<span class="text-red-700 text-7xl flex justify-center">

{x}$^2$={x**2}

</span>

<div class="flex justify-center">
    <input type="range" min="0"  bind:value={x} />
</div>


# The content of this page are written in a markdown file with svelte components (tailwind too), possible due to MDsveX! 
* the square-slider above using svelte binding of a JS variable ... again this is possible due to MDsveX
* The **math** on this page is written in both markdown (i.e. Latex) and with Katex.
  * for heavy inline use, markdown is preferable
  * for css/svelte transitions, only katex svelte components are viable
    * normally markdown is more performant, however with a recent implementation of the Intersection Observer API, I have made the katex math far more performant !!
      * 1000 lines vs 4000-8000+ lines of math loaded instantly on page load
      * when changing routes katex on 4000+ lines is easily transitioned ... not the same for markdown
 
  

<!-- This markdown math is centered. Oddly the addition of this single markdown slow the katex rendering.
Fortunately it seems to scale very slowly with more markdown (comment out each container below) -->

<div class="p-4">
    <input type="range" min="1" bind:value={numMD} />
    <input type="number" min="1" bind:value={numMD} />
</div>

# {numMD } lines of markdown immediately below

{#each Array(numMD) as _,j }
{j+1}

$$
E=mc^2 
$$

{/each}
  
<!-- This also centers with katex + css. 
The katex components come in use with more detailed styling AND/OR lots of math to render to a single page ... in which cased I have implemented Intersection Observer logic -->

# {num + equations.length} lines of katex below... lazy rendered with intersection observer!!
* pull this slider over to show that more equations doesnt slow the page down (capped at 10,000 but could be larger)

<input type="number" min="1"  bind:value={num} />
<input type="range" min="1"  bind:value={num} />

{#each Array(num) as _,j }
    {j+1 }
    <div class="p-5 text-red-400">
        <K d m={"\\int\\limits_\{-\\infty\}\^\{\\infty\}\ e\^\{-x\^\{2\}\}\ \\\,\ dx\ =\ \\sqrt\{\\pi\}"}/>
    </div>
{/each}

{#each equations as eqn,k }
{k+1 + num}
<div class="p-1 text-indigo-700">
    <K d m={eqn}/>
</div>
{/each}


</article>





<!-- Useful Markdown styles .. removed from tailwind   -->
<!-- 
<style>
    blockquote {  
        margin: 0;  
        padding-left: 1.4rem;  
        border-left: 8px solid #bbb; 
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
</style> -->