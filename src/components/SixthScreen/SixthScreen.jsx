import React from "react";
import Footer from "./Footer";
import Social from "./Social";
import Menu from "./Menu";
import Form from "./Form";
import "./Footer.css";

function SixthScreen() {
  return (
    <Footer>
      <div className="footer-inner">
        <Social />
        <div className="footer-menu">
          <Menu />
          <Form />
        </div>
      </div>
    </Footer>
  );
}

export default SixthScreen;
