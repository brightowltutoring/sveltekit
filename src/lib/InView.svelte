<!-- slots version of intersection observer ==> no longer have to implement for loops at the 'isIntersecting' logic, nor queryselect refer to dom elements by id/class/etc -->
<script>
  import { onMount } from "svelte";

  let container; // refers to container div of the <slot/>-component

  export let once; // existence prop; when declared observation of container happens once
  export let single; // existence prop; when declared the observation is done on the first child of <slot/>, rather the the div container of <slot/>, ... useful when modifying a single wrapped container
  export let action = () => console.log("i ❤️ slots");
  export let root = null;
  export let threshold = 0;
  export let margin = "0px";

  const options = { root, threshold, rootMargin: margin };

  const handleIntersect = (entries, observer) => {
    let entry = entries[0];
    if (entry.isIntersecting) {
      action(entry.target);
      once && observer.unobserve(entry.target);
    }
  };

  onMount(() => {
    const observer = new IntersectionObserver(handleIntersect, options);

    single
      ? observer.observe(container.children[0])
      : observer.observe(container);
  });
</script>

<div bind:this={container}>
  <slot />
</div>
