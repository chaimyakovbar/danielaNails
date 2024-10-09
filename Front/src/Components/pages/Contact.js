import React, { useState } from "react";
import { postUsers } from "../../api/user";
import styles from "../../styles/style.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const getUsrData = async () => {
    if (!name || !number) {
      alert("Please fill in both name and phone number.");
      return;
    }

    const data = {
      name,
      number,
      note,
    };

    setIsLoading(true);
    setSuccessMessage("");

    try {
      await postUsers(data);
      setSuccessMessage("המידע נשלח בהצלחה!");
      deleteData();
    } catch (error) {
      console.error("Failed to post user data:", error);
      setSuccessMessage("אירעה שגיאה בשליחת המידע. נסה שוב.");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteData = () => {
    setName("");
    setNumber("");
    setNote("");
  };

  return (
    <Box className={styles.feedbackContainer}>
      <Typography m={2} variant="h5" className={styles.feedbackTitle}>
        😊 צרי קשר
      </Typography>
      <form onSubmit={getUsrData}>
        <Box mb={2}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            label="שם מלא"
            variant="outlined"
            className={styles.feedbackInput}
          />
        </Box>
        <Box mb={2}>
          <TextField
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            fullWidth
            label="מספר טלפון"
            variant="outlined"
            type="text"
            className={styles.feedbackInput}
          />
        </Box>
        <Box mb={2}>
          <TextField
            value={note}
            onChange={(e) => setNote(e.target.value)}
            fullWidth
            multiline
            rows={4}
            label="הערה"
            variant="outlined"
            className={styles.feedbackInput}
          />
        </Box>
        {isLoading ? (
          <div className={styles.spinnerContainer}>
            <div className={styles.spinner} />
          </div>
        ) : (
          <Button
            onClick={getUsrData}
            type="submit"
            variant="contained"
            className={styles.feedbackButton}
          >
            אישור
          </Button>
        )}
        {successMessage && (
          <p className={styles.successMessage}>{successMessage}</p>
        )}
      </form>
    </Box>
  );
};

export default Contact;
