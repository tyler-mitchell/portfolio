import { colors } from "@material-ui/core";
import { lighten, darken } from "polished";
const white = "#FFFFFF";
const black = "#000000";
const primary = "#536DFE";
const secondary = "#FF5C93";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";

const lightenRate = 0.075;
const darkenRate = 0.15;
export default {
  black,
  white,
  primary: {
    main: primary,
    light: lighten(lightenRate, primary),

    dark: darken(darkenRate, primary)
  },
  secondary: {
    main: secondary,
    light: lighten(lightenRate, secondary),
    dark: darken(darkenRate, secondary),
    contrastText: "#FFFFFF"
  },
  warning: {
    main: warning,
    light: lighten(lightenRate, warning),
    dark: darken(darkenRate, warning)
  },
  success: {
    main: success,
    light: lighten(lightenRate, success),
    dark: darken(darkenRate, success)
  },
  info: {
    main: info,
    light: lighten(lightenRate, info),
    dark: darken(darkenRate, info)
  },
  text: {
    primary: "#4A4A4A",
    secondary: "#6E6E6E",
    hint: "#B9B9B9"
  },
  background: {
    default: "#F6F7FF",
    light: "#F3F5FF"
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
