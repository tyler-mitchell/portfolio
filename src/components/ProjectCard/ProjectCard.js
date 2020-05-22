import {
  Box,
  Button,
  CardActionArea,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import ProjectDialog from "./ProjectDialog";

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
const ProjectCard = ({ title, description, images, languages, overview }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <CardActionArea
        onClick={() => {
          setOpen(true);
        }}
        style={{ padding: "10px", borderRadius: "10px" }}
      >
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
            src={images[0]}
          />
        </ProjectCardPaper>

        <Typography variant="h4">{title}</Typography>

        <Typography variant="body2">{description}</Typography>
      </CardActionArea>
      <ProjectDialog open={open} setOpen={setOpen}>
        <DialogTitle>
          <Typography
            variant="h2"
            style={{ fontWeight: 650, color: "#2C3038" }}
            gutterBottom
          >
            {title}
          </Typography>
          <div style={{ width: "100%" }} />

          <DialogContentText>
            <Typography variant="body1" style={{ color: "rgba(0,0,0,0.3)" }}>
              {description}
            </Typography>
          </DialogContentText>
        </DialogTitle>
        <DialogTitle
          id=""
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            backgroundImage:
              "linear-gradient( 91.9deg,  rgba(75,207,250,1) 6.3%, rgba(25,159,249,1) 98.9% )",
          }}
        >
          <img
            style={{
              objectFit: "contain",
              width: "100%",
              maxHeight: "100%",
            }}
            src={images[0]}
          />
        </DialogTitle>
        <DialogContent
          style={{ height: "70vh", width: "100%" }}
        ></DialogContent>
      </ProjectDialog>
    </div>
  );
};

export default ProjectCard;
