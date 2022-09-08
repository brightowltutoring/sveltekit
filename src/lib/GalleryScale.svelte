<script>
    export let Src = "/reviews/review-ben.png"
    export let Alt = "review ben"
    import { isDarkMode } from '$lib/store.js'

    let imgBackground
    $: $isDarkMode ? imgBackground = `peer-focus:bg-[rgb(218,220,203)] peer-focus:invert`
                   : imgBackground = `peer-focus:bg-[#f7f7f7]`
</script>

<div class="relative">
    <input inputmode="none" class="absolute opacity-0 w-full h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 peer" />
 
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
                peer-focus:duration-300  
                " src={Src} alt={Alt}
     >
     <!-- still confused as to how this scale full screen but ok! -->
</div>

    