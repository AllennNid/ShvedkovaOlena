import React from "react";
import Hospital from "../../img/Hospital.png";

function HeaderNav() {
  return (
    <>
      <img src={Hospital} alt="logo" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Service</a>
        </li>
      </ul>
    </>
  );
}
export default HeaderNav;
