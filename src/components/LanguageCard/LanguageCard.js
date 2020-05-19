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
  padding: 2px;

  margin-right: 3px;
`;
const Lang = styled.div`
  height: 21px;
  width: 100%;
  display: flex;
  pointer-events: none;
  user-select: none;
  align-items: center;
  justify-content: flex-start;
  border-radius: 2px;
  padding: 2px;

  background: linear-gradient(135deg, white 24.41%, white 81.64%);
  box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.2),
    inset 1px 1px 0.5px rgba(212, 213, 216, 0.2),
    inset -1px -1px 0.5px rgba(61, 61, 62, 0.1);
`;

const LanguageCard = ({ language, icon: Icon, a, bg }) => {
  return (
    <Box
      display="flex"
      position="relative"
      zIndex={2}
      color="#D2D6EF"
      alignItems="center"
      spacing={1}
    >
      <Lang>
        <Button>
          {" "}
          <Icon />
        </Button>
        <div>
          {" "}
          <Typography style={{ fontSize: 11 }}>{language}</Typography>
        </div>
      </Lang>
    </Box>
  );
};

export default LanguageCard;
