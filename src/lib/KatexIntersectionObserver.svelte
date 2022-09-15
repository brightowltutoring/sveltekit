<!-- this component is not being used with props (yet) .. simply as a placeholder -->
<script>
  import { onMount } from "svelte";
  import katex from "katex";

  let myKatex, observer;

  onMount(() => {
    myKatex = document.querySelectorAll(".myKatex");

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "100px", // 800px = 1 laptop viewport
      // rootMargin: "-100px", //shows the lag effect
    };
    observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // let child = entry.target.children[0]
          let child = entry.target;
          let math = child.dataset.math;
          let d = child.dataset.display;
          console.log(child);
          // console.log("math", math);
          katex.render(math, child, { displayMode: d });

          observer.unobserve(entry.target);
        }
      });
    }, options);

    // for(let el of katexContainer) {
    for (let el of myKatex) {
      observer.observe(el);
    }
  });
</script>

<!-- <div class="myKatex" data-math={m}>.</div> -->

<!-- TODO: NOTE: Using the data on https://www.intmath.com/cg5/katex-mathjax-comparison.php, 
the body of which has a clientHeight of 9701 pixels, it takes 382ms to render the 
latex for the document — i.e. a render rate of 25000 pixels per second.

On my laptop the viewport on brave is ~800 pixels (i.e. window.innerHeight) — in other words 
the previous render rate is about 3 pages of latex per second, on my laptop.
-->

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"
    integrity="sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"
    crossorigin="anonymous"
  />
</svelte:head>
