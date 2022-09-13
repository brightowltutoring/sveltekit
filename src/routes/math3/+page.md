<KatexIntersectionObserver/>

<script>
    // I have yet to figure out for the life of me why I have to break this up into 
    // two components ... trying to use the logic all in one makes things laggy
    import KatexIntersectionObserver from "$lib/KatexIntersectionObserver.svelte"
    import K from "$lib/KatexDataProp.svelte"
    let num = 2000
</script>



This page has {2*num} lines of Katex ... Intersection Observer lazy renders the math on scroll down!!

{#each Array(num) as _,j }
<K data_math={"e=mc^2"}/>
<!-- <div class="myKatex" data-math={"e=mc^2"}>.</div> -->
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