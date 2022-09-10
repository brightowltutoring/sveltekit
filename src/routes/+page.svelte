<script>
  import GalleryScale from "$lib/GalleryScale.svelte";
  // import FirebaseAuthStateChecker from "$lib/FirebaseAuthStateChecker.svelte"

  import { onMount } from "svelte";

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
</script>

<!-- <FirebaseAuthStateChecker/> -->

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
