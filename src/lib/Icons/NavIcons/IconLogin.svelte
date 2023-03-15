<script>
	export let navIconClicked;

	$: navIconClickedFill = navIconClicked && '!fill-rose-300';
	// $: navIconClickedFill =
	//   navIconClicked && (!$isDarkMode ? "fill-rose-300" : "fill-indigo-200");

	// TODO: replaced with tailwind 'dm:' logic .., no longer need $isDarkMode
	// import { isDarkMode } from '$lib/store';
	// $: fillColor = $isDarkMode ? 'white' : 'black';

	// let scaleTW = "scale-[1.5] origin-top";
	let size = 20;
</script>

<svg class="bg- origin-top scale-[1.5]" width={size} height={size} viewBox="0 0 {size} {size}">
	<!-- class={navIconClickedFill} -->
	<!-- fill={fillColor} -->
	<path
		class={`fill-black dark:fill-white ${navIconClickedFill}`}
		d="M14 10L8 5v3H1v4h7v3l6-5zm3 7H9v2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9v2h8v14z"
	/>
</svg>
