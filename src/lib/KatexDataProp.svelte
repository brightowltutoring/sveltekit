<!-- I have yet to figure out for the life of me why I have to break this up into two components (KatexIntersectionObserver & KatexDataProp). Trying to use the logic all in one makes things laggy when using lots of math -->
<script>
  export let m;
  export let d;
</script>

<div class="myKatexEntries" data-math={m} data-display={d}>.</div>
