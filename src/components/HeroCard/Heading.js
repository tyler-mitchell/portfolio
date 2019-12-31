import React from "react";
import { darken } from "polished";
import { Typography, useTheme } from "@material-ui/core";
import Divider from "components/Divider";
import { Box } from "@material-ui/core";
const Heading = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      borderRadius="20px"
      height="550px"
    >
      <Typography variant="h1">Tyler Davis Mitchell</Typography>
      {/* <Typography
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
      </Typography> */}

      {/* <Divider width="100%" /> */}
    </Box>
  );
};

export default Heading;
