<!-- The plans sections depend on external calendly js and css; instead of loading these in the head of the document, I lazy load them into the head of the document when a plans card is observed (cuz performance gain) -->
<script>
  async function calendlyJSandCSStoHead() {
    const calendlyJS = document.createElement("script");
    calendlyJS.src = "https://assets.calendly.com/assets/external/widget.js";
    calendlyJS.type = "text/javascript";
    document.head.appendChild(calendlyJS);

    const calendlyCSS = document.createElement("link");
    calendlyCSS.href = "https://assets.calendly.com/assets/external/widget.css";
    calendlyCSS.rel = "stylesheet";
    document.head.appendChild(calendlyCSS);
  }

  import { onMount } from "svelte";

  onMount(() => {
    // TODO: WOW!! without this existence check app kept crashing
    if (document.querySelector("plans-card")) {
      const plansCard = document.querySelector("plans-card");
      const options = {
        root: null,
        threshold: 0,
        rootMargin: "200px",
      };
      const observer = new IntersectionObserver(function (entries, observer) {
        // for (let entry of entries) {
        //   if (!entry.isIntersecting) {
        //     return;
        //   }
        //   // if (entry.isIntersecting) {
        //   console.log("i c u baby");
        //   calendlyJSandCSStoHead();
        //   observer.unobserve(entry.target);
        //   // }
        // }
        if (entries[0].isIntersecting) {
          console.log("i c u baby");
          calendlyJSandCSStoHead();
          observer.unobserve(entries[0].target);
        }
      }, options);

      observer.observe(plansCard);
    }
  });
</script>

<!-- Below is the lazy, not-lazy-loaded way of using calendy's js and css -->
<!-- <svelte:head>
  <link
    href="https://assets.calendly.com/assets/external/widget.css"
    rel="stylesheet"
  />

  <script
    src="https://assets.calendly.com/assets/external/widget.js"
    type="text/javascript"
    async
  ></script>
</svelte:head> -->
