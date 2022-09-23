<script>
  import ReviewCreator from "$lib/reviewCreator.svx";
  import { reviews } from "$lib/reviews.js";
</script>

<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[600px] gap-x-10"
>
  {#each reviews as { name, title, date, body }}
    <!-- {#each reviews.splice(0, 1) as { name, title, date, body }} -->
    <ReviewCreator {title} {name} {date}>
      {body}
    </ReviewCreator>
  {/each}
</div>
