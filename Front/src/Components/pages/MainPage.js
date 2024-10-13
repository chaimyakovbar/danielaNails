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
      <ImageList />
      <TimeSelection />

      <Shop />
      <FeedbackList />
      <SocialNetworks />
    </div>
  );
};

export default MainPage;
