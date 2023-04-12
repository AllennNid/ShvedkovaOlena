import React from "react";
import "./Social.css";
import Twitter from "../../img/twiter.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/in.png";
import Youtube from "../../img/you.png";
import WhatsUp from "../../img/what.png";
import Be from "../../img/Be.png";
import Hospital from "../../img/Hospital.png";

function SocialLinks() {
  return (
    <div className="social">
      <a href="#" className="btn">
        <img src={Twitter} alt="twitter" />
      </a>
      <a href="#" className="btn">
        <img src={Instagram} alt="instagram" />
      </a>
      <a href="#" className="btn">
        <img src={LinkedIn} alt="linkedIn" />
      </a>
      <a href="#" className="btn">
        <img src={Youtube} alt="youtube" />
      </a>
      <a href="#" className="btn">
        <img src={WhatsUp} alt="whatsup" />
      </a>
      <a href="#" className="btn">
        <img src={Be} alt="Be" />
      </a>
    </div>
  );
}

function Social() {
  return (
    <div className="social-inner">
      <img src={Hospital} className="imgH" alt="logo" />
      <span className="span15">
        Our Hospital Tries To Answer The Challenges In The Community's Need For
        Quality Dental Health Services But Still Affordable By A Wide Audience.
      </span>
      <SocialLinks />
    </div>
  );
}

export default Social;
