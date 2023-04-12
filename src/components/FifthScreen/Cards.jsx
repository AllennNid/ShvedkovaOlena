import React from "react";
import "./Cards.css";
import FirstImage from "../../img/parents group.png";
import SecondImage from "../../img/alexander-dummer-UH-xs-FizTk-unsplash 1.png";
import Stars from "../../img/Stars.png";

function FirstCard() {
  return (
    <div className="card">
      <img src={FirstImage} className="imge5" alt="image" />

      <div className="box">
        <span className="span10">John doe</span>
        <span className="span11">
          The service I felt was very good, the staff and <br /> doctors were
          friendly and provided very clear <br /> information.
        </span>
        <img src={Stars} className="stars" />
      </div>
    </div>
  );
}

function SecondCard() {
  return (
    <div className="card">
      <img src={SecondImage} className="imge5" alt="image" />

      <div className="box">
        <span className="span10">John doe</span>
        <span className="span11">
          The service I felt was very good, the staff and <br /> doctors were
          friendly and provided very clear <br /> information.
        </span>
        <img src={Stars} className="stars" />
      </div>
    </div>
  );
}

function Cards() {
  return (
    <>
      <div className="cards">
        <FirstCard />
        <SecondCard />
      </div>
      <button className="loadMore">Load More</button>
    </>
  );
}

export default Cards;
