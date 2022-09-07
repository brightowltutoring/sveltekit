<svelte:head>
    <!-- Calendly link widget begin -->
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
    <!-- Calendly link widget end -->
</svelte:head>

<script>
    import { scale } from 'svelte/transition'
    import { elasticOut } from 'svelte/easing'
    import { isDarkMode, light, light_darkened, dark, dark_lightened } from '$lib/store.js'

    let resetBtn = false
    export let calendlyUrl=''

    function resetBtnValue(){ 

        // hoverTransform = "rotateX(0deg)) scale(1)"
        resetBtn = !resetBtn 
        Calendly.initPopupWidget({url:`${calendlyUrl}`});
    }

    export let btnColorHover=""
    $: cardColor = $isDarkMode ? dark_lightened : light_darkened

    // let hoverTransform = "rotateX(0deg)) scale(1)"

    export let card /* 1,2,3, */

    let buttonColor = {
        1: "bg-[rgb(45,165,214)]", /* blue */
        2: "bg-[rgb(244,77,77)]",  /* red */
        3: "bg-[rgb(254,164,92)]", /* yellow */
    }
</script>


<!-- <div class="shadow-xl rounded-xl w-[10] min-w-fit p-10 m-4 text-center duration-300 group"
     style={`background:${cardColor}; transform:perspective(1000px) ${hoverTransform};`}
     on:mouseover={()=>{hoverTransform = "rotateX(8deg) scale(1.1)"}}
     on:focus={()=>{hoverTransform = "rotateX(8deg) scale(1.1)"}}
     on:mouseout={()=>{hoverTransform = "rotateX(0deg) "}}
     on:blur={()=>{hoverTransform = "rotateX(0deg) "}} -->
<div class="shadow-2xl rounded-xl w-[10] min-w-fit p-10 m-1 text-center duration-300 group cardCSS "
     style={`background:${cardColor}`}
 >
    {#key resetBtn }
    <button on:click={resetBtnValue} in:scale={{duration: 1000, easing:elasticOut}} class=" {buttonColor[card]} {btnColorHover}  hover:shadow-md duration-300 rounded-md p-4 {$isDarkMode ? "group-hover:bg-opacity-80":"group-hover:bg-opacity-80"} text-xl text-white"
     >
        <slot name="buttonText">default button Text</slot>
    </button>
    {/key}
    
    <div class="py-4">
        <slot name="cardText">default cardText</slot>
    </div>
    <!-- <p class="py-2 text-2xl">
        <slot name="cardTitle"></slot>
    </p> -->
</div>


<style>    
    .cardCSS {
      transform: perspective(1000px) rotateX(0deg);
      transition: transform 0.3s ease 0s;
    }
    
    .cardCSS:hover {
      transform: perspective(1000px) rotateX(12deg) scale(1.02);
    }
 
</style>