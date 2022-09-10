<script>
  import GalleryScale from "$lib/GalleryScale.svelte";
  // import FirebaseAuthStateChecker from "$lib/FirebaseAuthStateChecker.svelte"

  import { onMount } from "svelte";
  import K from "$lib/Katex.svelte";
  import { blur, scale, fly, fade } from "svelte/transition";
  import { elasticOut /* quintOut,*/ } from "svelte/easing";

  const reviewers = ["zaara", "miranda", "ben", "efe", "paola", "rob", "tj"];

  // $: console.log(allStorage());
  // onMount(()=>allStorage())

  // function allStorage() {

  //     var values = [],
  //         keys = Object.keys(localStorage),
  //         i = keys.length;

  //     while ( i-- ) {
  //         values.push( localStorage.getItem(keys[i]) );
  //     }

  //     return values;
  // }
  let equations = [
    "\\int\\limits_{-\\infty}^{\\infty} e^{-x^{2}} \\, dx = \\sqrt{\\pi}",
    "\\prod_{i=a}^{b} f(i)",
    "k = \\frac{aL}{At} \\ln \\frac{h_0}{h_t}",
  ];
</script>

<div class="grid grid-cols-3">
  {#each equations as eqn, i}
    <p
      class="text-red-500 "
      in:scale={{
        easing: elasticOut,
        duration: 1000,
        delay: 200 * i,
      }}
    >
      <K d m={eqn} />
    </p>
  {/each}
</div>

<div class="font-Poppins text-center sm:text-5xl text-4xl pb-20 ">
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
