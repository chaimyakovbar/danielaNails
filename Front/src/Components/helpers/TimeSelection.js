import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DateCalendar,
  DigitalClock,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Box, IconButton, TextField, Typography } from "@mui/material";

import styles from "../../styles/style.module.css";
import HorizontalTimePicker from "./HorizontalTimePicker";
import { getUsersTime } from "../../api/user";

const TimeSelection = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [occupiedTimes, setOccupiedTimes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOccupiedTimes = async () => {
      try {
        const times = await getUsersTime();
        setOccupiedTimes(times);
      } catch (error) {
        console.error("Error fetching user times:", error);
      }
    };

    fetchOccupiedTimes();
  }, []);

  const handleTimeChange = (newValue) => {
    if (!newValue || !selectedDate) return

    const formattedDateTime = `${selectedDate.format(
      "MMMM D, YYYY"
    )} at ${newValue.format("H:mm")}`;
    if (occupiedTimes.includes(formattedDateTime)) {
      setErrorMessage("😇 שעה זו כבר תפוסה לצערי 🥲 ,נסי שעה אחרת");
    } else {
      setErrorMessage("");
      setSelectedTime(newValue);
    }
  };

  const formattedDateTime = () => {
    if (selectedDate && selectedTime) {
      return `${selectedDate.format("MMMM D, YYYY")} at ${selectedTime.format(
        "H:mm"
      )}`;
    }
    return "";
  };

  const handleConfirm = () => {
    navigate("/contact", {
      state: { time: formattedDateTime() },
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box className={styles.timeSelectionContainer}>
        <h2 className={styles.timeSelectionTitle}>😊 בחרי בשעה הנוחה לך</h2>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            marginBottom: 2,
          }}
        >
          <DateCalendar
            date={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            sx={{
              width: { xs: "100%", md: "50%" },
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
          {window.innerWidth < 600 ? (
            <HorizontalTimePicker
              value={selectedTime}
              onChange={(newValue) => handleTimeChange(newValue)}
              sx={{ width: "100%", marginTop: { xs: "10px", md: "0" } }}
            />
          ) : (
            <Box
              sx={{
                overflowX: "auto",
                width: { xs: "100%", md: "25%" },
                marginTop: { xs: "10px", md: "0" },
              }}
            >
              <DigitalClock
                value={selectedTime}
                onChange={(newValue) => handleTimeChange(newValue)}
                ampm={false}
                sx={{ width: "100%" }}
              />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {errorMessage && (
            <Typography color="error" sx={{ marginBottom: "10px" }}>
              {errorMessage}
            </Typography>
          )}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              value={formattedDateTime()}
              variant="outlined"
              sx={{
                marginBottom: "20px",
                minWidth: "250px",
                marginRight: "10px",
              }}
              InputProps={{
                readOnly: true,
              }}
            />
            <IconButton
              variant="contained"
              onClick={handleConfirm}
              sx={{ marginBottom: "20px" }}
            >
              <ArrowForwardIcon sx={{ color: "#007aff" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default TimeSelection;
