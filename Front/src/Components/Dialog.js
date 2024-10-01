import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogForImage = ({ open, onClose, product }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        style: {
          borderRadius: "20px",
          maxWidth: "500px", // Set a max width for the dialog
          maxHeight: "80vh", // Set a max height for the dialog
          overflow: "hidden", // Hide overflow to allow scrolling inside
        },
      }}
    >
      <DialogTitle style={styles.dialogTitle}>{product.name}</DialogTitle>
      <DialogContent style={styles.dialogContent}>
        <img src={product.image} alt={product.name} style={styles.image} />
      </DialogContent>
      <DialogActions style={styles.actions}>
        <Button onClick={onClose} style={styles.closeButton}>
          Close
        </Button>
        <Link to={"/contact"} style={styles.contactLink}>
          <Button onClick={onClose} style={styles.contactButton}>
            Contact Us
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};

const styles = {
  dialogTitle: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  dialogContent: {
    padding: "10px",
    overflowY: "auto", // Allow vertical scrolling if content overflows
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "10px",
  },
  closeButton: {
    backgroundColor: "#f44336",
    color: "white",
    borderRadius: "20px",
    padding: "10px 20px",
    textTransform: "none",
  },
  contactLink: {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contactButton: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "20px",
    padding: "10px 20px",
    marginRight: "20px",
    textTransform: "none",
  },
};

export default DialogForImage;
