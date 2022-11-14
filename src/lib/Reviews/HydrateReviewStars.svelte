<script>
  function hydrateReviewStars(star) {
    star.src = "/star.webp";
  }

  import { onMount } from "svelte";

  onMount(() => {
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "100px",
    };
    const observer = new IntersectionObserver(function (entries, observer) {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          let star = entry.target;
          hydrateReviewStars(star);
          observer.unobserve(star);
          console.log("💫 times 5");
        }
      }
    }, options);

    const stars = document.querySelectorAll(".stars");
    for (let star of stars) {
      observer.observe(star);
    }
  });
</script>
