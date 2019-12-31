import React from "react";
import ProjectCard from "components/ProjectCard";
import { Typography, Box, Grid } from "@material-ui/core";
import WidgetPaperBase from "common/WidgetPaperBase";
const projects = [
  {
    title: "ideasa",
    description: "A web app for employees of The City of San Antonio"
  },
  {
    title: "key hints",
    description: "A beautiful keyboard shortcut notebook"
  },
  {
    title: "memory vision",
    description:
      "An app that helps students and educators easily visualize how memory works in the C language by generating memory maps from a given C program"
  },
  {
    title: "memory vision",
    description:
      "An app that helps students and educators easily visualize how memory works in the C language by generating memory maps from a given C program"
  }
];
const Projects = () => {
  return (
    <>
      <Box display="flex">
        <Typography
          display="inline"
          variant="h4"
          gutterBottom
          style={{ marginRight: "20px", cursor: "pointer" }}
        >
          Projects
        </Typography>
        <Typography
          display="inline"
          variant="h4"
          gutterBottom
          style={{ opacity: 0.3, cursor: "pointer" }}
        >
          Experience
        </Typography>
      </Box>

      <WidgetPaperBase>
        <Grid
          container
          justify="center"
          alignItems="stretch"
          spacing={2}
          style={{ height: "100%" }}
        >
          {projects.map(props => (
            <Grid item xs={6}>
              <ProjectCard {...props} />
            </Grid>
          ))}
        </Grid>
      </WidgetPaperBase>
    </>
  );
};

export default Projects;
