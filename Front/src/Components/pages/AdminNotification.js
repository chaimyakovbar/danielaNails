import React, { useEffect, useState } from "react";
import { getUsers, deleteUsers, updateUser } from "../../api/user";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import styles from "../../styles/style.module.css";
import dayjs from "dayjs";

const AdminNotification = () => {
  const [contacts, setContacts] = useState([]);
  const isPhoneView = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getUsers();
        // const pendingContacts = response.data.filter(contact => contact.status === "pending");
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

  const handleConfirmAppointment = async (contact) => {
    const data = {
      name: contact.name,
      time: contact.time,
      phone: contact.phone,
      note: contact.note,
      status: "confirmed",
    };

    try {
      await updateUser(contact._id, data);
      console.log("Appointment confirmed:", data);
      setContacts(contacts.filter((c) => c._id !== contact._id));
      window.location.reload();
    } catch (error) {
      console.error("Failed to confirm appointment:", error);
    }
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
                <>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                  >
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
                    {contact.status !== "confirmed" && (
                      <Button
                        variant="contained"
                        onClick={() => handleConfirmAppointment(contact)}
                        style={{ marginTop: "8px" }}
                      >
                        אישור תור
                      </Button>
                    )}
                  </Box>
                </>
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
