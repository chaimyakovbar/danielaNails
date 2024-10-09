import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, DigitalClock } from "@mui/x-date-pickers";
import { Box, TextField } from "@mui/material";
import styles from "../../styles/style.module.css";

const TimeSelection = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const formattedDateTime = () => {
    if (selectedDate && selectedTime) {
      return `${selectedDate.format("MMMM D, YYYY")} at ${selectedTime.format(
        "h:mm A"
      )}`;
    }
    return "";
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box className={styles.timeSelectionContainer}>
        <h2 className={styles.timeSelectionTitle}>😊 בחרי בשעה הנוחה לך</h2>
        <Box sx={{ display: "flex", width: "100%", marginBottom: 2 }}>
          <DateCalendar
            date={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            sx={{
              width: "50%",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
          <DigitalClock
            value={selectedTime}
            onChange={(newValue) => setSelectedTime(newValue)}
            ampm={false}
            sx={{ width: "25%" }}
          />
        </Box>
        <TextField
          value={formattedDateTime()}
          variant="outlined"
          sx={{
            marginBottom: "20px",
            minWidth: "250px",
          }}
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default TimeSelection;
