import {
  Avatar,
  Box,
  Container,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import lerp from "lerp";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import styled from "styled-components";

import WidgetPaper from "common/WidgetPaperBase";
import { Anchor, End, Home, Scroll } from "components/Background";
import { api, useStore } from "components/store";
import Courses from "Widgets/Courses";
import Education from "Widgets/Education";
import Experience from "Widgets/Experience";
import Hero from "Widgets/Hero";
import Languages from "Widgets/Languages";
import Personal from "Widgets/Personal";
import Projects from "Widgets/Projects";
import Social from "Widgets/Social";

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
  return <div style={{ height: contentHeight + 50 }} />;
}

const Header = styled.div`
  background-image: radial-gradient(
    circle 997px at 99.9% 96.8%,
    rgba(137, 248, 255, 1) 0%,
    #0df2c9 90%
  );

  /* height: 100%; */

  box-sizing: border-box;
  /* width: 275px; */
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.5px 0px 0px,
    rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 0px 0px 0px;
  min-width: 300px;
  width: 100%;
  padding: 20px;
  /* background-image: linear-gradient(
    89deg,
    rgba(253, 220, 155, 1) 26.2%,
    rgba(255, 215, 165, 1) 48.5%
  ); */

  position: relative;
  border-radius: 8px;
`;

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
          {/* <Anchor name="home">
            <Home />
          </Anchor> */}
        </Scroll>
      </Canvas>
      <ThemeProvider theme={theme}>
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
                  style={{
                    position: "absolute",
                    left: "38%",
                    top: "80%",
                  }}
                  id="r3f-home"
                /> */}
                <StyledContainer maxWidth="lg">
                  <Grid
                    container
                    direction="column"
                    spacing={2}
                    alignItems="space-around"
                    style={{ width: "100%" }}
                  >
                    <Grid item>
                      <Header style={{ height: "20vh", width: "100%" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            width: "100%",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "10px",
                            }}
                          >
                            <Avatar
                              aria-label=""
                              style={{
                                marginRight: "-8px",
                                marginTop: "30px",
                                position: "relative",
                                border: "6px solid rgba(255,255,255,0.8)",
                                width: "110px",
                                height: "110px",
                                backgroundImage:
                                  "radial-gradient( circle farthest-corner at 10% 20%,  rgba(239,246,249,1) 0%, rgba(206,239,253,1) 90% )",
                                overflow: "visible",
                                objectFit: "fit",

                                boxShadow:
                                  "rgba(0, 0, 0, 0.03) -2px 2px 8px 0px",
                              }}
                            >
                              {/* <div
                                  style={{
                                    border: "3px solid rgba(255,255,255,0.9)",
                                    backgroundImage:
                                      "radial-gradient( circle farthest-corner at 10% 20%,  rgba(239,246,249,1) 0%, rgba(206,239,253,1) 90% )",
                                    borderTop: "transparent",
                                    background: "white",
                                    borderRight: "transparent",
                                    borderLeft: "transparent",
                                    borderRadius: "50px",
                                    height: "100%",
                                    bottom: "-3px",
                                    width: "100%",
                                    position: "absolute",
                                  }}
                                ></div> */}
                              <img
                                height="100px"
                                style={{
                                  borderRadius: "0px 0px 30px 30px",
                                  filter:
                                    "saturate(110%) drop-shadow(2px 1px 4px rgba(0,0,0,0.3)",
                                }}
                                src={require("./resources/tyler.svg")}
                              ></img>
                            </Avatar>
                            <div style={{ marginLeft: "-5px" }}>
                              <div
                                style={{
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.05) -2px 2px 23px 0px",
                                  borderRadius: "38px 38px 38px 7px",
                                  marginBottom: "15px",
                                  opacity: 0.95,
                                  padding: "15px",
                                  paddingRight: "30px",
                                  background: "white",
                                }}
                              >
                                <Typography
                                  variant="h4"
                                  style={{
                                    // fontFamily: "Inter, sans-serif",
                                    fontWeight: 650,
                                    letterSpacing: "-0.5px",
                                    color: "#0df2c9",
                                  }}
                                >
                                  Hello, i'm{" "}
                                  <Typography
                                    display="inline"
                                    variant="h3"
                                    style={{
                                      // fontFamily: "Inter, sans-serif",
                                      fontWeight: 650,
                                      // color: "#0df2c9",
                                      color: "rgba(0,0,0,1)",
                                      letterSpacing: "-0.5px",
                                    }}
                                  >
                                    Tyler Davis Mitchell
                                  </Typography>
                                </Typography>
                              </div>
                              <div style={{ marginLeft: "0" }}>
                                {" "}
                                <Social />
                              </div>
                            </div>
                          </div>

                          <Hidden smDown>
                            <div
                              style={{
                                display: "flex",
                                maxWidth: "50%",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                display="block"
                                variant="h3"
                                // align="justify"
                                style={{
                                  width: "85%",
                                  filter:
                                    "drop-shadow(0px 0px 3px rgba(109, 238, 201, 0.52))",
                                  // opacity: 0.95,
                                  // fontFamily: "Inter, sans-serif",
                                  fontWeight: 650,
                                  // lineHeight: 0.8,
                                  // color: "#0df2c9",
                                  color: "rgba(255,255,255,1)",
                                  letterSpacing: "-0.5px",
                                }}
                              >
                                A full stack developer with a passion for
                                crafting beautiful digital experiences and
                                solutions.
                              </Typography>
                            </div>
                          </Hidden>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            bottom: 20,
                            right: 20,
                          }}
                        >
                          {" "}
                          {/* <Social /> */}
                        </div>
                      </Header>
                    </Grid>
                    {/* <Grid item>
                    <Typography variant="h3">Tyler Mitchell</Typography>
                  </Grid> */}
                    <Grid
                      container
                      // alignItems="space-between"
                      // alignItems="stretch"
                      spacing={2}
                      item
                      justify="space-between"
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
                          <Education />
                        </Grid>

                        <Grid item container>
                          <Languages />
                        </Grid>
                        <Grid item container>
                          <Courses />
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
                      <Grid
                        item
                        container
                        md={8}
                        direction="column"
                        spacing={2}
                      >
                        <Grid item>
                          <Projects />
                        </Grid>
                        <Grid item>
                          <Experience />
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* <Box flexGrow={1} /> */}
                  </Grid>
                </StyledContainer>
              </div>
            </div>
            <Spacer />
          </div>
        </StyledThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
