import React from "react";
import Heading from "./Heading";
import styled from "styled-components";
import CharacterCanvas from "./CharacterCanvas";
import { Typography } from "@material-ui/core";
import { Grid, Box } from "@material-ui/core";
import { lighten } from "polished";
const Frame = styled.div`
  display: flex;
  /* margin-top: 50px; */
  border-radius: 20px;
  padding: 5px;
  background: ${props => props.theme.styles.gradient.heroCardOuter};
  box-shadow: 0px 3px 30px -10px hsla(0, 0%, 0%, 0.5);
  /* height: 100%; */
  position: relative;
  z-index: 0;
  width: 35vh;
  height: 64vh;

  /* height: 600px; */
`;
const Card = styled.div`
  /* margin-top: 100px; */
  border-radius: 15px;
  background: ${props => props.theme.styles.gradient.heroCardInner};
  /* background: red; */
  box-shadow: inset 0px 0px 1px 0px grey;
  /* padding-bottom: 12px; */
  /* margin-top: 24px; */
  /* box-sizing: border-box; */
  display: flex;
  position: relative;
  z-index: 0;
  flex: 1;
  flex-direction: column;
  /* height: 100%; */
  width: 100%;
  /* width: 275px; */
`;
const HeroCard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      height="100%"
    >
      <Typography variant="h4" style={{ opacity: 0 }}>
        .
      </Typography>
      <Frame>
        <Card>
          <Box height="100%" width="100%">
            <CharacterCanvas />
          </Box>
          <Box flexGrow={1} />
        </Card>
      </Frame>
    </Box>
  );
};

export default HeroCard;
