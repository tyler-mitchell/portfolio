import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Language = ({ color, language }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "10px",
        marginTop: "6px",
      }}
    >
      <div
        style={{
          backgroundColor: color,
          marginRight: "3px",
          borderRadius: "10px",
          width: "10px",
          height: "10px",
          // border: "solid rgba(255,255,255,0.8) 2px",
        }}
      />

      <span
        style={{
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: 1,
          color: "white",
        }}
      >
        {language}
      </span>
    </div>
  );
};

const ProjectCardPaper = styled.div`
  padding: 15px;
  padding-bottom: 23px;
  box-sizing: border-box;
  background: #0df2c9;
  display: flex;
  height: 160px;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 4.5px;
  cursor: pointer;
`;
const ProjectCard = ({ title, description, image, languages }) => {
  return (
    <div>
      <ProjectCardPaper>
        <div
          style={{
            width: "100%",
            display: "flex",
            position: "absolute",

            alignItems: "center",
            bottom: "4px",
            right: 0,
            justifyContent: "flex-end",
          }}
        >
          {languages.map(({ language, color }) => (
            <Language language={language} color={color} />
          ))}
        </div>
        <img
          style={{
            objectFit: "contain",
            width: "100%",
            maxHeight: "100%",
          }}
          src={image}
        />
      </ProjectCardPaper>

      <Typography variant="h4">{title}</Typography>

      <Typography variant="body2">{description}</Typography>
    </div>
  );
};

export default ProjectCard;
