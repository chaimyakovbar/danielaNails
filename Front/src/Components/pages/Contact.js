import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { postUsers } from "../../api/user";
import styles from "../../styles/style.module.css";
import { Box, Button, TextField, Typography } from "@mui/material";

const Contact = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [time, setTime] = useState(location.state?.time || "");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const getUsrData = async () => {
    if (!name || !phone || !time) {
      alert("Please fill in both name, phone and date.");
      return;
    }

    const data = {
      name,
      time,
      phone,
      note,
    };

    setIsLoading(true);
    setSuccessMessage("");

    try {
      await postUsers(data);
      setSuccessMessage("המידע נשלח בהצלחה!");
      console.log(data);
      clearData();
    } catch (error) {
      console.error("Failed to post user data:", error);
      setSuccessMessage("אירעה שגיאה בשליחת המידע.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearData = () => {
    setName("");
    setPhone("");
    setTime("");
    setNote("");
  };

  return (
    <Box className={styles.feedbackContainer}>
      <Typography m={2} variant="h5" className={styles.feedbackTitle}>
        😊 צרי קשר
      </Typography>
      <form>
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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

        <Box mb={2} width={"350px"}>
          <TextField
            value={time}
            fullWidth
            label="השעה הנבחרת"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>

        {isLoading ? (
          <div className={styles.spinnerContainer}>
            <div className={styles.spinner} />
          </div>
        ) : (
          <Button
            onClick={getUsrData}
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
