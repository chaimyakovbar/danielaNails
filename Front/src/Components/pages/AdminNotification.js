import React, { useEffect, useState } from "react";
import { getUsers, deleteUsers } from "../../api/user";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import styles from "../../styles/style.module.css";
import dayjs from "dayjs";

const AdminNotification = () => {
  const [contacts, setContacts] = useState([]);
  const isPhoneView = useMediaQuery('(max-width:600px)'); // Check if in phone view

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getUsers();
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  const parseTime = (timeString) => {
    if (!timeString || !timeString.includes(" at "))
      return { date: "", startTime: "", endTime: "" };

    const [datePart, timePart] = timeString.split(" at ");
    const parsedDate = dayjs(datePart).format("YYYY-MM-DD");

    let parsedTime = timePart;
    if (!parsedTime.match(/^([01]?\d|2[0-3]):([0-5]\d)(\s?[APap][Mm])?$/)) {
      return { date: parsedDate, startTime: "", endTime: "" };
    }

    if (
      !parsedTime.toLowerCase().includes("am") &&
      !parsedTime.toLowerCase().includes("pm")
    ) {
      const [hours, minutes] = parsedTime.split(":");
      parsedTime = `${hours.padStart(2, "0")}:${minutes}`;
    } else {
      parsedTime = dayjs(`1970-01-01 ${parsedTime}`).format("HH:mm");
    }

    return {
      date: parsedDate,
      startTime: parsedTime,
      endTime: parsedTime,
    };
  };

  const handleAddToCalendar = (contact) => {
    setTimeout(() => {
      deleteUsers(contact._id);
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
  };

  return (
    <>
      <Typography className={styles.adminNotificationTitle}>
        זמני לקוחות
      </Typography>
      <Box className={styles.adminNotificationContainer}>
        {contacts.map((contact) => {
          const { date, startTime, endTime } = parseTime(contact.time);
          return (
            <Box key={contact._id} className={styles.contactItem}>
              {date && startTime ? (
                <AddToCalendarButton
                  className={styles.addToCalendarButton}
                  name="Appointment"
                  startDate={date}
                  startTime={startTime}
                  endTime={endTime}
                  location="Daniela Clinic"
                  options={["Apple", "Google", "Outlook.com"]}
                  timeZone="Asia/Jerusalem"
                  description={contact.note}
                  hideTextLabelButton={isPhoneView}
                  label="הוספה ליומן"
                  onClick={() => handleAddToCalendar(contact)}
                />
              ) : (
                <Typography className={styles.errorText}>
                  Invalid time format for {contact.name}
                </Typography>
              )}
              <Box className={`${styles.contactDetails} ${styles.rtl}`}>
                <Typography className={styles.contactDetail}>
                  <strong>שם:</strong> {contact.name}
                </Typography>
                <Typography className={styles.contactDetail}>
                  <strong>טלפון:</strong> {contact.phone}
                </Typography>
                <Typography className={styles.contactDetail}>
                  <strong>תאריך:</strong> {contact.time}
                </Typography>
                <Typography className={styles.contactDetail}>
                  <strong>הערות:</strong> {contact.note}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default AdminNotification;
