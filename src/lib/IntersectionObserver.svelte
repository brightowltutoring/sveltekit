<!-- A component way that generalizes intersection observer (easier to use). Created: nov14,2022 -->
<script>
  // import { browser } from "$app/environment";
  import { onMount } from "svelte";

  export let once = false;
  export let condition = true;
  export let querySelectees = ".stars";
  export let action = () => {
    console.log("intersectionAction!");
  };
  export let margin = "0px";

  // if (browser && eval(condition)) {
  if (condition) {
    onMount(() => {
      const observer = new IntersectionObserver(
        function (entries, observer) {
          for (let entry of entries) {
            if (entry.isIntersecting) {
              action(entry.target);
              once && observer.unobserve(entry.target);
            }
          }
        },
        {
          root: null,
          threshold: 0,
          rootMargin: margin,
        }
      );

      let intersectionElements = document.querySelectorAll(`${querySelectees}`);
      for (let el of intersectionElements) {
        observer.observe(el);
      }
    });
  }
</script>
