<script>
  import { onMount } from "svelte";

  onMount(() => {
    let observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    });

    let allM = document.querySelectorAll("[m]");
    for (let el of allM) {
      observer.observe(el);
    }

    function callback(entries, observer) {
      for (let e of entries) {
        // if (e.target.offsetTop < 800) {
        //   // console.log(e.target.offsetTop);
        //   let target = e.target;
        //   let d = target.hasAttribute("d");
        //   let m = target.getAttribute("m");
        //   target.innerHTML = d ? `$$ ${m} $$` : `$ ${m} $`;
        //   MathJax.typeset([target]);
        //   observer.unobserve(target);
        // }
        if (e.isIntersecting) {
          // console.log(e.target.offsetTop);
          let target = e.target;
          let d = target.hasAttribute("d");
          let m = target.getAttribute("m");
          target.innerHTML = d ? `$$ ${m} $$` : `$ ${m} $`;
          MathJax.typeset([target]);

          observer.unobserve(target);
        }
      }
    }
  });
</script>

<svelte:head>
  <script>
    MathJax = {
      startup: { typeset: false },
      loader: { load: ["[tex]/physics", "[tex]/cancel"] },
      tex: {
        packages: {
          "[+]": ["physics", "cancel"],
        },
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"],
        ],
      },
      svg: {
        fontCache: "global",
      },
    };
  </script>
  <!-- <script
    type="text/javascript"
    id="MathJax-script"
    async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
  </script> -->
  <script
    id="MathJax-script"
    async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</svelte:head>
