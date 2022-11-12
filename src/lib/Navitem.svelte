<script>
  export let href, content, bool, btnColor, btnColorHover, routes;

  import { navLoginClicked, navHomeworkClicked } from "./store.js";
  import { page } from "$app/stores";

  // this allows going back and button click matching with route
  // could've done this in if/else but the boolean nature here made it unnecessary
  $: for (let key in routes) {
    routes[key].isCurrent = routes[key].href === $page.url.pathname;
  }

  let unique;

  function clickOnNavLinks() {
    // on each click, clears rest of button clicks
    for (let key in routes) {
      routes[key].isCurrent = false;
    }

    bool = !bool;
    unique = !unique;
  }
</script>

{#key unique}
  <!-- in:slide={{ duration: 800, easing: elasticOut }} -->
  <!--  class="{bool &&
      `${btnColor} border-b-1 rounded px-3 py-1`} flex justify-center px-2 mx-1 font-Nunito font-thin md:text-xl text-2xl selection:bg-transparent {`${btnColorHover}`}  hover:rounded hover:py-1  hover:p-3 duration-300 hover:shadow-lg" -->

  <!-- TODO: centering doesnt seem to matter -->
  <!-- grid place-items-center -->
  <!-- flex justify-center  -->
  <a
    data-sveltekit-prefetch
    class=" px-2 mx-1 font-Nunito font-thin text-2xl md:text-xl {`${btnColorHover}`}  hover:rounded hover:py-1  hover:p-3 duration-300 hover:shadow-lg {bool &&
      `${btnColor} border-b-1 rounded px-3 py-1`}"
    {href}
    on:click={(e) => {
      if (href == "/homework") {
        e.preventDefault();
        $navHomeworkClicked = true;
        $navLoginClicked = false;
        return;
      }
      if (href == "/login") {
        e.preventDefault();
        $navLoginClicked = true;
        $navHomeworkClicked = false;
        return;
      }
      $navLoginClicked = false;
      $navHomeworkClicked = false;
      clickOnNavLinks();
      // prefetch(href);
      // goto(href);
    }}
  >
    {content}
  </a>
{/key}
