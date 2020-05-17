import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

import WidgetPaperBase from "common/WidgetPaperBase";
import ProjectCard from "components/ProjectCard";

const projects = [
  {
    title: "Idea Portal",
    description:
      "A web app for collaborative ideation where employees of The City of San Antonio suggest, collaborate, and vote on future projects.",
  },
  {
    title: "Amita Surgery",
    description:
      "A task management web application born in response to the COVID-19 epidemic that helps medical teams at UT Health Science Center track and reschedule surgeries.",
  },
  {
    title: "Refinder",
    description:
      "A community-driven marketplace for reusable building materials.",
  },
  {
    title: "Key Hints",
    description:
      "A beautiful notebook to organize and visualize keyboard shortcuts.",
  },
];
const Projects = () => {
  return (
    <div>
      <Grid item>
        <WidgetPaperBase>
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginRight: "20px", cursor: "pointer" }}
          >
            Projects
          </Typography>
          <Grid
            container
            // justify="center"
            alignItems="stretch"
            spacing={2}
            style={{ height: "100%" }}
          >
            {projects.map((props) => (
              <Grid item lg={6} md={12} xs={12}>
                <ProjectCard {...props} />
              </Grid>
            ))}
          </Grid>
        </WidgetPaperBase>
      </Grid>
    </div>
  );
};

export default Projects;
