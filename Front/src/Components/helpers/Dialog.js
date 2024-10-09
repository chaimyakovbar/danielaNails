import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import {Call , Close} from "@mui/icons-material"
import styles from "../../styles/style.module.css";

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
          maxWidth: "500px",
          maxHeight: "100vh",
          overflow: "hidden",
        },
      }}
    >
      <DialogTitle className={styles.dialogTitle}>{product.name}</DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <img src={product.image} alt={product.name} className={styles.imageDialog} />
      </DialogContent>
      <DialogActions className={styles.actions}>
        <button onClick={onClose} className={styles.closeButton}>
          <Close />
        </button>
        <Link to={"/contact"} className={styles.contactLink}>
          <button onClick={onClose} className={styles.contactButton}>
            <Call />
          </button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};

export default DialogForImage;