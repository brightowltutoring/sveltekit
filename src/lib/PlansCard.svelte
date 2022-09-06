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



    export let btnColor="bg-[rgba(114,202,202,0.8)]"
    // export let btnColorHover="hover:bg-[rgba(114,202,202,1)]"
    export let btnColorHover=""
    // export let btnColor="bg-[rgba(253,165,165,0.8)]"
    // export let btnColorHover="hover:bg-[rgba(253,165,165,1)]"
    // hue-rotate-[180deg]
    $: cardColor = $isDarkMode ? dark_lightened : light_darkened

    // let hoverTransform = "rotateX(0deg)) scale(1)"


</script>


<!-- <div class="shadow-xl rounded-xl w-[10] min-w-fit p-10 m-4 text-center duration-300 group"
     style={`background:${cardColor}; transform:perspective(1000px) ${hoverTransform};`}
     on:mouseover={()=>{hoverTransform = "rotateX(8deg) scale(1.1)"}}
     on:focus={()=>{hoverTransform = "rotateX(8deg) scale(1.1)"}}
     on:mouseout={()=>{hoverTransform = "rotateX(0deg) "}}
     on:blur={()=>{hoverTransform = "rotateX(0deg) "}} -->
<div class="shadow-xl rounded-xl w-[10] min-w-fit p-10 m-4 text-center duration-300 group cardCSS "
     style={`background:${cardColor}`}
   
     
    >
    {#key resetBtn }
    <button on:click={resetBtnValue} in:scale={{duration: 1000, easing:elasticOut}} class=" cardBtn {btnColor} {btnColorHover}  hover:shadow-md duration-300 rounded-md p-4 {$isDarkMode ? "group-hover:bg-opacity-80":"group-hover:bg-opacity-60"} text-xl text-white"
    >

        <slot name="buttonText">
            default button Text
        </slot>
    

    </button>
    {/key}


    <p class="py-2 text-2xl">
        <slot name="cardTitle"> 

        </slot>
    </p>
    


    <slot name="cardText"> 
        default cardText
    </slot>


</div>

<!-- hover wouldnt return on safari!! -->
<style>
    
    .cardCSS {
      transform: perspective(1000px) rotateX(0deg);
      transition: transform 0.3s ease 0s;
    }
    
    .cardCSS:hover {
      transform: perspective(1000px) rotateX(12deg) scale(1.02);
    }
 
</style>