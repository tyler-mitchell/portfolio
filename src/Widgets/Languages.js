import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";

import WidgetPaper from "common/WidgetPaperBase";
import LanguageCard from "components/LanguageCard";
import { ReactComponent as PythonIcon } from "resources/python.svg";
import { ReactComponent as CIcon } from "resources/c.svg";
import { ReactComponent as JavascriptIcon } from "resources/javascript.svg";
import { ReactComponent as ReactIcon } from "resources/react.svg";
import { ReactComponent as TypescriptIcon } from "resources/typescript.svg";
import { ReactComponent as JavaIcon } from "resources/java.svg";
import { ReactComponent as C4DIcon } from "resources/c4d.svg";
import { ReactComponent as GitIcon } from "resources/git.svg";
import { ReactComponent as FigmaIcon } from "resources/figma.svg";
import { ReactComponent as FramerIcon } from "resources/framer.svg";
import { ReactComponent as DockerIcon } from "resources/docker.svg";
import { ReactComponent as FirebaseIcon } from "resources/firebase.svg";

const languages = [
  {
    language: "Javascript",
    icon: JavascriptIcon,
  },
  {
    language: "React",
    icon: ReactIcon,
  },
  {
    language: "Python",
    icon: PythonIcon,
  },
  {
    language: "Typescript",
    icon: TypescriptIcon,
  },
  {
    language: "Java",
    icon: JavaIcon,
  },
  {
    language: "C",
    icon: CIcon,
  },
];
const tools = [
  {
    language: "Git",
    icon: GitIcon,
  },
  {
    language: "Docker",
    icon: DockerIcon,
  },
  {
    language: "Firebase",
    icon: FirebaseIcon,
  },
  {
    language: "Figma",
    icon: FigmaIcon,
  },
  {
    language: "Framer",
    icon: FramerIcon,
  },
  {
    language: (
      <>
        Cinema <span style={{ fontSize: 10 }}>4D</span>
      </>
    ),
    icon: C4DIcon,
  },
];
const Languages = () => {
  return (
    <WidgetPaper>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Technology
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            style={{ color: "rgba(0,0,0,0.6)" }}
            gutterBottom
          >
            Languages
          </Typography>
          <Grid item container spacing={1} alignItems="center">
            {languages.map(({ language, icon }) => (
              <Grid item xs={4}>
                <LanguageCard icon={icon} language={language} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            style={{ color: "rgba(0,0,0,0.6)" }}
            gutterBottom
          >
            Tools
          </Typography>
          <Grid item container spacing={1} alignItems="center">
            {tools.map(({ language, icon }) => (
              <Grid item xs={4}>
                <LanguageCard icon={icon} language={language} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </WidgetPaper>
  );
};

export default Languages;
