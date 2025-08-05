// blocknoteTheme.js
import {
  lightDefaultTheme,
  darkDefaultTheme,
} from "@blocknote/mantine";

const transparentOverrides = {
  colors: {
    editor: { text: "#1f1f1f", background: "transparent" },
    menu: { text: "#1f1f1f", background: "#ffffff" },
    codeBlock: { background: "#ffffff", text: "#1f1f1f" },
    tooltip: { text: "#000000", background: "#efefef" },
    hovered: { text: "#000000", background: "#efefef" },
    selected: { text: "black", background: "#e1efe" },
    disabled: { text: "#afafaf", background: "#efefef" },
    shadow: "none",
    border: "transparent",
    sideMenu: "#cfcfcf",
  },
  borderRadius: 6,
  fontFamily: "Inter, sans-serif",
};

const lightCustom = {
  ...lightDefaultTheme,
  colors: {
    ...lightDefaultTheme.colors,
    ...transparentOverrides.colors,
  },
  borderRadius: transparentOverrides.borderRadius,
  fontFamily: transparentOverrides.fontFamily,
};

const darkCustom = {
  ...darkDefaultTheme,
  colors: {
    ...darkDefaultTheme.colors,
    ...transparentOverrides.colors,
  },
  borderRadius: transparentOverrides.borderRadius,
  fontFamily: transparentOverrides.fontFamily,
};

const customTheme = { light: lightCustom, dark: darkCustom };

export default customTheme;
