<script>
  import GalleryScale from "$lib/GalleryScale.svelte";
  // import FirebaseAuthStateChecker from "$lib/FirebaseAuthStateChecker.svelte"

  import { isDarkMode } from "$lib/store.js";
  import K from "$lib/Katex.svelte";
  import { blur, scale, fly, fade } from "svelte/transition";
  import { elasticOut, quintOut } from "svelte/easing";
  import Hamburger from "../lib/Hamburger.svelte";
  import Layout from "./+layout.svelte";

  const reviewers = ["zaara", "miranda", "ben", "efe", "paola", "rob", "tj"];

  // these equations are animated, staggered in the html
  let equations = [
    "\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}",
    "\\prod_{i=a}^{b} f(i)",
    "k = \\frac{aL}{At} \\ln \\frac{h_0}{h_t}",
    "\\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)",
    " i\\hbar\\gamma^\\mu \\partial_\\mu \\psi - mc\\psi = 0 ",
    "R_{\\mu \\nu} - {1 \\over 2}g_{\\mu \\nu}\\,R + g_{\\mu \\nu} \\Lambda = \n {8 \\pi G \\over c^4} T_{\\mu \\nu}",
  ];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
  {#each equations as eqn, i}
    <!-- note: the animation speeds up since the delay is given by a log function ...
  and the change in logarithm DECREASES with increasing input (subsequent delays get smaller)-->
    <p
      class={$isDarkMode ? "text-blue-100" : "text-red-500"}
      in:scale={{
        delay: 350 * Math.log(i + 1),
        easing: quintOut,
        duration: 1000,
      }}
    >
      <K d m={eqn} />
    </p>
  {/each}
</div>

<div class="font-Poppins text-center sm:text-5xl text-4xl py-20 ">
  TESTIMONIALS
</div>

<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 ">
  {#each reviewers as name}
    <GalleryScale
      Src={`/reviews/review-${name}-bare.png`}
      Alt={`review ${name}`}
    />
  {/each}
</div>

<!-- <style>
    .relative input {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
}
</style> -->
