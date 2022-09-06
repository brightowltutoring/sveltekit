<svelte:head>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
	<!-- <script src="https://use.fontawesome.com/4655df7e48.js"></script> -->
	<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
	<!-- <script src="https://kit.fontawesome.com/be3bf075fa.js" crossorigin="anonymous"></script> -->
</svelte:head>

<script>
    import { scale } from 'svelte/transition'
    import { elasticOut } from 'svelte/easing'
    import { isDarkMode } from '$lib/store.js'

    function toggleDM() {
        window.document.body.classList.toggle('dark-mode')  
        $isDarkMode =!$isDarkMode
        // elements=[
        //     window.document.body,
        // ]
       
        // for (let el of elements){
        //     el.classList.toggle('dark-mode')   
        // }
	}
</script>

{#key $isDarkMode}
<button on:click={toggleDM} in:scale={{duration:1000, easing:elasticOut}} >
    {#if $isDarkMode }  
        <!-- ☾ -->
        <i class="las la-sun hover:scale-110 transition-transform duration-500"></i>
        <!-- <i class="fa-solid fa-sun opacity-70 hover:opacity-100 transition-opacity duration-700"></i> -->
        <!-- <i class="fa fa-sun-o "></i> -->
        <!-- <i href="/sun-solid.svg"></i> -->
        <!-- <i class="fa fa-car"></i> -->
        {:else}             
        <!-- ☼ -->
        <i class="las la-moon hover:scale-110 transition-transform duration-500 "></i>
        
        <!-- <i class="fa fa-car"></i> -->
        <!-- <i class="fa fa-moon-o "></i> -->
        <!-- <i href="/moon-solid.svg"></i>
         -->
        <!-- <i class="fa-solid fa-moon opacity-70 hover:opacity-100 transition-opacity duration-700"></i> -->
    {/if}
</button>
{/key}
