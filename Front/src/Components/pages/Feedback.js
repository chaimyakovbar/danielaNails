import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import styles from "../../styles/style.module.css";

const Feedback = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box className={styles.feedbackContainer}>
      <Typography variant="h5" className={styles.feedbackTitle}>
        📝 תגובות
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box m={2}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="image-upload"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <label htmlFor="image-upload">
            <Button variant="contained" component="span">
              העלי תמונה (אפשרות)
            </Button>
          </label>
        </Box>
        <Box mb={2}>
          <TextField
            label="שם פרטי / משפחה"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="הערות"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          className={styles.feedbackButton}
        >
          אישור
        </Button>
      </form>
    </Box>
  );
};

export default Feedback;
