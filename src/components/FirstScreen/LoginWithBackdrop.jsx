import React, { useState } from "react";
import "./Header.css";

function LoginWithBackdrop({ isHidden, openModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    } else if (password.length < 4) {
      alert("Password too short");
      return;
    }
    console.log({
      email,
      password,
    });
    setEmail("");
    setPassword("");
    openModal();
  }

  function clickOnBackDrop(e) {
    if (e.target === e.currentTarget) {
      openModal();
    }
  }

  return (
    <div
      className={isHidden ? "backdrop-hidden" : "backdrop"}
      onClick={(e) => clickOnBackDrop(e)}
    >
      <div className="modal">
        <p className="welcomeBack">Welcome back</p>
        <form onSubmit={submitForm}>
          <input
            className="modal-input"
            type="email"
            placeholder="Enter your email"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
          />
          <input
            className="modal-input"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
          />
          <button type="submit" className="loginBtn">
            Log in
          </button>
          <button type="button" className="cancelBtn" onClick={openModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginWithBackdrop;
