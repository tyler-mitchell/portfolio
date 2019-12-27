import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import theme from "./theme";
import "./App.css";
import styled from "styled-components";
import Projects from "Widgets/Projects";
import Heading from "Widgets/Heading";
import Education from "Widgets/Education";

const StyledContainer = styled(Container)`
  height: 90vh;
  padding: 35px;
  position: relative;
  margin: 35px;
  /* flex-direction: column; */
  border-radius: 8px;
  mix-blend-mode: normal;
  /* display: flex; */
  background: radial-gradient(
    50.99% 50.14% at 50% 20%,
    #444a6d 0%,
    #3b405e 100%
  );
  box-shadow: 0px 0px 68px rgba(50, 54, 77, 0.5),
    0px 0px 48px rgba(76, 83, 118, 0.4),
    inset 1px 1px 1px rgba(83, 92, 136, 0.3),
    inset -1px -1px 4px rgba(44, 48, 68, 0.2);
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      {console.log(`⭐: App -> theme`, theme)}

      <StyledContainer maxWidth="lg">
        <Grid
          container
          direction="column"
          justify="space-between"
          alignContent="space-between"
          spacing={2}
          style={{ height: "100%" }}
        >
          <Grid item>
            <Heading />
          </Grid>
          <Grid item>
            <Education />
          </Grid>
          <Box flexGrow={1} />
          <Grid item>
            <Projects />
          </Grid>
        </Grid>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
