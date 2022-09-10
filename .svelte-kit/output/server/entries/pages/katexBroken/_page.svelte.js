import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../chunks/index.js";
import "katex";
import { n as navigating } from "../../../chunks/stores.js";
const K = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  console.log($navigating);
  $$unsubscribe_navigating();
  return `
${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"}" integrity="${"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"}" crossorigin="${"anonymous"}" data-svelte="svelte-5lsyfq">`, ""}




<span>${slots.default ? slots.default({}) : ``}</span>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `



${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css"}" integrity="${"sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn"}" crossorigin="${"anonymous"}" data-svelte="svelte-f0gl01">`, ""}



Simple 
${validate_component(K, "K").$$render($$result, {}, {}, {
    default: () => {
      return `x_i = y^2_j`;
    }
  })}
<br>
Another ${validate_component(K, "K").$$render($$result, {}, {}, {
    default: () => {
      return `E = mc^2`;
    }
  })}
<br>
Complex no escape ${validate_component(K, "K").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(String.raw`c = \pm\sqrt{a^2 + b^2}`)}`;
    }
  })}
<br>
Escape the braces ${validate_component(K, "K").$$render($$result, {}, {}, {
    default: () => {
      return `c = \\pm\\sqrt${escape("{")}a^2 + b^2${escape("}")}`;
    }
  })}
<br>
Escape the slashes ${validate_component(K, "K").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(`c = \\pm\\sqrt{a^2 + b^2}`)}`;
    }
  })}
<br>`;
});
export {
  Page as default
};
