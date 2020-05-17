import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";

import WidgetPaper from "common/WidgetPaperBase";
import LanguageCard from "components/LanguageCard";

const Languages = () => {
  return (
    <WidgetPaper>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Languages
      </Typography>
      <Grid item container spacing={2}>
        <Grid item xs={4}>
          <LanguageCard
            icon="devicon-python-plain"
            language="Python"
            a={-90}
            bg="#434865"
          />
        </Grid>
        <Grid item xs={4}>
          <LanguageCard
            icon="devicon-javascript-plain"
            language="Javascript"
            a={106}
            bg="#434865"
          />
        </Grid>
        <Grid item xs={4}>
          <LanguageCard
            icon="devicon-react-original colored"
            language="React"
            a={-106}
            bg="#434865"
          />
        </Grid>
        <Grid item xs={4}>
          <LanguageCard
            icon="devicon-typescript-plain"
            language="Typescript"
            a={90}
            bg="#434865"
          />
        </Grid>
        <Grid item xs={4}>
          <LanguageCard
            icon="devicon-java-plain"
            language="Java"
            a={90}
            bg="#434865"
          />
        </Grid>
        <Grid item xs={4}>
          <LanguageCard
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
    </WidgetPaper>
  );
};

export default Languages;
