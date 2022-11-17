<!-- TODO: the beauty of slots version of intersection observer is that we no longer have to implement or loops at the 'isIntersecting' portion, nor do we have to querySelect nor "id" the desired elements -->
<script>
  import { onMount } from "svelte";

  export let once = false;
  export let containee; // Without this prop specification the observation is on the slot container '<div bind:this={element}>'. When this prop IS specified the observation is done on the first child of <slot/> ... useful when modify a single wrapped element (e.g., adding an img attribute for lazy load image).

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

  // import { createEventDispatcher } from "svelte";
  // let fire = createEventDispatcher();

  // // when coupled with use: on an element below, this sends up the element node data ..in case I want to modify if I am observing the wrapping div 'element' or it's children
  // function getObservedElement() {
  //   fire("observedElement", { data: element });
  // }
  // export let observedElement;

  onMount(() => {
    const observer = new IntersectionObserver(handleIntersect, options);

    if (containee) {
      observer.observe(element.children[0]);
    } else {
      observer.observe(element);
    }
    // if (observedElement) {
    //   observer.observe(observedElement);
    // } else observer.observe(element);
  });
</script>

<!-- <div bind:this={element} use:getObservedElement> -->
<div bind:this={element}>
  <slot />
</div>
