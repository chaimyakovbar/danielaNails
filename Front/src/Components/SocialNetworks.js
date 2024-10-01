import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const SocialNetworks = () => {
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <div style={styles.iconItem}>
          <LocationOnIcon />
          <a href="https://waze.com/ul/hsv8y882hk" style={styles.link}>
            Bnei Brak
          </a>
        </div>
        <div style={styles.iconItem}>
          <InstagramIcon />
          <a
            href="https://www.instagram.com/rachel_efinger?igsh=MTR4Mzk3MHRoNXBpNw=="
            style={styles.link}
          >
            rachel_efinger
          </a>
        </div>

        <div style={styles.iconItem}>
          <LocalPhoneIcon />
          <a href="tel:058-431-2001" style={styles.link}>
            058-431-2001
          </a>
        </div>

        <div style={styles.iconItem}>
          <WhatsAppIcon />
          <a
            href="https://api.whatsapp.com/send?phone=972584312001&text=אני+מעונינת+בפרטים+על+שמלה+"
            style={styles.link}
          >
            058-431-2001
          </a>
        </div>

        <div style={styles.iconItem}>
          <MailIcon />
          <a href="efingerrachel@gmail.com" style={styles.link}>
            efingerrachel@gmail.com
          </a>
        </div>
      </div>
      <Link style={styles.policyLink} to={"/PolicySupport"}>
        Policy Support
      </Link>
      <Link to="/" style={styles.link}>
        <button className="logo" style={styles.button}>
          <p style={styles.footerText}>
            All Rights reserved © 2024 Showroom By Rachel Efinger
          </p>
        </button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "15px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    zIndex: 1000,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  },
  button: {
    border: "none",
    background: "none",
    textAlign: "center",
    fontSize: "14px",
    color: "#333",
  },
  footerText: {
    fontSize: "12px",
    margin: 0,
    marginTop: "20px",
    color: "#555",
  },
  policyLink: {
    marginTop: "20px",
    textDecoration: "none",
    fontSize: "14px",
    padding: "10px 20px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
    textAlign: "center",
  },
  iconItem: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    marginLeft: "10px",
    textDecoration: "none",
    color: "inherit",
  },
};

export default SocialNetworks;
