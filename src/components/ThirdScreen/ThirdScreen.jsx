import React from "react";
import ThirdContainer from "./ThirdContainer";
import AboutUs from "./AboutUs";

function ThirdScreen() {
  return (
    <div className="container">
      <div className="aboutUs" id="about">
        <ThirdContainer />
        <AboutUs />
      </div>
    </div>
  );
}

export default ThirdScreen;
