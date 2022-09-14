{#key num }
<KatexIntersectionObserver />
{/key}

<script>
    import KatexIntersectionObserver from "$lib/KatexIntersectionObserver.svelte"
    // I have yet to figure out for the life of me why I have to break this up into 
    // two components (KatexIntersectionObserver & KatexDataProp) ... trying to use 
    // the logic all in one makes things laggy
    import K from "$lib/KatexDataProp.svelte"
    $: num = 1

     let equations = [
        "\\int_{M}d\\omega=\\int_{\\partial M}\\omega",
        "G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}",
        " (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ",
        "\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}",
        "z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c",
    ];
</script>

# The content of this page are written in a markdown file with svelte components (tailwind too), possible due to MDsveX! 
* The **math** on this page is written in both markdown (i.e. Latex) and with Katex.
  * for heavy inline use, markdown is preferable
  * for css/svelte transitions, only katex svelte components are viable
    * normally markdown is more performant, however with a recent implementation of the Intersection Observer API, I have made the katex math far more performant .... a page full of katex math can now be arbitrarily large and loads instantly on mobile!!
  

<!-- This markdown math is centered. Oddly the addition of this single markdown slow the katex rendering.
Fortunately it seems to scale very slowly with more markdown (comment out each container below) -->

<!-- {#each Array(100) as _,j } -->
$$
E=mc^2 
$$
<!-- {/each} -->
  
<!-- This also centers with katex + css. 
The katex components come in use with more detailed styling AND/OR lots of math to render to a single page ... in which cased I have implemented Intersection Observer logic -->

# Markdown Above; {num + equations.length} lines of katex below ... lazy rendered with intersection observer!!
* pull this slider over to show that more equations doesnt slow the page down (capped at 10,000 but could be larger)

<input type="range" min="1" max="10000" bind:value={num} />

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


 






<!-- Useful Markdown styles .. removed from tailwind   -->
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
</style>