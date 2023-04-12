import React from "react";
import "./Footer.css";

function Footer({ children }) {
  return (
    <div className="footer">
      <div className="container">{children}</div>
    </div>
  );
}

export default Footer;
