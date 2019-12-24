import React from "react";
import ProjectCard from "components/ProjectCard/";
import { Grid } from "@material-ui/core";
const Projects = () => {
  return (
    <Grid container justify="center" spacing={2} wrap="nowrap">
      <Grid item>
        <ProjectCard />
      </Grid>
      <Grid item>
        <ProjectCard />
      </Grid>
      <Grid item>
        <ProjectCard />
      </Grid>
      <Grid item>
        <ProjectCard />
      </Grid>
    </Grid>
  );
};

export default Projects;
