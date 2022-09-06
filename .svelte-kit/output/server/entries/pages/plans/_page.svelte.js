import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index.js";
const PlansCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-kh0wse{transform:perspective(1000px) rotateY(12deg);transition:transform 0.3s ease 0s}.card.svelte-kh0wse:hover{transform:perspective(3000px) rotateY(0deg) scale(1.02)}",
  map: null
};
const PlansCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttonColor = "bg-[rgba(253,165,165,1)]" } = $$props;
  let { buttonColorHover = "hover:bg-[rgba(253,165,165,0.4)]" } = $$props;
  if ($$props.buttonColor === void 0 && $$bindings.buttonColor && buttonColor !== void 0)
    $$bindings.buttonColor(buttonColor);
  if ($$props.buttonColorHover === void 0 && $$bindings.buttonColorHover && buttonColorHover !== void 0)
    $$bindings.buttonColorHover(buttonColorHover);
  $$result.css.add(css);
  return `<div class="${"card shadow-xl rounded-xl w-[300px] p-10 m-4 text-center duration-300 svelte-kh0wse"}"><button class="${"cardBtn " + escape(buttonColor, true) + " " + escape(buttonColorHover, true) + " hover:shadow-md duration-300 rounded-md p-4 svelte-kh0wse"}">${slots.buttonText ? slots.buttonText({}) : `
            default button Text
        `}</button>


    <p class="${"py-2 text-2xl"}">${slots.cardTitle ? slots.cardTitle({}) : ` 
            default cardTitle
        `}</p>
    


    ${slots.cardText ? slots.cardText({}) : ` 
        default cardText
    `}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PlansCard, "PlansCard").$$render($$result, {}, {}, {
    cardText: () => {
      return `<span slot="${"cardText"}">sdfsdf </span>`;
    },
    cardTitle: () => {
      return `<span slot="${"cardTitle"}">flowy </span>`;
    },
    buttonText: () => {
      return `<span slot="${"buttonText"}">flowy </span>`;
    }
  })}

${validate_component(PlansCard, "PlansCard").$$render($$result, {}, {}, {
    cardText: () => {
      return `<span slot="${"cardText"}">ss3ik </span>`;
    },
    cardTitle: () => {
      return `<span slot="${"cardTitle"}">s3ik </span>`;
    },
    buttonText: () => {
      return `<span slot="${"buttonText"}">s3ik </span>`;
    }
  })}`;
});
export {
  Page as default
};
