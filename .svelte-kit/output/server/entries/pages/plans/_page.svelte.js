import { c as create_ssr_component, a as subscribe, e as escape, h as add_attribute, g as each, v as validate_component } from "../../../chunks/index.js";
import { i as isDarkMode, j as dark_lightened, k as light_darkened } from "../../../chunks/store.js";
import "../../../chunks/index2.js";
const PlansCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".cardCSS.svelte-35bofc{transform:perspective(1000px) rotateX(12deg);z-index:10;-webkit-transform:translateZ(-1px)}.cardCSS.svelte-35bofc:hover{transform:perspective(1000px) rotateX(0deg) scale(1.02)}",
  map: null
};
const PlansCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cardColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let { calendlyUrl = "" } = $$props;
  let { btnColorHover = "" } = $$props;
  let { card } = $$props;
  let buttonColor = {
    1: "bg-[rgb(45,165,214)]",
    2: "bg-[rgb(244,77,77)]",
    3: "bg-[rgb(254,164,92)]"
  };
  if ($$props.calendlyUrl === void 0 && $$bindings.calendlyUrl && calendlyUrl !== void 0)
    $$bindings.calendlyUrl(calendlyUrl);
  if ($$props.btnColorHover === void 0 && $$bindings.btnColorHover && btnColorHover !== void 0)
    $$bindings.btnColorHover(btnColorHover);
  if ($$props.card === void 0 && $$bindings.card && card !== void 0)
    $$bindings.card(card);
  $$result.css.add(css$1);
  cardColor = $isDarkMode ? dark_lightened : light_darkened;
  $$unsubscribe_isDarkMode();
  return `${$$result.head += `<link href="${"https://assets.calendly.com/assets/external/widget.css"}" rel="${"stylesheet"}" data-svelte="svelte-mukgzh"><script src="${"https://assets.calendly.com/assets/external/widget.js"}" type="${"text/javascript"}" async data-svelte="svelte-mukgzh"><\/script>`, ""}


<div class="${"cardCSS shadow-md " + escape($isDarkMode ? "hover:shadow-xl" : "hover:shadow-lg", true) + " rounded-xl w-[10] min-w-fit p-10 m-1 text-center duration-300 group svelte-35bofc"}"${add_attribute("style", `background:${cardColor}`, 0)}><button class="${"" + escape(buttonColor[card], true) + " " + escape(btnColorHover, true) + " hover:shadow-md duration-300 rounded-md p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-80" : "group-hover:bg-opacity-80",
    true
  ) + " text-xl text-white svelte-35bofc"}">${slots.buttonText ? slots.buttonText({}) : `default button Text`}</button>

  <div class="${"py-4"}">${slots.cardText ? slots.cardText({}) : `default cardText`}</div>
  
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-18ymex4{color:var(--anchor)}a.svelte-18ymex4:hover{color:var(--anchor_hover)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const plansCardArray = [
    {
      card: 1,
      calendlyUrl: "https://calendly.com/brightowltutoring/invoice-webinowl?hide_gdpr_banner=1",
      buttonText: "Webinowl",
      cardText: "  Classic 1-on-1 session with smooth screen sharing. Supported platforms: Zoom, TeamViewer Meeting, and Microsoft Teams Digital session notesavailable at a premium ",
      href: "https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9LTVM3TWdiUWkxNDY1Y2hnSXFhNDg0ZGJYVUlUWlJM0100zoHToCyS"
    },
    {
      card: 2,
      calendlyUrl: "https://calendly.com/brightowltutoring/invoice-blitzowl?hide_gdpr_banner=1",
      buttonText: "Blitzowl",
      cardText: "  Submit your homework Receive a personal 15-day solution URL/page Cost calculated based on number of questions submitted Single and bundled options available.",
      href: "https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9LTVM3TWdiUWkxNDY1Y2hnSXFhNDg0ZGJYVUlUWlJM0100zoHToCyS"
    },
    {
      card: 3,
      calendlyUrl: "https://calendly.com/brightowltutoring/invoice-mockowl?hide_gdpr_banner=1",
      buttonText: "Mockowl",
      cardText: " Get test ready. We provide a mock test session complete with live support and a digital copy of answers. Solution key available at a premium",
      href: "https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9LTVM3TWdiUWkxNDY1Y2hnSXFhNDg0ZGJYVUlUWlJM0100zoHToCyS"
    }
  ];
  $$result.css.add(css);
  return `<div class="${"font-Poppins text-center sm:text-7xl text-6xl pb-2 "}">Plans</div>


<div class="${"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-7 "}">${each(plansCardArray, (item, i) => {
    return `<div>${validate_component(PlansCard, "PlansCard").$$render(
      $$result,
      {
        card: item.card,
        calendlyUrl: item.calendlyUrl
      },
      {},
      {
        cardText: () => {
          return `<span slot="${"cardText"}">${escape(item.cardText)}
          <p><a sveltekit:prefetch${add_attribute("href", item.href, 0)} class="${"svelte-18ymex4"}">sample</a></p>
        </span>`;
        },
        buttonText: () => {
          return `<span slot="${"buttonText"}">${escape(item.buttonText)} </span>`;
        }
      }
    )}
    </div>`;
  })}
</div>`;
});
export {
  Page as default
};
