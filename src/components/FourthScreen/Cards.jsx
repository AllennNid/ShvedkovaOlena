import React from "react";
import "./Cards.css";
import Face from "../../img/face.png";
import Pint from "../../img/Pint.png";
import Ball from "../../img/ball.png";
import Inst from "../../img/inst.png";
import FirstDoctor from "../../img/Mask group.png";
import SecondDoctor from "../../img/Black group.png";
import ThirdDoctor from "../../img/woman group.png";
import FourthDoctor from "../../img/last men group.png";

function FirstCard() {
  return (
    <div className="doctor">
      <img src={FirstDoctor} className="imge" alt="First doctor" />
      <div className="whiteCard">
        <div className="cotial">
          <a href="#">
            <img src={Face} alt="Face" />
          </a>
          <a href="#">
            <img src={Pint} alt="Pint" />
          </a>
          <a href="#">
            <img src={Ball} alt="Ball" />
          </a>
          <a href="#">
            <img src={Inst} alt="Inst" />
          </a>
        </div>
        <span className="span1">Dr. Moeharman, Sp. THT.KL</span>
        <span className="span2">Orthodontist </span>
      </div>
    </div>
  );
}

function SecondCard() {
  return (
    <div className="doctor">
      <img src={SecondDoctor} className="imge" alt="Second doctor" />

      <div className="whiteCard">
        <div className="cotial">
          <a href="#">
            <img src={Face} alt="Face" />
          </a>
          <a href="#">
            <img src={Pint} alt="Pint" />
          </a>
          <a href="#">
            <img src={Ball} alt="Ball" />
          </a>
          <a href="#">
            <img src={Inst} alt="Inst" />
          </a>
        </div>
        <span className="span1">ANTONIUS JANSEN</span>
        <span className="span2">Pediatric</span>
      </div>
    </div>
  );
}

function ThirdCard() {
  return (
    <div className="doctor">
      <img src={ThirdDoctor} className="imge3" alt="Third doctor" />

      <div className="whiteCard">
        <div className="cotial">
          <a href="#">
            <img src={Face} alt="Face" />
          </a>
          <a href="#">
            <img src={Pint} alt="Pint" />
          </a>
          <a href="#">
            <img src={Ball} alt="Ball" />
          </a>
          <a href="#">
            <img src={Inst} alt="Inst" />
          </a>
        </div>
        <span className="span1">Dr. NADYA NAVIRA</span>
        <span className="span2">Dentist </span>
      </div>
    </div>
  );
}

function FourthCard() {
  return (
    <div className="doctor">
      <img src={FourthDoctor} className="imge4" alt="Fourth doctor" />

      <div className="whiteCard">
        <div className="cotial">
          <a href="#">
            <img src={Face} alt="Face" />
          </a>
          <a href="#">
            <img src={Pint} alt="Pint" />
          </a>
          <a href="#">
            <img src={Ball} alt="Ball" />
          </a>
          <a href="#">
            <img src={Inst} alt="Inst" />
          </a>
        </div>
        <span className="span1">MUHAMMAD ALI SYAHPUTRA</span>
        <span className="span2">Dentist </span>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="doctors">
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <FourthCard />
    </div>
  );
}

export default Cards;
