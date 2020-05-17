import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const ProjectCardPaper = styled.div`
  padding: 20px;
  box-sizing: border-box;
  background: #206dfe;
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
    <ProjectCardPaper>
      <Typography variant="h3" gutterBottom style={{ color: "white" }}>
        {title}
      </Typography>
      <Typography variant="body2" style={{ color: "white" }}>
        {description}
      </Typography>
    </ProjectCardPaper>
  );
};

export default ProjectCard;
