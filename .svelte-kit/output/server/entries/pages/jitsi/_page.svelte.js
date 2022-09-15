import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const JitsiUser_svelte_svelte_type_style_lang = "";
const css = {
  code: '#cornerDIV.svelte-s1gz6r{position:absolute;left:48%;bottom:40px}#hangUp.svelte-s1gz6r{content:url("https://brightowltutoring.com/s/hangup-gray.png");margin:0 auto;display:flex;width:50px;aspect-ratio:1;border-radius:50%;transform:rotate(90deg);transition:0.4s ease-in-out}#hangUp.svelte-s1gz6r:hover{content:url("https://brightowltutoring.com/s/hangup-red.png");transform:scale(1.85)}',
  map: null
};
const JitsiUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<script src="${"https://meet.jit.si/external_api.js"}" data-svelte="svelte-1pkind7"><\/script>`, ""}








<div id="${"meet"}"></div>

<div id="${"cornerDIV"}" class="${"svelte-s1gz6r"}">
  <img id="${"hangUp"}" class="${"svelte-s1gz6r"}">
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(JitsiUser, "JitsiUser").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
