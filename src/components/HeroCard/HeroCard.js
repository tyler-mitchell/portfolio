import { Typography } from "@material-ui/core";
import { Box, Grid } from "@material-ui/core";
import { lighten } from "polished";
import React from "react";
import styled from "styled-components";

import CharacterCanvas from "./CharacterCanvas";
import Heading from "./Heading";

const Frame = styled.div`
  padding: 5px;
  /* margin-top: 50px; */
  border-radius: 20px;

  background: ${(props) => props.theme.styles.gradient.heroCardOuter};
  box-shadow: 0px 3px 30px -10px hsla(0, 0%, 0%, 0.5);
  /* height: 100%; */
  position: relative;
  justify-content: center;

  z-index: 0;
  width: 100%;
  height: 100%;

  /* height: 600px; */
`;
const Card = styled.div`
  /* margin-top: 100px; */
  border-radius: 15px;
  background: ${(props) => props.theme.styles.gradient.heroCardInner};
  /* background: red; */
  box-shadow: inset 0px 0px 1px 0px grey;
  /* padding-bottom: 12px; */
  /* margin-top: 24px; */
  /* box-sizing: border-box; */
  /* display: flex; */
  position: relative;
  z-index: 0;
  /* flex: 1; */
  /* flex-direction: column; */
  /* height: 100%; */

  display: flex;
  justify-content: center;
  /* width: 275px; */
  height: 100%;
  width: 100%;
`;
const HeroCard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      justifyContent="center"
      height="100%"
    >
      <Typography variant="h4" style={{ opacity: 0 }} gutterBottom>
        hello
      </Typography>
      <Frame>
        <Card>
          {/* <CharacterCanvas /> */}

          {/* <Box flexGrow={1} /> */}
        </Card>
      </Frame>
    </Box>
  );
};

export default HeroCard;
