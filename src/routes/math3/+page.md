<svelte:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css" integrity="sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X" crossorigin="anonymous">
</svelte:head>
<!-- This needed if importing katex from 'katex' here -->

<script>

    import { onMount } from 'svelte'
    import katex from "katex"
    
    
    // let demo
    let myKatex
    // let katexContainer
    // let mdMathContainer
    let observer
    // let eqn ="c = \\pm\\sqrt{a^2 + b^4}"

    // let demo2
    // function getDataMath(){
    //     console.log(demo2.dataset.math);
    // }

    onMount(()=>{

        myKatex = document.querySelectorAll(".myKatex")

        const options = {
            root: null,
            threshold: 0,
            rootMargin:"500px" 
            // rootMargin:"-100px" //shows the lag effect
        }
        observer = new IntersectionObserver( (entries,observer) => {
            entries.forEach( entry => {
                if(entry.isIntersecting) { 
                    // let child = entry.target.children[0]
                    let child = entry.target
                    let math = child.dataset.math
                    console.log(child);
                    console.log("math",math);
                    katex.render(math, child)   
              
                    observer.unobserve(entry.target)
                }

            })
        }, options)


        // for(let el of katexContainer) { 
        for(let el of myKatex) { 
            observer.observe(el) 
        }
    })

    let num = 10000


</script>


{#each Array(num) as _,j }
<div class="myKatex" data-math={"e=mc^2"}>
..
</div>
{/each}


{#each Array(num) as _,j }
<div class="myKatex" data-math={"c = \\pm\\sqrt{a^3 + b^3}"}>
..
</div>
{/each}




<style>
     .hide {
        width:0;
        height: 0; 
        /* overflow: hidden; */
        display:none;

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