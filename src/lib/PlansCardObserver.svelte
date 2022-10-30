<!-- The plans sections depend on external calendly js and css; instead of loading these in the head of the document, I lazy load them into the head of the document when a plans card is observed (cuz performance gain) -->
<script>
  function calendlyJSandCSStoHead() {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.type = "text/javascript";
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  import { onMount } from "svelte";

  onMount(() => {
    const plansCard = document.querySelector("plans-card");
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      if (entries[0].isIntersecting) {
        observer.unobserve(entries[0].target);
        console.log("i c u baby");
        calendlyJSandCSStoHead();
      }
    }, options);

    observer.observe(plansCard);
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
