import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/CloseRounded";
import React from "react";

const ProjectDialog = ({ open, setOpen, children, maxWidth }) => {
  return (
    <>
      <Dialog
        PaperProps={{
          style: {
            borderRadius: "15px",
            overflow: "visible",
            maxWidth: "760px",
          },
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby=""
        maxWidth={maxWidth}
        fullWidth
        scroll="body"
      >
        <IconButton
          onClick={() => {
            setOpen(false);
          }}
          style={{ position: "fixed", top: 15, right: 20 }}
        >
          {" "}
          <CloseIcon style={{ color: "rgba(255,255,255,0.8)" }} />
        </IconButton>
        {children}
        <DialogActions>
          {/* <Button
            
            color="default"
          >
            Cancel
          </Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProjectDialog;
