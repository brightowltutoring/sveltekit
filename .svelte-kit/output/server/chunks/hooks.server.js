const urlRedirects = {
  screenshare: "classroom"
};
const handle = async ({ event, resolve }) => {
  for (const [key, value] of Object.entries(urlRedirects)) {
    if (event.url.pathname === `/${key}`) {
      return Response.redirect(`${event.url.origin}/${value}`, 301);
    }
  }
  return await resolve(event);
};
export {
  handle
};
