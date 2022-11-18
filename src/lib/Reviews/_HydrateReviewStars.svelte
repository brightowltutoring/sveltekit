<!-- <script>
  function hydrateReviewStars(star) {
    star.src = "/star.webp";
    star.classList.remove("opacity-0");
  }

  import { onMount } from "svelte";

  onMount(() => {
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "400px",
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
</script> -->
<script>
  import IntersectionObserver from "$lib/IntersectionObserver.svelte";

  function hydrateReviewStars(star) {
    console.log("💫 old");
    star.src = "/star.webp";
    star.classList.remove("opacity-0");
  }
</script>

<IntersectionObserver
  querySelectees={'img[alt="star"]'}
  once
  action={(star) => hydrateReviewStars(star)}
  margin={"300px"}
/>
