import React, { useState } from "react";
import LoginWithBackdrop from "./LoginWithBackdrop";

function HeaderLogin() {
  const [isHidden, setIsHidden] = useState(true);

  function openModal() {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }

  function onClickLogin(e) {
    e.preventDefault();
    openModal();
  }

  return (
    <>
      <div className="btn1">
        <a href="#" onClick={onClickLogin}>
          Login
        </a>
      </div>
      <LoginWithBackdrop isHidden={isHidden} openModal={openModal} />
    </>
  );
}

export default HeaderLogin;
