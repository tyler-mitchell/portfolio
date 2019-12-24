import React from "react";
import styled from "styled-components";
import MuiCard from "@material-ui/core/Card";

import { makeStyles, withStyles, useTheme } from "@material-ui/styles";

const Card = withStyles(theme => ({
  root: {
    boxShadow: theme.styles.boxShadow.widget,
    background: theme.styles.gradient.widget,
    mixBlendMode: "luminosity",
    height: "175px",
    borderRadius: "13px",
    width: "300px"
  }
}))(MuiCard);

const ProjectCard = () => {
  return <Card></Card>;
};

export default ProjectCard;
