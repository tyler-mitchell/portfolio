import React from "react";
import styled from "styled-components";
import { Icon } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import MuiCard from "@material-ui/core/Card";
import { Button as MuiButton } from "@material-ui/core";
import { makeStyles, withStyles, useTheme } from "@material-ui/styles";

const Button = styled.div`
  height: 43px;
  width: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  filter: brightness(98%);

  background: linear-gradient(135deg, #424869 24.41%, #4a5178 81.64%);
  box-shadow: inset -2px -2px 4px rgba(83, 92, 136, 0.16),
    inset 2px 2px 4px rgba(38, 49, 105, 0.16);
`;
const Card = withStyles(theme => ({
  root: props => ({
    // boxShadow: theme.styles.boxShadow.widget,
    display: "flex",

    position: "relative",

    zIndex: 0,
    // backgroundImage: theme.styles.gradient.widget(props.x),

    background: "linear-gradient(107.26deg, #494F74 0%, #434865 100%)",

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
      transition: "all 0.45s ease"
    },
    backdropFilter: "none",
    "&:hover": {
      maskImage: "none",
      filter: theme.styles.boxShadow.widgetDS,
      // backdropFilter: "blur(10px)",
      zIndex: 1,
      transform: "translateY(-20px)",

      "&:before": {
        opacity: 1
      }
    },

    willChange: "background-image",
    mixBlendMode: "luminosity",
    borderRadius: theme.styles.borderRadius.widget,
    height: "75px",
    maxWidth: "275px",
    minWidth: "160px",
    width: "13vw"
  })
}))(MuiCard);

const LanguageCard = ({ language, icon, a, bg }) => {
  return (
    <Card a={a} bg={bg}>
      <Box
        display="flex"
        p="10px"
        position="relative"
        zIndex={2}
        color="#D2D6EF"
        component={Grid}
        container
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Button>
            <Icon style={{ fontSize: 17 }} class={icon} />
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="h5">{language}</Typography>
        </Grid>
      </Box>
    </Card>
  );
};

export default LanguageCard;
