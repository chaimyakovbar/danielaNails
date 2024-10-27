import React from "react";
import { Box, Button } from "@mui/material";
import dayjs from "dayjs";

const HorizontalTimePicker = ({ times, selectedTime, onTimeSelect }) => {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "scroll",
        width: "90%",
        padding: "10px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {times.map((time, index) => {
        const timeString = typeof time === "string" ? time : time.format("H:mm"); // Ensure each time is a string

        return (
          <Button
            key={index}
            onClick={() => onTimeSelect(dayjs(time, "H:mm"))}
            disabled={timeString === "No available times"}
            sx={{
              minWidth: "80px",
              margin: "0 10px",
              backgroundColor: selectedTime === timeString ? "#007aff" : "#fff",
              color: selectedTime === timeString ? "#fff" : "#000",
              borderRadius: "12px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              opacity: timeString === "No available times" ? 0.5 : 1,
              pointerEvents: timeString === "No available times" ? "none" : "auto",
            }}
          >
            {timeString === "No available times" ? "Unavailable" : timeString}
          </Button>
        );
      })}
    </Box>
  );
};

export default HorizontalTimePicker;
