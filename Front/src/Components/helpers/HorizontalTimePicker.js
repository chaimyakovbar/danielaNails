import React from "react";
import { Box, Button } from "@mui/material";
import dayjs from "dayjs";

const HorizontalTimePicker = ({ value, onChange }) => {

  const timeSlots = [];
  for (let i = 0; i < 24; i++) {
    timeSlots.push(dayjs().hour(i).minute(0).format("H:mm"));
    timeSlots.push(dayjs().hour(i).minute(30).format("H:mm"));
  }

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "scroll",
        width: "100%",
        padding: "10px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {timeSlots.map((time, index) => (
        <Button
          key={index}
          onClick={() => onChange(dayjs(time, "H:mm"))}
          sx={{
            minWidth: "80px",
            margin: "0 10px",
            backgroundColor: value === time ? "#007aff" : "#fff",
            color: value === time ? "#007aff" : "#000",
            borderRadius: "12px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          {time}
        </Button>
      ))}
    </Box>
  );
};

export default HorizontalTimePicker;
