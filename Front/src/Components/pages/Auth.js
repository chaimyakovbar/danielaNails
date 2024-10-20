import React, { useState } from "react";
import { Box, Button, TextField, Typography, Tab, Tabs } from "@mui/material";
import styles from "../../styles/style.module.css";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../../api/auth";

// ------ ALL THE COMMENT CODE ARE FOR SIGNUP ------

const Auth = () => {
  const [tab, setTab] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   const [email, setEmail] = useState("");
  //   const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  //   const handleTabChange = (event, newValue) => {
  //     setTab(newValue);
  //     setMessage("");
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      //   const data =
      //     tab === 0
      //       ? { username, password }
      //       : { username, password, email, phone };

      const data = { username, password };

      const response = tab === 0 ? await login(data) : await signup(data);

      if (tab === 0) {
        localStorage.setItem("adminToken", response.data.token);
        setMessage("Login successful!");
        navigate("/admin");
      } else {
        setMessage("Signup successful! You can now log in.");
        setTab(0);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <Box className={styles.authContainer}>
      <Tabs
        value={tab}
        //    onChange={handleTabChange}
        centered
      >
        <Tab label="Login" />
        {/* <Tab label="Signup" /> */}
      </Tabs>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        {/* {tab === 1 && (
          <>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              margin="normal"
              required
              inputProps={{ pattern: "[0-9]{10}" }}
            />
          </>
        )} */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className={styles.authButton}
        >
          {/* {tab === 0 ? "Login" : "Signup"} */}
          Login
        </Button>
      </form>
      {message && (
        <Typography className={styles.authMessage}>{message}</Typography>
      )}
    </Box>
  );
};

export default Auth;
