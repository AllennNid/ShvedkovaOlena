import React from "react";
import "./Images.css";
import Healthcare1 from "../../img/healthcare 1.png";
import Healthcare2 from "../../img/healthcare 2.png";
import Doctor from "../../img/doctor 2.png";

export function FirstImage() {
  return (
    <div className="img1">
      <img src={Healthcare1} alt="image" />
    </div>
  );
}

export function SecondImage() {
  return (
    <div className="img2">
      <img src={Healthcare2} alt="image" />
    </div>
  );
}

export function ThirdImage() {
  return (
    <div className="img3" alt="image">
      <img src={Doctor} />
    </div>
  );
}

function Images() {
  return (
    <>
      <FirstImage />
      <SecondImage />
      <ThirdImage />
    </>
  );
}

export default Images;
