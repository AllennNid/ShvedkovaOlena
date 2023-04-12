import React from "react";
import "./FourthContainer.css";

function FourthContainer({ children }) {
  return (
    <div className="OurDoctors">
      <div className="container">
        <h6>Our Doctors</h6>
        <h3>
          Visit Our Professional <br /> Specialists
        </h3>
        {children}
      </div>
    </div>
  );
}

export default FourthContainer;
