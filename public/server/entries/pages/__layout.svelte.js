import { c as create_ssr_component } from "../../chunks/index-1e54ea6c.js";
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');body{@apply bg-palette-yellow50;;font-family:'Space Grotesk', sans-serif}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
