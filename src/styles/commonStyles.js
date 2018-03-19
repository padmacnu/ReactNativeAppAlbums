import { StyleSheet } from 'react-native';

// Functional CSS
export const SPACING_XXS = 4;
export const SPACING_XS = 6;
export const SPACING_S = 12;
export const SPACING_M = 24;
// ... more spacing constants

export const COLOR_DARK_GRAYISH_BLUE = "#425563";
export const COLOR_DARK_CYAN = "#01a982";
export const COLOR_BLACK = "#000000";
export const COLOR_WHITE = "#ffffff";
// ... more colour constants

export default StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    flex: 1
  },
  ma0: { margin: SPACING_XXS },
  ma1: { margin: SPACING_XS },
  ma2: { margin: SPACING_S },
  mt0: { marginTop: SPACING_XXS },
  mt1: { marginTop: SPACING_XS },
  mt2: { marginTop: SPACING_S },
  mt3: { marginTop: SPACING_M },
  // ...
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  // ...
  dark_grayish_blue: { color: COLOR_DARK_GRAYISH_BLUE },
  dark_cyan: { color: COLOR_DARK_CYAN },
  black: { color: COLOR_BLACK },
  white: { color: COLOR_WHITE },
  // ...
  bg_dark_grayish_blue: { backgroundColor: COLOR_DARK_GRAYISH_BLUE },
  bg_dark_cyan: { backgroundColor: COLOR_DARK_CYAN },
  bg_white: { backgroundColor: COLOR_BLACK },
  // ...
  o_100: { opacity: 1 },
  o_50: { opacity: 0.5 },

  // ...
});
