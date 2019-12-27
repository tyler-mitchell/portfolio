import React from "react";
import { darken } from "polished";
import { Typography, useTheme } from "@material-ui/core";
import Divider from "components/Divider";
const Heading = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h1">Tyler Davis Mitchell</Typography>
      <Typography
        variant="body1"
        style={{
          marginLeft: "6px",
          marginTop: "5px",
          marginBottom: "10px",
          opacity: 0.55,
          // color: theme.palette.text.secondary,
          fontWeight: 500
        }}
      >
        {"Senior Computer Science Student"}
      </Typography>
      <Divider width="26%" />
    </>
  );
};

export default Heading;
