<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css" integrity="sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X" crossorigin="anonymous"> -->
<script>
    import { elementColor } from "$lib/store.js"
    // $:console.log($elementColor)
    import K from '$lib/Katex.svelte'; 
    // this component already includes the commented rel link above, otherwise it's needed
    import { blur, scale, fly, fade} from 'svelte/transition'
    import { elasticOut, /* quintOut,*/ } from 'svelte/easing'

    let x = 2


    $: buttonColorTransition = `background: ${$elementColor};transition: background-color 0.4s cubic-bezier(0.64, 0, 0.78, 0)`



    import { onMount } from 'svelte'
    let eqns=[];
    let observer

    
    onMount(()=>{
        eqns = document.querySelectorAll(".eqns")
        
        const options = {
            root: null,
            threshold: 0.1,
            // rootMargin:"-2000px" 
            // rootMargin:"-100px" //shows the lag effect
        }
        observer = new IntersectionObserver( (entries,observer) => {
            entries.forEach( entry => {
                console.log(entry);
                if(!entry.isIntersecting) { return }
                entry.target.classList.remove("hide");
                // entry.target.className-="hide";
                // entry.target.style.color="blue";
                // entry.target.style.display="block"
                observer.unobserve(entry.target)
            })
        }, options)

        for(let eqn of eqns) { observer.observe(eqn) }
    })

let num = 400


function showy(){
     for(let el of eqns){
        el.style.display="block"
     }

}
function hidey(){

    for(let el of eqns){
        el.style.display="none"
    }
}

function setRed(){
     for(let el of eqns){
        el.style.color="red"
    }
}
</script>



# The content on this page is written in a markdown file, which uses html, css, svelte components ...thanks to MDsveX + plugins!


<button on:click={showy}>showy</button>
<button on:click={hidey}>hidey</button>
<button on:click={setRed}>setRed</button>



<!-- or span  in this funky way. Value of span  is using it with IntersectionObserver below -->
<span   class="eqns hide" >

$$
E=mc^{2}
$$

</span >



<span class="eqns hide"  in:scale={{easing:elasticOut, duration: 1000}}>
	<K d m={'\\int\\limits_\{-\\infty\}\^\{\\infty\}\ e\^\{-x\^\{2\}\}\ \\\,\ dx\ =\ \\sqrt\{\\pi\}'}  />
	<K
		d
		m={'S(\\omega)=\\frac{\\alpha g^2}{\\omega^5} ,e^{[-0.74\\bigl\\{\\frac{\\omega U_\\omega 19.5}{g}\\bigr\\}^{-4}]}'}
	/>
</span>



{#each Array(num) as _,j }
<span   class="eqns hide" > 

$$
\begin{aligned} 
I=\int_{0}^{1}f(x)d x
\end{aligned}
$$

</span >
{/each}

{#each Array(num) as _,j }
    <span  class="eqns hide">
        <K d m={'\\prod_\{i=a\}\^\{b\}\ f\(i\)'}  />
    </span >
{/each}


<!-- tailwind is still very useful inline, however so are original bullet points,   -->
<style>

  

    /* .eqns {
        display:block;
    } */
    .eqns.hide {
        /* display:none; */

        width:0;
        height: 0; 
        overflow: hidden;
        /* visibility: visible; */
    }

  
   
   
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