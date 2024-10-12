import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button/";

const RModal = ({
  openState,
  setOpenFn,
  title,
  children,
  description = "This is a modal",
}) => {
  return (
    <>
      <Dialog
        open={openState}
        onClose={() => setOpenFn(false)}
        aria-labelledby={"alert-title-" + title}
        aria-describedby={"alert-description-" + description}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenFn(false)} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RModal;
