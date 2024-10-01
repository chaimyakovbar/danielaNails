import React from "react";
import { Link } from "react-router-dom";
import DrawerNavBAr from "./Drawer";
import logo2 from "../assets/logo3.jpg";

const NavBar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          textAlign: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#fff",
          padding: "10px 0",
          boxShadow: "0px 2px 4pxrgba(0, 0, 0, 0.1)",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginTop: "20px",
          }}
        >
          <button
            className="logo"
            style={{ border: "none", background: "none" }}
          >
            <img
              src={logo2}
              alt="Logo"
              style={{ height: "40px", width: "100px" }}
            />
          </button>
        </Link>
        <p style={{ paddingRight: "40px" }}>RACHEL EFINGER</p>
        <DrawerNavBAr />
      </div>
    </>
  );
};

export default NavBar;
