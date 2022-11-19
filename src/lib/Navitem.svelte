<script>
  export let href, content, bool, btnColor, btnColorHover, routes;

  import { navLoginClicked, navHomeworkClicked, clearNavModals } from "./store";
  import { page } from "$app/stores";

  // this allows going back and button click matching with route
  // could've done this in if/else but the boolean nature here made it unnecessary
  $: for (let key in routes) {
    routes[key].isCurrent = routes[key].href === $page.url.pathname;
  }

  // not using since nov13, 2022
  function clickOnNavLinks() {
    // on each click, clears rest of button clicks
    // TODO: this doesnt seem to matter anymore... maybe this was necessary when using svelte-transitions on the buttons before

    for (let key in routes) {
      routes[key].isCurrent = false; //TODO: is this necessary?
    }

    bool = !bool; // TODO: is this necessary?
  }

  function handleNavButtonClicks(e) {
    // resets all modals (so modals don't continuously pile up)
    clearNavModals();

    // sets the correct modal
    if (href == "/homework") {
      e.preventDefault();
      $navHomeworkClicked = true;
      return;
    }
    if (href == "/login") {
      e.preventDefault();
      $navLoginClicked = true;
      return;
    }

    // clickOnNavLinks();
  }
</script>

<!-- in:slide={{ duration: 800, easing: elasticOut }} -->
<!--  class="{bool &&
      `${btnColor} border-b-1 rounded px-3 py-1`} flex justify-center px-2 mx-1 font-Nunito font-thin md:text-xl text-2xl selection:bg-transparent {`${btnColorHover}`}  hover:rounded hover:py-1  hover:p-3 duration-300 hover:shadow-lg" -->

<a
  data-sveltekit-prefetch
  class=" px-2 mx-1 font-Nunito font-thin text-2xl md:text-xl {`${btnColorHover}`}  hover:rounded hover:py-1  hover:p-3 duration-300 hover:shadow-lg {bool &&
    `${btnColor} border-b-1 rounded px-3 py-1`}"
  {href}
  on:click={handleNavButtonClicks}
>
  {content}
</a>
