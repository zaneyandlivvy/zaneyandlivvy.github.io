import React, { useState } from "react";
import './PasswordComponent.css';

function PasswordComponent({
  handlePasswordSubmit,
  correctPassword,
  otherPasswordSubmit,
  otherCorrectPassword,
  skipToSitePassword,
  skipToSitePasswordSubmit
}) {
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (password === correctPassword) {
      handlePasswordSubmit();
    } else if (password === otherCorrectPassword) {
      otherPasswordSubmit();
    } else if (password === skipToSitePassword) {
      skipToSitePasswordSubmit()
    }
  };

  return (
    <div>
        <div className="blur"></div>
      <div className="passwordComponent" >
        <h2 style={{ marginBottom: "20px" }}>Enter the Password</h2>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password-input"
        />
        <button
          onClick={handleSubmit}
          className="password-submit-button"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default PasswordComponent;
