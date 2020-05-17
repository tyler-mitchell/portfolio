import { Icon } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import { Button as MuiButton } from "@material-ui/core";
import MuiCard from "@material-ui/core/Card";
import { makeStyles, useTheme, withStyles } from "@material-ui/styles";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
  height: 18px;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  filter: brightness(98%);
  margin-right: 5px;

  background: linear-gradient(135deg, #f0f0f0 24.41%, #e8e8e8 81.64%);
  box-shadow: inset -2px -2px 4px rgba(191, 192, 197, 0.16),
    inset 2px 2px 4px rgba(224, 225, 230, 0.16);
`;
const Card = withStyles((theme) => ({
  root: (props) => ({
    // boxShadow: theme.styles.boxShadow.widget,
    display: "flex",

    position: "relative",

    zIndex: 0,
    // backgroundImage: theme.styles.gradient.widget(props.x),

    background: "white",
    boxShadow:
      "0 0 20px 10px rgba(50,66,81,.05), 0px 0px 2px 0px  rgba(0, 0, 0, 0.15)",

    maskImage: theme.styles.gradient.widget2(props.a, props.bg),

    transition: "all 0.5s ease",

    // zIndex: 100,
    "&:before": {
      borderRadius: "inherit",
      // backgroundImage: theme.styles.gradient.widget(50),
      backgroundImage: "linear-gradient(107.26deg, #494F74 0%, #3A3F5E 100%)",

      // backgroundImage: "red",
      content: "''",
      display: "block",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0,
      width: "100%",
      zIndex: 1,
      transition: "all 0.45s ease",
    },
    backdropFilter: "none",
    "&:hover": {
      maskImage: "none",
      filter: theme.styles.boxShadow.widgetDS,
      // backdropFilter: "blur(10px)",
      zIndex: 1,
      transform: "translateY(-20px)",

      "&:before": {
        opacity: 1,
      },
    },

    willChange: "background-image",
    mixBlendMode: "luminosity",
    borderRadius: "5px",
    height: "35px",
    // maxWidth: "275px",
    // width: "203px",
  }),
}))(MuiCard);

const LanguageCard = ({ language, icon, a, bg }) => {
  return (
    <Card a={a} bg={bg}>
      <Box
        display="flex"
        p="2px"
        position="relative"
        zIndex={2}
        color="#D2D6EF"
        alignItems="center"
        spacing={1}
      >
        <Button>
          <Icon style={{ fontSize: 10, color: "#206dfe" }} class={icon} />
        </Button>

        <div>
          {" "}
          <Typography style={{ fontSize: 8 }}>{language}</Typography>
        </div>
      </Box>
    </Card>
  );
};

export default LanguageCard;
