import { Box, Divider } from "@material-ui/core";
import { Chip } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { FiberManualRecord as DotIcon2 } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useTheme, withTheme } from "@material-ui/styles";
import React from "react";
import styled from "styled-components";

import WidgetPaperBase from "common/WidgetPaperBase";
import UtsaLogo from "components/Icons/utsaLogo";

import LanguageCard from "../components/LanguageCard";

const EducationPaper = styled(WidgetPaperBase)`
  /* min-width: 300px; */
  /* width: 300px; */
  width: 100%;
  padding: 20px 20px 20px 0px;
`;
const TimelineContainer = styled(Divider)`
  opacity: 0.4;
  position: relative;
  width: 2px;
  background: white;
  height: 100%;
  margin: 0px 10px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const IconContainer = styled.div`
  /* box-sizing: border-box; */

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
  gpa,
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
          gutterBottom
          display="block"
          style={{
            fontWeight: 800,
            maxWidth: 600,
            letterSpacing: letterSpacing,
            lineHeight: 1,
            fontSize: "20px",
          }}
        >
          {title}
        </Typography>
        <Typography
          noWrap={true}
          style={{
            // position: "absolute",

            overflow: "visible",
            right: 0,
            position: "relative",
          }}
          variant="caption"
          display="block"
        >
          {date}
          {gpa && (
            <Typography
              variant="body2"
              position="absolute"
              align="right"
              // display="block"
              style={{
                position: "absolute",
                background: "#ffffff",
                fontWeight: 800,
                color: theme.palette.text.primary,
                borderRadius: "2px",
                padding: "0px 3px",
                // right: -89.3,

                top: 20,
                right: 0,
                lineHeight: "12px",
                fontSize: "10px",
              }}
            >
              {gpa}
            </Typography>
          )}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        color="textPrimary"
        style={{
          maxWidth: "450px",
          fontWeight: 300,
          fontSize: "14px",
          lineHeight: "14px",
        }}
      >
        <ul style={{ margin: 0 }}>
          {subtitle.map((item) => (
            <li style={{ marginBottom: "4px", lineHeight: 1.2 }}>{item}</li>
          ))}
        </ul>
      </Typography>
      {degree && (
        <>
          <Chip
            style={{
              color: "white",
              position: "relative",
              background: "linear-gradient(120deg,#0df2c9 0%, #0df2c9 100%)",
              // left: -28
              borderRadius: "27px 25px 25px 27px",
              left: -23.5,
              // minWidth: "100px",
              paddingRight: "20px",
              justifyContent: "flex-start",
            }}
            color="primary"
            // variant="outlined"
            // classes={classes}
            icon={
              <DotIcon2
                style={{
                  fontSize: "6px",
                  paddingRight: "2px",
                  marginLeft: 0,
                  color: "#ffffff",

                  position: "relative",
                  // left: "-2.5px"
                }}
                // color="action"
              />
            }
            size="small"
            label={degree}
          />
        </>
      )}
    </IconContainer>
  );
};

const Education = () => {
  const theme = useTheme();
  return (
    <>
      <EducationPaper>
        <Typography variant="h6" style={{ marginLeft: "14px" }} gutterBottom>
          Experience
        </Typography>
        <Divider
          light
          style={{
            marginLeft: "14px",

            marginTop: "5px",
            height: "4px",
            borderRadius: "3px",
            marginBottom: "12px",
          }}
        />
        <Grid
          container
          direction="row"
          wrap="nowrap"
          justify="stretch"
          style={{ position: "relative" }}
        >
          <Grid
            item
            style={{
              margin: "0px 15px",
              borderRadius: "20px",
            }}
          >
            <Divider
              orientation="vertical"
              absolute
              style={{
                margin: "2px 15px",
                height: "100%",
                padding: "0px .2px 10px .2px",
                // top: "18%",
                top: 0,
                opacity: 0.8,
                borderRadius: "20px",
              }}
            />
          </Grid>
          <Grid
            container
            item
            direction="column"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item>
              <School
                theme={theme}
                title="UT Health Science Center at San Antonio"
                date="April 2020 - Now"
                gpa="Contract"
                letterSpacing="-1px"
                subtitle={[
                  <>
                    Building a medical scheduling and task management <br />
                    web application
                  </>,
                  <>
                    Application is actively being used by medical teams at
                    <br /> UT Health and Science Center
                  </>,
                  <a
                    target="_blank"
                    href="https://www.utsa.edu/today/2020/05/story/postpandemic-triage-software.html"
                  >
                    UTSA software to help patients receive faster <br />
                    postpandemic care
                  </a>,
                ]}
                degree={"Lead Developer"}
              />
            </Grid>
            <Grid item>
              <School
                theme={theme}
                date="Jan 2020 - May 2020"
                title="Senior Design Project"
                subtitle={[
                  <>
                    Created{" "}
                    <a target="_blank" href="https://refinder.app">
                      Refinder
                    </a>
                    &#8212;a marketplace for reusable building materials and
                    builder services
                  </>,
                  <>
                    Placed 4th out of 23 teams in university's technology
                    venture competition
                  </>,
                  <>Learned a lot about online marketplaces and finance</>,
                  <>
                    Formed close partnership with The City of San Antonio's
                    Office of Historic Preservation
                  </>,
                ]}
                gpa={
                  <div>
                    University <br />
                    Competition
                  </div>
                }
                letterSpacing="-1px"
                degree={"Founder"}
              />
            </Grid>
            <Grid item>
              <School
                theme={theme}
                date="Nov 2019 - April 2020"
                gpa="Internship"
                title={"City of San Antonio"}
                subtitle={[
                  <>Built a collaborative ideation web application</>,
                  <>
                    Application to launch in pilot phase with 50 participants.{" "}
                    <br />
                    Upon success, it will launch to 13,000 city employees and
                    then city-wide
                  </>,
                  <>
                    Worked with The City of San Antonio's Office of Innovation /
                    Information Technology Department and gained knowledge of
                    local government functions & technologies
                  </>,
                  <>
                    Gathered requirements and participated in various meetings
                    with stakeholders
                  </>,
                ]}
                letterSpacing="-1px"
                degree={"Web Applications Developer"}
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
    </>
  );
};

export default Education;
