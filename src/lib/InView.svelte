<!-- TODO: the beauty of slots version of intersection observer is that we no longer have to implement or loops at the 'isIntersecting' portion, nor do we have to querySelect nor "id" the desired elements -->
<script>
  import { onMount } from "svelte";

  export let once = false;

  export let action = () => {
    console.log("slots slots ssslots");
  };
  export let margin = "0px";

  const options = {
    root: null,
    threshold: 0,
    rootMargin: margin,
  };

  const handleIntersect = (entries, observer) => {
    let entry = entries[0];
    if (entry.isIntersecting) {
      action(entry.target);
      once && observer.unobserve(entry.target);
    }
  };

  let element;

  onMount(() => {
    const observer = new IntersectionObserver(handleIntersect, options);

    observer.observe(element);
  });
</script>

<div bind:this={element}>
  <slot />
</div>
