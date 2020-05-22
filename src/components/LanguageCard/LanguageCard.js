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
  background: white;
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
  border-radius: 4px;
  padding: 2px;

  /* box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2); */
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
          <Typography
            style={{ fontSize: 11, color: "rgba(0,0,0,0.5)", fontWeight: 500 }}
          >
            {language}
          </Typography>
        </div>
      </Lang>
    </Box>
  );
};

export default LanguageCard;
