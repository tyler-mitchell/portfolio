import {
  Box,
  Button,
  CardActionArea,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/CloseRounded";
import React from "react";
import styled from "styled-components";

import ProjectDialog from "./ProjectDialog";

const ThumbnailContainer = styled.div`
  border-radius: 4px;
  margin: 8px;
  padding: 2px;

  box-shadow: ${({ isSelected }) =>
    isSelected ? "0 0 0px 3px #53ABF3" : "0 0 0px 0px #F3F3F4"};
  cursor: pointer;
  background-image: radial-gradient(
    circle 827px at 47.3% 48%,
    #f3f3f4 0%,
    rgba(138, 192, 216, 1) 90%
  );

  transition: all 0.2s ease-in;

  &:hover {
    box-shadow: ${({ isSelected }) =>
      !isSelected && "0 0 0 4px rgba(0, 0, 0, 0.1)"};
    background: ${({ isSelected }) => !isSelected && " rgba(0, 0, 0, 0.1)"};
  }

  &:after {
  }
`;

const ColorButton = withStyles((theme) => ({
  root: {
    position: "absolute",
    top: 10,
    right: 10,
    fontWeight: 600,
    textTransform: "none",
    backgroundColor: "#25324E",
    boxShadow: "rgba(25,159,249,0.1) -2px 2px 23px 0px",
    color: "white",
    "&:hover": {
      boxShadow: "rgba(25,159,249,0.1) -1px 1px 23px 0px",
      backgroundColor: "white",
      color: "#489FF2",
    },
  },
}))(Button);
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

function getScreenShot(screenshot) {
  const Screenshot = screenshot;
  return <Screenshot width="750px" height="390px" />;
}
const ProjectCard = ({
  title,
  description,
  images,
  languages,
  overview,
  link,
}) => {
  console.log(`⭐: images`, images);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);

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
          {/* <img
            style={{
              objectFit: "contain",
              width: "100%",

              height: "100%",
            }}
            src={images[0]}
          /> */}
          {/* {getScreenShot(images[0])} */}
        </ProjectCardPaper>

        <Typography variant="h4">{title}</Typography>

        <Typography variant="body2">{description}</Typography>
      </CardActionArea>
      <ProjectDialog open={open} setOpen={setOpen} maxWidth="lg">
        <DialogTitle>
          <Typography
            variant="h2"
            style={{ fontWeight: 650, color: "#2C3038" }}
            gutterBottom
          >
            {title}
          </Typography>
          {/* <div style={{ width: "60vw" }} /> */}

          <DialogContentText>
            <Typography variant="body1" style={{ color: "rgba(0,0,0,0.3)" }}>
              {description}
            </Typography>
          </DialogContentText>
        </DialogTitle>
        <div
          style={{
            height: "400px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 20px 20px 20px",
            backgroundImage:
              "linear-gradient( 91.9deg,  rgba(75,207,250,1) 6.3%, rgba(25,159,249,1) 98.9% )",
          }}
        >
          {" "}
          {link && (
            <ColorButton variant="contained" href={link} target="_blank">
              Visit
            </ColorButton>
          )}
          {/* Add "View Code" button */}
          {/* {getScreenShot(images[selected])} */}
          {images.map((Im, i) => {
            if (i === selected) {
              return <Im width="100%" height="100%" />;
            }
          })}
        </div>
        <DialogContent style={{ padding: 0 }}>
          <Grid container justify="center" style={{ marginTop: "10px" }}>
            {" "}
            {images.map((Image, index) => {
              return (
                <Grid item key={index + title}>
                  <ThumbnailContainer
                    isSelected={selected === index}
                    onClick={() => {
                      setSelected(index);
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // padding: "2px 6px",
                        position: "relative",
                        maxWidth: "120px",
                        height: "100px",

                        borderRadius: "2px",
                      }}
                    >
                      <Image width="100%" height="auto" />
                    </div>
                  </ThumbnailContainer>
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>
      </ProjectDialog>
    </div>
  );
};

export default ProjectCard;
