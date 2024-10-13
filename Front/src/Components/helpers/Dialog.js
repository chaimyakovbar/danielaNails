import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import styles from "../../styles/style.module.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'red',
          marginBottom: '20px',
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle className={styles.dialogTitle}>{product.name}</DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <img src={product.image} alt={product.name} className={styles.imageDialog} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogForImage;
