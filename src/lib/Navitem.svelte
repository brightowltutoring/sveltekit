<script>
  export let href, content, bool, btnColor, btnColorHover, routes;

  import { navLoginClicked, navHomeworkClicked, navModal } from "./store";
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

  // added nov13, 2022
  // $: $navHomeworkClicked = $navModal.homework;
  // $: $navLoginClicked = $navModal.login;

  // const navModalKeys = Object.keys($navModal);
  // const navModalValues = Object.values($navModal);

  function handleNavButtonClicks(e) {
    // still haven't figured a nice way to consolidate this logic ... especially if wanting to add a third modal '$navXClicked' button variable. Unfortunately since svelte derived stores are not writable, cannot simply create an array of store variables whereby I can ensure some correlated logic (i.e. only one element can be truthy at a time). Moving away from stores doesnt seem to an answer due to prop drill hell

    // use for in loop instead
    // // TODO: what to do with this code
    // const slashlessRoute = href.slice(1);
    // const indexOfMatch = navModalKeys.indexOf(slashlessRoute);
    // if (indexOfMatch != -1) {
    //   // if (navModalKeys.includes(slashlessRoute)) {
    //   e.preventDefault();

    //   for (let value of Object.values($navModal)) {
    //     value = false;
    //   }
    //   // $navModal[navModalKeys[indexOfMatch]] = true;
    //   $navModal[navModalKeys[parseInt(indexOfMatch)]] = true;
    // }
    // // TODO: what to do with this code

    if (href == "/homework") {
      e.preventDefault();
      $navHomeworkClicked = true;
      $navLoginClicked = false;
      // $navModal.homework = true;
      // $navModal.login = false;

      return;
    }
    if (href == "/login") {
      e.preventDefault();
      $navLoginClicked = true;
      $navHomeworkClicked = false;

      // $navModal.login = true;
      // $navModal.homework = false;

      return;
    }
    $navLoginClicked = false;
    $navHomeworkClicked = false;

    // clickOnNavLinks(); //TODO: what does this do again??
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
