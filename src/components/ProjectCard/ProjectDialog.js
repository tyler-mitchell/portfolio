import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";

const ProjectDialog = ({ open, setOpen, children }) => {
  return (
    <>
      <Dialog
        PaperProps={{
          style: { borderRadius: "15px" },
        }}
        open={open}
        aria-labelledby=""
        fullWidth
        maxWidth="md"
      >
        {children}
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            color="default"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProjectDialog;
