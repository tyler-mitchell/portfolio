import React from "react";
import ProjectCard from "components/ProjectCard/";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
const Projects = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Languages
      </Typography>
      <Grid item container justify="center" spacing={2} wrap="nowrap">
        <Grid item>
          <ProjectCard
            icon="devicon-python-plain"
            language="Python"
            a={-90}
            bg="#434865"
          />
        </Grid>
        <Grid item>
          <ProjectCard
            icon="devicon-javascript-plain"
            language="Javascript"
            a={106}
            bg="#434865"
          />
        </Grid>
        <Grid item>
          <ProjectCard
            icon="devicon-react-original colored"
            language="React"
            a={-106}
            bg="#434865"
          />
        </Grid>
        <Grid item>
          <ProjectCard
            icon="devicon-typescript-plain"
            language="Typescript"
            a={90}
            bg="#434865"
          />
        </Grid>
        <Grid item>
          <ProjectCard
            icon="devicon-java-plain"
            language="Java"
            a={90}
            bg="#434865"
          />
        </Grid>
        <Grid item>
          <ProjectCard
            icon="devicon-c-plain"
            language="C"
            a={90}
            bg="#434865"
          />
        </Grid>
      </Grid>
      {/* <Typography variant="h4" style={{ marginTop: "15px" }} gutterBottom>
        Tools
      </Typography>
      <Grid item container justify="center" spacing={2}>
        <Grid item>
          <ProjectCard
            icon="devicon-git-plain"
            language="Git"
            a={-90}
            bg="#434865"
          />
        </Grid>
        <Grid item>
          <ProjectCard
            icon="devicon-google-plain"
            language="Firebase"
            a={106}
            bg="#434865"
          />
        </Grid>
        <Grid item>
          <ProjectCard
            icon="devicon-visualstudio-plain"
            language="VisualStudio"
            a={-106}
            bg="#434865"
          />
        </Grid>
        <Grid item>
          <ProjectCard
            icon="devicon-ubuntu-plain"
            language="Ubuntu"
            a={90}
            bg="#434865"
          />
        </Grid>
        <Grid item>
          <ProjectCard
            icon="devicon-gitlab-plain"
            language="Gitlab"
            a={90}
            bg="#434865"
          />
        </Grid>
        <Grid item>
          <ProjectCard
            icon="devicon-babel-plain"
            language="Babel"
            a={90}
            bg="#434865"
          />
        </Grid>
      </Grid> */}
    </>
  );
};

export default Projects;
