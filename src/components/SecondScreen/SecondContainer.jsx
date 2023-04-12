import React from "react";
import "./SecondContainer.css";

function SecondContainer({ children }) {
  return (
    <div className="StepChek" id="services">
      <div className="container">
        <div className="StepChek-inner">
          <h6 className="h6">Our Services</h6>
          <h3 className="h3">
            4 Step Easy We Care Your <br /> Health
          </h3>
          {children}
        </div>
      </div>
    </div>
  );
}

export default SecondContainer;
