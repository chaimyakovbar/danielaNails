import React from "react";
import CardProduct from "../helpers/CardProduct";
import ImageList from "./ImageList";
import SocialNetworks from "../helpers/SocialNetworks";
import AccessibilityMenu from "../helpers/AccessibilityMenu";
import TimeSelection from "../helpers/TimeSelection";
import FeedbackList from "./FeedbackList";
import Works from "./Works";

const MainPage = () => {
  return (
    <div>
      <AccessibilityMenu />
      <ImageList />
      <TimeSelection />
      <Works />
      <FeedbackList />
      <SocialNetworks />
    </div>
  );
};

export default MainPage;
