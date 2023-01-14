<!-- This code has two streams: either does things the vanilla way or the component-slot way -->
<script lang="ts">
	import { onMount } from 'svelte';

	export let vanilla = false; // IF doing intersection observer the vanilla javascript way, user specifies this parameter as the querySelectee ... i.e. vanilla = {'#someId'}
	export let once = false; // existence prop; when declared, observation happens once per 'element'
	export let onview = (target: any) => console.log('i ❤️ slots'); // action taken when 'element' comes "into view"

	let container: HTMLElement; // refers to container div of the <slot/>-component (i.e. when not using vanilla approach)
	export let single = false; // existence prop; when declared the observation is done on the first child of <slot/>, rather than the div container of <slot/>, ... useful when modifying a single wrapped element

	export let root = null;
	export let threshold = 0;
	export let margin = '0px';

	const options = { root, threshold, rootMargin: margin };

	function handleIntersect(entries: any, observer: any) {
		// let entrees = vanilla ? entries : [entries[0]];
		// TODO: UPDATE: when doing for loop it seems to not matter to 'array-ify' even if entries is a single element
		// for (const entry of entrees) {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				onview(entry.target); // pass element as an argument in case we need to modify element itself
				once && observer.unobserve(entry.target);
			}
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(handleIntersect, options);

		if (!vanilla && !single) observer.observe(container);
		// when viewing wrapped element(s)

		if (!vanilla && single) observer.observe(container.children[0]);
		// when viewing and modifying single wrapped element

		if (vanilla) document.querySelectorAll('vanilla').forEach((el) => observer.observe(el));
		// when vanilla javascript is needed ... such as when using external libraries/javascript
	});
</script>

{#if !vanilla}
	<div bind:this={container}>
		<slot />
	</div>
{/if}
