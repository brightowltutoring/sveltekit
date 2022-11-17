<!-- TODO: no longer in use; replaced with slot logic of InView.svelte -->
<script>
  import IntersectionObserver from "$lib/IntersectionObserver.svelte";
  import { browser } from "$app/environment";
  // let conditionsForObservation = browser && true;
  let conditionsForObservation =
    browser &&
    // document.querySelector("plans-card") &&=
    !document.getElementById("calendlyJS") &&
    !document.getElementById("calendlyCSS");

  // TODO: alternative pass as string and use eval() in IntersectionObserver.svelte
  // let conditionsForObservation = `
  // document.querySelector("plans-card") &&
  // !document.getElementById("calendlyJS") &&
  //   !document.getElementById("calendlyCSS")
  //   `;

  function calendlyJSandCSStoHead() {
    console.log("📅");

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
</script>

<!-- <script>
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
      const observer = new IntersectionObserver(async function (
        entries,
        observer
      ) {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            await calendlyJSandCSStoHead();
            observer.unobserve(entry.target);
            console.log("i c u baby");
          }
        }
      },
      options);

      for (let card of plansCards) {
        observer.observe(card);
      }
    }
  });
</script>
 -->

<IntersectionObserver
  condition={conditionsForObservation}
  querySelectees={"plans-card"}
  once
  action={calendlyJSandCSStoHead}
  margin={"200px"}
/>
