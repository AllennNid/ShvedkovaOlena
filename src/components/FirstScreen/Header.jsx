import React from "react";
import "./Header.css";
import HeaderNav from "./HeaderNav";
import HeaderLogin from "./HeaderLogin";

function Header() {
  return (
    <div className="container">
      <div className="nav">
        <HeaderNav />
        <HeaderLogin />
      </div>
    </div>
  );
}

export default Header;
