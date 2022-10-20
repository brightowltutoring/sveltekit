import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, d as add_attribute, j as each } from "../../../chunks/index.js";
import { C as CalendlyJsandCSS, a as plansCardArraySchools } from "../../../chunks/plansCardArray.js";
import { b as isDarkMode, e as elementColor } from "../../../chunks/store.js";
import "../../../chunks/index2.js";
const PlansCardSchools_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-h89m1w{transform:perspective(1000px) rotateX(12deg);z-index:10;-webkit-transform:translateZ(-1px)}.card.svelte-h89m1w:hover{transform:perspective(1000px) rotateX(0deg) scale(1.02)}",
  map: null
};
const PlansCardSchools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  let $elementColor, $$unsubscribe_elementColor;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_elementColor = subscribe(elementColor, (value) => $elementColor = value);
  let { schoolUrl = "" } = $$props;
  let { btnColorHover = "" } = $$props;
  let { card } = $$props;
  let buttonColor = {
    1: "bg-[rgb(45,165,214)]",
    2: "bg-[rgb(244,77,77)]",
    3: "bg-[rgb(254,164,92)]"
  };
  if ($$props.schoolUrl === void 0 && $$bindings.schoolUrl && schoolUrl !== void 0)
    $$bindings.schoolUrl(schoolUrl);
  if ($$props.btnColorHover === void 0 && $$bindings.btnColorHover && btnColorHover !== void 0)
    $$bindings.btnColorHover(btnColorHover);
  if ($$props.card === void 0 && $$bindings.card && card !== void 0)
    $$bindings.card(card);
  $$result.css.add(css);
  $$unsubscribe_isDarkMode();
  $$unsubscribe_elementColor();
  return `${validate_component(CalendlyJsandCSS, "CalendlyJsandCss").$$render($$result, {}, {}, {})}

<card class="${"block hover:scale-105 shadow-md " + escape($isDarkMode ? "hover:shadow-xl" : "hover:shadow-lg", true) + " rounded-xl w-[10] min-w-fit p-10 m-1 text-center duration-300 group"}"${add_attribute("style", `background:${$elementColor}`, 0)}><p class="${"py-6 text-5xl font-Poppins"}">${slots.cardTitle ? slots.cardTitle({}) : `Classico`}</p>

  <button class="${"" + escape(buttonColor[card], true) + " " + escape(btnColorHover, true) + " hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 " + escape(
    $isDarkMode ? "group-hover:bg-opacity-80" : "group-hover:bg-opacity-80",
    true
  ) + " text-xl text-white svelte-h89m1w"}">${slots.buttonText ? slots.buttonText({}) : `buttonText`}</button>

  <div class="${"py-4"}">${slots.cardText ? slots.cardText({}) : `default cardText`}</div>
</card>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `



<div class="${"grid grid-cols-1 lg:grid-cols-2 p-7 "}">${each(plansCardArraySchools, (item, i) => {
    return `
    <div>${validate_component(PlansCardSchools, "PlansCardSchools").$$render(
      $$result,
      {
        card: item.card,
        schoolUrl: item.schoolUrl
      },
      {},
      {
        cardText: () => {
          return `<span slot="${"cardText"}">${escape(item.cardText)}

          
        </span>`;
        },
        cardTitle: () => {
          return `<span slot="${"cardTitle"}">${escape(item.cardTitle)} </span>`;
        },
        buttonText: () => {
          return `<span slot="${"buttonText"}">Book Date/Time </span>`;
        }
      }
    )}</div>
    `;
  })}
</div>`;
});
export {
  Page as default
};
