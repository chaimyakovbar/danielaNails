import React from "react"
import Works from "./Works"
import FeedbackList from "./FeedbackList"
import PickerTime from "../helpers/PickerTime"
import CardProduct from "../helpers/CardProduct"
import SocialNetworks from "../helpers/SocialNetworks"
import AccessibilityMenu from "../helpers/AccessibilityMenu"

const MainPage = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <AccessibilityMenu />
      <CardProduct />
      <PickerTime/>
      <Works/>
      <FeedbackList />
      <SocialNetworks />
    </div>
  );
};

export default MainPage;
