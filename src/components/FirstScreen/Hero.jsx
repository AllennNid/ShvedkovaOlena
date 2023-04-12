import React from "react";
import "./Hero.css";
import ImageHero from "../../img/Image Hero.png";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="textright">
            <h1>We Care About Your Health</h1>
            <span className="span1">
              Check Now Your Healty With Our Profesional Doctor, <br />
              Completed And Modern Fasilities Services
            </span>
            <button type="button" className="checkNow">
              Check Now
            </button>
          </div>
          {/* <div className="ellipse">
        <img src={Ellipse} alt="Ellipse" />
      </div> */}
          <div className="photoRight">
            <img src={ImageHero} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
