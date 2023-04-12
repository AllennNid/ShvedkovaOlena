import React from "react";
import "./Cards.css";
import { FirstImage, SecondImage, ThirdImage } from "./Images";

function Cards() {
  return (
    <div className="cards">
      <div className="card1">
        <FirstImage />
        <p>Date</p>
        <span>
          choose what date <br />
          to check
        </span>
      </div>
      <div className="card2">
        <SecondImage />
        <p>Poly</p>
        <span>
          Choose what Poly <br />
          to check
        </span>
      </div>
      <div className="card3">
        <ThirdImage />
        <p>Doctor</p>
        <span>
          And choose doctor <br />
          to check
        </span>
      </div>
    </div>
  );
}

export default Cards;
