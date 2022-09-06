import { c as create_ssr_component, a as subscribe, h as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { i as isDarkMode, h as dark_lightened, j as light_darkened } from "../../../chunks/store.js";
import "../../../chunks/index2.js";
const PlansCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".cardCSS.svelte-18xmx1p{transform:perspective(1000px) rotateX(0deg);transition:transform 0.3s ease 0s}.cardCSS.svelte-18xmx1p:hover{transform:perspective(1000px) rotateX(12deg) scale(1.02)}",
  map: null
};
const PlansCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cardColor;
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  let { calendlyUrl = "" } = $$props;
  let { btnColor = "bg-[rgba(114,202,202,0.8)]" } = $$props;
  let { btnColorHover = "" } = $$props;
  if ($$props.calendlyUrl === void 0 && $$bindings.calendlyUrl && calendlyUrl !== void 0)
    $$bindings.calendlyUrl(calendlyUrl);
  if ($$props.btnColor === void 0 && $$bindings.btnColor && btnColor !== void 0)
    $$bindings.btnColor(btnColor);
  if ($$props.btnColorHover === void 0 && $$bindings.btnColorHover && btnColorHover !== void 0)
    $$bindings.btnColorHover(btnColorHover);
  $$result.css.add(css$1);
  cardColor = $isDarkMode ? dark_lightened : light_darkened;
  $$unsubscribe_isDarkMode();
  return `${$$result.head += `<link href="${"https://assets.calendly.com/assets/external/widget.css"}" rel="${"stylesheet"}" data-svelte="svelte-rnasgc"><script src="${"https://assets.calendly.com/assets/external/widget.js"}" type="${"text/javascript"}" async data-svelte="svelte-rnasgc"><\/script>`, ""}





<div class="${"shadow-xl rounded-xl w-[10] min-w-fit p-10 m-4 text-center duration-300 group cardCSS  svelte-18xmx1p"}"${add_attribute("style", `background:${cardColor}`, 0)}><button class="${"cardBtn " + escape(btnColor, true) + " " + escape(btnColorHover, true) + " hover:shadow-md duration-300 rounded-md p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-80" : "group-hover:bg-opacity-60",
    true
  ) + " text-xl text-white svelte-18xmx1p"}">${slots.buttonText ? slots.buttonText({}) : `
            default button Text
        `}</button>


    <p class="${"py-2 text-2xl"}">${slots.cardTitle ? slots.cardTitle({}) : ` 

        `}</p>
    


    ${slots.cardText ? slots.cardText({}) : ` 
        default cardText
    `}</div>

`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1s9r9ye{color:var(--anchor)}a.svelte-1s9r9ye:hover{color:var(--anchor_hover)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-20 "}">${validate_component(PlansCard, "PlansCard").$$render(
    $$result,
    {
      btnColor: "bg-[rgb(45,165,214)]",
      calendlyUrl: "https://calendly.com/brightowltutoring/invoice-webinowl?hide_gdpr_banner=1"
    },
    {},
    {
      cardText: () => {
        return `<span slot="${"cardText"}">Classic 1-on-1 session with smooth screen
            sharing. Supported platforms: Zoom,
            TeamViewer Meeting, and Microsoft Teams
            Digital session notes available at a
            premium

            <p><a href="${"https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9LTVM3TWdiUWkxNDY1Y2hnSXFhNDg0ZGJYVUlUWlJM0100zoHToCyS\n                "}" class="${"svelte-1s9r9ye"}">sample</a></p></span>`;
      },
      buttonText: () => {
        return `<span slot="${"buttonText"}">Webinowl </span>`;
      }
    }
  )}
    
    ${validate_component(PlansCard, "PlansCard").$$render(
    $$result,
    {
      btnColor: "bg-[rgb(244,77,77)]",
      calendlyUrl: "https://calendly.com/brightowltutoring/invoice-blitzowl?hide_gdpr_banner=1"
    },
    {},
    {
      cardText: () => {
        return `<span slot="${"cardText"}">Submit your homework
            Receive a personal 15-day solution
            URL/page
            Cost calculated based on number of
            questions submitted
            Single and bundled options available.

            <p><a href="${"https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9LTVM3TWdiUWkxNDY1Y2hnSXFhNDg0ZGJYVUlUWlJM0100zoHToCyS\n                "}" class="${"svelte-1s9r9ye"}">sample</a></p></span>`;
      },
      buttonText: () => {
        return `<span slot="${"buttonText"}">Blitzowl </span>`;
      }
    }
  )}

    ${validate_component(PlansCard, "PlansCard").$$render(
    $$result,
    {
      btnColor: "bg-[rgb(254,164,92)]",
      calendlyUrl: "https://calendly.com/brightowltutoring/invoice-mockowl?hide_gdpr_banner=1"
    },
    {},
    {
      cardText: () => {
        return `<span slot="${"cardText"}">Get test ready. We provide a mock test
            session complete with live support and a
            digital copy of answers.
            Solution key available at a premium
            <p><a href="${"https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9LTVM3TWdiUWkxNDY1Y2hnSXFhNDg0ZGJYVUlUWlJM0100zoHToCyS\n                "}" class="${"svelte-1s9r9ye"}">sample</a></p></span>`;
      },
      buttonText: () => {
        return `<span slot="${"buttonText"}">Mockowl </span>`;
      }
    }
  )}
</div>`;
});
export {
  Page as default
};
