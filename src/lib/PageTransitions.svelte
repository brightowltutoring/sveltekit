<!-- TODO: rename this component...does more than transitions now -->
<script>
    import { inTransition, windowInnerHeight, scrollYMax } from '$lib/store.js'
	import { onMount } from 'svelte'

	onMount(setScrollYMax)

	function setScrollYMax(){
		$scrollYMax = document.body.scrollHeight - $windowInnerHeight;
	}

</script>


<div in:$inTransition on:resize= {setScrollYMax}>
    <slot/>
</div>

