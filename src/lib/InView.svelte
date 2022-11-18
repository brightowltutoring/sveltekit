<!-- This code has two streams: either does things the vanilla way or the component-slot way -->
<script>
  import { onMount } from "svelte";

  export let vanilla; // IF doing intersection observer the vanilla javascript way, user specifies this parameter as the querySelectee ... i.e. vanilla = '#someId'
  export let once; // existence prop; when declared observation happens once per 'element'
  export let onview = () => console.log("i ❤️ slots");

  let container; // refers to container div of the <slot/>-component (i.e. when not using vanilla approach)
  export let single; // existence prop; when declared the observation is done on the first child of <slot/>, rather than the div container of <slot/>, ... useful when modifying a single wrapped element

  export let root = null;
  export let threshold = 0;
  export let margin = "0px";

  const options = { root, threshold, rootMargin: margin };

  function handleIntersect(entries, observer) {
    let entrees = vanilla ? entries : [entries[0]];
    // note when NOT vanilla then we have a single entry 'entries[0]', however in order to consolidate with iterators (either forEach or for loop) it has to be wrapped in '[...]' ..which is array notation

    entrees.forEach((entry) => {
      if (entry.isIntersecting) {
        onview(entry.target);
        once && observer.unobserve(entry.target);
      }
    });
  }

  onMount(() => {
    const observer = new IntersectionObserver(handleIntersect, options);

    if (vanilla)
      document.querySelectorAll(vanilla).forEach((el) => observer.observe(el));

    if (!vanilla && !single) observer.observe(container);

    if (!vanilla && single) observer.observe(container.children[0]);
  });
</script>

{#if !vanilla}
  <div bind:this={container}>
    <slot />
  </div>
{/if}
