import React from "react";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import theme from "./theme";
import "./App.css";
import styled from "styled-components";
import Languages from "Widgets/Languages";
import Hero from "Widgets/Hero";
import Education from "Widgets/Education";
import Projects from "Widgets/Projects";

const StyledContainer = styled(Container)`
  padding: 4vh 1vw 2vh 1vw;
  /* min-height: 92vh; */
  height: 100%;
  position: relative;
  /* width: 80vw; */

  /* box-sizing: content-box; */

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

      <StyledThemeProvider theme={theme}>
        <div className="App-header">
          <StyledContainer maxWidth="xl">
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              justify="space-between"
              wrap="nowrap"
              style={{
                height: "100%",
                // minHeight: "80vh",
                width: "100%",
                position: "relative"
              }}
            >
              <Grid
                container
                item
                wrap="nowrap"
                // justify="space-between"
                // alignItems="space-between"
                spacing={3}
                xs={12}
                style={{ width: "100%" }}
              >
                <Grid
                  item
                  container
                  wrap="nowrap"
                  xs={4}
                  direction="column"
                  // alignItems="stretch"
                  // justify="center"
                  // justify="stretch"
                >
                  <Grid item>
                    <Education />
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Hero />
                </Grid>
                <Grid
                  item
                  container
                  xs={7}
                  wrap="nowrap"
                  direction="column"
                  alignItems="flex-start"
                  // justify="stretch"
                >
                  <Projects />
                </Grid>
              </Grid>
              {/* <Box flexGrow={1} /> */}
              <Grid item wrap="nowrap">
                <Languages />
              </Grid>
            </Grid>
          </StyledContainer>
        </div>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;
