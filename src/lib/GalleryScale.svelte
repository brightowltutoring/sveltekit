<script>
    export let Src = "/reviews/review-ben.png"
    export let Alt = "review ben"
    import { isDarkMode } from '$lib/store.js'

    let imgBackground
    $: $isDarkMode ? imgBackground = `peer-focus:bg-[rgb(218,220,203)] peer-focus:invert`
                   : imgBackground = `peer-focus:bg-[#f7f7f7]`
</script>

<div class="relative">
    <input class="peer opacity-0 w-full h-full" />
    <!-- still confused as to how this scale full screen but ok! -->
    <img  class="hover:shadow-2xl 
                {imgBackground}
                peer-hover:shadow-lg 
                peer-focus:fixed 
                peer-focus:top-10 
                peer-focus:left-10 
                peer-focus:z-50  
                peer-focus:-translate-x-8 
                peer-focus:scale-[1] 
                sm:peer-focus:scale-[0.85] 
                " src={Src} alt={Alt}>
            </div>


<style>
    .relative input {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    /* .relative input:focus ~ img {
        transform: scale(2);
    } */

    /* img {
      transform: perspective(1000px) rotateX(0deg);
      transition: transform 0.3s ease 0s;
    }
    
    img:hover {
      transform: perspective(1000px) rotateX(6deg) ;
    } */
</style>