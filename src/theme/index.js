import { createMuiTheme } from "@material-ui/core";

import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";
import styles from "./styles";

const theme = createMuiTheme({
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
