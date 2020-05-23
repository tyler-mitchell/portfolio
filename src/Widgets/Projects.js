import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

import WidgetPaperBase from "common/WidgetPaperBase";
import ProjectCard from "components/ProjectCard";
import { ReactComponent as AmitaThumbnail } from "resources/amita.svg";
import { ReactComponent as IdeasaThumbnail } from "resources/ideasa.svg";
import { ReactComponent as KeyHintsThumbnail } from "resources/keyhints.svg";
import { ReactComponent as RefinderThumbnail } from "resources/refinder.svg";

const projects = [
  {
    title: "Idea Portal",
    images: [IdeasaThumbnail],
    link: "https://ideasa-portal.firebaseapp.com/",
    languages: [
      { language: "React", color: "#60D6FB" },
      { language: "Express", color: "#00CCB3" },
      { language: "MySQL", color: "#D54B3D" },
    ],

    description:
      "A web app for collaborative ideation where employees of The City of San Antonio suggest, collaborate, and vote on future projects.",
  },
  {
    title: "Amita Surgery",
    images: [AmitaThumbnail],
    languages: [
      { language: "React", color: "#60D6FB" },
      { language: "Firebase", color: "#FFC107" },
    ],
    description:
      "A task management web application born in response to the COVID-19 epidemic that helps medical teams at UT Health Science Center track and reschedule surgeries.",
  },
  {
    title: "Refinder",
    images: [RefinderThumbnail],
    link: "https://refinder.app/marketplace",
    languages: [
      { language: "React", color: "#28ceeb" },
      { language: "Firebase", color: "#FFC107" },
    ],
    description:
      "A community-driven marketplace for reusable building materials.",
  },
  {
    title: "Key Hints",
    images: [KeyHintsThumbnail],
    link: "https://key-hints.web.app/",
    languages: [
      { language: "React", color: "#60D6FB" },
      { language: "Firebase", color: "#FFC107" },
    ],
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
            {console.log(`⭐: Projects -> map`, projects)}
          </Grid>
        </WidgetPaperBase>
      </Grid>
    </div>
  );
};

export default Projects;
