import React from "react";
import CardProduct from "../helpers/CardProduct";
import ImageList from "./ImageList";
import SocialNetworks from "../helpers/SocialNetworks";
import AccessibilityMenu from "../helpers/AccessibilityMenu";
import TimeSelection from "../helpers/TimeSelection";
import FeedbackList from "./FeedbackList";
import Shop from "./Shop";
import About from "./About";

const MainPage = () => {
  return (
    <div>
      <AccessibilityMenu />
      <div id="home">
        {" "}
        <ImageList />{" "}
      </div>
      <TimeSelection />
      <div id="works">
        {" "}
        <Shop />{" "}
      </div>
      <div id="about">
        {" "}
        <About />
      </div>
      <div id="feedback">
        {" "}
        <FeedbackList />{" "}
      </div>
      <SocialNetworks />
    </div>
  );
};

export default MainPage;
