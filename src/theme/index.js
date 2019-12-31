import { createMuiTheme } from "@material-ui/core";

import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";
import styles from "./styles";

const theme = createMuiTheme({
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    // Default: xs 0px,   sm 600px,    md 960px,    lg 1280px,   xl 1920px
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 1024,
      xl: 1920
    }
  },

  palette,
  test: { color: "black" },
  typography,
  overrides,
  styles,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;
