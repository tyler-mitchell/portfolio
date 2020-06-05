import { Divider, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";

import WidgetPaper from "common/WidgetPaperBase";

const courses = [
  { title: "Analysis of Algorithms " },
  { title: "Artificial Intelligence" },
  { title: "Application Programming" },
  { title: "Data Structures" },
  { title: "Discrete Mathematical Structures" },
  { title: "Computer Architecture" },
  { title: "Computer Organization" },
  { title: "Operating Systems	" },
  { title: "Programming Language" },
  { title: "Senior Design" },
  { title: "Software Engineering" },
  { title: "Systems Programming" },
  { title: "User Interfaces" },
  { title: "Web Technologies" },
];
const Courses = () => {
  return (
    <WidgetPaper>
      <Typography
        variant="h6"
        gutterBottom
        style={{ marginRight: "20px", cursor: "pointer" }}
      >
        Courses
      </Typography>
      <Divider
        style={{
          background: "rgba(0,0,0,0.05)",
          marginTop: "5px",

          borderRadius: "3px",
          marginBottom: "10px",
        }}
      />
      <Grid container direction="column" spacing={2}>
        {courses.map(({ title }) => (
          <Grid item>
            <Typography
              variant="subtitle2"
              style={{ color: "rgba(0,0,0,0.5)" }}
            >
              {title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </WidgetPaper>
  );
};

export default Courses;
