<script>
    import { scale } from 'svelte/transition'
    import { elasticOut } from 'svelte/easing'
    let resetBtn=false
    function resetBtnValue(){
        resetBtn=!resetBtn
    }


    export let buttonColor="bg-[rgba(253,165,165,1)]"
    export let buttonColorHover="hover:bg-[rgba(253,165,165,0.4)]"

</script>

<div class="card shadow-xl rounded-xl w-[300px] p-10 m-4 text-center duration-300">
    {#key resetBtn }
    <button on:click={resetBtnValue} in:scale={{duration: 1000, easing:elasticOut}} class=" cardBtn {buttonColor} {buttonColorHover}  hover:shadow-md duration-300 rounded-md p-4 ">

        <slot name="buttonText">
            default button Text
        </slot>

    </button>
    {/key}


    <p class="py-2 text-2xl">
        <slot name="cardTitle"> 
            default cardTitle
        </slot>
    </p>
    


    <slot name="cardText"> 
        default cardText
    </slot>
</div>


<style>
    
    .card {
      transform: perspective(1000px) rotateY(12deg);
      transition: transform 0.3s ease 0s;
    }
    
    .card:hover {
      transform: perspective(3000px) rotateY(0deg) scale(1.02);
    }
    /* .cardBtn {
        background-color: rgba(253,165,165,1)     
    }
    
    .cardBtn:hover {
        background-color: rgba(253,165,165,0.4)
    } */
</style>