import React from "react";
import UtsaLogo from "components/Icons/utsaLogo";
import ProjectCard from "../components/ProjectCard";
import { Box, Divider } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import { Chip } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useTheme, withTheme } from "@material-ui/styles";
import { FiberManualRecord as DotIcon2 } from "@material-ui/icons";

const EducationPaper = styled.div`
  background: linear-gradient(107.26deg, #494f74 0%, #434865 100%);
  height: 100%;
  width: 275px;
  padding: 20px 20px 10px 0px;
  position: relative;
  border-radius: ${({ borderRadius }) => borderRadius};
`;
const TimelineContainer = styled(Divider)`
  opacity: 0.4;
  position: relative;
  width: 2px;
  background: white;
  height: 100%;
  margin: 0px 10px;
`;

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));

const IconContainer = styled.div`
  box-sizing: border-box;

  /* box-shadow: 8px 8px 22px rgba(54, 59, 87, 0.24),
    -6px -6px 24px rgba(85, 93, 131, 0.48),
    inset -1px -1px 4px rgba(83, 92, 136, 0.12),
    inset 1px 1px 1px rgba(38, 49, 105, 0.05);
  padding: 10px 10px 10px 10px; */
  /* height: 100%; */
  width: 100%;
  /* background: linear-gradient(155.92deg, #424869 0%, #4a5178 81.64%); */
  border-radius: ${({ borderRadius }) => borderRadius};
  /* background: ${({ background }) => background}; */
  /* box-shadow: ${({ boxShadow }) => boxShadow}; */
`;

const School = ({
  theme,
  title,
  subtitle,
  date,
  letterSpacing,

  degree,
  gpa
}) => {
  const classes = useStyles();
  return (
    <IconContainer
      borderRadius={theme.styles.borderRadius.widget}
      background={theme.styles.gradient.widgetEmbossed}
      boxShadow={theme.styles.boxShadow.widgetEmbossed}
    >
      {/* <UtsaLogo color={theme.palette.text.primary} /> */}
      <Box
        display="flex"
        position="relative"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          color="textPrimary"
          // display="inline"
          display="block"
          style={{
            fontWeight: 800,
            maxWidth: 100,
            letterSpacing: letterSpacing,
            lineHeight: "20px",
            fontSize: "20px"
          }}
        >
          {title}
        </Typography>
        <Typography
          noWrap={true}
          style={{
            position: "absolute",
            right: 0
          }}
          variant="caption"
          display="block"
        >
          {date}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        color="textPrimary"
        style={{
          maxWidth: "160px",
          fontWeight: 300,
          fontSize: "14px",
          lineHeight: "14px"
        }}
      >
        {subtitle}
      </Typography>
      {degree && (
        <>
          <Chip
            style={{
              color: "white",
              position: "relative",
              background: "linear-gradient(120deg, #23bfb0 0%, #30d6c6 100%)",
              // left: -28
              borderRadius: "27px 25px 25px 27px",
              left: -24.5
            }}
            color="primary"
            // variant="outlined"
            // classes={classes}
            icon={
              <DotIcon2
                fontSize="small"
                style={{
                  fontSize: "8px",
                  paddingRight: "4px",
                  marginLeft: 0,
                  color: "#4D557A",
                  opacity: 0.3,
                  position: "relative"
                  // left: "-2.5px"
                }}
                // color="action"
              />
            }
            size="small"
            label={
              <>
                {degree}{" "}
                {gpa && (
                  <Typography
                    variant="body2"
                    position="absolute"
                    align="right"
                    // display="block"
                    style={{
                      position: "absolute",
                      background: "#23bfb0",
                      fontWeight: 800,
                      color: theme.palette.text.primary,
                      borderRadius: "2px",
                      padding: "0px 3px",
                      right: -89.3,
                      top: -33,
                      lineHeight: "12px",
                      fontSize: "10px"
                    }}
                  >
                    {gpa}
                    <span style={{ marginLeft: "1.5px" }}>GPA</span>
                  </Typography>
                )}
              </>
            }
          />
        </>
      )}
    </IconContainer>
  );
};

const Education = () => {
  const theme = useTheme();
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <EducationPaper borderRadius={theme.styles.borderRadius.widget}>
        <Grid container direction="row" wrap="nowrap" justify="stretch">
          <Grid item>
            <Divider
              orientation="vertical"
              light
              style={{
                margin: "0px 15px",
                padding: "0px .2px",
                opacity: 0.8,
                borderRadius: "20px"
              }}
            />
          </Grid>
          <Grid
            container
            item
            direction="column"
            alignItems="stretch"
            spacing={4}
            style={{ paddingBottom: "25px" }}
          >
            <Grid item>
              <School
                theme={theme}
                title="UTSA"
                date="2017 - MAY 2020"
                gpa="3.2"
                letterSpacing="-2px"
                subtitle="The University of Texas at San Antonio"
                degree={"Bachelor of Computer Science"}
              />
            </Grid>
            <Grid item>
              <School
                theme={theme}
                date="2015 - 2017"
                title="Northeast Lakeview"
                subtitle="Alamo Colleges District"
                letterSpacing="-1px"
                degree={"Associate of Computer Science"}
              />
            </Grid>
            {/* <Grid item>
              <School
                date="2009 - 2013"
                theme={theme}
                title="Reagan"
                subtitle="Ronald Reagan Highschool"
                letterSpacing="-1px"
              />
            </Grid> */}
          </Grid>
        </Grid>
      </EducationPaper>
    </div>
  );
};

export default Education;
