import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const ProjectCardPaper = styled.div`
  padding: 20px;
  box-sizing: border-box;
  background: rgb(250, 248, 252);
  /* background: radial-gradient(
    100% 197.75% at 0% 0%,
    #4d557a 5.73%,
    #4d557a 82.53%
  ); */
  /* width: 200px; */
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;
const ProjectCard = ({ title, description, image }) => {
  return (
    <div>
      <ProjectCardPaper>
        <div style={{ height: "140px" }} />
      </ProjectCardPaper>
      <div style={{ height: "5px" }} />
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </div>
  );
};

export default ProjectCard;
