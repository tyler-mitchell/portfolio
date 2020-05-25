import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

import WidgetPaperBase from "common/WidgetPaperBase";
import ProjectCard from "components/ProjectCard";

// import { ReactComponent as AmitaThumbnail } from "resources/amita.svg";
// import { ReactComponent as IdeasaThumbnail } from "resources/ideaportal.png";
// import { ReactComponent as Ideasa2 } from "resources/ideasa2.svg";
// import { ReactComponent as Ideasa3 } from "resources/ideasa3.png";
// import { ReactComponent as Ideasa4 } from "resources/ideasa4.svg";
// import { ReactComponent as KeyHintsThumbnail } from "resources/keyhints.svg";
// import { ReactComponent as RefinderThumbnail } from "resources/refinder.svg";

const projects = [
  {
    title: "Idea Portal",
    images: [
      require("resources/ideasa/header.png"),
      require("resources/ideasa/idea.png"),
      require("resources/ideasa/new_idea.png"),
      require("resources/ideasa/feed.png"),
      require("resources/ideasa/pending.png"),
      require("resources/ideasa/feedback.png"),
    ],
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
    images: [
      require("resources/amita/surgeries.png"),
      require("resources/amita/surgery_view.png"),
      require("resources/amita/surgery_files.png"),
      require("resources/amita/create_surgery.png"),
      require("resources/amita/surgeries_tbd.png"),
      require("resources/amita/surgeries_cancelled.png"),
      require("resources/amita/reports.png"),
      require("resources/amita/login.png"),
      require("resources/amita/outlook.png"),
    ],
    languages: [
      { language: "React", color: "#60D6FB" },
      { language: "Firebase", color: "#FFC107" },
    ],
    description:
      "A task management web application born in response to the COVID-19 epidemic that helps medical teams at UT Health Science Center track and reschedule surgeries.",
  },
  {
    title: "Refinder",
    images: [
      require("resources/refinder/dashboard.png"),
      require("resources/refinder/product_view_buyer.png"),
      require("resources/refinder/offer.png"),
      require("resources/refinder/selling.png"),
      require("resources/refinder/create_details.png"),
      require("resources/refinder/create_upload.png"),
      require("resources/refinder/create_location.png"),
      require("resources/refinder/product_view_seller.png"),
    ],
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
    images: [
      require("resources/keyhints/select_shortcut.png"),
      require("resources/keyhints/create.png"),
      require("resources/keyhints/new_shortcut.png"),
      require("resources/keyhints/new_shortcut_label.png"),
      require("resources/keyhints/new_shortcut_image.png"),
      require("resources/keyhints/multi_layers.png"),
      require("resources/keyhints/keymap_bash_ctrl.png"),
    ],
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
