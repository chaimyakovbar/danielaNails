import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, IconButton, TextField } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { DateCalendar, DigitalClock, LocalizationProvider, } from "@mui/x-date-pickers"

import { TIMELINE } from '../../consts/TimeLinePicker'
import { getUsersTime } from "../../api/user"
import HorizontalTimePicker from "./HorizontalTimePicker"

const className = {
  box: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    width: "100%",
    marginBottom: 2,
  },
  timeSelectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'spaceEvenly',
    margin: '25px',
    padding: 3,
    backgroundColor: '#f0f4f8',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  h22: {
    color: 'green'
  }
}
const TimeSelection = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  // const [occupiedTimes, setOccupiedTimes] = useState([])
  // const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchOccupiedTimes = async () => {
  //     try {
  //       const times = await getUsersTime()
  //       setOccupiedTimes(times)
  //     } catch (error) {
  //       console.error("Error fetching user times:", error)
  //     }
  //   };

  //   fetchOccupiedTimes();
  // }, []);

  const handleTimeChange = (newValue) => {
    if (!newValue || !selectedDate) return;

    //   const formattedDateTime = `${selectedDate.format("MMMM D, YYYY")} at ${newValue.format("H:mm")}`;
    //   if (occupiedTimes.includes(formattedDateTime)) {
    //     setErrorMessage("😇 שעה זו כבר תפוסה לצערי 🥲 ,נסי שעה אחרת");
    //   } else {
    //     setErrorMessage("");
    //     setSelectedTime(newValue);
    //   }
  }

  // const formattedDateTime = () => {
  //   if (selectedDate && selectedTime) {
  //     return `${selectedDate.format("MMMM D, YYYY")} at ${selectedTime.format(
  //       "H:mm"
  //     )}`;
  //   }
  //   return "";
  // };

  const handleConfirm = () => {
    navigate('/contact')
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>


        <Box style={className.box}>
          <DateCalendar
            date={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
          />
          {TIMELINE.map({

          })}
        </Box>

        <Box style={{ color: 'black', display: 'flex', alignItems: 'center' }} >
          <TextField value={TIMELINE} />
          <IconButton onClick={handleConfirm}>
            <ArrowForwardIcon style={{ color: 'black' }} />
          </IconButton>
        </Box>

      </Box>
    </LocalizationProvider>
  );
};

export default TimeSelection;
