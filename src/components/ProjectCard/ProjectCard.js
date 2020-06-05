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
  border: 2px solid white;
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

const ProjectActionArea = styled.div`
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.05s ease-in-out;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0);

  &:hover {
    color: rgba(113, 239, 203, 0.01);
    background: rgba(40, 51, 77, 0.02);
    /* transform: scale(1.02); */
    /* box-shadow: 0px 5px 3px -2px rgba(0, 0, 0, 0.08); */
    /* color: red; */
  }
`;

const ProjectCardPaper = styled.div`
  padding: 15px;
  padding-bottom: 23px;
  box-sizing: border-box;
  user-select: none;
  background: #0df2c9;
  display: flex;
  height: 160px;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 4.5px;

  cursor: pointer;
  /* transition: all 0.2s; */
  ${ProjectActionArea}:hover & {
    color: rgba(113, 239, 203, 0.01);
    /* border-color: #28334c; */
    /* transform: scale(1.05); */
    /* box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.08); */
    /* color: red; */
  }
`;
const ProjectThumbnail = styled.img`
  transition: all 0.3s linear;
  /* box-shadow: 0px 3px 8px rgba(0, 0, 0, 0); */
  /* transform: scale(1); */
  border-radius: 5px;

  ${ProjectActionArea}:hover & {
    /* transform: scale(1.05); */
    /* box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.08); */
    /* color: red; */
  }
`;

const ProjectText = styled.div`
  transition: all 0.1s ease;

  ${ProjectActionArea}:hover & {
    /* color: #6fefcb; */
  }
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
      <ProjectActionArea
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
          <div
            style={{
              borderRadius: "3px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow:
                "0 6.7px 5.3px rgba(0, 0, 0, 0.044), 0 22.3px 17.9px rgba(0, 0, 0, 0.066), 0 100px 80px rgba(0, 0, 0, 0.11)",
            }}
          >
            <ProjectThumbnail
              style={{
                objectFit: "contain",
                width: "100%",

                borderRadius: "3px",

                height: "100%",
              }}
              src={images[0]}
            />
          </div>
          {/* {getScreenShot(images[0])} */}
        </ProjectCardPaper>

        <ProjectText>
          <Typography variant="h4">{title}</Typography>

          <Typography variant="body1" color="textSecondary">
            {description}
          </Typography>
        </ProjectText>
      </ProjectActionArea>
      <ProjectDialog open={open} setOpen={setOpen} maxWidth="md">
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
            overflow: "hidden",
            cursor: "pointer",
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
          {/* Add demo credentials */}
          {/* Add download resume feature */}
          {/* {getScreenShot(images[selected])} */}
          <img
            onClick={() => {
              setSelected((selected + 1) % images.length);
            }}
            style={{
              objectFit: "contained",
              width: "100%",

              maxHeight: "100%",
              borderRadius: "4px",
              boxShadow:
                "0 6.7px 5.3px rgba(0, 0, 0, 0.044), 0 22.3px 17.9px rgba(0, 0, 0, 0.066), 0 100px 80px rgba(0, 0, 0, 0.11)",
            }}
            src={images[selected]}
          />
        </div>
        <DialogContent style={{ padding: 0 }}>
          <Grid
            container
            justify="center"
            style={{ marginTop: "10px", background: "#F9F9FB" }}
          >
            {" "}
            {images.map((url, index) => {
              return (
                <Grid item>
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
                        maxWidth: "80px",
                        width: "80px",
                        height: "60px",

                        borderRadius: "2px",
                      }}
                    >
                      <img
                        style={{
                          objectFit: "cover",
                          borderRadius: "3px",
                          minWidth: "50px",
                          maxWidth: "100%",
                          height: "100%",
                          maxHeight: "100%",
                        }}
                        src={url}
                      />
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
