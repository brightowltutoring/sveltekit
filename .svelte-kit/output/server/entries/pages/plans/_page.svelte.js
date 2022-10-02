import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, d as add_attribute, j as each } from "../../../chunks/index.js";
import { C as CalendlyJsandCSS } from "../../../chunks/CalendlyJsandCSS.js";
import { b as isDarkMode, d as dark_lightened, l as light_darkened } from "../../../chunks/store.js";
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
  let { payNowUrl = "" } = $$props;
  let { payLaterUrl = "" } = $$props;
  let { btnColorHover = "" } = $$props;
  let { card } = $$props;
  let buttonColor = {
    1: "bg-[rgb(45,165,214)]",
    2: "bg-[rgb(244,77,77)]",
    3: "bg-[rgb(254,164,92)]"
  };
  if ($$props.payNowUrl === void 0 && $$bindings.payNowUrl && payNowUrl !== void 0)
    $$bindings.payNowUrl(payNowUrl);
  if ($$props.payLaterUrl === void 0 && $$bindings.payLaterUrl && payLaterUrl !== void 0)
    $$bindings.payLaterUrl(payLaterUrl);
  if ($$props.btnColorHover === void 0 && $$bindings.btnColorHover && btnColorHover !== void 0)
    $$bindings.btnColorHover(btnColorHover);
  if ($$props.card === void 0 && $$bindings.card && card !== void 0)
    $$bindings.card(card);
  $$result.css.add(css$1);
  cardColor = $isDarkMode ? dark_lightened : light_darkened;
  $$unsubscribe_isDarkMode();
  return `${validate_component(CalendlyJsandCSS, "CalendlyJsandCss").$$render($$result, {}, {}, {})}

<div class="${"cardCSS shadow-md " + escape($isDarkMode ? "hover:shadow-xl" : "hover:shadow-lg", true) + " rounded-xl w-[10] min-w-fit p-10 m-1 text-center duration-300 group svelte-35bofc"}"${add_attribute("style", `background:${cardColor}`, 0)}><div class="${"py-6 text-5xl font-Poppins"}">${slots.cardTitle ? slots.cardTitle({}) : `Classico`}</div>

  <button class="${"" + escape(buttonColor[card], true) + " " + escape(btnColorHover, true) + " hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-80" : "group-hover:bg-opacity-80",
    true
  ) + " text-xl text-white svelte-35bofc"}">${slots.buttonText ? slots.buttonText({}) : `Pay Now`}</button>

  <button class="${"" + escape(buttonColor[card], true) + " " + escape(btnColorHover, true) + " bg-opacity-70 hover:shadow-md hover:scale-105 duration-200 rounded-md p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-70" : "group-hover:bg-opacity-70",
    true
  ) + " text-xl text-white svelte-35bofc"}">${slots.buttonText ? slots.buttonText({}) : `Pay Later`}</button>

  <div class="${"py-4"}">${slots.cardText ? slots.cardText({}) : `default cardText`}</div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-18ymex4{color:var(--anchor)}a.svelte-18ymex4:hover{color:var(--anchor_hover)}",
  map: null
};
let sampleHref = "https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const plansCardArray = [
    {
      card: 1,
      payNowUrl: "https://calendly.com/d/d52-rxr-74f?hide_gdpr_banner=1&primary_color=2aa5d6",
      payLaterUrl: "https://calendly.com/thinksolve/classico-invoice?hide_gdpr_banner=1",
      buttonText: "Classico",
      cardTitle: "Classico",
      cardText: "Classic 1-on-1 session with smooth screen-sharing. Session notes/solutions on a personal URL available as a +2hr premium.",
      href: sampleHref
    },
    {
      card: 3,
      payNowUrl: "https://calendly.com/d/dyv-xc8-bx6?hide_gdpr_banner=1&primary_color=fea45c",
      payLaterUrl: "https://calendly.com/thinksolve/mock-invoice?hide_gdpr_banner=1",
      buttonText: "Mock",
      cardTitle: "Mock",
      cardText: " Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key on a personal URL available as a +2hr premium.",
      href: sampleHref
    },
    {
      card: 2,
      payNowUrl: "https://calendly.com/thinksolve/custom?hide_gdpr_banner=1",
      payLaterUrl: "https://calendly.com/thinksolve/custom?hide_gdpr_banner=1",
      buttonText: "Custom",
      cardTitle: "Custom",
      cardText: `Pick the first session date/time. Describe the remaining quantity of sessions + desired times/dates (check the calendar for availability), and we will send you a custom invoice. `,
      href: sampleHref
    }
  ];
  $$result.css.add(css);
  return `



<div class="${"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-7 "}">${each(plansCardArray, (item, i) => {
    return `<div>${validate_component(PlansCard, "PlansCard").$$render(
      $$result,
      {
        card: item.card,
        payNowUrl: item.payNowUrl,
        payLaterUrl: item.payLaterUrl
      },
      {},
      {
        cardText: () => {
          return `<span slot="${"cardText"}">${escape(item.cardText)}
          
          <p><a sveltekit:prefetch${add_attribute("href", item.href, 0)} class="${"svelte-18ymex4"}">invoice sample</a></p>
          
        </span>`;
        },
        cardTitle: () => {
          return `<span slot="${"cardTitle"}">${escape(item.cardTitle)} </span>`;
        },
        default: () => {
          return `
        

        
      `;
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
