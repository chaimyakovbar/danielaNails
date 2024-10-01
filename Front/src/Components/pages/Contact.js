import React, { useState } from "react";
import { postUsers } from "../../api/user";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SelectImage from "../SelectImage";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [dress, setDress] = useState("");
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
      dress,
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
    setDress("");
    setNote("");
  };

  return (
    <ContactContainer>
      <FormWrapper>
        <Title>Contact Form</Title>

        <StyledTextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          label="שם מלא"
          variant="outlined"
        />

        <StyledTextField
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          fullWidth
          label="מספר טלפון"
          variant="outlined"
          type="text"
        />

        {/* <StyledTextField
          value={dress}
          onChange={(e) => setDress(e.target.value)}
          fullWidth
          label="השמלה שאת מעונינת"
          variant="outlined"
        /> */}
        <SelectImage />

        <StyledTextField
          value={note}
          onChange={(e) => setNote(e.target.value)}
          fullWidth
          label="הערה"
          variant="outlined"
        />

        {isLoading ? (
          <SpinnerContainer>
            <Spinner /> {/* סמל טעינה מסתובב */}
          </SpinnerContainer>
        ) : (
          <SaveButton onClick={getUsrData} type="button">
            אישור
          </SaveButton>
        )}

        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </FormWrapper>
    </ContactContainer>
  );
};

export default Contact;

// Styled Components
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #f8f9fa, #e9ecef);
`;

const FormWrapper = styled.div`
  width: 400px;
  padding: 30px;
  background: white;
`;

const Title = styled.h3`
  text-align: center;
  font-family: "Arial", sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
  & .MuiOutlinedInput-root {
    border-radius: 8px;
  }
`;

const SaveButton = styled(Button)`
  display: block;
  width: 100%;
  color: white;
  font-size: 18px;
  margin-top: 10px;
  background: linear-gradient(45deg, #00c6ff, #0072ff);
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: linear-gradient(45deg, #0072ff, #00c6ff);
    transform: scale(1.05);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #0072ff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const SuccessMessage = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
  color: green;
`;
