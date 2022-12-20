// export const prerender = true;
// as of dec 2022 i'm commenting out 'prerender = true' here — i.e. defaulting back to SSR from SSG
// JUSTIFICATION: google lighthouse scores are the same (perfect on home page). This is due to my implementing event-based dynamic importing everywhere via InView/LazyMount wrapper components.

// FUTURE: if a page is markup heavy (such as custom student page) I may 'export const prerender = true' inside the '+page.js' of that given route.

// note: only physics route has 'prerender = false'
