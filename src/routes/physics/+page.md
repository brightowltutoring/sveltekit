<script>
  import E from "$lib/physics/e-and-m.md";
  import {isDarkMode} from '$lib/store.js'
  $: proseInvert = $isDarkMode ? "prose-invert" : ""
</script>

<div class="prose lg:prose-lg {proseInvert}">
<E />
</div>

