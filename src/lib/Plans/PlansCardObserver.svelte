<!-- The plans sections depend on external calendly js and css; instead of loading these in the head of the document, I lazy load them into the head of the document when a plans card is observed (cuz performance gain) -->
<script>
  async function calendlyJSandCSStoHead() {
    if (!document.getElementById("calendlyJS")) {
      const calendlyJS = document.createElement("script");
      calendlyJS.id = "calendlyJS";
      calendlyJS.src = "https://assets.calendly.com/assets/external/widget.js";
      calendlyJS.type = "text/javascript";
      document.head.appendChild(calendlyJS);
    }

    if (!document.getElementById("calendlyCSS")) {
      const calendlyCSS = document.createElement("link");
      calendlyCSS.id = "calendlyCSS";
      calendlyCSS.href =
        "https://assets.calendly.com/assets/external/widget.css";
      calendlyCSS.rel = "stylesheet";
      document.head.appendChild(calendlyCSS);
    }
  }

  import { onMount } from "svelte";

  onMount(() => {
    const conditionsForObservation =
      document.querySelector("plans-card") &&
      !document.getElementById("calendlyJS") &&
      !document.getElementById("calendlyCSS");

    if (conditionsForObservation) {
      const plansCards = document.querySelectorAll("plans-card");
      const options = {
        root: null,
        threshold: 0,
        rootMargin: "100px",
      };
      const observer = new IntersectionObserver(function (entries, observer) {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            calendlyJSandCSStoHead();
            observer.unobserve(entry.target);
            console.log("i c u baby");
          }
        }
      }, options);

      for (let card of plansCards) {
        observer.observe(card);
      }
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
