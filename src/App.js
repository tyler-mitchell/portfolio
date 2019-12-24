import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import theme from "./theme";
import "./App.css";
import styled from "styled-components";
import Projects from "Widgets/Projects";

const StyledContainer = styled(Container)`
  height: 96vh;
  padding: 35px;
  margin: 35px;
  border-radius: 8px;
  mix-blend-mode: normal;
  background: radial-gradient(
    50.99% 50.14% at 50% 20%,
    #444a6d 0%,
    #3b405e 100%
  );
  /* box-shadow: 34px 34px 64px rgba(50, 54, 77, 0.48),
    -32px -32px 48px rgba(76, 83, 118, 0.17),
    inset 2px 2px 2px rgba(83, 92, 136, 0.11),
    inset -1px -1px 4px rgba(44, 48, 68, 0.2); */
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      {console.log(`⭐: App -> theme`, theme)}

      <StyledContainer maxWidth="lg">
        <Projects />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
