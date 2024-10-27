import React from "react";
import CarouselImages from "../helpers/CarouselImages";
import SocialNetworks from "../helpers/SocialNetworks";
import AccessibilityMenu from "../helpers/AccessibilityMenu";
import TimeSelection from "../helpers/TimeSelection";
import FeedbackList from "./FeedbackList";
import Works from "./Works";

const MainPage = () => {
  return (
    <div>
      <AccessibilityMenu />
      <CarouselImages />
      <TimeSelection />
      <Works />
      <FeedbackList />
      <SocialNetworks />
    </div>
  );
};

export default MainPage;
