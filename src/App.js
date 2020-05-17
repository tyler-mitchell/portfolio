import { Box, Container, Grid, Typography } from "@material-ui/core";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import lerp from "lerp";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import styled from "styled-components";

import { Anchor, End, Home, Scroll } from "components/Background";
import { api, useStore } from "components/store";
import Education from "Widgets/Education";
import Experience from "Widgets/Experience";
import Hero from "Widgets/Hero";
import Languages from "Widgets/Languages";
import Projects from "Widgets/Projects";
import Personal from "Widgets/Personal";

import theme from "./theme";

import "./App.css";

const StyledContainer = styled(Container)`
  padding: 4vh 1vw 4vh 1vw;
  margin-top: 4vh;
  /* min-height: 92vh; */
  height: 100%;
  position: relative;
  /* width: 80vw; */

  /* box-sizing: content-box; */

  /* flex-direction: column; */
  border-radius: 8px;
  mix-blend-mode: normal;
  display: flex;
  width: 100%;
  justify-content: center;
  background: white;
  box-shadow: 0px 0px 68px rgba(228, 229, 231, 0.5),
    0px 0px 48px rgba(204, 204, 204, 0.4),
    inset 1px 1px 1px rgba(212, 213, 216, 0.5),
    inset -1px -1px 4px rgba(61, 61, 62, 0.2);
`;

function Spacer() {
  const contentHeight = useStore((state) => state.contentHeight);
  return <div style={{ height: contentHeight }} />;
}

function App() {
  const set = useStore((state) => state.set);

  const [events, setEvents] = useState();
  const scrollArea = useRef();
  const onScroll = (e) => set({ top: e.target.scrollTop });
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  const dom = useRef();

  return (
    <>
      <Canvas
        colorManagement
        noEvents
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [0, 0, 4.5], fov: 50, near: 0.1, far: 100 }}
        onCreated={({ gl }) => {
          gl.setClearColor("white");
          gl.toneMappingExposure = 2.5;
          gl.toneMappingWhitePoint = 1;
          setEvents(events);
        }}
      >
        <Scroll dom={dom}>
          <Anchor name="home">{/* <Home /> */}</Anchor>
        </Scroll>
      </Canvas>
      <ThemeProvider theme={theme}>
        {console.log(`⭐: App -> theme`, theme)}

        <StyledThemeProvider theme={theme}>
          <div
            className="scrollArea"
            ref={scrollArea}
            onScroll={onScroll}
            {...events}
          >
            <div style={{ position: "sticky", top: 0 }}>
              <div
                ref={dom}
                // className="App-header"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  willChange: "transform",
                }}
              >
                {/* <div
                  style={{ position: "absolute", left: "38%", top: "80%" }}
                  id="r3f-home"
                /> */}
                <StyledContainer maxWidth="lg">
                  {/* <Grid item>
                  <Typography variant="h3">Tyler Mitchell</Typography>
                </Grid> */}
                  <Grid
                    container
                    // alignItems="space-between"
                    // alignItems="stretch"
                    spacing={2}
                    justify="space-between"
                    style={{ width: "100%" }}
                  >
                    <Grid
                      item
                      container
                      md={4}
                      direction="column"
                      spacing={2}
                      // alignItems="stretch"
                      // justify="center"

                      // justify="stretch"
                    >
                      <Grid item>
                        <Personal />
                      </Grid>
                      <Grid item>
                        <Education />
                      </Grid>

                      <Grid item container>
                        <Languages />
                      </Grid>
                    </Grid>
                    {/* <Grid
                      item
                      md={3}
                      xs={12}
                      // justify="center"
                    >
                      <Hero />
                    </Grid> */}
                    <Grid item container md={8} direction="column" spacing={2}>
                      <Grid item>
                        <Projects />
                      </Grid>
                      <Grid item>
                        <Experience />
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* <Box flexGrow={1} /> */}
                </StyledContainer>
              </div>
            </div>
          </div>
        </StyledThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
