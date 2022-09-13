
<KatexIntersectionObserver />

<script>
    // I have yet to figure out for the life of me why I have to break this up into 
    // two components ... trying to use the logic all in one makes things laggy
    import KatexIntersectionObserver from "$lib/KatexIntersectionObserver.svelte"
    import K from "$lib/KatexDataProp.svelte"
    let num = 2000

     let equations = [
        "\\int_{M}d\\omega=\\int_{\\partial M}\\omega",
        "G_{\\mu\\nu}\\,+\\,\\Lambda g_{\\mu\\nu}\\,=\\,\\kappa T_{\\mu\\nu}",
        " (i\\hbar\\gamma^\\mu \\partial_\\mu  - mc) \\ \\psi = 0 ",
        "\\left\\langle{e^{-\\beta\\,W}}\\right\\rangle = \\,{e^{-\\beta\\,\\triangle\\,F}}",
        "z_{n+1}\\,=\\,z_{n}^{2}\\,+\\,c",
    ];
</script>



<!-- This markdown math is centered. Oddly the addition of this single markdown slow the katex rendering.
Fortunately it seems to scale very slowly with more markdown (comment out each container below) -->

<!-- {#each Array(100) as _,j } -->
$$
E=mc^2 
$$
<!-- {/each} -->
  
<!-- This also centers with katex + css. 
The katex components come in use with more detailed styling AND/OR lots of math to render to a single page ... in which cased I have implemented Intersection Observer logic -->

# Katex below, Markdown Above

<!-- display mode (centering plus looks nicer) is possible with just adding "d" -->
<K d m={"\\int\\limits_\{-\\infty\}\^\{\\infty\}\ e\^\{-x\^\{2\}\}\ \\\,\ dx\ =\ \\sqrt\{\\pi\}"}/>


{#each equations as eqn }
<div class="p-1 text-indigo-700">
    <K d m={eqn}/>
</div>
{/each}



# {num} lines of markdown below ... lazy loaded with intersection observer!!
# Would be nice to figure out displaymode as it looks nicer than inline latex math
 
{#each Array(num) as _,j }
    {j+1}
    <div class="p-5">
        <K d m={"\\int\\limits_\{-\\infty\}\^\{\\infty\}\ e\^\{-x\^\{2\}\}\ \\\,\ dx\ =\ \\sqrt\{\\pi\}"}/>
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