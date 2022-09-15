<!-- <script>
  import SampleQuiz from "$lib/SampleQuiz.md";
</script>

<SampleQuiz /> -->
<script>
  import KatexIntersectionObserver from "$lib/KatexIntersectionObserver.svelte";
  import K from "$lib/KatexDataProp.svelte";
</script>

<KatexIntersectionObserver />

{#each Array(1000) as _, i}
  {i + 1}
  <K d m={`E=mc^3`} />
{/each}
