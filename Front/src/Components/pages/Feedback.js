import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import styles from "../../styles/style.module.css";
import { postFeedback } from "../../api/feedback"; // Import the postFeedback function

const Feedback = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !feedback) {
      alert("Please fill in both name and feedback.");
      return;
    }

    let imageData = null;
    if (image) {
      // Convert the image file to base64 string
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = async () => {
        imageData = reader.result;
        const data = {
          name,
          image: imageData,
          note: feedback,
        };

        await submitData(data);
      };
    } else {
      const data = {
        name,
        image,
        note: feedback,
      };
      submitData(data);
    }
  };

  const submitData = async (data) => {
    setIsLoading(true);
    setSuccessMessage("");

    try {
      await postFeedback(data);
      setSuccessMessage("התגובה נשלחה בהצלחה!");
      clearData();
    } catch (error) {
      console.error("Failed to post feedback data:", error);
      setSuccessMessage("אירעה שגיאה בשליחת המידע. נסה שוב.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearData = () => {
    setName("");
    setImage(null);
    setFeedback("");
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
      {isLoading && <p>Submitting feedback...</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </Box>
  );
};

export default Feedback;
